function calcularPago(){

    let kw = parseFloat(
        document.getElementById("kw").value
    );

    let precio = parseFloat(
        document.getElementById("precio").value
    );

    let pago = kw * precio;

    document.getElementById("resultado").innerHTML =
    "El total a pagar es: $" + pago;

}