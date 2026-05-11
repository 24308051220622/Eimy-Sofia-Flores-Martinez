function calcularArea(){

    let lado = parseFloat(
        document.getElementById("lado").value
    );

    let area = lado * lado;

    document.getElementById("resultado").innerHTML =

    "El área del cuadrado es: " +
    area;

}