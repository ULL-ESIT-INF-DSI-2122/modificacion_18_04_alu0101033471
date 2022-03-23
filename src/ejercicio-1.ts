/**
 * Clase abstracta Fighters que servira de guía para las clases de los distintos universos
 */
export abstract class Fighters {
  constructor(private nombre: string, private peso: number, private altura: number, private tipo: string[], private estadisticas: number[], private catchingPhrase: string){
  }
  /**
   * Método que devuelve el nombre del luchador.
   * @returns el atributo privado nombre.
   */
   getNombre(){
		return this.nombre;
	}
  /**
   * Método que modifica el atributo nombre
   * @param nombre_ Nombre a cambiar que se introduce del luchador
   */
	setNombre(nombre_: string){
		this.nombre = nombre_;
	}
  /**
   * Método que devuelve la frase del luchador.
   * @returns el atributo privado catchingPhrase.
   */
   getcatchingPhrase(){
		return this.catchingPhrase;
	}
  /**
   * Método que modifica el atributo catchingPhrase
   * @param catchingPhrase_ Frase a cambiar que se introduce del luchador
   */
	setcatchingPhrase(catchingPhrase_: string){
		this.catchingPhrase = catchingPhrase_;
	}
  /**
   * Método que devuelve el peso del luchador
   * @returns el aributo privado peso
   */
  getPeso(){
    return this.peso;
  }
  /**
   * Método que modifica el atributo peso
   * @param peso_ Peso a cambiar que se introduce del luchador
   */
  setPeso(peso_: number){
    this.peso = peso_;
  }
  /**
   * Método que devuelve la altura del luchador
   * @returns el atributo privado altura
   */
  getAltura(){
    return this.altura;
  }
  /**
   * Método que modifica el atributo altura
   * @param altura_ Altura a cambiar que se introduce del luchador
   */
  setAltura(altura_: number){
    this.altura = altura_;
  }
  /**
   * Método que devuelve el tipo del luchador
   * @returns el atributo privado tipo
   */
  getTipo(){
    return this.tipo;
  }
  /**
   * Método que modifica el atributo tipo
   * @param tipo_ Tipo a cambiar que se introduce del luchador
   */
  setTipo(tipo_: string[]){
    this.tipo = tipo_;
  }
  /**
   * Método que devuelve las estadísticas del luchador 
   * @returns el atributo privado estadisticas
   */
  getEstadisticas(){
    return this.estadisticas;
  }
  /**
   * Método que modifica el atributo estadisticas
   * @param estadisticas_ Estadisticas a cambiar que se introducen del luchador
   */
  setEstadisticas(estadisticas_: number[]){
    this.estadisticas = estadisticas_;
  }
  /**
   * Método que devuelve la vida del luchador
   * @returns la primera posición del atributo array de estadisticas
   */
  getHP(){
    return this.estadisticas[0];
  }
  /**
   * Método que devuelve el ataque del luchador
   * @returns la segunda posición del atributo array de estadisticas
   */
  getAttack(){
    return this.estadisticas[1];
  }
  /**
   * Método que devuelve la defensa del luchador
   * @returns la tercera posición del atributo array de estadisticas
   */
  getDefense(){
    return this.estadisticas[2];
  }
  /**
   * Método que devuelve la velocidad del luchador
   * @returns la cuarta posición del atributo array de estadisticas
   */
  getSpeed(){
    return this.estadisticas[3];
  }
  /**
   * Método que modifica la vida del luchador
   * @param hp Vida a cambiar que se introduce del luchador
   */
  setHP(hp: number){
    this.estadisticas[0] = hp;
  }
  /**
   * Método que modifica el ataque del luchador
   * @param attack ataque a cambiar que se introduce del luchador
   */
  setAttack(attack: number){
    this.estadisticas[1] = attack;
  }
  /**
   * Método que modifica la defensa del luchador
   * @param defense Defensa a cambiar que se introduce del luchador
   */
  setDefense(defense: number){
    this.estadisticas[2] = defense;
  }
  /**
   * Método que modifica la velocidad del luchador
   * @param speed Velocidad a cambiar que se introduce del luchador
   */
  setSpeed(speed: number){
    this.estadisticas[3] = speed;
  }
}
/**
 * Clase Pokemon que contiene nombre, peso, altura, tipo y estadisticas del pokemon.
 */
  export class Pokemon extends Fighters {
    constructor(nombre: string, peso: number, altura: number, tipo: string[], estadisticas: number[], catchingPhrase: string){
      super(nombre, peso, altura, tipo, estadisticas, catchingPhrase);
    }
  }
  /**
  * Clase DragonBall que contiene nombre, peso, altura, tipo y estadisticas del personaje de DragonBall.
  */
  export class DragonBall extends Fighters {
    constructor(nombre: string, peso: number, altura: number, tipo: string[], estadisticas: number[], catchingPhrase: string){
      super(nombre, peso, altura, tipo, estadisticas, catchingPhrase);
    }
  }
  /**
  * Clase Marvel que contiene nombre, peso, altura, tipo y estadisticas del personaje de Marvel.
  */
  export class Marvel extends Fighters {
    constructor(nombre: string, peso: number, altura: number, tipo: string[], estadisticas: number[], catchingPhrase: string){
      super(nombre, peso, altura, tipo, estadisticas, catchingPhrase);
    }
  }
  /**
  * Clase DC que contiene nombre, peso, altura, tipo y estadisticas del personaje de DC.
  */
   export class DC extends Fighters {
    constructor(nombre: string, peso: number, altura: number, tipo: string[], estadisticas: number[], catchingPhrase: string){
      super(nombre, peso, altura, tipo, estadisticas, catchingPhrase);
    }
  }
  /**
  * Clase StarWars que contiene nombre, peso, altura, tipo y estadisticas del personaje de StarWars.
  */
   export class StarWars extends Fighters {
    constructor(nombre: string, peso: number, altura: number, tipo: string[], estadisticas: number[], catchingPhrase: string){
      super(nombre, peso, altura, tipo, estadisticas, catchingPhrase);
    }
  }
