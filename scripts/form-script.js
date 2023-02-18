function validaInfo(){

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var credicard = document.getElementById("credicard").value;
    var endereco = document.getElementById("endereco").value;

    if(nome == "" || email == "" || credicard == "" || endereco == ""){
        alert("Write you information on ALL fields!!!");
    }
    else{
        var exibidor = document.getElementById("exibe-texto");
        exibidor.display = "inline-block";

        exibidor.innerText = "ALL YOUR INFORMATION BELONGS TO ME HAHAHAHAH!!";
    }

}