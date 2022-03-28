/**
 * Clase PrimeNumber para numeros primos hasta un valor o un rango
 */
export class PrimeNumber{
	private primerosPrimos: number[] = [];
	private rangoPrimos: number[] = [];
  private static primeNumber: PrimeNumber;
  private constructor(){}
	/**
	 * 
	 */
  public static getPrimeNumber(): PrimeNumber {
    if (!PrimeNumber.primeNumber) {
      PrimeNumber.primeNumber = new PrimeNumber();
    }
    return PrimeNumber.primeNumber;
  }
	/**
	 * Metodo para devolver el vector de primos
	 * @returns vector con los numeros primos hasta un valor 
	 */
	getPrimos(){
		return this.primerosPrimos;
	}
	/**
	 * Método para introducir un valor en el vector de numeros primos
	 * @param n valor a introducitr en el array de numeros primos 
	 */
	setPrimos(n: number){
		this.primerosPrimos.push(n);
	}
	/**
	 * Metodo para devolver el array de primos en un rango
	 * @returns array con los numeros primos en un rango
	 */
	getPrimosRango(){
		return this.rangoPrimos;
	}
	/**
	 * Método para introducir un valor en el vector de numeros primos de rango
	 * @param n valor a introducitr en el array de numeros primos en un rango 
	 */
	setPrimosRango(n: number){
		this.rangoPrimos.push(n);
	}
	/**
	 * Método que devuelve los numeros primos hasta el valor introducido por parámetro
	 * @param n valor maximo a analizar como número primo
	 */
  getPrimerosPrimos(n: number){
   // let primos: number[] = [];
    let contador: number = 0;
    for (let i: number = 2; i <= n; i++){
      for (let j: number = 2; j < i; j++){
        if (i % j === 0){
          contador++;
        }
      }
			if ( contador === 0){
				this.setPrimos(i);
			}
			contador = 0;
    }
		return this.getPrimos();
  }
	/**
	 * Método que devuelve los numeros primos entre el rango introudcido por parámetro
	 * @param n primer número del rango a analizar si es primo
	 * @param m último valor del rango a analizar si es primo
	 */
	getRangoPrimos(n: number, m: number){
    let primos: number[] = [];
    let contador: number = 0;
    for (n; n <= m; n++){
      for (let j: number = 2; j < n; j++){
        if (n % j === 0){
          contador++;
        }
      }
			if ( contador === 0){
				this.setPrimosRango(n);
			}
			contador = 0;
    }
		return this.getPrimosRango();
  }
}

const primeNumber = PrimeNumber.getPrimeNumber();
console.log(`Primeros primos:  ${primeNumber.getPrimerosPrimos(100)}`);
console.log(`Rango de primos: ${primeNumber.getRangoPrimos(10, 41)}`);
