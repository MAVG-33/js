// tipos de datos

//numerico float, ya detecta que valor le atas metiendo
var edad = 24;
var kilos= 5.50;
document.write("<br/>"+edad+" "+ kilos);

//String
var nombre = "miguel";
var apellido = "villagomez \"comillas\"";
document.write("<br/>"+nombre+" "+apellido);
//Array-arreglo
 var nombres=["miguel", "pepe", " juan"];
 document.write("<br/>"+nombre[0]+" "+nombres[1]+" "+nombres[2]);
 //objetos
 var objeto = {
   color: "Black",
   size: 12
 }
 //booleano
 var booleano=false;
 //valor undefinido
 var indefinida;
 document.write("<br/>"+indefinida);
 //valor Null, se utiliza cuando el valor que tenemos queremos a estrableserlo a nulo ,
 var numero2= 10;
 var numero2= null;
 //NaN, cuando tenemos un error nopodemos multiplicar un numero con un string
 var texto="hola como estas";
 document.write("<br/>"+texto*2);
