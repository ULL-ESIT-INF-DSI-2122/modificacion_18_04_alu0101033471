/**
 * Clase Pokemon que contiene nombre, peso, altura, tipo y estadisticas del pokemon.
 */
export class Pokemon {
  private nombre: string;
  private peso: number;
  private altura: number;
  private tipo: string[];
  private estadisticas: number[];

  constructor(nombre: string, peso: number, altura: number, tipo: string[], estadisticas: number[]){
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
    this.tipo = tipo;
    this.estadisticas = estadisticas;
  }
  /**
   * Método que devuelve el nombre del pokemon.
   * @returns el atributo privado nombre.
   */
  getNombre(){
		return this.nombre;
	}
  /**
   * Método que modifica el atributo nombre
   * @param nombre_ Nombre a cambiar que se introduce del pokemon
   */
	setNombre(nombre_: string){
		this.nombre = nombre_;
	}
  /**
   * Método que devuelve el peso del pokemon
   * @returns el aributo privado peso
   */
  getPeso(){
    return this.peso;
  }
  /**
   * Método que modifica el atributo peso
   * @param peso_ Peso a cambiar que se introduce del pokemon
   */
  setPeso(peso_: number){
    this.peso = peso_;
  }
  /**
   * Método que devuelve la altura del pokemon
   * @returns el atributo privado altura
   */
  getAltura(){
    return this.altura;
  }
  /**
   * Método que modifica el atributo altura
   * @param altura_ Altura a cambiar que se introduce del pokemon
   */
  setAltura(altura_: number){
    this.altura = altura_;
  }
  /**
   * Método que devuelve el tipo del pokemon
   * @returns el atributo privado tipo
   */
  getTipo(){
    return this.tipo;
  }
  /**
   * Método que modifica el atributo tipo
   * @param tipo_ Tipo a cambiar que se introduce del pokemon
   */
  setTipo(tipo_: string[]){
    this.tipo = tipo_;
  }
  /**
   * Método que devuelve las estadísticas del pokemon 
   * @returns el atributo privado estadisticas
   */
  getEstadisticas(){
    return this.estadisticas;
  }
  /**
   * Método que modifica el atributo estadisticas
   * @param estadisticas_ Estadisticas a cambiar que se introducen del pokemon
   */
  setEstadisticas(estadisticas_: number[]){
    this.estadisticas = estadisticas_;
  }
  /**
   * Método que devuelve la vida del pokemon
   * @returns la primera posición del atributo array de estadisticas
   */
  getHP(){
    return this.estadisticas[0];
  }
  /**
   * Método que devuelve el ataque del pokemon
   * @returns la segunda posición del atributo array de estadisticas
   */
  getAttack(){
    return this.estadisticas[1];
  }
  /**
   * Método que devuelve la defensa del pokemon
   * @returns la tercera posición del atributo array de estadisticas
   */
  getDefense(){
    return this.estadisticas[2];
  }
  /**
   * Método que devuelve la velocidad del pokemon
   * @returns la cuarta posición del atributo array de estadisticas
   */
  getSpeed(){
    return this.estadisticas[3];
  }
  /**
   * Método que modifica la vida del pokemon
   * @param hp Vida a cambiar que se introduce del pokemon
   */
  setHP(hp: number){
    this.estadisticas[0] = hp;
  }
  /**
   * Método que modifica el ataque del pokemon
   * @param attack ataque a cambiar que se introduce del pokemon
   */
  setAttack(attack: number){
    this.estadisticas[1] = attack;
  }
  /**
   * Método que modifica la defensa del pokemon
   * @param defense Defensa a cambiar que se introduce del pokemon
   */
  setDefense(defense: number){
    this.estadisticas[2] = defense;
  }
  /**
   * Método que modifica la velocidad del pokemon
   * @param speed Velocidad a cambiar que se introduce del pokemon
   */
  setSpeed(speed: number){
    this.estadisticas[3] = speed;
  }
}
/**
 * Clase Pokedex que almacenará objetos de la clase Pokemon en el atributo pokemons
 */
