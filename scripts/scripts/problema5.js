function calcularCheque(){

    let dias = parseFloat(
        document.getElementById("dias").value
    );

    let hotel = parseFloat(
        document.getElementById("hotel").value
    );

    let comida = parseFloat(
        document.getElementById("comida").value
    );

    let totalHotel = hotel * dias;

    let totalComida = comida * dias;

    let otrosGastos = 100 * dias;

    let montoCheque = totalHotel + totalComida + otrosGastos;

    document.getElementById("resultado").innerHTML =

    "Hotel: $" + totalHotel.toFixed(2)

    + "<br><br>" +

    "Comida: $" + totalComida.toFixed(2)

    + "<br><br>" +

    "Otros gastos: $" + otrosGastos.toFixed(2)

    + "<br><br>" +

    "Monto total del cheque: $" + montoCheque.toFixed(2);

}