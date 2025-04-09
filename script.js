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