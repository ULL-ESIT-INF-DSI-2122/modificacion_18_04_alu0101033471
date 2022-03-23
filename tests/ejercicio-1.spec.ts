import 'mocha';
import { expect } from 'chai';
import {DarthVader, IronMan, Pokemon, PrintPokedex, Vegetta, Yoda} from '../src/ejercicio-1';
import {Pokedex} from '../src/ejercicio-1';
import {Combat} from '../src/ejercicio-1';
import {pokemon1} from '../src/ejercicio-1';
import {pokemon2} from '../src/ejercicio-1';
import {pokemon3} from '../src/ejercicio-1';
import {Goku} from '../src/ejercicio-1';
import {ImprimirPokedex} from '../src/ejercicio-1';
import {Batman} from '../src/ejercicio-1';
import {Thanos} from '../src/ejercicio-1';
import {Fighters} from '../src/ejercicio-1';
import {DragonBall} from '../src/ejercicio-1';
import {DC} from '../src/ejercicio-1';
import {StarWars} from '../src/ejercicio-1';
import {Marvel} from '../src/ejercicio-1';
import {pokedex} from '../src/ejercicio-1';
import {combate} from '../src/ejercicio-1';
import {combate1} from '../src/ejercicio-1';
import {combate2} from '../src/ejercicio-1';
import {combate3} from '../src/ejercicio-1';
import {combate5} from '../src/ejercicio-1';
import {combate6} from '../src/ejercicio-1';
import {combate7} from '../src/ejercicio-1';

describe('Test clase Pokemon', () => {
  it('comprobar Pokemon1', () => {
    expect( pokemon1 instanceof Pokemon).to.eql (true);
  });
  it('comprobar método getNombre', () => {
    expect( pokemon1.getNombre()).to.eql (`Venusaur`);
  });
  it('comprobar método SetNombre', () => {
    pokemon1.setNombre(`Infernape`)
    expect( pokemon1.getNombre()).to.eql (`Infernape`);
  });
});
describe('Test clase DragonBall', () => {
  it('comprobar Goku', () => {
    expect( Goku instanceof DragonBall).to.eql (true);
  });
  it('comprobar método getCachingPhrase', () => {
    expect( Goku.getcatchingPhrase()).to.eql (`KAMEHAME...HAAAAAAAAAAAAAAAAAAAA`);
  });
  it('comprobar método SetNombre', () => {
    Goku.setcatchingPhrase(`genkidamaa`)
    expect( Goku.getcatchingPhrase()).to.eql (`genkidamaa`);
  });
});
describe('Test clase DC', () => {
  it('comprobar Batman', () => {
    expect( Batman instanceof DC).to.eql (true);
  });
  it('comprobar método getPeso', () => {
    expect( Batman.getPeso()).to.eql (90);
  });
  it('comprobar método SetNombre', () => {
    Batman.setPeso(50)
    expect( Batman.getPeso()).to.eql (50);
  });
});
describe('Test clase MArvel', () => {
  it('comprobar IRONMAN', () => {
    expect( IronMan instanceof Marvel).to.eql (true);
  });
  it('comprobar método getAltura', () => {
    expect( IronMan.getAltura()).to.eql (1.90);
  });
  it('comprobar método SetAltura', () => {
    IronMan.setAltura(2.0)
    expect( IronMan.getAltura()).to.eql (2.0);
  });
});
describe('Test clase StarWars', () => {
  it('comprobar Darth VAder', () => {
    expect( DarthVader instanceof StarWars).to.eql (true);
  });
  it('comprobar método getdefense', () => {
    expect( DarthVader.getDefense()).to.eql (99);
  });
  it('comprobar método setdefense', () => {
    DarthVader.setDefense(2)
    expect( DarthVader.getDefense()).to.eql (2);
  });
  it('comprobar método setattack', () => {
    DarthVader.setAttack(2)
    expect( DarthVader.getAttack()).to.eql (2);
  });
});

