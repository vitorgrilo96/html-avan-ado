function toggle(elemento){
    let botao = elemento.target;
    let idlista = botao.getAttribute("data-items");
    let lista = document.getElementById(idlista);
    if(lista.style.display === "none" || lista.style.display === ""){
        lista.style.display = "block";
    } else{
        lista.style.display = "none";
    }
}

let botoes = document.querySelectorAll(".toggle-button");
for(let i = 0; i < botoes.length; i++){
    let botao = botoes[i];
    botao.addEventListener("click", toggle);
}