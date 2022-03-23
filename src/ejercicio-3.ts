/**
 * Clase Mensaje que tiene como atributro privado un string que 
 * corresponde con el mensaje a cifrar o descifrar
 */
export class Mensaje {
  constructor(private mensaje: string){
  }
  /**
   * Método que devuelve el atributo privado mensaje
   * @returns devuelve el mensaje
   */
  getMensaje(){
    return this.mensaje;
  }
  /**
   * Método que modifica el atributo mensaje
   * @param mensaje Nuevo mensaje a cambiar
   */
  setMensaje(mensaje: string){
    this.mensaje = mensaje;
  }
  /**
   * Método que devuelve el tamaño del mensaje
   * @returns devuelve el tamaño del atributo mensaje
   */
  getMensajeSize(){
    return this.mensaje.length;
  }
  /**
   * Método que devuelve un caracter del mensaje
   * @param i posicion de la cadena a buscar
   * @returns caracter del mensaje
   */
   getMensajeValor(i: number){
    return this.mensaje.charAt(i);
  }
}

/**
 * Clase Clave que tiene como atributro privado un string que 
 * corresponde con la clave para  cifrar o descifrar
 */
 export class Clave {
  constructor(private clave: string){
  }
  /**
   * Método que devuelve el atributo privado clave
   * @returns devuelve la clave
   */
  getClave(){
    return this.clave;
  }
  /**
   * Método que modifica el atributo clave
   * @param clave Nueva clave a cambiar
   */
  setClave(clave: string){
    this.clave = clave;
  }
  /**
   * Método que devuelve el tamaño de la clave
   * @returns devuelve el tamaño del atributo clave
   */
  getClaveSize(){
    return this.clave.length;
  }
  /**
   * Método que devuelve un caracter de la clave
   * @param i posicion de la cadena a buscar
   * @returns caracter de la clave
   */
  getClaveValor(i: number){
    return this.clave.charAt(i);
  }
}
/**
 * Clase Cifrado que se contruye a partir de un mensaje y una clave. Además, tiene como atributo privado un alfabeto.
 */
