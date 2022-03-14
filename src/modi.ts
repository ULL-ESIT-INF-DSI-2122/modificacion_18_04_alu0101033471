/**
 * Clase Persona
 */
export class Persona {
	private nombre: string;
	private apellidos: string;
	private edad: number;
	private genero: string;

  constructor(nombre: string, apellidos: string, edad: number, genero: string) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.edad = edad;
		this.genero = genero;

  }

	getNombre(){
		return this.nombre;
	}
	getApellidos(){
		return this.apellidos;
	}
	getEdad(){
		return this.edad;
	}
	getGenero(){
		return this.genero;
	}
	setNombre(nombre_: string){
		this.nombre = nombre_;
	}
	setApellidos(apellidos_: string){
		this.apellidos = apellidos_;
	}
	setEdad(edad_: number){
		this.edad = edad_;
	}
	setGenero(genero_: string){
		this.genero = genero_;
	}

}
/**
 * Clase Estudiante heredada de Persona
 */
export class Estudiante extends Persona {
	//private correo: string;
	constructor(nombre: string, apellidos: string, edad: number, genero: string, private correo: string){
		super(nombre, apellidos, edad, genero);
		this.correo = correo;
	}
	getCorreo(){
		return this.correo;
	}
	setCorreo(correo_: string){
		this.correo = correo_;
	}
}
/**
 * Clase Profesor heredada de Persona
 */
export class Profesor extends Persona {
	//private correo: string;
	constructor(nombre: string, apellidos: string, edad: number, genero: string, private correo: string){
		super(nombre, apellidos, edad, genero);
		this.correo = correo;
	}
	getCorreo(){
		return this.correo;
	}
	setCorreo(correo_: string){
		this.correo = correo_;
	}	
}

class Asignatura {
	private nombre: string;
	private listaAlu: string[];
	private listaPro: string[];
	constructor(nombre: string, listaAlu: string[], listaPro: string[]){
		this.nombre = nombre;
		this.listaAlu = listaAlu;
		this.listaPro = listaPro;
	}
	getnombre(){
		return this.nombre;
	}
	setNombre(nombre_: string){
		this.nombre = nombre_;
	}
	getlistaAlu(){
		return this.listaAlu;
	}
	getlistaPro(){
		return this.listaPro;
	}
	setListaAlu(alu: string[]){
		this.listaAlu = alu;
	}
	setlistaPro(prof: string[]){
		this.listaPro = prof;
	}
}


/**
 * Objeto alumno1
 */
export let alumno1 = 
	new Estudiante("Marcos", "Santana Ramos", 23, "Masculino", "alu010101033471@ull.edu.es");
/**
 * Objeto alumno 2
 */	
export let alumno2 = 
	new Estudiante("Hector", "Abreu Acosta", 24, "Masculino", "alu010101034567@ull.edu.es");
/**
 * Objeto profesor1
 */	
export let profesor1 = 
	new Profesor("Carlos", "Socas Pérez", 39, "Masculino", "alu010101033555@ull.edu.es");
/**
 * Objeto profesor 2
 */	
export let profesor2 = 
	new Profesor("Alba", "López Pérez", 35, "Femenino", "alu010101033777@ull.edu.es");
/**
 * array de alumnos
 */
export let alumnos = [alumno1, alumno2];
/**
 * array de profesores
 */
export let profesores = [profesor1, profesor2];

//export let asignatura1 = [profesor1, alumno1];
//export let asignatura2 = [profesor2, alumno2, alumno1];
let asignaturass = 
new Asignatura(`mates`, [alumno1.getNombre(),alumno2.getNombre()], [profesor1.getNombre(), profesor2.getNombre()] );

	console.log(`Alumnos`);
	alumnos.forEach((alu) => {
		console.log(`Nombre: ${alu.getNombre()}, Apellidos: ${alu.getApellidos()}, Correo: ${alu.getCorreo()}`);
	});
	console.log(`Profesores`);
	profesores.forEach((pro) => {
		console.log(`Nombre: ${pro.getNombre()}, Apellidos: ${pro.getApellidos()}, Correo: ${pro.getCorreo()}`);
	});
	/*console.log(`Profesores que imparten asfinatura1`);
	asignatura1.forEach((persona) => {
		if (persona instanceof Profesor) {
			console.log (`Profesor que imparte asignatura1: ${persona.getNombre()}, ${persona.getApellidos()}`)
		}
	});

	console.log(`alumnos que cursan asfinatura2`);
	asignatura2.forEach((persona) => {
		if (persona instanceof Estudiante) {
			console.log (`Alumno que cursa asignatura1: ${persona.getNombre()}, ${persona.getApellidos()}`)
		}
		
	});*/
	console.log(`listado de profesores de una asignatura`);
	asignaturass.getnombre();
		
	

