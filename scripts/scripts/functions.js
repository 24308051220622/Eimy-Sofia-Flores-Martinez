function calcularPago(){

    let metros = parseFloat(
        document.getElementById("metros").value
    );

    let precio = parseFloat(
        document.getElementById("precio").value
    );

    let pago = metros * precio;

    document.getElementById("resultado").innerHTML =
    "El total a pagar es: $" + pago ;

} 