/**
 * Clase Pokedex que almacenará objetos de la clase Pokemon en el atributo pokemons
 */
 export class Pokedex {
  constructor(private pokemons: Fighters[]){
  }
  /**
   * Método que devuelve un pokemon 
   * @param i para seleccionar un pokemon del Array
   * @returns un pokemon
   */
  getPokemon(i: number): Pokemon{
    return this.pokemons[i];
  }
  /**
   * Método que devuelve el número de pokemons en la Pokedex
   * @returns el tamaño del array pokemons
   */
  getNumberOfPokemons(){
    return this.pokemons.length;
  }
}
/**
 * Clase PrintPokedex que imprime por pantalla una pokedex
 */
export class PrintPokedex {
  constructor(private pokemons: Pokedex){
  }

  /**
   * Método que visualiza la pokedex con los pokemons introducidos y toda su información
   */
  print() {
    console.log(`POKEDEX:`);
    for (let i = 0; i < this.pokemons.getNumberOfPokemons(); i++){
      console.log(`Fighter #${i + 1}`);
      console.log(`Nombre:`, this.pokemons.getPokemon(i).getNombre() );
      console.log(`Peso`, this.pokemons.getPokemon(i).getPeso());
      console.log(`Altura`,this.pokemons.getPokemon(i).getAltura());
      console.log(`Tipo`, this.pokemons.getPokemon(i).getTipo());
      console.log(`Frase:`, this.pokemons.getPokemon(i).getcatchingPhrase());
      console.log(`Estadisticas: `);
      console.log(`HP -->`, this.pokemons.getPokemon(i).getHP(), 
      `| Attack -->`, this.pokemons.getPokemon(i).getAttack(), 
      `| Defense -->`, this.pokemons.getPokemon(i).getDefense(), 
      `| Speed -->`, this.pokemons.getPokemon(i).getSpeed(), `\n`);
    }
  }
}
  /**
 * Clase Combat que recibe dos fighters en su constructor y simula un combate 
 */
