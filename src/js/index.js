const alterarTema = document.getElementById("botao-alterar-tema")

const body = document.querySelector("body")

const imagemLua = document.querySelector(".imagem-botao")

alterarTema.addEventListener("click", () => {

    const escuroAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (escuroAtivo) {
        imagemLua.setAttribute("src", "./src/imagens/sun.png")

    } else {
        imagemLua.setAttribute("src", "./src/imagens/moon.png")
    }

});