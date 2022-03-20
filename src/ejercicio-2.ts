/**
 * Clase Player que corresponde con un jugador y tiene como atributos el nombre del jugador y su símbolo
 */
export class Player {
  constructor(private name: string, private token: string){
  }
  /**
   * Método que devuelve el nombre del jugador
   * @returns el atributo privado name
   */
  getName(){
    return this.name;
  }
  /**
   * Método que modifica el atributo name
   * @param name nombre que se quiere poner
   */
  setName(name: string){
    this.name = name;
  }
  /**
   * Método que devuelve el simbolo del jugador
   * @returns el atributo privado token
   */
  getToken(){
    return this.token;
  }
  /**
   * Método que modifica el símbolo del jugador
   * @param token el simbolo nuevo que se quiere poner
   */
  setToken(token: string){
    this.token = token;
  }
}

/**
 * Clase Board que almacena un tablero de juego que se construye como un array multidimensional de numbers de tamaño 6 * 7 rellenado a 0.
 */
export class Board{
  private board: number[][] = [];
  constructor(){
    for (let i: number = 0; i < 6; i++){
      this.board[i] = new Array(7);
    }
    for(let i: number = 0; i < 6; i++){
      for(let j: number = 0; j < 7; j++){
        this.board[i][j] = 0;
      }
    }
  }
  /**
   * Método que devuelve el tamaño del atributo privado board
   * @returns el tamaño del tablero
   */
  getSize(){
    return this.board.length;
  }
  /**
   * Método que modifica un valor en el atributo board por el valor pasado por parametro junto con su coordenada i y j.
   * @param i coordenada i
   * @param j coordenada j
   * @param token nuevo valor
   */
  setBoard(i: number, j: number, token: number){
    this.board[i][j]= token;
  }
  /**
   * Método que devuelve una posición del tablero
   * @param i coordenada i
   * @param j coordenada j
   * @returns valor de un tablero
   */
  getBoard(i: number, j: number){
    return this.board[i][j];

  }
  /**
   * Método que visualiza por pantalla el atributo board
   */
  print(){
    for(let i: number = 0; i < 6; i++){
      console.log(`${this.board[i]}`);
    }
  }
}

/**
 * Clase Conecta4 que realiza una simulacóon entre dos jugadores en un tablero
 */
export class Conecta4 {
  constructor(private player1: Player, private player2: Player, private table: Board){
  }
  /**
   * Método para comprobar las piezas del jugador dos y saber si ha ganado
   * @param i coordena i
   * @param j coordenada j
   * @returns true si gana false si pierde
   */
  ganar2(i: number, j: number){
    let auxI: number = i;
    let auxJ: number = j;
    let contadorHorizontal: number = 0;
    let contadorVertical: number = 1;
    let contadorDiagonal1: number = 0;
    let contadorDiagonal2: number = 0;
    while(this.table.getBoard(auxI, auxJ) === 2 && auxJ >= 0 ){
      auxJ--;
      contadorHorizontal++;
    }
    auxJ = j + 1;
    while(this.table.getBoard(auxI, auxJ) === 2 && auxJ < 6){
      auxJ++;
      contadorHorizontal++;
    }
    auxJ = j;
    while(this.table.getBoard(auxI, auxJ) === 2 && auxI > 0){
      auxI--;
      contadorVertical++;
    }
    if(i != 5){
      auxI = i + 1;
    }
    else{
      auxI = i;
    }
    while(this.table.getBoard(auxI, auxJ) === 2 && auxI < 5){
      auxI++;
      contadorVertical++;
    }
    if (contadorHorizontal >= 4 || contadorVertical >= 4 || contadorDiagonal1 >= 4 || contadorDiagonal2 >= 4){
      this.table.print();
      console.log(`GANADOR ${this.player2.getName()}`);
      return true;
    }
    return false;
  }
  /**
   * Método para comprobar las piezas del jugador uno y saber si ha ganado
   * @param i coordena i
   * @param j coordenada j
   * @returns true si gana false si pierde
   */
  ganar1(i: number, j: number){
    let auxI: number = i;
    let auxJ: number = j;
    let contadorHorizontal: number = 0;
    let contadorVertical: number = 1;
    let contadorDiagonal1: number = 0;
    let contadorDiagonal2: number = 0;
    while(this.table.getBoard(auxI, auxJ) === 1 && auxJ >= 0 ){
      auxJ--;
      contadorHorizontal++;
    }
    auxJ = j + 1;
    while(this.table.getBoard(auxI, auxJ) === 1 && auxJ < 6){
      auxJ++;
      contadorHorizontal++;
    }
    auxJ = j;
    while(this.table.getBoard(auxI, auxJ) === 1 && auxI > 0){
      auxI--;
      contadorVertical++;
    }
    if(i != 5){
      auxI = i + 1;
    }
    else{
      auxI = i;
    }
    while(this.table.getBoard(auxI, auxJ) === 1 && auxI < 5){
      auxI++;
      contadorVertical++;
    }
    //AQUÍ IRÍA PARA LAS DIAGONALES
    if (contadorHorizontal >= 4 || contadorVertical >= 4 || contadorDiagonal1 >= 4 || contadorDiagonal2 >= 4){
      this.table.print();
      console.log(`GANADOR ${this.player1.getName()}`);
      return true;
    }
    return false;
  }
  /**
   * Método que inicia un juego entre dos jugadores hasta que uno gane
   */
  start(){
    console.log(`COMIENZA EL JUEGO \n`);
    let turno: number = 1;
    let j: number = 0;
    while (turno <= 42){
      this.table.print();
      let i: number = 5;
      //JUGADOR1
      console.log(`jugador ${this.player1.getName()}, elige la columna en la que quieres insertar tu ficha `);
      j = scanf('%d');
      while (j > 7 || j === null || this.table.getBoard(0, j - 1) !=  0){
        console.log(`Columna no valida por favor introduzca la columna de nuevo`);
        j = scanf('%d');
      }
      if (this.table.getBoard(i, j - 1) ===  0){
        this.table.setBoard(i, j -1 , 1);
        if ( this.ganar1(i, j - 1) === true){
          break;
        }
      }
      else {
        while (this.table.getBoard(i, j - 1) > 0){
          i--;
        }
        this.table.setBoard(i, j - 1, 1);
       if ( this.ganar1(i, j - 1) === true){
         break;
       }
      }
      i = 5;
      this.table.print();
      //JUGADOR 2
      console.log(`jugador ${this.player2.getName()}, elige la columna en la que quieres insertar tu ficha `);
      j = scanf('%d');
      while (j > 7 || j === null || this.table.getBoard(0, j - 1) !=  0){
        console.log(`Columna no valida por favor introduzca la columna de nuevo`);
        j = scanf('%d');
      }
      if (this.table.getBoard(i, j - 1) ===  0){
        this.table.setBoard(i, j - 1, 2);
        if ( this.ganar2(i, j - 1) === true){
          break;
        }
      }
      else {
        while (this.table.getBoard(i, j - 1) > 0){
          i--;
        }
        this.table.setBoard(i, j - 1, 2);
        if ( this.ganar2(i, j - 1) === true){
          break;
        }
      }
      turno++;
    }
  }
}
let scanf = require('scanf');
export let jugador1 =
new Player(`MARCOS`, `X`);
export let jugador2 =
new Player(`JUGADOR 2`, `Y`);
export let rejilla = 
new Board();
export let juego =
new Conecta4(jugador1, jugador2, rejilla);
juego.start();