export class Combat {
  constructor(private luchador1: Pokemon, private luchador2: Pokemon){
  }
  /**
   * Método que calcula el daño que causa un luchador a otro
   * @param miLuchador Tipo del luchador atacante
   * @param suLuchador Tipo del luchador defensor
   * @param miAtaque Ataque del luchador atacante
   * @param suDefensa Defensa del luchador defensor
   * @returns el daño causado por el luchador atacante
   */
  eficacia (miLuchador: string[], suLuchador: string[], miAtaque: number, suDefensa: number): number {
    let dano: number = 0;
    if (this.luchador1 instanceof Pokemon && this.luchador2 instanceof Pokemon){
      if(miLuchador[0] === `Fire` && suLuchador[0] === `Grass` || miLuchador[0] === `Grass` && suLuchador[0] === `Water` || 
      miLuchador[0] === `Electric` && suLuchador[0] === `Water` || miLuchador[0] === `Water` && suLuchador[0] === `Fire` ){
        dano = 10* (miAtaque / suDefensa) * 2;
      }
      else if(miLuchador[0] === `Fire` && suLuchador[0] === `Water` || miLuchador[0] === `Grass` && suLuchador[0] === `Fire` ||
        miLuchador[0] === `Water` && suLuchador[0] === `Electric` || miLuchador[0] === `Water` && suLuchador[0] === `Grass` ){
        dano = 10 *(miAtaque / suDefensa) * 0.5;
      }
      else{
        dano = 10 * (miAtaque / suDefensa);
      }
    return dano;
    } else if ((this.luchador1 instanceof Marvel && this.luchador2 instanceof Marvel) || (this.luchador1 instanceof Marvel && this.luchador2 instanceof DC) ||
      (this.luchador1 instanceof DC && this.luchador2 instanceof Marvel) ||(this.luchador1 instanceof DC && this.luchador2 instanceof DC)){
      if(miLuchador[0] === `Heroe` && suLuchador[0] === `Villano`){
        dano = 10* (miAtaque / suDefensa) * 2;
      }
      else if(miLuchador[0] === `Villano` && suLuchador[0] === `Heroe`){
      dano = 10 *(miAtaque / suDefensa) * 0.5;
      }
      else{
        dano = 10 * (miAtaque / suDefensa);
      }
    } else if ((this.luchador1 instanceof StarWars && this.luchador2 instanceof StarWars)){
      if(miLuchador[0] === `Jedi` && suLuchador[0] === `Sith`){
        dano = 10* (miAtaque / suDefensa) * 2;
      }
      else if(miLuchador[0] === `Sith` && suLuchador[0] === `Jedi`){
      dano = 10 *(miAtaque / suDefensa) * 0.5;
      }
      else{
      dano = 10 * (miAtaque / suDefensa);
      }
    } else if ((this.luchador1 instanceof DragonBall && this.luchador2 instanceof DragonBall)){
      if(miLuchador[0] === `SuperSaiyan` && suLuchador[0] === `humano`){
        dano = 10* (miAtaque / suDefensa) * 2;
      }
      else if(miLuchador[0] === `humano` && suLuchador[0] === `SuperSaiyan`){
        dano = 10 *(miAtaque / suDefensa) * 0.5;
      }
      else{
        dano = 10 * (miAtaque / suDefensa);
      }
    } else if ((this.luchador1 instanceof DragonBall || this.luchador2 instanceof DragonBall)){
      if(miLuchador[0] === `SuperSaiyan` && suLuchador[0] != `SuperSaiyan`){
        dano = 10* (miAtaque / suDefensa) * 3;
      }
      else if(miLuchador[0] != `SuperSaiyan` && suLuchador[0] === `SuperSaiyan`){
        dano = 10 *(miAtaque / suDefensa) * 0.01;
      }
      else{
        dano = 10 * (miAtaque / suDefensa);
      }
    } else {
      dano = 10 * (miAtaque / suDefensa);
    }
    return dano;
  }

  
  /**
   * Método start que simula el combate entre dos pokemons
   */
  start(){
    let turno: number = 1;
    console.log(`Que comience el combate`);
    if(this.luchador1.getSpeed() > this.luchador2.getSpeed()){
      while (this.luchador1.getHP() > 0 || this.luchador2.getHP() > 0){
        console.log(`TURNO ${turno}`, this.luchador1.getNombre(),`HP:`, this.luchador1.getHP().toFixed(2),`VS`,this.luchador2.getNombre(),`HP:`, this.luchador2.getHP().toFixed(2));
        console.log(`Ataca`, this.luchador1.getNombre());
        console.log(this.luchador1.getcatchingPhrase());
        this.luchador2.setHP(this.luchador2.getHP() - this.eficacia(this.luchador1.getTipo(), this.luchador2.getTipo(), this.luchador1.getAttack(), this.luchador2.getDefense()))
        if (this.luchador2.getHP() <= 0){
          console.log(this.luchador2.getNombre(),`HP: 0`);
          console.log(`Ganador ${this.luchador1.getNombre()}`);
          break;
        }
        console.log(this.luchador2.getNombre(),`HP: `, this.luchador2.getHP().toFixed(2));
        console.log(`Ataca`, this.luchador2.getNombre());
        console.log(this.luchador2.getcatchingPhrase());

        this.luchador1.setHP(this.luchador1.getHP() - this.eficacia(this.luchador2.getTipo(), this.luchador1.getTipo(), this.luchador2.getAttack(), this.luchador1.getDefense()));
        if (this.luchador1.getHP() <= 0){
          console.log(this.luchador1.getNombre(),`HP: 0`);
          console.log(`Ganador ${this.luchador2.getNombre()}`);
          break;
        }
        console.log(this.luchador1.getNombre(),`HP: `, this.luchador1.getHP().toFixed(2), `\n`);
        turno++;
      }
    } else {
      while (this.luchador1.getHP() > 0 || this.luchador2.getHP() > 0){
        console.log(`TURNO ${turno}: `, this.luchador1.getNombre(),`HP:`, this.luchador1.getHP().toFixed(2),`VS`, this.luchador2.getNombre(),`HP:`, this.luchador2.getHP().toFixed(2));
        console.log(`Ataca`, this.luchador2.getNombre());
        console.log(this.luchador2.getcatchingPhrase());

        this.luchador1.setHP(this.luchador1.getHP() - this.eficacia(this.luchador2.getTipo(), this.luchador1.getTipo(), this.luchador2.getAttack(), this.luchador1.getDefense()));
        if (this.luchador1.getHP() <= 0){
          console.log(this.luchador1.getNombre(),`HP: 0`);
          console.log(`Ganador ${this.luchador2.getNombre()}`);
          break;
        }
        console.log(this.luchador1.getNombre(),`HP: `, this.luchador1.getHP().toFixed(2));
        console.log(`Ataca`, this.luchador1.getNombre());
        console.log(this.luchador1.getcatchingPhrase());
        this.luchador2.setHP(this.luchador2.getHP() - this.eficacia(this.luchador1.getTipo(), this.luchador2.getTipo(), this.luchador1.getAttack(), this.luchador2.getDefense()));
        if (this.luchador2.getHP() <= 0){
          console.log(this.luchador2.getNombre(),`HP: 0`);
          console.log(`Ganador ${this.luchador1.getNombre()}`);
          break;
        }
        console.log(this.luchador2.getNombre(), `HP: `, this.luchador2.getHP().toFixed(2), `\n`);
        turno++;
      }
    }
  }
}
/**
 * Objeto de la clase Pokemon llamado pokemon1
 */
 export let pokemon1 = 
 new Pokemon(`Venusaur`, 100, 2.0, [`Grass`, `Poison`], [80, 82, 83, 80], `VENuSAAAAAAAAAAUR`);
 /**
 * Objeto de la clase Pokemon llamado pokemon2
 */
