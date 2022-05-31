/* 
  Calcular producto vectorial 
*/
function producto_escalar(numerosa: number[], numerosb: number[]) {
  let max: number = numerosa.length;
  let producto_escalar: number = 0;
  for (let i = 0; i < max; i++) {
    producto_escalar = producto_escalar + numerosa[i] * numerosb[i];
  }
  console.log("El productor escalar es: " + producto_escalar);
}

function AzarNumerosPositivos(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cargar_numeros_vectores(max: number) {
  let numerosa: number[] = [];
  let numerosb: number[] = [];
  for (let i = 0; i < max; i++) {
    numerosa[i] = AzarNumerosPositivos(0, 10);
  }
  for (let i = 0; i < max; i++) {
    numerosb[i] = AzarNumerosPositivos(0, 10);
  }
  console.log("Vector n° a: " + numerosa);
  console.log("Vector n° b: " + numerosb);

  producto_escalar(numerosa, numerosb);
}

btnDatos1.addEventListener("click", () => {
  //let cantidad: number = cant.value;
  cargar_numeros_vectores(10);
});
