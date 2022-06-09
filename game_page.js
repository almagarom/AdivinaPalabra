
	//traeremos los nombres desde el localStorage
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	//creamos dos variables para guardar el puntaje de cada jugador
	player1_score = 0;
	player2_score = 0;

	//para mostrar en la pantalla el nombre de cada jugador al inicio
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
	//para mostrar al inicio la puntuacion de cada jugador hasta el momento
document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;
	//Mostraremos el turno de quien le toca preguntar y a quien responder
document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ;


//para que comience el juego.
//esto pasará al momento de dar click en enviar la palabra
function send() {

	//obtenemos la palabra que haya introducido en el text input
	get_word = document.getElementById("word").value;
	//cambiaremos a letras minuesculas
	word = get_word.toLowerCase();
	//mostramos en la consola la palabra en minusculas
	console.log("Palabra en minúsculas = " + word);



	//la primera letra se guardará en la 1º variable
    charAt1 = word.charAt(1);
	console.log(charAt1);

	//para la siguiente letra, tomamos la mitad de la longitud
	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

	//para la tercera letra, tomaremos la ultima letra
    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);

	//reemplazaremos estas letras por guiones
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	//Mostraremos esto en el chat
	console.log(remove_charAt3);

	//Para mostrarlo en la pantalla
    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}







///////////////////////Termina C91



////////////////
//asignamos los turnos
question_turn = "player1";
answer_turn = "player2";

//lo que hará el botón de revisar
function check()
{
	//Se crea una variable para guardar la palabra ingresada
	get_answer = document.getElementById("input_check_box").value;
	//convertimos la palabra a minusculas
	answer = get_answer.toLowerCase();
	//lo mostramos en la consola
	console.log("Respuesta en minúsculas = " + answer);
	//comparamos el resultado esperado, con el recibido
	if(answer == word)	
	{
		//en caso de que le toque preguntar al jugador 1
		if(answer_turn == "player1")
		{
			//ganará un punto
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{	//sino, entonces ganará un punto el jugador 2
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	//cambiaremos los turnos
	if(question_turn == "player1")
	{
		//cambiaremos para que ahora le toque preguntar al jugador 2
		question_turn = "player2"
		//cambiaremos también el contenido en la etiqueta correspondiente
		document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player2_name ;
	}
	else 
	{	//sino era turno del jugador 1, entonces cambiaremos para que ahora si sea su turno
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ;
	}
	//cambiaremos tambien el nombre de a quien le toca responder
	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Turno para responder - " + player1_name ;
	}
	//borraremos el contenido de la parte OUTPUT
    document.getElementById("output").innerHTML = "";
}

