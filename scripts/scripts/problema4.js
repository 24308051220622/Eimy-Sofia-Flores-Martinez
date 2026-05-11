function calcularAhorro(){

    let sueldo = parseFloat(
        document.getElementById("sueldo").value
    );

    let porcentaje = parseFloat(
        document.getElementById("porcentaje").value
    );

    let ahorroSemanal = sueldo * (porcentaje / 100);

    let ahorroAnual = ahorroSemanal * 4 * 12;

    document.getElementById("resultado").innerHTML =

    "Ahorro anual: $" +
    ahorroAnual.toFixed(2);

}