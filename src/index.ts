/* Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de personas */
//let cant = document.getElementById("cantidad");

function consultar_edades(edades: number[]) {
  let max: number = edades.length;
  let cantMayor21: number = 0;
  let cantMenor21: number = 0;
  for (let i = 0; i < max; i++) {
    if (edades[i] >= 21) {
      cantMayor21++;
    } else {
      cantMenor21++;
    }
  }
  console.log("Cantidad de mayores de 21 años: " + cantMayor21);
  console.log("Cantidad de menores de 21 años: " + cantMenor21);
  console.log("Cantidad total de personas en el local " + max);
}

function cargar_edades(max: number, min: number) {
  let edades: number[] = [];
  for (let i = 0; i < 270; i++) {
    edades[i] = Math.floor(Math.random() * (max - min + 1) + min);
  }
  console.log(edades);
  return edades;
}

btnDatos1.addEventListener("click", () => {
  //let cantidad: number = cant.value;
  let edades = cargar_edades(40, 19);
  consultar_edades(edades);
});
