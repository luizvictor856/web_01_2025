/* Exercício 01 / A saída deve mostrar cada idade com sua classicação correspondente*/

let idadess : number[] = [10 , 15, 20, 8, 17, 25];

for  (let i = 0; i < 5; i++ ) {
    console.log (`indice  : ${i}`); //console.log ("o valor da iteração: " +i)
    let idadee : number = idadess[i];

    if ( idadee < 12 ) {
        console.log ("criança");
    } else if (idadee < 18){
        console.log ("Adolescente"); 
    } else {
        console.log ("Adulto")
    }
}

