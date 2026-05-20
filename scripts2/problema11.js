function verificarVoto(){

    let edad = parseFloat(
        document.getElementById("edad").value
    );

    if(edad >= 18){

        document.getElementById("resultado").innerHTML =
        "Si puedes votar";

    }else{

        document.getElementById("resultado").innerHTML =
        "No mijo, no puedes";

    }

}