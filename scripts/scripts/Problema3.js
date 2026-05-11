function calcularPago(){

    let precio = parseFloat(
        document.getElementById("precio").value
    );

    let descuento = parseFloat(
        document.getElementById("desc").value
    );

    let iva = parseFloat(
        document.getElementById("iva").value
    );

    let descuentoAplicado = precio * (descuento / 100);

    let precioConDescuento = precio - descuentoAplicado;

    let ivaAplicado = precioConDescuento * (iva / 100);

    let precioFinal = precioConDescuento + ivaAplicado;

    document.getElementById("resultado").innerHTML =

    "Precio con descuento: $" +
    precioConDescuento.toFixed(2)

    + "<br><br>" +

    "Precio final con IVA: $" +
    precioFinal.toFixed(2);

}