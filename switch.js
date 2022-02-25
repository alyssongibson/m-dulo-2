// let dia ="Segunda";
const input = require("readline-sync");

var dia = input.question("Digite o dia ");

switch(dia){
    case"Segunda":
        console.log("começou a semana");
    break;
    case"terca":
    case"Quarta":
        console.log("Aguenta ai e pega teu café, a semana não acabou");
        break;
    case"Quinta":
        console.log("É quase sexta, mas não sextou");
        break;
    case"Sexta":
        console.log("sextoouuu");
        break;
    case"Sábado":
    case"Domingo":
        console.log("Chegou o final de semana, bom descanço:)");
        break;
    default:
        console.log("Não achei sua condição.");                
}