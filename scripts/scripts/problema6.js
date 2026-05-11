function calcularPotencia(){

    let resistencia = parseFloat(
        document.getElementById("resistencia").value
    );

    let corriente = parseFloat(
        document.getElementById("corriente").value
    );

    let voltaje = resistencia * corriente;

    let potencia = voltaje * corriente;

    document.getElementById("resultado").innerHTML =

    "Voltaje (V): " + voltaje.toFixed(2)

    + "<br><br>" +

    "Potencia eléctrica (P): " + potencia.toFixed(2);

}