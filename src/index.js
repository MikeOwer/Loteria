//import {cartas} from '../db/cartas.js'

const cartas = [
  { nombre: "El gallo", imagen: "../Assets/img/imagen_gallo.jpg" },
  { nombre: "El diablito", imagen: "../Assets/img/imagen_diablito.jpg" },
  { nombre: "La dama", imagen: "../Assets/img/imagen_dama.jpg" },
  { nombre: "El catrín", imagen: "../Assets/img/imagen_catrin.jpg" },
  { nombre: "El paraguas", imagen: "../Assets/img/imagen_paraguas.jpg" },
  { nombre: "La sirena", imagen: "../Assets/img/imagen_sirena.jpg" },
  { nombre: "La escalera", imagen: "../Assets/img/imagen_escalera.jpg" },
  { nombre: "La botella", imagen: "../Assets/img/imagen_botella.jpg" },
  { nombre: "El barril", imagen: "../Assets/img/imagen_barril.jpg" },
  { nombre: "El árbol", imagen: "../Assets/img/imagen_arbol.jpg" },
  { nombre: "El melón", imagen: "../Assets/img/imagen_melon.jpg" },
  { nombre: "El valiente", imagen: "../Assets/img/imagen_valiente.jpg" },
  { nombre: "El gorrito", imagen: "../Assets/img/imagen_gorrito.jpg" },
  { nombre: "La muerte", imagen: "../Assets/img/imagen_muerte.jpg" },
  { nombre: "La pera", imagen: "../Assets/img/imagen_pera.jpg" },
  { nombre: "La bandera", imagen: "../Assets/img/imagen_bandera.jpg" },
  { nombre: "El bandolón", imagen: "../Assets/img/imagen_bandolon.jpg" },
  { nombre: "El violoncello", imagen: "../Assets/img/imagen_violoncello.jpg" },
  { nombre: "La garza", imagen: "../Assets/img/imagen_garza.jpg" },
  { nombre: "El pájaro", imagen: "../Assets/img/imagen_pajaro.jpg" },
  { nombre: "La mano", imagen: "../Assets/img/imagen_mano.jpg" },
  { nombre: "La bota", imagen: "../Assets/img/imagen_bota.jpg" },
  { nombre: "La luna", imagen: "../Assets/img/imagen_luna.jpg" },
  { nombre: "El cotorro", imagen: "../Assets/img/imagen_cotorro.jpg" },
  { nombre: "El borracho", imagen: "../Assets/img/imagen_borracho.jpg" },
  { nombre: "El negrito", imagen: "../Assets/img/imagen_negrito.jpg" },
  { nombre: "El corazón", imagen: "../Assets/img/imagen_corazon.jpg" },
  { nombre: "La sandía", imagen: "../Assets/img/imagen_sandia.jpg" },
  { nombre: "El tambor", imagen: "../Assets/img/imagen_tambor.jpg" },
  { nombre: "El camarón", imagen: "../Assets/img/imagen_camaron.jpg" },
  { nombre: "Las jaras", imagen: "../Assets/img/imagen_jaras.jpg" },
  { nombre: "El músico", imagen: "../Assets/img/imagen_musico.jpg" },
  { nombre: "La araña", imagen: "../Assets/img/imagen_araña.jpg" },
  { nombre: "El soldado", imagen: "../Assets/img/imagen_soldado.jpg" },
  { nombre: "La estrella", imagen: "../Assets/img/imagen_estrella.jpg" },
  { nombre: "El cazo", imagen: "../Assets/img/imagen_cazo.jpg" },
  { nombre: "El mundo", imagen: "../Assets/img/imagen_mundo.jpg" },
  { nombre: "El apache", imagen: "../Assets/img/imagen_apache.jpg" },
  { nombre: "El nopal", imagen: "../Assets/img/imagen_nopal.jpg" },
  { nombre: "El alacran", imagen: "../Assets/img/imagen_alacran.jpg" },
  { nombre: "El rosa", imagen: "../Assets/img/imagen_rosa.jpg" },
  { nombre: "El calavera", imagen: "../Assets/img/imagen_calavera.jpg" },
  { nombre: "El campana", imagen: "../Assets/img/imagen_campana.jpg" },
  { nombre: "El cantarito", imagen: "../Assets/img/imagen_cantarito.jpg" },
  { nombre: "El venado", imagen: "../Assets/img/imagen_venado.jpg" },
  { nombre: "El sol", imagen: "../Assets/img/imagen_sol.jpg" },
  { nombre: "El corona", imagen: "../Assets/img/imagen_corona.jpg" },
  { nombre: "El chalupa", imagen: "../Assets/img/imagen_chalupa.jpg" },
  { nombre: "El pino", imagen: "../Assets/img/imagen_pino.jpg" },
  { nombre: "El pescado", imagen: "../Assets/img/imagen_pescado.jpg" },
  { nombre: "El palma", imagen: "../Assets/img/imagen_palma.jpg" },
  { nombre: "El maceta", imagen: "../Assets/img/imagen_maceta.jpg" },
  { nombre: "El arpa", imagen: "../Assets/img/imagen_arpa.jpg" },
  { nombre: "El rana", imagen: "../Assets/img/imagen_rana.jpg" },
];

