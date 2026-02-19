// Exer 1

document.getElementById("titulo").innerText = "Olá Mundo!";

// Exerc 2

document.getElementById("btn").onclick = function() {
  document.getElementById("p").style.backgroundColor = "yellow";
};


// Exer 3

function mostrar() {
  alert(document.getElementById("input").value);
}


// Exerc 4

let li = document.createElement("li");
li.innerText = "Novo item";
document.querySelector("ul").appendChild(li);


// Exerc 5

document.getElementById("excluir").onclick = function() {
  let ul = document.querySelector("ul");
  ul.removeChild(ul.lastElementChild);
};


// Exer 6

document.querySelector("img").src = "nova.jpg";


// Exer 7

let div = document.querySelector("div");
if(!div.classList.contains("ativo")){
  div.classList.add("ativo");
}


// Exerc 8

let n = 0;
document.getElementById("mais").onclick = function(){
  n++;
  document.getElementById("num").innerText = n;
};


// Exerc 9

document.getElementById("elemento").onclick = function(){
  this.style.display = "none";
};


// Exerc 10

document.querySelectorAll("p").forEach(p => p.innerText = "Novo texto");


// Exerc 11

document.getElementById("gerar").onclick = function(){
  document.getElementById("resultado").innerText = Math.floor(Math.random()*100);
};


// Exec 12

document.getElementById("form").onsubmit = function(e){
  let nome = document.getElementById("nome");
  if(nome.value == ""){
    nome.style.border = "2px solid red";
    e.preventDefault();
  }
};


// Exerc 13

let img = document.querySelector("img");
img.onmouseover = () => img.style.opacity = "0.5";
img.onmouseout = () => img.style.opacity = "1";


// Exerc 14

document.onkeydown = function(e){
  console.log(e.keyCode);
};


// EXerc 15

function modo(){
  document.body.classList.toggle("dark");
}


// Exerc 16


let s = 0;
setInterval(function(){
  s++;
  document.getElementById("cron").innerText = s;
},1000);


// Exerc 17

document.querySelectorAll("button").forEach(b=>{
  b.onclick = function(){ alert("Clicado"); };
});

// Exerc 18

let p = document.createElement("p");
p.innerText = "Novo parágrafo";
let div = document.getElementById("div");
div.parentNode.insertBefore(p, div);


// Exerc 19

document.getElementById("select").onchange = function(){
  document.getElementById("res").innerText = this.value;
};


// Exerc 20

let b = document.getElementById("btn");
b.onmouseover = () => b.style.cursor = "pointer";
b.onmouseout = () => b.style.cursor = "default";


// Exerc 21

function add(){
  let li = document.createElement("li");
  li.innerText = document.getElementById("tarefa").value;
  li.onclick = function(){ this.style.textDecoration="line-through"; };
  document.querySelector("ul").appendChild(li);
}


// Exerc 22

if(window.innerWidth < 768){
  console.log("Mobile");
}else{
  console.log("Desktop");
}


// Exerc 23

document.getElementById("titulo").onclick = function(){
  let c = document.getElementById("conteudo");
  c.style.display = c.style.display=="none"?"block":"none";
};


// Exerc 24

document.getElementById("box").ondblclick = function(){
  this.style.width = "300px";
};


// Exerc 25

function limpar(){
  document.getElementById("form").reset();
}


// Exerc 26

document.getElementById("cor").oninput = function(){
  document.getElementById("texto").style.color = this.value;
};


// Exerc 27

document.getElementById("check").onchange = function(){
  document.getElementById("enviar").disabled = !this.checked;
};


// Exerc 28

setInterval(function(){
  let d = new Date();
  document.getElementById("relogio").innerText =
  d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
},1000);


// Exerc 29

document.getElementById("btn").onclick = function(){
  let t = document.createElement("table");
  for(let i=0;i<2;i++){
    let tr = document.createElement("tr");
    for(let j=0;j<2;j++){
      let td = document.createElement("td");
      td.innerText="X";
      tr.appendChild(td);
    }
    t.appendChild(tr);
  }
  document.getElementById("div").innerHTML="";
  document.getElementById("div").appendChild(t);
};


// Exerc 30

let curtidas = 0;
document.getElementById("like").onclick = function(){
  curtidas++;
  this.innerText = "❤ " + curtidas;
};



