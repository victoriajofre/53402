grammar Logica;

formula
    : implicacion EOF
    ;

implicacion
    : disyuncion (IMPLICA implicacion)?
    ;

disyuncion
    : conjuncion (OR conjuncion)*
    ;

conjuncion
    : negacion (AND negacion)*
    ;

negacion
    : NOT negacion
    | primary
    ;

primary
    : VARIABLE
    | LPAREN implicacion RPAREN
    ;

IMPLICA : '→';
OR      : '∨';
AND     : '∧';
NOT     : '¬';

LPAREN  : '(';
RPAREN  : ')';

VARIABLE
    : [a-zA-Z] [a-zA-Z0-9]*
    ;

WS
    : [ \t\r\n]+ -> skip
    ;