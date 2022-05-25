let dimensionArreglo: number = 0;
let numerosIngresado: number[] = new Array(dimensionArreglo);
let numerosPositivos: number[] = new Array(dimensionArreglo);
let numerosNegativos: number[] = new Array(dimensionArreglo);
let cantidadDeCeros: number = 0;

//creo una funcion para guardar un array de N dimension.
function guardarArray(numerosIngresado: number[], dimensionArreglo: number) {
  for (let x = 0; x < dimensionArreglo; x++) {
    numerosIngresado[x] = Number(
      prompt("Ingrese el numero que quiere poner en el lugar " + x + ": ")
    );
  }
}
//creo una funcion comparadora
function comparar(arregloIngresado: number[], dimensionIngresada: number) {
  let m = 0;
  let n = 0;
  for (let x = 0; x < dimensionIngresada; x++) {
    if (arregloIngresado[x] < 0) {
      numerosNegativos[m] = arregloIngresado[x];
      m += 1;
    }
    if (arregloIngresado[x] > 0) {
      numerosPositivos[n] = arregloIngresado[x];
      n += 1;
    }
    if (arregloIngresado[x] === 0) {
      cantidadDeCeros += 1;
    }
  }
}
//pido los datos de dimension
dimensionArreglo = Number(prompt("Ingrese la dimensión del arreglo:"));
//llamo a las funciones y le mando los parametros
guardarArray(numerosIngresado, dimensionArreglo);
comparar(numerosIngresado, dimensionArreglo);
//imprimo resultados por consola
console.log("Los Numeros positivos del arreglo son: " + numerosPositivos);
console.log("Los Numeros negativos del arreglo son: " + numerosNegativos);
console.log("Ceros ingresados en el arreglo: " + cantidadDeCeros);
console.log("El arreglo ingresado es: " + numerosIngresado);
