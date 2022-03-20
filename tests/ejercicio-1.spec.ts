import 'mocha';
import { expect } from 'chai';
import {Pokemon} from '../src/ejercicio-1';
import {Pokedex} from '../src/ejercicio-1';
import {Combat} from '../src/ejercicio-1';
import {pokemon1} from '../src/ejercicio-1';
import {pokemon2} from '../src/ejercicio-1';
import {pokemon3} from '../src/ejercicio-1';
import {pokedex} from '../src/ejercicio-1';
import {combate} from '../src/ejercicio-1';

describe('Test clase Pokemon', () => {
  it('comprobar Pokemon1', () => {
    expect( pokemon1 instanceof Pokemon).to.eql (true);
  });
  it('comprobar Pokemon2', () => {
    expect( pokemon2 instanceof Pokemon).to.eql (true);
  });
  it('comprobar Pokemon3', () => {
    expect( pokemon3 instanceof Pokemon).to.eql (true);
  });
  it('comprobar método getNombre', () => {
    expect( pokemon1.getNombre()).to.eql (`Venusaur`);
  });
  it('comprobar método SetNombre', () => {
    pokemon1.setNombre(`Infernape`)
    expect( pokemon1.getNombre()).to.eql (`Infernape`);
  });
});

describe('Test clase Pokedex', () => {
  it('comprobar Pokedex', () => {
    expect( pokedex instanceof Pokedex).to.eql (true);
  });
  it('comprobar método getNumberOfPokemons', () => {
    expect( pokedex.getNumberOfPokemons()).to.eql (3);
  });
});

describe('Test clase Combat', () => {
  it('comprobar Combat', () => {
    expect( combate instanceof Combat).to.eql (true);
  });
  it('comprobar método ataquePokemon', () => {
    expect( combate.ataquePokemon(pokemon1.getTipo(), pokemon2.getTipo(), pokemon1.getAttack(), pokemon2.getDefense())).to.eql (5.256410256410256);
  });
});


