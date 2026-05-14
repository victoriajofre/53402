import antlr4 from "antlr4";
import fs from "fs";

import LogicaLexer from "./grammar/generated/LogicaLexer.js";
import LogicaParser from "./grammar/generated/LogicaParser.js";
import LogicaVisitor from "./grammar/generated/LogicaVisitor.js";

const archivoEntrada = process.argv[2] || "input.txt";
const input = fs.readFileSync(archivoEntrada, "utf8");

class TraductorVisitor extends LogicaVisitor {
    visitFormula(ctx) {
        return this.visit(ctx.implicacion());
    }

    visitImplicacion(ctx) {
        const izquierda = this.visit(ctx.disyuncion());

        if (ctx.implicacion()) {
            const derecha = this.visit(ctx.implicacion());
            return `(!(${izquierda}) || (${derecha}))`;
        }

        return izquierda;
    }

    visitDisyuncion(ctx) {
        return ctx.conjuncion().map(c => this.visit(c)).join(" || ");
    }

    visitConjuncion(ctx) {
        return ctx.negacion().map(n => this.visit(n)).join(" && ");
    }

    visitNegacion(ctx) {
        if (ctx.NOT()) {
            return `!(${this.visit(ctx.negacion())})`;
        }

        return this.visit(ctx.primary());
    }

    visitPrimary(ctx) {
        if (ctx.VARIABLE()) {
            return `context.${ctx.VARIABLE().getText()}`;
        }

        return `(${this.visit(ctx.implicacion())})`;
    }
}

class ErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        this.errors.push({
            linea: line,
            columna: column,
            causa: msg
        });
    }
}

function mostrarTokens(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new LogicaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);

    tokens.fill();

    const tabla = tokens.tokens
        .filter(token => token.type !== antlr4.Token.EOF)
        .map(token => ({
            lexema: token.text,
            token: LogicaLexer.symbolicNames[token.type]
        }));

    console.log("\n===== TABLA DE LEXEMAS - TOKENS =====");
    console.table(tabla);
}

function analizar() {
    const chars = new antlr4.InputStream(input);
    const lexer = new LogicaLexer(chars);

    const errores = new ErrorListener();

    lexer.removeErrorListeners();
    lexer.addErrorListener(errores);

    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new LogicaParser(tokens);

    parser.removeErrorListeners();
    parser.addErrorListener(errores);

    parser.buildParseTrees = true;

    console.log("\n===== ENTRADA =====");
    console.log(input);

    mostrarTokens(input);

    const tree = parser.formula();

    console.log("\n===== ANÁLISIS SINTÁCTICO =====");

    if (errores.errors.length > 0) {
        console.log("La entrada contiene errores.");
        console.table(errores.errors);
        return;
    }

    console.log("La entrada es correcta.");

    console.log("\n===== ÁRBOL SINTÁCTICO =====");
    console.log(tree.toStringTree(parser.ruleNames));

    const visitor = new TraductorVisitor();
    const codigoJS = visitor.visit(tree);

    console.log("\n===== TRADUCCIÓN A JAVASCRIPT =====");
    console.log(`const result = ${codigoJS};`);

    const context = {
        p: true,
        q: false,
        r: false,
        s: true
    };

    const result = Function("context", `return ${codigoJS};`)(context);

    console.log("\n===== CONTEXTO =====");
    console.table(context);

    console.log("\n===== RESULTADO =====");
    console.log(result);
}

analizar();