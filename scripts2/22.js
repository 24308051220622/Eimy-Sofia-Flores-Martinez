function calcularSueldo(){

let horas = parseFloat(
document.getElementById("horas").value
);

let pago = parseFloat(
document.getElementById("pago").value
);

let sueldo = 0;

if(horas > 50){

document.getElementById("resultado").innerHTML =
"No está permitido trabajar más de 50 horas";

return;

}

if(horas <= 40){

sueldo = horas * pago;

}else if(horas <= 45){

let extrasDobles = horas - 40;

sueldo =
(40 * pago) +
(extrasDobles * pago * 2);

}else{

let extrasDobles = 5;

let extrasTriples = horas - 45;

sueldo =
(40 * pago) +
(extrasDobles * pago * 2) +
(extrasTriples * pago * 3);

}

document.getElementById("resultado").innerHTML =
"El sueldo semanal es: $" + sueldo;

}