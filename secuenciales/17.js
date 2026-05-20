function calcularBeca(){

let edad=parseFloat(document.getElementById("edad").value);
let promedio=parseFloat(document.getElementById("promedio").value);
let resultado="";

if(edad>18){
if(promedio>=9){
resultado="$2000";
}else if(promedio>=7.5){
resultado="$1000";
}else if(promedio>=6){
resultado="$500";
}else{
resultado="Carta invitación";
}
}else{
if(promedio>=9){
resultado="$3000";
}else if(promedio>=8){
resultado="$2000";
}else if(promedio>=6){
resultado="$100";
}else{
resultado="Carta invitación";
}
}

document.getElementById("resultado").innerHTML=
"Resultado: "+resultado;

}
