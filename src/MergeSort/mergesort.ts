import { Solver, Strategy } from "../Solver/Solver";
/**
 * Clase MergeSort que ordena una lista de numeros
 */
export class Mergesort implements Strategy{
  constructor(){}
	/**
	 * Método que divide la lista de numeros en dos partes una con los numeros pequeños 
	 * y otra con los mayores
	 * @param items lista de numeros ordenar
	 * @return llamada al siguiente método que ordena
	 */
  divide(items: number[]): number[] {
		var halfLength = Math.ceil(items.length / 2);
		var low = items.slice(0, halfLength);
		var high = items.slice(halfLength);
		if (halfLength > 1) {
			low = this.divide(low);
			high = this.divide(high);
		}
		return this.combine(low, high);
  }
/**
 * Método qu combina las dos lista de numeros de forma ordenada
 * @param low lista con los numeros pequeños
 * @param high lista con los numeros grandes
 */
	combine(low: number[], high: number[]): number[] {
		var indexLow = 0;
		var indexHigh = 0;
		var lengthLow = low.length;
		var lengthHigh = high.length;
		var combined = [];
		while (indexLow < lengthLow || indexHigh < lengthHigh) {
			var lowItem = low[indexLow];
			var highItem = high[indexHigh];
			if (lowItem !== undefined) {
				if (highItem === undefined) {
					combined.push(lowItem);
					indexLow++;
				} else {
						if (lowItem <= highItem) {
							combined.push(lowItem);
							indexLow++;
						} else {
							combined.push(highItem);
							indexHigh++;
						}
				}
			} else {
					if (highItem !== undefined) {
						combined.push(highItem);
						indexHigh++;
					}
				}
		}
		return combined;
	}
   /**
		* Permite iniciar la ejecución de una estrategia
		* @param data lista que recibe de la clase Solver
		*/ 
	execute(data: number[]) {
			console.log(`algoritmo MergeSort aplicado: ${this.divide(data)}`);
		}
}