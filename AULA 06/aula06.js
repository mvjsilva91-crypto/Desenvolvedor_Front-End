const busca = document.getElementById("busca");
const cursos = document.querySelectorAll(".cards > div");

busca.addEventListener("input", () => {
    const texto = busca.value.toLowerCase();

    cursos.forEach(curso => {
        const conteudo = curso.innerText.toLowerCase();

        if (conteudo.includes(texto)) {
            curso.style.display = "block";
        } else {
            curso.style.display = "none";
        }
    });
});




