//declaramos nuetro arreglo, ya no se establese el tamaño del arreglocomo soliamos hacerlo en
//en otros lenguajes

var amigos= ["Miguel","Carlos","Lalo"];
var numeros=[true,24,10.325];
var valor;
valor = prompt("El nombre actual del arreglo es: "+amigos[0]+" ingresa el nuevo nombre:")
amigos[0]=valor;
document.write("<br/>"+amigos[0]);
