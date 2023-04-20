//import {cartas} from '../db/cartas.js'

const cartas = [
  { nombre: "El gallo", imagen: "imagen_gallo.png" },
  { nombre: "El diablito", imagen: "imagen_diablito.png" },
  { nombre: "La dama", imagen: "imagen_dama.png" },
  { nombre: "El catrín", imagen: "imagen_catrin.png" },
  { nombre: "El paraguas", imagen: "imagen_paraguas.png" },
  { nombre: "La sirena", imagen: "imagen_sirena.png" },
  { nombre: "La escalera", imagen: "imagen_escalera.png" },
  { nombre: "La botella", imagen: "imagen_botella.png" },
  { nombre: "El barril", imagen: "imagen_barril.png" },
  { nombre: "El árbol", imagen: "imagen_arbol.png" },
  { nombre: "El melón", imagen: "imagen_melon.png" },
  { nombre: "El valiente", imagen: "imagen_valiente.png" },
  { nombre: "El gorrito", imagen: "imagen_gorrito.png" },
  { nombre: "La muerte", imagen: "imagen_muerte.png" },
  { nombre: "La pera", imagen: "imagen_pera.png" },
  { nombre: "La bandera", imagen: "imagen_bandera.png" },
  { nombre: "El bandolón", imagen: "imagen_bandolon.png" },
  { nombre: "El violoncello", imagen: "imagen_violoncello.png" },
  { nombre: "La garza", imagen: "imagen_garza.png" },
  { nombre: "El pájaro", imagen: "imagen_pajaro.png" },
  { nombre: "La mano", imagen: "imagen_mano.png" },
  { nombre: "La bota", imagen: "imagen_bota.png" },
  { nombre: "La luna", imagen: "imagen_luna.png" },
  { nombre: "El cotorro", imagen: "imagen_cotorro.png" },
  { nombre: "El borracho", imagen: "imagen_borracho.png" },
  { nombre: "El negrito", imagen: "imagen_negrito.png" },
  { nombre: "El corazón", imagen: "imagen_corazon.png" },
  { nombre: "La sandía", imagen: "imagen_sandia.png" },
  { nombre: "El tambor", imagen: "imagen_tambor.png" },
  { nombre: "El camarón", imagen: "imagen_camarón.png" },
  { nombre: "Las jaras", imagen: "imagen_jaras.png" },
  { nombre: "El músico", imagen: "imagen_musico.png" },
  { nombre: "La araña", imagen: "imagen_araña.png" },
  { nombre: "El soldado", imagen: "imagen_soldado.png" },
  { nombre: "La estrella", imagen: "imagen_estrella.png" },
  { nombre: "El cazo", imagen: "imagen_cazo.png" },
  { nombre: "El mundo", imagen: "imagen_mundo.png" },
  { nombre: "El apache", imagen: "imagen_apache.png" },
  { nombre: "El nopal", imagen: "imagen_nopal.png"},
  { nombre: "El alacran", imagen: "imagen_alacran.png"},
  { nombre: "El rosa", imagen: "imagen_rosa.png"},
  { nombre: "El calavera", imagen: "imagen_calavera.png"},
  { nombre: "El campana", imagen: "imagen_campana.png"},
  { nombre: "El cantarito", imagen: "imagen_cantarito.png"},
  { nombre: "El venado", imagen: "imagen_venado.png"},
  { nombre: "El sol", imagen: "imagen_sol.png"},
  { nombre: "El corona", imagen: "imagen_corona.png"},
  { nombre: "El chalupa", imagen: "imagen_chalupa.png"},
  { nombre: "El pino", imagen: "imagen_pino.png"},
  { nombre: "El pescado", imagen: "imagen_pescado.png"},
  { nombre: "El palma", imagen: "imagen_palma.png"},
  { nombre: "El maceta", imagen: "imagen_maceta.png"},
  { nombre: "El arpa", imagen: "imagen_arpa.png"},
  { nombre: "El rana", imagen: "imagen_rana.png"}]

// Arreglo para almacenar las cartillas ya generadas
const cartillasGeneradas = [];

//Arreglo para almacenar las cartas ya utilizadas
const cartasSeleccionadas = [];

function generarArregloAleatorio(){
  const aleatorios = []
  const numAleatorio = Math.floor(Math.random() * cartas.length);
  let i = 0;
  while(i < 16){
    if(!aleatorios.includes(numAleatorio)){
      aleatorios.push(numAleatorio)
    }
  }
}

// Función para generar una cartilla de lotería
function asignarCartas() {
  const filas = 4;
  const columnas = 4;
  let i = 0
  while(i < filas * columnas) {
    if(cartasSeleccionadas.length === cartas.length){
      cartasSeleccionadas.length = 0;
      console.log('AydiositoRegenerator')
    }
    const numAleatorio = Math.floor(Math.random() * cartas.length);
    const cartaAleatoria = cartas[numAleatorio];
    if (!cartasSeleccionadas.includes(cartaAleatoria)) {
      console.log(cartaAleatoria);
      cartasSeleccionadas.push(cartaAleatoria);
      i++;
      console.log('AydiositoIF')
    }
  }
  
  return cartasSeleccionadas;
}

// Generar las cartillas
function generarCartillas(nCartillas){
    let i = 0;
    while (i < nCartillas) {
      const nuevaCartilla = asignarCartas();
      if (!cartillasGeneradas.some(cartilla =>JSON.stringify(cartilla) === JSON.stringify(nuevaCartilla))) {
        cartillasGeneradas.push(nuevaCartilla);
        i++;
      }
    }
}

generarCartillas(2);
// Imprimir las cartillas generadas
cartillasGeneradas.forEach((cartilla, index) => {
  console.log(`Cartilla ${index + 1}:`);
  console.table(cartilla);
});

console.log('Aydiosito')
