/* Creo la constante "opciones" con 3 valores posibles para crear la funcion "generarOpcion" 
para que en caso de que en el prompt no tome uno de los 3 valores especificados vuelva a preguntar.

Y tamb nombro dos variables para que cuando el usurario y la computadora eligan una opcion tome el valor que seleccionaron
*/

const opciones = ["piedra", "papel", "tijera"];
let jugador;
let computadora;

    /* creo una funcion para que la computadora elija aleatoriamente una de las tres opciones */
    function generarOpcion() {
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
    }
    /* Formo una funcion que me permite interactuar con el usurario, preguntandole que quiere elegir y guardando su respuesta en una variable. */
  function preguntarJugador() {
    let opcion = 0;
        while (!opciones.includes(opcion)) {
      opcion = prompt("Elige piedra, papel  o tijera :").toLowerCase();
    }
     return opcion;
     }

     /* Por ulitmo, hago una funcion que tenga las condiciones del juego, 
     en el primer condicional si la opcion que elige el usurio es estrictamente igual a la que elige la computadora
     retornara un empate. El otro caso seria que el usurio tenga una opcion ganadora lo cual devolera "ganaste". Caso contrario si no es ninguno
     de los anteriores devuelve " Perdiste" */
     function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
      return "Empate";
     } else if (
      (jugador === "piedra" && computadora === "tijera") ||
      (jugador === "papel" && computadora === "piedra") ||
      (jugador === "tijera" && computadora === "papel")
     ) {
      return "Ganaste";
     } else {
      return "Perdiste";
        }
  }
  function jugarPiedraPapelTijera() {
    jugador = preguntarJugador();
    computadora = generarOpcion();
    const resultado = determinarGanador(jugador, computadora);
    alert(`Elegiste ${jugador}. La computadora eligió ${computadora}. ${resultado}!`);
  }  

  /* Llamo a la funcion para que se ejecute al cargar la pagina */
  jugarPiedraPapelTijera()