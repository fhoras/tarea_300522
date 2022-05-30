/* 
  Almacene en un arreglo de dimensión N números (la
  cantidad es ingresada por el usuario)
  • Muestre cuántos números son positivos, cuántos son
  negativos y cuántos ceros hay
  56
  Ejemplo:
  v = 0, -7, -9, 1, 0, 0
  La salida es: 1 positivos, 2 negativos y 3 
*/
function consultar_numeros(numeros: number[]) {
  let max: number = numeros.length;
  let cantPositivos: number = 0;
  let cantNegativos: number = 0;
  for (let i = 0; i < max; i++) {
    if (numeros[i] >= 0) {
      cantNegativos++;
    } else {
      cantPositivos++;
    }
  }
  console.log("Cantidad de n° positivos: " + cantPositivos);
  console.log("Cantidad de n° negativos: " + cantNegativos);
  console.log("Cantidad total de números registrados es " + max);
}
function AzarNumerosPositivosNegativos(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cargar_numeros_vector(max: number) {
  let numeros: number[] = [];
  for (let i = 0; i < max; i++) {
    numeros[i] = AzarNumerosPositivosNegativos(10, -10);
  }
  console.log(numeros);
  consultar_numeros(numeros);
}

btnDatos1.addEventListener("click", () => {
  //let cantidad: number = cant.value;
  cargar_numeros_vector(10);
});
