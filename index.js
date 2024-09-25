let nome;

// if(condição){
//    bloco de construção
// } 

// Escopo global

// Escopo local

if(nome){
    document.write('seja bem-vindo '+nome+'!');
} else {
    document.write('seja bem-vindo!');
}

// let numero = prompt('Digite um numero');

// if(numero % 2 == 0){
//    console.log('É par') 
// } else {
//    console.log('É impar') 
// }
document.write('<br><br>')

let idade = prompt('Qual a sua idade');
let habilitado = prompt('Possui habilitação');


if(idade >= 18 && habilitado == 'sim'){
    document.write('Pode dirigir')
} else {
    document.write('Não pode dirigir ainda');
}
