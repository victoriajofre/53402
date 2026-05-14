// Generated from grammar/Logica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LogicaListener from './LogicaListener.js';
import LogicaVisitor from './LogicaVisitor.js';

const serializedATN = [4,1,8,49,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,1,1,1,1,1,3,1,19,8,1,1,2,1,2,1,2,5,2,24,8,2,10,2,12,
2,27,9,2,1,3,1,3,1,3,5,3,32,8,3,10,3,12,3,35,9,3,1,4,1,4,1,4,3,4,40,8,4,
1,5,1,5,1,5,1,5,1,5,3,5,47,8,5,1,5,0,0,6,0,2,4,6,8,10,0,0,47,0,12,1,0,0,
0,2,15,1,0,0,0,4,20,1,0,0,0,6,28,1,0,0,0,8,39,1,0,0,0,10,46,1,0,0,0,12,13,
3,2,1,0,13,14,5,0,0,1,14,1,1,0,0,0,15,18,3,4,2,0,16,17,5,1,0,0,17,19,3,2,
1,0,18,16,1,0,0,0,18,19,1,0,0,0,19,3,1,0,0,0,20,25,3,6,3,0,21,22,5,2,0,0,
22,24,3,6,3,0,23,21,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,
5,1,0,0,0,27,25,1,0,0,0,28,33,3,8,4,0,29,30,5,3,0,0,30,32,3,8,4,0,31,29,
1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,7,1,0,0,0,35,33,1,0,
0,0,36,37,5,4,0,0,37,40,3,8,4,0,38,40,3,10,5,0,39,36,1,0,0,0,39,38,1,0,0,
0,40,9,1,0,0,0,41,47,5,7,0,0,42,43,5,5,0,0,43,44,3,2,1,0,44,45,5,6,0,0,45,
47,1,0,0,0,46,41,1,0,0,0,46,42,1,0,0,0,47,11,1,0,0,0,5,18,25,33,39,46];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogicaParser extends antlr4.Parser {

    static grammarFileName = "Logica.g4";
    static literalNames = [ null, "'\\u2192'", "'\\u2228'", "'\\u2227'", 
                            "'\\u00AC'", "'('", "')'" ];
    static symbolicNames = [ null, "IMPLICA", "OR", "AND", "NOT", "LPAREN", 
                             "RPAREN", "VARIABLE", "WS" ];
    static ruleNames = [ "formula", "implicacion", "disyuncion", "conjuncion", 
                         "negacion", "primary" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LogicaParser.ruleNames;
        this.literalNames = LogicaParser.literalNames;
        this.symbolicNames = LogicaParser.symbolicNames;
    }



	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LogicaParser.RULE_formula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.implicacion();
	        this.state = 13;
	        this.match(LogicaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	implicacion() {
	    let localctx = new ImplicacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LogicaParser.RULE_implicacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this.disyuncion();
	        this.state = 18;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 16;
	            this.match(LogicaParser.IMPLICA);
	            this.state = 17;
	            this.implicacion();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	disyuncion() {
	    let localctx = new DisyuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LogicaParser.RULE_disyuncion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.conjuncion();
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 21;
	            this.match(LogicaParser.OR);
	            this.state = 22;
	            this.conjuncion();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conjuncion() {
	    let localctx = new ConjuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LogicaParser.RULE_conjuncion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.negacion();
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 29;
	            this.match(LogicaParser.AND);
	            this.state = 30;
	            this.negacion();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negacion() {
	    let localctx = new NegacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LogicaParser.RULE_negacion);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.match(LogicaParser.NOT);
	            this.state = 37;
	            this.negacion();
	            break;
	        case 5:
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.primary();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LogicaParser.RULE_primary);
	    try {
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.match(LogicaParser.VARIABLE);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.match(LogicaParser.LPAREN);
	            this.state = 43;
	            this.implicacion();
	            this.state = 44;
	            this.match(LogicaParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LogicaParser.EOF = antlr4.Token.EOF;
LogicaParser.IMPLICA = 1;
LogicaParser.OR = 2;
LogicaParser.AND = 3;
LogicaParser.NOT = 4;
LogicaParser.LPAREN = 5;
LogicaParser.RPAREN = 6;
LogicaParser.VARIABLE = 7;
LogicaParser.WS = 8;

LogicaParser.RULE_formula = 0;
LogicaParser.RULE_implicacion = 1;
LogicaParser.RULE_disyuncion = 2;
LogicaParser.RULE_conjuncion = 3;
LogicaParser.RULE_negacion = 4;
LogicaParser.RULE_primary = 5;

class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_formula;
    }

	implicacion() {
	    return this.getTypedRuleContext(ImplicacionContext,0);
	};

	EOF() {
	    return this.getToken(LogicaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImplicacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_implicacion;
    }

	disyuncion() {
	    return this.getTypedRuleContext(DisyuncionContext,0);
	};

	IMPLICA() {
	    return this.getToken(LogicaParser.IMPLICA, 0);
	};

	implicacion() {
	    return this.getTypedRuleContext(ImplicacionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterImplicacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitImplicacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitImplicacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DisyuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_disyuncion;
    }

	conjuncion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjuncionContext);
	    } else {
	        return this.getTypedRuleContext(ConjuncionContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicaParser.OR);
	    } else {
	        return this.getToken(LogicaParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterDisyuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitDisyuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitDisyuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConjuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_conjuncion;
    }

	negacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NegacionContext);
	    } else {
	        return this.getTypedRuleContext(NegacionContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicaParser.AND);
	    } else {
	        return this.getToken(LogicaParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterConjuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitConjuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitConjuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NegacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_negacion;
    }

	NOT() {
	    return this.getToken(LogicaParser.NOT, 0);
	};

	negacion() {
	    return this.getTypedRuleContext(NegacionContext,0);
	};

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterNegacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitNegacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitNegacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_primary;
    }

	VARIABLE() {
	    return this.getToken(LogicaParser.VARIABLE, 0);
	};

	LPAREN() {
	    return this.getToken(LogicaParser.LPAREN, 0);
	};

	implicacion() {
	    return this.getTypedRuleContext(ImplicacionContext,0);
	};

	RPAREN() {
	    return this.getToken(LogicaParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LogicaParser.FormulaContext = FormulaContext; 
LogicaParser.ImplicacionContext = ImplicacionContext; 
LogicaParser.DisyuncionContext = DisyuncionContext; 
LogicaParser.ConjuncionContext = ConjuncionContext; 
LogicaParser.NegacionContext = NegacionContext; 
LogicaParser.PrimaryContext = PrimaryContext; 
