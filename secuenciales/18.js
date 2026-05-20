function calcularBono(){

let antiguedad=parseFloat(document.getElementById("antiguedad").value);
let sueldo=parseFloat(document.getElementById("sueldo").value);

let bono1=0;
let bono2=0;

if(antiguedad>2 && antiguedad<5){
bono1=sueldo*0.20;
}else if(antiguedad>=5){
bono1=sueldo*0.30;
}

if(sueldo<1000){
bono2=sueldo*0.25;
}else if(sueldo<=3500){
bono2=sueldo*0.15;
}else{
bono2=sueldo*0.10;
}

let mayor=Math.max(bono1,bono2);

document.getElementById("resultado").innerHTML=
"Bono: $"+mayor;

}
