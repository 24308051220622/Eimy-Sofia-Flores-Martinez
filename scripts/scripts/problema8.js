function calcularPromedio(){

    let n1 = parseFloat(
        document.getElementById("1").value
    );

    let n2 = parseFloat(
        document.getElementById("2").value
    );

    let n3 = parseFloat(
        document.getElementById("3").value
    );

    let promedio = 
    (n1 * 0.25) +
    (n2 * 0.25) +
    (n3 * 0.50);

    document.getElementById("resultado").innerHTML =

    "El promedio final es: " +
    promedio.toFixed(2);

}