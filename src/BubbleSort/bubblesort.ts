
import { Solver, Strategy } from "../Solver/Solver";

/**
 * Clase Bubblesort que ordena una lista de numeros
 */
export class BubbleSort implements Strategy {
	private lista: number[] = [];
	constructor(){
	}
	/**
	 * metodo que ordena una lista de numeros
	 * @param listaa lista de numeros a ordenar
	 * @return una lista de numeros ordenada
	 */
	ordenar(listaa: number[]){
		this.lista = listaa;
		let auxLista: number[] = this.lista;
		for(let i = 0; i < auxLista.length; i++) {
			for(let j = 0; j < auxLista.length - 1; j++) {
	
				if(auxLista[j] > auxLista[j + 1]) {
					let swap = auxLista[j];
					auxLista[j] = auxLista[j + 1];
					auxLista[j + 1] = swap;
				}
			}
		}
		return auxLista;
	}
	/**
	 * permite iniciar la ejecución de una estrategia 
	 * @param data lista que recive de la clase Solver
	 */
    execute(data: number[]) {
      console.log(`algoritmo BubbleSort aplicado: ${this.ordenar(data)}`);
    }
  }
  