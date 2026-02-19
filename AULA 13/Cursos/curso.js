const botao = document.getElementById("darkBtn");

botao.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    botao.classList.toggle("ativo");
});