describe('Test clase Pokedex', () => {
  it('comprobar Pokedex', () => {
    expect( pokedex instanceof Pokedex).to.eql (true);
  });
  it('comprobar método getNumberOfPokemons', () => {
    expect( pokedex.getNumberOfPokemons()).to.eql (6);
  });
});
describe('Test clase imprimirpantalla', () => {
  it('comprobar imprimir pantalla', () => {
    expect( ImprimirPokedex instanceof PrintPokedex).to.eql (true);
  });
  it('comprobar método print', () => {
    expect( ImprimirPokedex.print()).not.to.eql (null);
  });
});
describe('Test clase Fighters', () => {
  it('comprobar métodos de estadistica', () => {
    IronMan.setEstadisticas([120,90,99,70]);
    expect( IronMan.getEstadisticas()).to.eql ([120,90,99,70]);

  });
  it('comprobar método setTipo', () => {
    IronMan.setTipo([`villano`]);
    expect( IronMan.getTipo()).to.eql ([`villano`]);

  });
  it('comprobar método setTSpeed', () => {
    IronMan.setSpeed(222);
    expect( IronMan.getSpeed()).to.eql (222);

  });
});
describe('Test clase imprimirpantalla', () => {
  it('comprobar imprimir pantalla', () => {
    expect( ImprimirPokedex instanceof PrintPokedex).to.eql (true);
  });
  it('comprobar método print', () => {
    expect( ImprimirPokedex.print()).not.to.eql (null);
  });
});

describe('Test clase Combat', () => {
  it('comprobar Combat', () => {
    expect( combate instanceof Combat).to.eql (true);
  });
  it('comprobar método eficacia1', () => {
    expect( combate.eficacia(pokemon1.getTipo(), Goku.getTipo(), pokemon1.getAttack(), Goku.getDefense())).to.eql (0.040999999999999995);
  });
  it('comprobar método eficacia2', () => {
    expect( combate.eficacia(IronMan.getTipo(), Batman.getTipo(), IronMan.getAttack(), Batman.getDefense())).to.eql (9.09090909090909);
  });
  it('comprobar método eficacia3', () => {
    expect( combate.eficacia(DarthVader.getTipo(), DarthVader.getTipo(), DarthVader.getAttack(), DarthVader.getDefense())).to.eql (10);
  });
  it('comprobar método eficacia4', () => {
    expect( combate.eficacia(DarthVader.getTipo(), Vegetta.getTipo(), DarthVader.getAttack(), Vegetta.getDefense())).to.eql (0.001);
  });
  it('comprobar método eficacia5', () => {
    expect( combate1.eficacia(DarthVader.getTipo(), Vegetta.getTipo(), DarthVader.getAttack(), Vegetta.getDefense())).to.eql (0.1);
  });
  it('comprobar método eficacia6', () => {
    expect( combate1.start()).not.to.eql (null);
  });
  it('comprobar método eficacia7', () => {
    expect( combate2.eficacia(pokemon1.getTipo(), pokemon1.getTipo(), pokemon1.getAttack(), pokemon1.getDefense())).to.eql (9.879518072289157);
  });
  it('comprobar método eficacia8', () => {
    expect( combate2.eficacia(pokemon1.getTipo(), pokemon2.getTipo(), pokemon1.getAttack(), pokemon2.getDefense())).to.eql (5.256410256410256);
  });
  it('comprobar método eficacia9', () => {
    expect( combate2.eficacia(pokemon1.getTipo(), pokemon3.getTipo(), pokemon1.getAttack(), pokemon3.getDefense())).to.eql (16.4);
  });
  it('comprobar método eficacia10', () => {
    expect( combate3.eficacia(IronMan.getTipo(), Thanos.getTipo(), IronMan.getAttack(), Thanos.getDefense())).to.eql (11.25);
  });
  it('comprobar método eficacia11', () => {
    expect( combate5.eficacia(Thanos.getTipo(), Batman.getTipo(), Thanos.getAttack(), Batman.getDefense())).to.eql (0.4040404040404041);
  });
  it('comprobar método eficacia12', () => {
    expect( combate6.eficacia(Goku.getTipo(), Vegetta.getTipo(), Goku.getAttack(), Vegetta.getDefense())).to.eql (5);
  });
  it('comprobar método eficacia13', () => {
    expect( combate7.eficacia(Yoda.getTipo(), DarthVader.getTipo(), Yoda.getAttack(), DarthVader.getDefense())).to.eql (900);
  });
});
