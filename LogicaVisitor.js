// Generated from grammar/Logica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by LogicaParser.

export default class LogicaVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by LogicaParser#formula.
	visitFormula(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicaParser#implicacion.
	visitImplicacion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicaParser#disyuncion.
	visitDisyuncion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicaParser#conjuncion.
	visitConjuncion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicaParser#negacion.
	visitNegacion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicaParser#primary.
	visitPrimary(ctx) {
	  return this.visitChildren(ctx);
	}



}