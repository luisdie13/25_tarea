/*

               ESTADÍSTICAS DEL EQUIPO

Queremos crear, recuperar y añadir información sobre tu
equipo deportivo favorito. Baloncesto, fútbol, tenis o
waterpolo, tú eliges. Tu trabajo consiste en crear
datos utilizando las estructuras de datos de JavaScript
disponibles: matrices y objetos.

Después de crear estas estructuras de datos en este proyecto,
siéntete libre de desafiarte a ti mismo para obtener
información valiosa de ellas. Por ejemplo, podrías
querer obtener el número total de partidos que ha jugado
tu equipo o la puntuación media de todos sus partidos.


RELLENAR DATOS*/

/*Tarea 1:
Crea una estructura de datos para almacenar la información
de nuestro equipo. Declara una variable const llamada team
y configúrala como un objeto vacío.

const team = {};

Tarea 2:
Nuestro team tiene jugadores y los juegos que han jugado.
Representemos ambos agregando dos propiedades al
objeto team. Agrega una propiedad _players y una propiedad
_games e inicializa ambas con matrices vacías.

const team = {
    _players: [],
    _games: []
  };
  
  /*Tarea 3:
  A continuación, rellena la matriz _players vacía con
  tres jugadores.
  Cada jugador debe ser un objeto con tres propiedades:
  firstName, lastName y age.
  Coloca cada jugador en una nueva línea para evitar
  que la línea se alargue demasiado.
  
  team._players = [
    { firstName: "dany", lastName: "perez", age: 41 },
    { firstName: "carlos", lastName: "lopez", age: 24 },
    { firstName: "jose", lastName: "paz", age: 31 }
  ];
  
  /*Tarea 4:
  Hagamos lo mismo con nuestro array _games. Llena el array
  vacío con tres juegos. Cada juego debe ser un objeto
  con tres propiedades: opponent, teamPoints y opponentPoints.
  
  team._games = [
    { opponent: "rival1", teamPoints: 78, opponentPoints: 65 },
    { opponent: "rival2", teamPoints: 92, opponentPoints: 88 },
    { opponent: "rival3", teamPoints: 70, opponentPoints: 75 }
  ];
  
  /*OBTENCIÓN DE DATOS
  
  Tarea 5:
  Crea un método getter players para recuperar la propiedad
  _players. Dentro del método getter, retorna (return) la
  propiedad _players.
  
  En este proyecto no necesitamos crear métodos setter,
  porque no queremos que nadie cambie los datos guardados en
  las propiedades.
  
  get players() {
    return this._players;
  }
  
  Tarea 6:
  Crea otro método getter games para recuperar la propiedad
  _games. Dentro del método getter, retorna la propiedad
  _games.
  
  get games() {
    return this._games;
  }
  
  Tarea 7:
  Queremos añadir un nuevo jugador a nuestro equipo.
  Añade un método addPlayer() al objeto team. Este método
  debe aceptar tres parámetros: newFirstName, newLastName y
  newAge.
  
  Dentro del método, crea un objeto player estableciendo los
  tres parámetros como los valores de sus tres propiedades:
  firstName, lastName y age.
  Finalmente, agrega el objeto player al array _players
  de team.
  
  addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(newPlayer);
  }
  
  Tarea 8:
  Debajo del objeto team, probemos nuestro nuevo método
  addPlayer() para agregar un nuevo jugador:
  Bugs Bunny, 76 años.
  Registra (console.log()) la propiedad _players de team para verificar
  si se agregó el nuevo jugador.
  
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team._players);
  
  /*Tarea 9:
  El anotador tiene información nueva para nosotros.
  Crea un método addGame() para sumar resultados de partidos.
  Este método debe aceptar tres parámetros:
  newOpponent, newTeamPoints y newOpponentPoints.
  
  Dentro del método addGame(), crea un objeto game estableciendo los
  tres parámetros como los valores de sus tres propiedades del objeto:
  opponent, teamPoints y opponentPoints.
  Agrega el objeto game al array _games de team.
  
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const newGame = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(newGame);
  }
  
  /*Tarea 10:
  Finalmente, debajo de nuestro objeto team, usa el método
  .addGame() para agregar el registro de un nuevo partido.
  Nuestro equipo jugó contra los 'Titans', donde obtuvimos 100 puntos y el oponente 98.
  
  Registra la propiedad _games de team para verificar que
  nuestro nuevo registro de juego se agregó correctamente.
  */

  const team = {
    _players: [
      { firstName: "dany", lastName: "perez", age: 41 },
      { firstName: "carlos", lastName: "lopez", age: 24 },
      { firstName: "jose", lastName: "paz", age: 31 }
    ],
    _games: [
      { opponent: "rival1", teamPoints: 78, opponentPoints: 65 },
      { opponent: "rival2", teamPoints: 92, opponentPoints: 88 },
      { opponent: "rival3", teamPoints: 70, opponentPoints: 75 }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      const newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(newPlayer);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(newGame);
    }
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team._players);
  
  team.addGame("Titans", 100, 98);
  console.log(team._games);