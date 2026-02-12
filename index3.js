// 3 principais estruturas de repetição em JavaScript

//1. for
//3 elementos
// - Inicialização: let i = 0 -> variavel de controler
// Condição: i < 5 -> enquanto essa condição for verdadeira, o loop continua
// Incremento: i++
// for: Para cada.. faço tal coisa
for (let i = 0; i < 5; i++)
{
    console.log("interação: ", i);
 }

 // While: Enquanto tal coisa... eu faço tal
 //while (true){
   // console.log("Executando loop infinito");
// }

let i = 0;
while (i< 5)
{   //caso i++ fosse aqui em cima o valor printado iria mudar
    
    console.log("Executando loop", i);
   i++;
}