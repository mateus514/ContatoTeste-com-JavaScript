//AULA DE VARIÁVEIS
// 

// meio de se comunicar estilo Console.WriteLine ou Debug.Log

console.log('Hello World!');


// let variável de numero simples e trocável

let num = 7;
console.log(num * 2 / 2);

// const = valor inalterável

const numObrigatorio = 8;
console.log(numObrigatorio);

// true and false

let numCerto = num == 7;
console.log("numero certo: " + numCerto);


//null e undefined

let endereço = null;
console.log("endereço:", endereço);

let telefone;
console.log("telefone informado: ", telefone);

// lista

for (var i =0; i < 3; i++)
{
    let nomeVar = "Mateus";
    console.log("nome da var dentro da lista:", nomeVar);
    console.log("valor de:", i);
}


//OPERADOR 

let count = 0;
count ++;
count ++;
count --;
console.log("operador somado no ++ ", count);
console.log("é igual?", 1 == "1")

// == compara valor
// === compara valor e tipo (string == string e o nome d astring == nome da string)

console.log("é igual?", "1" === "1" ? "igual" : "diferente")
console.log("é igual?", 1 === "1" ? "igual" : "diferente")
console.log("é igual?", 1 == "1" ? "igual" : "diferente")

// como se fosse:

//condicional ? valorVerdadeiro : valorFalso;

if(1 == "1"){
    console.log("igual");
}
else{
    console.log("diferente");
}

