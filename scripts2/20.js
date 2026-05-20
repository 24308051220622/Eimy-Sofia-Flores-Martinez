function calcularViaje(){

    let dinero = parseFloat(
        document.getElementById("dinero").value
    );

    let costo = parseFloat(
        document.getElementById("costo").value
    );

    let mexico = 750 * costo * 2;
    let pv = 800 * costo * 2;
    let acapulco = 1200 * costo * 2;
    let cancun = 1800 * costo * 2;

    let resultado = "";

    if(dinero >= cancun){

        resultado =
        "Puede ir a Cancún";

    }else if(dinero >= acapulco){

        resultado =
        "Puede ir a Acapulco";

    }else if(dinero >= pv){

        resultado =
        "Puede ir a Puerto Vallarta";

    }else if(dinero >= mexico){

        resultado =
        "Puede ir a México";

    }else{

        resultado =
        "Debe quedarse en casa";

    }

    document.getElementById("resultado").innerHTML =
    resultado;

}