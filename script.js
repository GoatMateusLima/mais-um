document.addEventListener("DOMContentLoaded", function() {
    const botaoperfil = document.getElementById("perfil-botao");
    const menuperfil = document.getElementById("perfil-menu");

    botaoperfil.addEventListener("click", function (event){
        event.stopImmediatePropagation();
        menuperfil.style.display = (menuperfil.style.display === "none" || menuperfil.style.display === "") ? "block" : "none";

        
    });

    document.addEventListener("click", function (event){
        if(!menuperfil.contains(event.target) && event.target !== botaoperfil){
            menuperfil.style.display = "none";
        }
    });

})

document.addEventListener("DOMContentLoaded", function () {
    const botaocarrinho = document.querySelector(".carrinho"); 
    const menucarrinho = document.getElementById("carrinho-menu");

                      // faz o menu aparecer ao clicar nele trocando de none para block o display
    botaocarrinho.addEventListener("click", function (event) {
        event.stopPropagation();
        menucarrinho.style.display = (menucarrinho.style.display === "block") ? "none" : "block";
    });

                           //fecha na hora de clicar fora
    document.addEventListener("click", function (event) {
        if (!menucarrinho.contains(event.target) && event.target !== botaocarrinho) {
            menucarrinho.style.display = "none";
        }
    });

                         // impede o carrinho fechao ao clicar dentro dele
    menucarrinho.addEventListener("click", function (event) {
        event.stopPropagation();
    });
})