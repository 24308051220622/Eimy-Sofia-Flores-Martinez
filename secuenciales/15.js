function menorEdad(){

let n1=document.getElementById("nombre1").value;
let e1=parseFloat(document.getElementById("edad1").value);

let n2=document.getElementById("nombre2").value;
let e2=parseFloat(document.getElementById("edad2").value);

let n3=document.getElementById("nombre3").value;
let e3=parseFloat(document.getElementById("edad3").value);

let nombre=n1;
let edad=e1;

if(e2<edad){
nombre=n2;
edad=e2;
}

if(e3<edad){
nombre=n3;
edad=e3;
}

document.getElementById("resultado").innerHTML=
"Menor: "+nombre+" con "+edad+" años";

}
