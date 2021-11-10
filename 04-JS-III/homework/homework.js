// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código: 1
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código: 2
  //var i = array.lenght -1;
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:3
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:4
  for (i=0; i<array.length; i++ ){
    array[i]++;
  }
return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código: 5
  array.push (elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código: 6
  array.unshift (elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:7 //revisar este ejercicio!!!!!
  var str = '';
  for (let i=0; i<palabras.length-1; i++){
    str = str + palabras[i] + ' ';
  }
  str = str + palabras[palabras.length-1];
return str;
}



function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código: 8
  for (i=0; i<array.length;i++){
    if (array[i]===elemento){
      return true;
    }
  }
return false;
}



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:9
  var acum = 0;
  for (let i=0;i<numeros.length; i++){
    acum += numeros[i];
  }
  return acum;
}




function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:10
  var prom = 0;
  var acum = 0;
  for (let i=0;i<resultadosTest.length; i++){
    acum += resultadosTest[i];
  }
  prom = acum / resultadosTest.length;
  return prom;
  
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código: 11
  var mayor = numeros[0];
  for (let i=1; i<numeros.length;i++){
    if (numeros[i]>mayor){
      mayor = numeros[i];
    }
  }
return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  acum=1;
  if (arguments[0] === undefined ){
    return 0;
  }
  for (let i=0;i<arguments.length;i++){
    acum = acum * arguments[i];
  }
  return acum;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí 12
  var cont = 0;
  for (let i=0; i<arreglo.length; i++){
    if (arreglo[i]>18){
      cont++;
    }
  }
return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana';
  }
  return 'Es dia Laboral';  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  numero = n.toString();
  if (numero[0]==='9'){
    return true;
  }
return false;  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let i=1;
  while (i<arreglo.length){
    if (arreglo[0]===arreglo[i]){
      i++
    }
    else return false;
  }
return true;

} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var contEne = 0;
  var contMar = 0;
  var contNov = 0;
  var mesArray = [];
  var j=0;
  for (let i=0;i<array.length;i++){
    switch (array[i]){
      case 'Enero':
        contEne++;
        mesArray[j] = array[i];
        j++;
        break;
      case 'Marzo':
        contMar++;
        mesArray[j]=array[i];
        j++;
        break;
      case 'Noviembre':
        contNov++;
        mesArray[j]=array[i];
        j++;
        break;
      default :{
      }
    }
  }
  if (contEne === 0 || contMar===0 || contNov===0  ){
    return 'No se encontraron los meses pedidos';
  }
return mesArray;
}




function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var j=0;
  var numArray = [];
  for (let i=0; i<array.length;i++){
    if (array[i]>100){
      numArray[j] = array[i];
      j++;
    }
  }
return numArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var i=0;
  for (i=0;i<10;i++){
    numero+=2;
    array[i] = numero;
    if (i+1 === numero){
      break;
    }
  }
if (i === 10){
  return array;
} else {
  return ("Se interrumpió la ejecución");   
}
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código: 10
  var array = [];
  var acum = numero;
  for (let i=0; i<10 ; i++){
    if (i === 5){
      continue;
    } else {
      acum +=2;
      array.push (acum);
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
