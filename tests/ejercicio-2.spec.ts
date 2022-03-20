import 'mocha';
import { expect } from 'chai';
import {Board, Conecta4} from '../src/ejercicio-2';
import {Player} from '../src/ejercicio-2';
import {jugador1} from '../src/ejercicio-2';
import {jugador2} from '../src/ejercicio-2';
import {juego} from '../src/ejercicio-2';
import {rejilla} from '../src/ejercicio-2';

describe('Test clase Player', () => {
  it('comprobar jugador1', () => {
    expect( jugador1 instanceof Player).to.eql (true);
  });
  it('comprobar jugador2', () => {
    expect( jugador2 instanceof Player).to.eql (true);
  });
});

describe('Test clase Board', () => {
  it('comprobar rejilla', () => {
    expect( rejilla instanceof Board).to.eql (true);
  });
});
describe('Test clase Conecta4', () => {
  it('comprobar rejilla', () => {
    expect( juego instanceof Conecta4).to.eql (true);
  });
});