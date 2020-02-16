//declaramos nuetro arreglo, ya no se establese el tamaño del arreglocomo soliamos hacerlo en
//en otros lenguajes

var amigos= ["Miguel","Carlos","Lalo"];
var amigos2 = ["Concatenando exito man"];
//ejemplo que los rreglos aceptan cualquier tipo de datos
var numeros=[true,24,10.325];
var valor;
valor = prompt("El nombre actual del arreglo es: "+amigos[0]+" ingresa el nuevo nombre:")
amigos[0]=valor;
document.write("<br/>"+amigos[0]);
//mostrar todos los arreglos
document.write("<br/>"+amigos);
// metotos utilizados para los metodo y propiedades de arreglos
//como saber la logitud de un arreglo
document.write("<br/>"+"Se utiliza length para saber el tamaño del arreglo = " + amigos.length + "Amigos");
document.write("<br/>"+amigos);
//agregar un elemento mas al arreglo
amigos[amigos.length]="Prueba";
document.write("<br/>"+"se agrego al arreglo un elemento mas "+ amigos.length+" Amigos");
document.write("<br/>"+amigos);
//utilizando push, permite agregar elementos al final del un arreglo
amigos.push("Prueba dos ","prueba 3");
document.write("<br/>"+"ahora con push son "+ amigos.length+" Amigos");
document.write("<br/>"+amigos);
//utilizar pop elimina el ultimo
amigos.pop();
document.write("<br/>"+"ahora con pop son "+ amigos.length +" Amigos");
document.write("<br/>"+amigos);
//para concatenar amigos con amigos 2
var amigos3 = amigos.concat(amigos2);
document.write("<br/>"+"cooncatenando "+ amigos3.length +" Amigos");
document.write("<br/>"+amigos3);
//con join no permitira dividir con espacio : espacio

document.write("<br/><br/>"+"usando join ejemplo uno "+ amigos3.join(" : "));
document.write("<br/><br/>"+"usando join ejemplo dos con salto de linea  "+ amigos3.join("<br/>"));
// ordenamiento sort(); alfaceticamente

var ordenar = amigos3.sort();
document.write("<br/><br/>"+"usando join ejemplo uno "+ ordenar.join("<br/>"));
