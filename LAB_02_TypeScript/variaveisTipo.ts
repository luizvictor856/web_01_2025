// let nome : string = " Jo ã o ";
 let idade : number = 25;
 let ativo : boolean = true ;

 let dado : any = 10;
 let vazio : null = null ;
 let indefinido : undefined = undefined ;

 // Tipos literais ( valores espec í ficos )
 let situacao : " ativo " | " inativo " = " ativo "; // S ó aceita esses dois valores

 // Uni ã o de tipos ( Union Type )
 let idadeOuNulo : number | null = null ;

 console . log (` Nome : $ { nome } , Idade : $ { idade } , Ativo : $ { ativo }`) ; 



 
 /* string: Representa uma sequência de caracteres (texto).
 number: Representa valores numéricos, incluindo inteiros e decimais.
 boolean: Representa um valor lógico, podendo ser true (verdadeiro) ou false (falso).
 any: Pode armazenar qualquer tipo de valor, oferecendo exibilidade, mas reduzindo a segurança
do tipo.
 null e undened: Representam, respectivamente, a ausência intencional de valor e uma variável
não inicializada.
 Tipos literais: Permitem restringir valores aceitos a um conjunto especíco, como no caso da
variável situacao.
 Union Type: Permite que uma variável aceite mais de um tipo, como no caso da variável idadeOuNulo,
que pode ser um número ou null. */



 /* Explicação:
 Operadores Aritméticos: Soma (+), Subtração (-), Multiplicação (*), Divisão (/), Módulo (%),
Exponenciação (**).
 Operadores de Igualdade: Igualdade (==), Igualdade estrita (===). O operador == compara os
valores, convertendo tipos se necessário, enquanto o operador === compara tanto os valores quanto
os tipos, garantindo igualdade estrita.
 Operador de Incremento: Incremento (++).
 Operador de Atribuição: O operador += adiciona um valor a uma variável e armazena o resultado
na própria variável. */

