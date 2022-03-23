import 'mocha';
import { expect } from 'chai';
import {Mensaje} from '../src/ejercicio-3';
import {Clave} from '../src/ejercicio-3';
import {Cifrado} from '../src/ejercicio-3';
import {mensaje} from '../src/ejercicio-3';
import {cifrado} from '../src/ejercicio-3';
import {cifrado2} from '../src/ejercicio-3';
import {cifrado3} from '../src/ejercicio-3';
import {clave} from '../src/ejercicio-3';

describe('Test clase Mensaje', () => {
  it('comprobar Mensaje', () => {
    expect( mensaje instanceof Mensaje).to.eql (true);
  });
  it('comprobar método getMensaje', () => {
    expect( mensaje.getMensaje()).to.eql (`HOLAESTOESUNAPRUEBA`);
  });
  it('comprobar método SetMensaje', () => {
    mensaje.setMensaje(`CARACOLA`)
    expect( mensaje.getMensaje()).to.eql (`CARACOLA`);
  });
  it('comprobar método getMensajeSize', () => {
    expect( mensaje.getMensajeSize()).to.eql (8);
  });
  it('comprobar método getMensajeValor', () => {
    expect( mensaje.getMensajeValor(0)).to.eql (`C`);
  });
});

describe('Test clase Clave', () => {
  it('comprobar Clave', () => {
    expect( clave instanceof Clave).to.eql (true);
  });
  it('comprobar método getClave', () => {
    expect( clave.getClave()).to.eql (`CLAVE`);
  });
  it('comprobar método SetClave', () => {
    clave.setClave(`CARA`)
    expect( clave.getClave()).to.eql (`CARA`);
  });
  it('comprobar método getClaveSize', () => {
    expect( clave.getClaveSize()).to.eql (4);
  })
  it('comprobar método getClaveValor', () => {
    expect( clave.getClaveValor(0)).to.eql (`C`);
  });
});

describe('Test clase Cifrado', () => {
  it('comprobar cifrado', () => {
    expect( cifrado instanceof Cifrado).to.eql (true);
  });
  it('comprobar codificación', () => {
    expect( cifrado.codificacion()).not.to.eql (null);
  });
  it('comprobar decodificación', () => {
    expect( cifrado.decodificacion).not.to.eql (null);
  });
  it('comprobar decodificación en otro alfabeto', () => {
    expect( cifrado3.decodificacion()).not.to.eql (null);
  });
  it('comprobar decodificación en otro alfabeto', () => {
    expect( cifrado3.codificacion()).not.to.eql (null);
  });
  it('comprobar método getAlfabeto', () => {
    expect( cifrado.getAlfabeto()).to.eql (`ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`);
  });
  it('comprobar método SetAlfabeto', () => {
    cifrado.setAlfabeto(`abcdefghijk`)
    expect( cifrado.getAlfabeto()).to.eql (`abcdefghijk`);
  });
  it('comprobar método getAlfabetoSize', () => {
    expect( cifrado2.getAlfabetoSize()).to.eql (27);
  })
  it('comprobar método comprobarAlfabeto', () => {
    expect( cifrado.comprobarValorAlfabeto(0)).to.eql (false);
  });
});