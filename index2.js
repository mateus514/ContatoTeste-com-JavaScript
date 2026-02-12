//switch, verificação de casos:
// 

let idade = 26;

switch(idade){
    case 18:
        console.log("você tem 18 anos");
        break;
    case 25:
        console.log("você tem 25 anos");
        break;
     case 30:
        console.log("você tem 30 anos");
        break;
     case 40:
        console.log("você tem 40 anos");
        break;
    default:
        console.log("idade não especificada no sistema");
}

let paymentStatus = "PENDING";

switch(paymentStatus){
    case "PENDING":
        console.log("PAGAMENTO PENDENTE");
        break;
    case "PAID":
        console.log("PAGAMENTO REALIZADO");
        break;
     case "FAILED":
        console.log("PAGAMENTO FALHOU.");
        break;
    default:
        console.log("STATUS DO PAGAMENTO NAO ESPECIFICADO");
}