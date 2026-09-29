const campoSenha = document.querySelectorAll("#senha");
const btnSenha = document.querySelectorAll("#mostrar-senha");

btnSenha.forEach ((elemento,posicao) => { 

    console.log(elemento)
    console.log(posicao)
    elemento.addEventListener("click", function() {


        // if(campoSenha.type == "password") {

        //     campoSenha.type = "text";
        // }
        // else {
        //     campoSenha.type = "password";
        // }


        console.log();
        

        campoSenha[posicao].type = campoSenha[posicao].type  == "password" ? "text" : "password";
    })
})



