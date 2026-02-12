//funções

//pra nao precisar fazer uma verificação de idades de forma singular, por exemplo, usamos a função pra fazer uma verificação 

//let idade = 23;
//let idade2 = 18;

//let isMaiorDeIdade = idade >= 18;
//let isMaiorDeIdade2 = idade >= 18;



//VOID => quando a função NÃO retorna nada.
//RETURN => quando a função retorna algo.

//para fazer a verificação abreiremos uma array:

// indice de uma array: 0, 1, 2, 3, 4, 5

let idades = [18, 25, 32, 11, 9, 45];


for(let i = 0; i < idades.length; i++)
{
    let idade = idades[i];
    if(verificarSeEMaiorDeIdade(idade))
    {
        console.log("A idade", idade, "é maior de idade");
    }
    else
    {
        console.log("A idade", idade, "é menor de idade");
    }

    //posso fazer ao invés de if e else apenas:

    console.log(idade, verificarSeEMaiorDeIdade(idade));
}



// função pra somar todos os numero da array

let somaDasIdades = 0;
for(let indice = 0; indice < idades.length; indice++)
{
    let idade = idades[indice]
    somaDasIdades = somarIdades(somaDasIdades, idade)
    let retorno = imprimirOi();
    console.log("Retorno da função imprimirOi", retorno);
}

console.log("Soma das idades: ", somaDasIdades);




if (idades.length > 0)
{
    var nossoTesteEscopo = "Variável declarada dentro do if"
    //se fosse uma let só poderia usar console.log dentro do if
}

console.log(nossoTesteEscopo);

function verificarSeEMaiorDeIdade(idade)
{
    return idade >=18
}

function somarIdades(somatorio, idade)
{
    return somatorio + idade;
}
function imprimirOi()
{
    console.log("Oi");
}

// VAR -> respeita escopo global e de função
// LET e CONST -> respeitam escopo global, de função e de bloco
// bloco pode ser qualquer coisa que use chave { ... }