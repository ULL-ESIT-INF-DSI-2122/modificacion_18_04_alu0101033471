/**
 * Interfaz generica Streamable
 */
export interface Streamable<T> {
  /**
   * Método que añade un objeto
   * @param item objeto a añadir
   */
  add(item: T): void;
  /**
   * Método que devuelve un objeto buscado por su nombre
   * @param name nombre del objeto
   */
  getNameVideo(name: string): T[] | undefined;
  /**
   * Método que devuelve un objeto buscado por su año
   * @param number año del objeto
   */
  getYearVideo(number: number): T[] | undefined;
  /**
   * Método que devuelve el número de objetos.
   */
  getSize(): number;
}
/**
 * Clase abstracta que implementa la interfaz Streamable
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor(private item: T[]){

  }
  /**
   * Método que añade un objeto
   * @param item objeto a añadir
   */
  add(item: T){
    this.item.push(item);
  }
  /**
   * Método que devuelve el número de objetos.
   * @returns tamaño del objeto
   */
  getSize(): number {
    return this.item.length;
  }
  /**
   * Método que devuelve un objeto buscado por su nombre
   * @param name nombre del objeto
   */
 abstract getNameVideo(name: string): T[] | undefined;
  /**
   * Método que devuelve un objeto buscado por su año
   * @param number año del objeto
   */
 abstract getYearVideo(number: number): T[] | undefined;
    

}
/**
 * Clase Series que se contruye con los atributos name, year, chapters
 */
export class Series{
  constructor(private name: string, private year: number, private chapters: number ){
  }
  /**
   * Método que devuelve el nombre 
   * @returns atributo name
   */
  getName(){
    return this.name;
  }
  /**
   * Método que modifica el nombre 
   * @param name nombre a cambiar en el atributo nombre
   */
  setName(name: string){
    this.name = name;
  }
  /***
   * Método que devuelve el año 
   * @returns atributo year
   */
  getYear(){
    return this.year;
  }
  /**
   * Método que modifica el año 
   * @param year año a cambiar en el atributo year
   */
  setYear(year: number){
    this.year = year;
  }
  /**
   * Método que devuelve cauntos capitulos 
   * @returns atributo chapters
   */
  getChapters(){
    return this.chapters;
  }
  /**
   * Método que modifica el numero de capitulos 
   * @param chapters capitulos a cambiar en el atributo chapters
   */
  setChapters(chapters: number){
    this.chapters = chapters;
  }
  /**
   * Método que muestra los atributos de la clase formateados
   */
  print(){
    console.log(`Nombre:`, this.getName());
    console.log(`Año: `, this.getYear());
    console.log(`Capítulos:`, this.getChapters());
  }
}
export class CollectionSeries extends BasicStreamableCollection<Series>{
  constructor(private items: Series[] ){
    super(items);
  }
  /**
   * Método que devuelve un objeto buscado por su nombre
   * @param name nombre del objeto
   */
  getNameVideo(name: string): Series[] | undefined {
    let serieAux: Series[] = [];
    for(let i: number = 0; i< this.getSize(); i++ ){
      if(this.items[i].getName() === name){
        serieAux.push(this.items[i]);
      }
    }
    return serieAux;   
  }
  /**
   * Método que devuelve un objeto buscado por su año
   * @param number año del objeto
   */
  getYearVideo(year: number): Series[] | undefined {
    let serieAux: Series[] = [];
    for(let i: number = 0; i< this.getSize(); i++ ){
      if(this.items[i].getYear() === year){
         serieAux.push(this.items[i]);
      }
    }
    return serieAux;
  }
}

export class Documental{
  constructor(private name: string, private year: number, private director: string ){
  }
  /**
   * Método que devuelve el nombre 
   * @returns atributo name
   */
  getName(){
    return this.name;
  }
  /**
   * Método que modifica el nombre 
   * @param name nombre a cambiar en el atributo nombre
   */
  setName(name: string){
    this.name = name;
  }
  /***
   * Método que devuelve el año 
   * @returns atributo year
   */
  getYear(){
    return this.year;
  }
  /**
   * Método que modifica el año 
   * @param year año a cambiar en el atributo year
   */
  setYear(year: number){
    this.year = year;
  }
  /**
   * Método que devuelve el director
   * @returns atributo director
   */
  getDirector(){
    return this.director;
  }
  /**
   * Método que modifica el director
   * @param director director a cambiar en el atributo director
   */
  setDirector(director: string){
    this.director = director;
  }
  /**
   * Método que muestra los atributos de la clase formateados
   */
  print(){
    console.log(`Nombre:`, this.getName());
    console.log(`Año: `, this.getYear());
    console.log(`Director:`, this.getDirector());
  }
}
export class CollectionDocumentales extends BasicStreamableCollection<Documental>{
  constructor(private items: Documental[] ){
    super(items);
  }
  /**
   * Método que devuelve un objeto buscado por su nombre
   * @param name nombre del objeto
   */
  getNameVideo(name: string): Documental[] | undefined {
    let documentalAux: Documental[] = [];
    for(let i: number = 0; i< this.getSize(); i++ ){
      if(this.items[i].getName() === name){
         documentalAux.push(this.items[i]);
      }
    }
    return documentalAux;
    
  }
  /**
   * Método que devuelve un objeto buscado por su año
   * @param year año del objeto
   */
  getYearVideo(year: number): Documental[] | undefined {
    let documentalAux: Documental[] = [];
    for(let i: number = 0; i< this.getSize(); i++ ){
      if(this.items[i].getYear() === year){
         documentalAux.push(this.items[i]);
      }
    }
    return documentalAux;
  }
}

