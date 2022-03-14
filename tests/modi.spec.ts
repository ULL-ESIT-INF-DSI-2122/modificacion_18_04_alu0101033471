import 'mocha';
import { expect } from 'chai';
import {Estudiante} from '../src/modi';
import {Persona} from '../src/modi';
import {Profesor} from '../src/modi';

describe('Test clase Estudiante', () => {
  it('comprobar Estudiante', () => {
    let alumno2 = 
	new Estudiante("Hector", "Abreu Acosta", 24, "Masculino", "alu010101034567@ull.edu.es"); 
    expect( alumno2 instanceof Estudiante).to.eql (true);
  });
  it('comprobar getNombre', () => {
    let alumno2 = 
	new Estudiante("Hector", "Abreu Acosta", 24, "Masculino", "alu010101034567@ull.edu.es"); 
    expect( alumno2.getNombre()).to.eql (`Hector`);
  });
});