/* Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de personas */
let cant = document.getElementById("cantidad");

function cargar_edades() {
  let edades: number[] = [];
  for (let i = 0; i < 270; i++) {
    edades[i] = math.random(19, 40);
  }
  console.log(numeros);
}

btnDatos1.addEventListener("click", () => {
  let cantidad: number = cant.value;
  console.log(cargar_edades());
});
