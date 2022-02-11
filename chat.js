// const input = require("readline-sync");

// console.log("seja bem vindo! Vamos fazer o seu longin")

// const idade = input.question("Qual a sua idade");

// if (idade >= 16 && idade < 18) {
// console.log("pode entrar mas não pode beber")
// } else if (idade >= 18) {
//     console.log("Pode entrar e pode beber")
// }else {
//     console.log("entrada não permitida")
// }

const input = require("readline-sync");

console.log("Boa noite. consulte seu resultado digitando sua nota");

const nota = input.question("Qual foi sua nota?");
if (nota >= 0 && nota <= 10) {
  if (nota >= 6) {
    console.log("Parabéns! aprovado");
  } else if (nota < 6) {
    console.log("Lamento, você foi reprovado");
  }
} else {
  console.log(nota, "não é uma nota valida");
}
// const nome= "arthur";
// console.log (nome)
// const tipo= "personagem, urso";
// console.log (tipo)
// const altura= "50cm";
// console.log (altura)