export let pokemon2 = 
new Pokemon(`Charizard`, 90.5, 1.7, [`Fire`, `Flying`], [78, 84, 78, 100], `charizaaaard`);
/**
 * Objeto de la clase Pokemon llamado pokemon3
 */
export let pokemon3 = 
new Pokemon(`Blastoise`, 85.5, 1.6, [`Water`], [79, 83, 100, 78], `blastoiseeee`);
/**
 * Objeto de la clase DragonBall llamado Goku
 */
export let Goku = 
new DragonBall(`Goku`, 80, 1.90, [`SuperSaiyan`], [300,100,200,99], `KAMEHAME...HAAAAAAAAAAAAAAAAAAAA`);
/**
 * Objeto de la clase DragonBall llamado vegetta
 */
export let Vegetta = 
new DragonBall(`vegetta`, 80, 1.90, [`SuperSaiyan`], [300,100,200,99], ` Final Flaaaaash`);

/**
 * Objeto creado de la clase Star  Wars
 */
export let DarthVader = 
new StarWars(`Darth Vader`, 90, 2.0, [`Sith`], [120,90,99,70], `Yo soy tu padre...`);
/**
 * Objeto creado de la clase Star  Wars
 */
 export let Yoda = 
 new StarWars(`Yoda`, 90, 2.0, [`Jedi`], [120,90,99,70], `Mi ganarrr`);
 /**
/**
 * Objeto creado de la clase MArvel
 */
