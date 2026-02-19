// Exer 1
let nome = prompt("Informe seu nome: ");
console.log("Óla " + nome);


// Exer 2
let num1 = Number(prompt("Digite o Primeiro Número: "));
let num2 = Number(prompt("Digite o Segundo Número: "));
let soma = num1 + num2;
console.log("A soma é:" + soma);


// Exer 3
let nome = prompt("Informe o seu nome:");
let ano = Number(prompt("Informe o ano de Nascimento: "));
let ano_atual = Number(prompt("Informe o ano atual: "))

let idade = ano_atual -  ano ;

console.log(nome + " sua idade é " + idade + " anos");


// Exer 4
let b1 = Number(prompt("Informe a nota do Primeiro Bimestre: "));
let b2 = Number(prompt("Informe a nota do Segundo Bimestre: "));
let b3 = Number(prompt("Informe a nota do Terceiro Bimestre: "));
let b4 = Number(prompt("Informe a nota do Quarto Bimestre: "));

let media = (b1 + b2 + b3 + b4) / 4;

console.log("A média Semestral é: " + media);


// Exer 5
let metro = Number(prompt("Informe o valor em metros: "));

let cent = metro * 100;

console.log("O valor em centimetros é: " + cent + " cm");


// Exer 6
let conta = Number(prompt("Informe o valor da Conta: "));
let gorjeta = conta * 0.10;

console.log("A gorjeta do garçom é: " + gorjeta + " reais");


// Exer 10
let num = Number(prompt("Informe um Número: "));

if (num % 2 == 0) {
    console.log("Esse Número é Par");
}else {
    console.log("Esse Número é Impar");
}
    



// Exerc 11
let nota1 = Number(prompt("Informe uma Nota: "));
let nota2 = Number(prompt("Informe uma Nota: "));
let nota3 = Number(prompt("Informe uma Nota: "));
let nota4 = Number(prompt("Informe uma Nota: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if(media >= 7) {
    console.log("Sua Média é: " + media + " Você está Aprovado!");
}else {
    console.log("Sua Média é: " + media + " Você está Reprovado!");
}


// Exerc 15
let valor = Number(prompt("Informe o valor da compra: "));

if(valor >= 100) {
    let valor1 = valor * 0.10;
    console.log("Sua compra foi de: " + valor + " reais e seu desconto foi de " + valor1 + "reais");
} else {
    console.log("sua compra foi de: " + valor + " por isso não teve desconto");
}


// Exerc 17
let num = Number(prompt("Informe um Número: "));
console.log("A Tabuada do " + num);

for (let i = 10; i > 0; i++){
    let res = i * num;
   
    console.log(i + " x " + num + " = " + res);
}


// Exerc 21
let frutas = ["Goiaba", "Maçã", "Morango"];

for (let i = 0; i <3; i++){
let fruta = prompt("Digite uma fruta: ");
frutas.push(fruta);

console.log(frutas);
}

// --------------Outra maneira------------------

let frutas = ["Goiaba", "Maçã", "Morango"];

let qts_fruta = Number(prompt("Informe a Quantidade de Frutas que deseja: "));

for (let j = 0; j < qts_fruta; j++) {
    
let fruta = prompt("Digite uma fruta: ");
frutas.push(fruta);

console.log(frutas);
}

// ---------------------Outra maneira----------------------------------------

let frutas = ["Goiaba", "Maçã", "Morango"];

let qts_fruta = Number(prompt("Informe a Quantidade de Frutas que deseja: "));

for (let j = 0; j < qts_fruta; j++) {
    
   let fruta = prompt("Digite uma fruta: ");

   let fruta_f = fruta.toLowerCase();
   let existe = frutas.some(f => f.toLowerCase() === fruta_f);
    

   if (existe) {
    console.log("essa fruta já esta na lista!" + fruta);
   } else {
     frutas.push(fruta);
     console.log("Fruta adicionada");
   }
}
console.log(frutas);



// Exer 25
const produtos = [];

let qts_produtos = Number(prompt("Quantos produtos quer Cadastrar: "));

for (let i = 0; i < qts_produtos; i++) {
    let produto = prompt("Digite o nome dos produtos: ").trim();

    let produto_m = produto.toLowerCase();
    let existe = produtos.some(m => m.toLowerCase() === produto_m);

    if(existe) {
        console.log("Esse Produto já está Cadastrado: " + produto);

    }else {
        produtos.push(produto);
        console.log("Produto(s) Cadastrado com Sucesso!");
    } 

}
console.log("Lista de Produtos: " + produtos);

