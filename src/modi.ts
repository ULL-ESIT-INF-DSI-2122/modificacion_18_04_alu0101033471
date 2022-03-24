/**
 * Interfas generica Arithmeticable
 */
export interface Arithmeticable<T> {
  add(NewItem: T): T;
  substract(NewItem: T): T;
  multiply(NewItem: T): T; 
  divide(NewItem: T): T;
}
/**
 * Clase ArithmeticableCollection con parametro restringido a la forma definida por la interfaz 'Arithmeticable'.
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  constructor(private items: T[]){
  }
  /**
   * Método para añadir un elemento a la colección
   * @param newItem objeto del tipo generico T
   */
  addArithmeticable(newItem: T){
    this.items.push(newItem);
  }
  /**
   * Método para obtenr un elemento de la colección
   * @param index numero de la posicion
   * @returns un objeto de items
   */
  getArithmeticable(index: number){
    return this.items[index];
  }
  /**
   * Método para obtener el tamaño de la colección
   * @returns tamaño de la colección
   */
  getNumberOfArithmeticables(){
    return this.items.length;
  }
}
/**
 * Clase de números complejos
 */
export class Complex implements Arithmeticable<Complex>{
  
  constructor( private real: number, private imaginario: number){
  }
  add(NewItem: Complex){
     NewItem;
    return NewItem;
  }
  multiply(NewItem: Complex){
    return NewItem;
  }
  divide(NewItem: Complex){
    return NewItem;
  }
  substract(NewItem: Complex){
    return NewItem;
  }
  
}
export let complejo1 = 
new Complex(1,2);
export let complejo2 = 
new Complex(1,2);

/*const coleccion = new ArithmeticableCollection([
  complejo1,
  complejo2,
]);*/