export let IronMan = 
new Marvel(`Iron Man`, 100, 1.90, [`Heroe`], [500,500,300,100], `Te quiero 3000 ;(`);
/**
 * Objeto creado de la clase MArvel
 */
 export let Thanos = 
 new Marvel(`Thanos`, 100, 1.90, [`villano`], [50,4,80,79], `Yo soy inevitable`);
/**
 * Objeto creado de la clase DC
 */
 export let Batman = 
 new DC(`Batman`, 90, 2.0, [`Heroe`], [50,5,99,88], `Yo soy tu BATMAN...`);

 /**
 * Objeto de la clase Combat que recibe dos objetos de Fighters
 */
export let combate =
new Combat(IronMan, Goku);
/**
 * Objeto de la clase Combat que recibe dos objetos de Fighters
 */
 export let combate1 =
 new Combat(DarthVader, pokemon1);

 /**
 * Objeto de la clase Combat que recibe dos objetos de Fighters
 */
  export let combate2 =
  new Combat(pokemon1, pokemon1);
  /**
 * Objeto de la clase Combat que recibe dos objetos de Fighters
 */
   export let combate3 =
   new Combat(pokemon2, pokemon1);
 /**
 * Objeto de la clase Combat que recibe dos objetos de Fighters
 */
  export let combate4 =
  new Combat(pokemon3, pokemon1);
  /**
 * Objeto de la clase Combat que recibe dos objetos de Fighters
 */
   export let combate5 =
   new Combat(Thanos, Batman);
   /**
 * Objeto de la clase Combat que recibe dos objetos de Fighters
 */
  export let combate6 =
  new Combat(Goku, Vegetta);
  /**
 * Objeto de la clase Combat que recibe dos objetos de Fighters
 */
 export let combate7 =
 new Combat(Yoda, DarthVader);
/**
 * Objeto de la clase Pokedex que contiene a los  objetos de las clases
 */
 export let pokedex = 
 new Pokedex([pokemon1, Goku, Vegetta, DarthVader, IronMan, Batman]);
/**
 * Objeto de la clase PrintPokedex que contiene un objeto de la clase Pokdex para visualizarla
 */
 export let ImprimirPokedex =
 new PrintPokedex(pokedex);

ImprimirPokedex.print();
combate.start();