// Arreglo para almacenar las cartillas ya generadas
//Arreglo para almacenar las cartas ya utilizadas

// Generar las cartillas
function generarCartillas(nCartillas) {
  const cartillasGeneradas = [];
  let i = 0;
  while (i < nCartillas) {
    const nuevaCartilla = asignarCartas();
    if (
      !cartillasGeneradas.some(
        (cartilla) => JSON.stringify(cartilla) === JSON.stringify(nuevaCartilla)
      )
    ) {
      cartillasGeneradas.push(nuevaCartilla);
      i++;
    }
  }
  return cartillasGeneradas;
}

// Función para generar una cartilla de lotería
function asignarCartas() {
  const filas = 4;
  const columnas = 4;
  const cartasSeleccionadas = [];
  while (cartasSeleccionadas.length < filas * columnas) {
    // Random
    // ----------------------------------------------------
    //Generar carta aleatoria entre 1 y 54
    const numAleatorio = Math.floor(Math.random() * cartas.length);
    const cartaAleatoria = cartas[numAleatorio];
    if (!cartasSeleccionadas.includes(cartaAleatoria)) {
      //console.log(cartaAleatoria);
      cartasSeleccionadas.push(cartaAleatoria);
      //console.log("AydiositoIF");
    }
  }

  return cartasSeleccionadas;
}

/* function generarArregloAleatorio() {
  const aleatorios = [];
  const numAleatorio = Math.floor(Math.random() * cartas.length);
  let i = 0;
  while (i < 16) {
    if (!aleatorios.includes(numAleatorio)) {
      aleatorios.push(numAleatorio);
    }
  }
} */

/* generarCartillas(10);
// Imprimir las cartillas generadas
cartillasGeneradas.forEach((cartilla, index) => {
  console.log(`Cartilla ${index + 1}:`);
  console.table(cartilla);
});

console.log("Aydiosito"); */

function pintarCartilla() {
  const numeroDeCartillas = document.getElementById("numeroDeCartillas")
  const cartillas = generarCartillas(numeroDeCartillas.value);
  cartillas.forEach((cartilla) => {
    const contenedor = document.createElement("div");
    contenedor.className = "container";
    for (let indexFila = 0; indexFila < 4; indexFila++) {
      const fila = document.createElement("div");
      fila.className = "row";

      for (let indexColumna = indexFila * 4; indexColumna < indexFila * 4 + 4; indexColumna++) {
        const columna = document.createElement("div");
        columna.className = "col";

        const imagen = document.createElement("img");
        imagen.alt = cartilla[indexColumna].nombre;
        imagen.src = cartilla[indexColumna].imagen;

        columna.appendChild(imagen);
        fila.appendChild(columna);
      }

      contenedor.appendChild(fila);
    }
    document.getElementById("main").appendChild(contenedor);
  });
}
