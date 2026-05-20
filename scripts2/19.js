function calcularPoliza(){

    let poliza =
    document.getElementById("poliza").value;

    let alcohol =
    document.getElementById("alcohol").value;

    let lentes =
    document.getElementById("lentes").value;

    let enfermedad =
    document.getElementById("enfermedad").value;

    let edad = parseFloat(
        document.getElementById("edad").value
    );

    let base = 0;

    if(poliza == "A"){

        base = 1200;

    }else{

        base = 950;

    }

    let total = base;

    if(alcohol == "si"){

        total += base * 0.10;

    }

    if(lentes == "si"){

        total += base * 0.05;

    }

    if(enfermedad == "si"){

        total += base * 0.05;

    }

    if(edad > 40){

        total += base * 0.20;

    }else{

        total += base * 0.10;

    }

    document.getElementById("resultado").innerHTML =
    "El costo total de la póliza es: $" + total;

}