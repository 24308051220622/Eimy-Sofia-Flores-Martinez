function calcularTiempo(){

    let edad = parseFloat(
        document.getElementById("edad").value
    );

    let meses = edad * 12;

    let semanas = edad * 48;

    let dias = edad * 365;

    let horas = dias * 24;

    document.getElementById("resultado").innerHTML =

    "Meses vividos: " + meses

    + "<br><br>" +

    "Semanas vividas: " + semanas

    + "<br><br>" +

    "Días vividos: " + dias

    + "<br><br>" +

    "Horas vividas: " + horas;

}