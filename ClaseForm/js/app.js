console.log("Estamos Conectados");

//  Mensaje desde la js a la pagina web
document.write("<h1>Mensaje de alerta de js<h1/>") 

//  Mensaje de alerta
//alert("danger....");

var nt1 = 4.5;
var nt2 = 2.0;
var nt3 = 7.0;

var suma = nt1 + nt2+nt3;
var promedio = suma/3;
console.log("La suma de sus notas es: ", suma);
console.log("El promedio de sus notas es: ", promedio);

if (promedio >= 4) {
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}