export class Pelicula{
  constructor(private name: string, private year: number, private protagonista: string, private genero: string ){
  }
  /**
   * Método que devuelve el nombre 
   * @returns atributo name
   */
  getName(){
    return this.name;
  }
  /**
   * Método que modifica el nombre 
   * @param name nombre a cambiar en el atributo nombre
   */
  setName(name: string){
    this.name = name;
  }
  /***
   * Método que devuelve el año 
   * @returns atributo year
   */
  getYear(){
    return this.year;
  }
  /**
   * Método que modifica el año 
   * @param year año a cambiar en el atributo year
   */
  setYear(year: number){
    this.year = year;
  }
  /**
   * Método que devuelve el protagonista
   * @returns atributo y protagonista
   */
  getProtagonista(){
    return this.protagonista;
  }
  /**
   * Método que modifica el protagonista 
   * @param protagonista protagonista a cambiar en el atributo protagonista
   */
  setProtagonista(protagonista: string){
    this.protagonista = protagonista;
  }
  
  /**
   * Método que modifica el genero 
   * @param genero genero a cambiar en el atributo genero
   */
  setGenero(genero: string){
    this.genero = genero;
  }
  /**
   * Método que devuelve el genero
   * @returns atributo genero
   */
  getGenero(){
    return this.genero;
  }
  /**
   * Método que muestra los atributos de la clase formateados
   */
  print(){
    console.log(`Nombre:`, this.getName());
    console.log(`Año: `, this.getYear());
    console.log(`Protagonista:`, this.getProtagonista());
    console.log(`Genero:`, this.getGenero());
  }
}
export class CollectionPeliculas extends BasicStreamableCollection<Pelicula>{
  constructor(private items: Pelicula[] ){
    super(items);
  }
  /**
   * Método que devuelve un objeto buscado por su nombre
   * @param name nombre del objeto
   */
  getNameVideo(name: string): Pelicula[] | undefined {
    let peliculaAux: Pelicula[] = [];
    for(let i: number = 0; i< this.getSize(); i++ ){
      if(this.items[i].getName() === name){
         peliculaAux.push(this.items[i]);
      }
    }
    return peliculaAux;
    
  }
  /**
   * Método que devuelve un objeto buscado por su año
   * @param year año del objeto
   */
  getYearVideo(year: number): Pelicula[] | undefined {
    let peliculaAux: Pelicula[] = [];
    for(let i: number = 0; i< this.getSize(); i++ ){
      if(this.items[i].getYear() === year){
         peliculaAux.push(this.items[i]);
      }
    }
    return peliculaAux;
  }
}


export let serie1 = 
new Series(`Doraemon`, 1995, 1000);
export let serie3 = 
new Series(`Doraemon`, 1999, 100);
export let serie2 = 
new Series(`DragonBall`, 1995, 400);
export let documental1 = 
new Documental(`Monos Salvajes`, 2001, `Alba Pérez`);
export let documental2 = 
new Documental(`Monos Felices`, 2002, `Alba Pérez`);
export let pelicula1 = 
new Pelicula(`Titanic`, 2001, `Leonardo Dicaprio`, `Drama`);
export let pelicula2 = 
new Pelicula(`Fast and Furious`, 2002, `Vin Diesel`, `Acción`);
export let coleccionDocumentales1 =
new CollectionDocumentales([documental1, documental2]);
export let coleccionSeries1 = 
new CollectionSeries([serie1, serie2, serie3]);
export let coleccionPeliculas1 = 
new CollectionPeliculas([pelicula1,pelicula2]);

console.log(coleccionSeries1.getNameVideo(`Doraemon`));
console.log(coleccionDocumentales1.getNameVideo(`Monos Salvajes`));