export class Pokedex {
  constructor(private pokemons: Pokemon[]){
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
  /**
   * Método que visualiza la pokedex con los pokemons introducidos y toda su información
   */
  print() {
    console.log(`POKEDEX:`);
    for (let i = 0; i < this.getNumberOfPokemons(); i++){
      console.log(`Pokemon #${i + 1}`);
      console.log(`Nombre:`, this.getPokemon(i).getNombre() );
      console.log(`Peso`, this.getPokemon(i).getPeso());
      console.log(`Altura`,this.getPokemon(i).getAltura());
      console.log(`Tipo`, this.getPokemon(i).getTipo());
      console.log(`Estadisticas: `);
      console.log(`HP -->`, this.getPokemon(i).getHP(), 
      `| Attack -->`, this.getPokemon(i).getAttack(), 
      `| Defense -->`, this.getPokemon(i).getDefense(), 
      `| Speed -->`, this.getPokemon(i).getSpeed(), `\n`);
    }
  }
}
/**
 * Clase Combat que recibe dos pokemons en su constructor y simula un combate 
 */
export class Combat {
  constructor(private pokemon1: Pokemon, private pokemon2: Pokemon){
  }
  /**
   * Método que calcula el daño que causa un pokemon a otro
   * @param miPokemon Tipo del pokemon atacante
   * @param suPokemon Tipo del pokemon defensor
   * @param miAtaque Ataque del pokemon atacante
   * @param suDefensa Defensa del pokemon defensor
   * @returns el daño causado por el pokemon atacante
   */
  ataquePokemon (miPokemon: string[], suPokemon: string[], miAtaque: number, suDefensa: number): number {
    let dano: number = 0;
    if(miPokemon[0] === `Fire` && suPokemon[0] === `Grass` || miPokemon[0] === `Grass` && suPokemon[0] === `Water` || 
    miPokemon[0] === `Electric` && suPokemon[0] === `Water` || miPokemon[0] === `Water` && suPokemon[0] === `Fire` ){
      dano = 10* (miAtaque / suDefensa) * 2;
    }
      else if(miPokemon[0] === `Fire` && suPokemon[0] === `Water` || miPokemon[0] === `Grass` && suPokemon[0] === `Fire` ||
      miPokemon[0] === `Water` && suPokemon[0] === `Electric` || miPokemon[0] === `Water` && suPokemon[0] === `Grass` ){
      dano = 10 *(miAtaque / suDefensa) * 0.5;
    }
    else{
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
    if(this.pokemon1.getSpeed() > this.pokemon2.getSpeed()){
      while (this.pokemon1.getHP() > 0 || this.pokemon2.getHP() > 0){
        console.log(`TURNO ${turno}`, this.pokemon1.getNombre(),`HP:`, this.pokemon1.getHP().toFixed(2),`VS`,this.pokemon2.getNombre(),`HP:`, this.pokemon2.getHP().toFixed(2));
        console.log(`Ataca`, this.pokemon1.getNombre());
        this.pokemon2.setHP(this.pokemon2.getHP() - this.ataquePokemon(this.pokemon1.getTipo(), this.pokemon2.getTipo(), this.pokemon1.getAttack(), this.pokemon2.getDefense()))
        if (this.pokemon2.getHP() <= 0){
          console.log(this.pokemon2.getNombre(),`HP: 0`);
          console.log(`Ganador ${this.pokemon1.getNombre()}`);
          break;
        }
        console.log(this.pokemon2.getNombre(),`HP: `, this.pokemon2.getHP().toFixed(2));
        console.log(`Ataca`, this.pokemon2.getNombre());
        this.pokemon1.setHP(this.pokemon1.getHP() - this.ataquePokemon(this.pokemon2.getTipo(), this.pokemon1.getTipo(), this.pokemon2.getAttack(), this.pokemon1.getDefense()));
        if (this.pokemon1.getHP() <= 0){
          console.log(this.pokemon1.getNombre(),`HP: 0`);
          console.log(`Ganador ${this.pokemon2.getNombre()}`);
          break;
        }
        console.log(this.pokemon1.getNombre(),`HP: `, this.pokemon1.getHP().toFixed(2), `\n`);
        turno++;
      }
    } else {
      while (this.pokemon1.getHP() > 0 || this.pokemon2.getHP() > 0){
        console.log(`TURNO ${turno}: `, this.pokemon1.getNombre(),`HP:`, this.pokemon1.getHP().toFixed(2),`VS`, this.pokemon2.getNombre(),`HP:`, this.pokemon2.getHP().toFixed(2));
        console.log(`Ataca`, this.pokemon2.getNombre());
        this.pokemon1.setHP(this.pokemon1.getHP() - this.ataquePokemon(this.pokemon2.getTipo(), this.pokemon1.getTipo(), this.pokemon2.getAttack(), this.pokemon1.getDefense()));
        if (this.pokemon1.getHP() <= 0){
          console.log(this.pokemon1.getNombre(),`HP: 0`);
          console.log(`Ganador ${this.pokemon2.getNombre()}`);
          break;
        }
        console.log(this.pokemon1.getNombre(),`HP: `, this.pokemon1.getHP().toFixed(2));
        console.log(`Ataca`, this.pokemon1.getNombre());
        this.pokemon2.setHP(this.pokemon2.getHP() - this.ataquePokemon(this.pokemon1.getTipo(), this.pokemon2.getTipo(), this.pokemon1.getAttack(), this.pokemon2.getDefense()));
        if (this.pokemon2.getHP() <= 0){
          console.log(this.pokemon2.getNombre(),`HP: 0`);
          console.log(`Ganador ${this.pokemon1.getNombre()}`);
          break;
        }
        console.log(this.pokemon2.getNombre(), `HP: `, this.pokemon2.getHP().toFixed(2), `\n`);
        turno++;
      }
    }
  }
}
/**
 * Objeto de la clase Pokemon llamado pokemon1
 */
export let pokemon1 = 
new Pokemon(`Venusaur`, 100, 2.0, [`Grass`, `Poison`], [80, 82, 83, 80]);
/**
 * Objeto de la clase Pokemon llamado pokemon2
 */
export let pokemon2 = 
new Pokemon(`Charizard`, 90.5, 1.7, [`Fire`, `Flying`], [78, 84, 78, 100]);
/**
 * Objeto de la clase Pokemon llamado pokemon3
 */
export let pokemon3 = 
new Pokemon(`Blastoise`, 85.5, 1.6, [`Water`], [79, 83, 100, 78]);
/**
 * Objeto de la clase Pokedex que contiene a los tres objetos de la clase Pokemon
 */
export let pokedex = 
new Pokedex([pokemon1, pokemon2, pokemon3]);
/**
 * Objeto de la clase Combat que recibe dos objetos de la clase Pokemon
 */
export let combate =
new Combat(pokemon3, pokemon1);
pokedex.print();
combate.start();

