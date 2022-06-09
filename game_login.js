//Creamos la función que se mencionó en el boton de la pnatalla anterior
function agregarU() {
  //obtenemos el contenido de los nombre y
  //los guardamos en variables
  player1_name = document.getElementById("jugador1").value;
  player2_name = document.getElementById("jugador2").value;

    //guardamos los nombres en el localStorage
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    //cambiamos a la siguiente página
    window.location = "game_page.html";

    //nos vamos al archivo HTML de la segunda página
}