export class Cifrado{
  private alfabeto: string = `ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`;
  constructor(private mensaje: Mensaje, private clave: Clave){
  }
  /**
   * Método que devuelve el atributo alfabeto
   */
  getAlfabeto(){
    return this.alfabeto;
  }
  /**
   * Método que modifica el atributo privado alfabeto
   * @param alfabeto nuevo alfabeto a modificar
   */
  setAlfabeto(alfabeto: string){
    this.alfabeto = alfabeto;
  }
  /**
   * Método que devuelve el tamaño del alfabeto
   * @returns devuelve el tamaño del atributo alfabeto
   */
   getAlfabetoSize(){
    return this.alfabeto.length;
  }
  /**
   * Método que comprueba si existe el caracter del mensaje en el alfabeto
   * @param i posicion de la cadena mensaje a buscar
   * @returns true si se encuentra, false si no se encuentra
   */
  comprobarValorAlfabeto(i: number){ 
    for (let j: number = 0; j < this.getAlfabetoSize(); j++){
      if (this.mensaje.getMensajeValor(i) === this.alfabeto[j]){
        return true;
      }
    }
    return false;
  }
  /**
   * Método que codifica un mensaje mediante una clave y un alfabeto
   */
  codificacion(){
    let claveAux: string = ``;
    let mensajeCifrado: string = ``;
    let contadorCaracterClave: number = 0;
    let contadorCaracterAlfabeto: number = 0;
    let posicionNuevoCaracter = 0;
    for(let i: number = 0; i < this.mensaje.getMensajeSize(); i++){
      if(contadorCaracterClave === this.clave.getClaveSize()){
        contadorCaracterClave = 0;
      }
      claveAux = claveAux + this.clave.getClaveValor(contadorCaracterClave);
      contadorCaracterClave++;
    }
   
    for(let i: number = 0; i < this.mensaje.getMensajeSize(); i++){
      if (this.comprobarValorAlfabeto(i) === false){
        mensajeCifrado = mensajeCifrado + this.mensaje.getMensajeValor(i);
      } else {
      posicionNuevoCaracter = this.alfabeto.indexOf(this.mensaje.getMensajeValor(i));
      for (let j: number = 0; j < this.getAlfabetoSize(); j++){
        contadorCaracterAlfabeto++;
        if (claveAux[i] === this.alfabeto[j]){
          if (posicionNuevoCaracter + contadorCaracterAlfabeto >= 27){
            mensajeCifrado = mensajeCifrado + this.alfabeto.charAt((posicionNuevoCaracter + contadorCaracterAlfabeto)-27);
          }else {
            mensajeCifrado = mensajeCifrado + this.alfabeto.charAt(posicionNuevoCaracter + contadorCaracterAlfabeto);
          } 
        } 
      }
      contadorCaracterAlfabeto = 0;
    }
    }
    console.log(`Mensaje:`, this.mensaje.getMensaje());
    console.log(`Clave: `, this.clave.getClave());
    console.log(`Mensaje cifrado:`, mensajeCifrado, `\n`);
  }
  /**
   * Método que descifra un mensjae a parti de una clave y alfabeto
   */
  decodificacion(){
    let claveAux: string = ``;
    let mensajeCifrado: string = ``;
    let contadorCaracterClave: number = 0;
    let contadorCaracterAlfabeto: number = 0;
    let posicionNuevoCaracter = 0;
    for(let i: number = 0; i < this.mensaje.getMensajeSize(); i++){
      if(contadorCaracterClave === this.clave.getClaveSize()){
        contadorCaracterClave = 0;
      }
      claveAux = claveAux + this.clave.getClaveValor(contadorCaracterClave);
      contadorCaracterClave++;
    }
    for(let i: number = 0; i < this.mensaje.getMensajeSize(); i++){
      if (this.comprobarValorAlfabeto(i) === false){
        mensajeCifrado = mensajeCifrado + this.mensaje.getMensajeValor(i);
      } else {
      posicionNuevoCaracter = this.alfabeto.indexOf(this.mensaje.getMensajeValor(i));
      for (let j: number = 0; j < this.getAlfabetoSize(); j++){
        contadorCaracterAlfabeto++;
        if (claveAux[i] === this.alfabeto[j]){
          if (posicionNuevoCaracter < contadorCaracterAlfabeto){
            mensajeCifrado = mensajeCifrado + this.alfabeto.charAt(27 - (contadorCaracterAlfabeto - posicionNuevoCaracter));
          }else {
            mensajeCifrado = mensajeCifrado + this.alfabeto.charAt(posicionNuevoCaracter - contadorCaracterAlfabeto);
          } 
        } 
      }
      contadorCaracterAlfabeto = 0;
    }
    }
    console.log(`Mensaje:`, this.mensaje.getMensaje());
    console.log(`Clave: `, this.clave.getClave());
    console.log(`Mensaje descifrado:`, mensajeCifrado, `\n`);
  }

}
/**
 * Objeto de la clase Mensaje
 */
export let mensaje = 
new Mensaje(`HOLAESTOESUNAPRUEBA`);
/**
 * Objeto de la clase Mensaje
 */
export let mensaje1 = 
new Mensaje(`KAMWJVFPAXXYBMWXPCW`);
/**
 * Objeto de la clase Mensaje con un caracter no correspondido en el alfabeto
 */
 export let mensaje2 = 
 new Mensaje(`KAMWJVFPAXXYBMWXPCw`);
/**
 * Objeto de la clase Clave
 */
export let clave =
new Clave(`CLAVE`);
/**
 * Objeto de la clase Cifrado
 */
export let cifrado =
new Cifrado(mensaje, clave);
/**
 * Objeto de la clase Cifrado
 */
export let cifrado2 =
new Cifrado(mensaje1, clave);
/**
 * Objeto de la clase Cifrado
 */
 export let cifrado3 =
 new Cifrado(mensaje2, clave);

cifrado.codificacion();
cifrado2.decodificacion();

