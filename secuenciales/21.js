function calcularBono(){

let anios = parseInt(
document.getElementById("anios").value
);

let bono = 0;

if(anios > 5){

bono = 1000;

}else{

bono = anios * 100;

}

document.getElementById("resultado").innerHTML =
"El bono del trabajador es: $" + bono;

}