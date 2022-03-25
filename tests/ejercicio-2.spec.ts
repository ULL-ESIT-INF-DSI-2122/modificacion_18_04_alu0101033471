import 'mocha';
import { expect } from 'chai';
import {Series} from '../src/ejercicio-2';
import {Documental} from '../src/ejercicio-2';
import {Pelicula} from '../src/ejercicio-2';
import {coleccionDocumentales1} from '../src/ejercicio-2';
import {coleccionPeliculas1} from '../src/ejercicio-2';
import {coleccionSeries1} from '../src/ejercicio-2';
import {CollectionPeliculas} from '../src/ejercicio-2';
import {CollectionSeries} from '../src/ejercicio-2';
import {CollectionDocumentales} from '../src/ejercicio-2';
import {serie1} from '../src/ejercicio-2';
import {documental1} from '../src/ejercicio-2';
import {pelicula1} from '../src/ejercicio-2';


describe('Test clase Serie', () => {
  it('comprobar serie1', () => {
    expect( serie1 instanceof Series).to.eql (true);
  });
  it('comprobar método getName', () => {
    expect( serie1.getName()).to.eql (`Doraemon`);
  });
  it('comprobar método Setname', () => {
    serie1.setName(`CARACOLA`)
    expect( serie1.getName()).to.eql (`CARACOLA`);
  });
  it('comprobar método getYear y setYear', () => {
    serie1.setYear(1999);
    expect( serie1.getYear()).to.eql (1999);
  });
  it('comprobar método getChapters y setChapters', () => {
    serie1.setChapters(10);
    expect( serie1.getChapters()).to.eql (10);
  });
  it('comprobar método print', () => {
    expect( serie1.print()).not.to.eql (null);
  });
});
describe('Test clase Documental', () => {
  it('comprobar documental1', () => {
    expect( documental1 instanceof Documental).to.eql (true);
  });
  it('comprobar método getName', () => {
    expect( documental1.getName()).to.eql (`Monos Salvajes`);
  });
  it('comprobar método Setname', () => {
    documental1.setName(`CARACOLA`)
    expect( documental1.getName()).to.eql (`CARACOLA`);
  });
  it('comprobar método getYear y setYear', () => {
    documental1.setYear(1999);
    expect( documental1.getYear()).to.eql (1999);
  });
  it('comprobar método getChapters y setChapters', () => {
    documental1.setDirector(`Pedro`);
    expect( documental1.getDirector()).to.eql (`Pedro`);
  });
  it('comprobar método print', () => {
    expect( documental1.print()).not.to.eql (null);
  });
});
describe('Test clase Pelicula', () => {
  it('comprobar pelicula1', () => {
    expect( pelicula1 instanceof Pelicula).to.eql (true);
  });
  it('comprobar método getName', () => {
    expect( pelicula1.getName()).to.eql (`Titanic`);
  });
  it('comprobar método Setname', () => {
    pelicula1.setName(`CARACOLA`)
    expect( pelicula1.getName()).to.eql (`CARACOLA`);
  });
  it('comprobar método getYear y setYear', () => {
    pelicula1.setYear(1999);
    expect( pelicula1.getYear()).to.eql (1999);
  });
  it('comprobar método getChapters y setChapters', () => {
    pelicula1.setProtagonista(`Pedro`);
    expect( pelicula1.getProtagonista()).to.eql (`Pedro`);
  });
  it('comprobar método getGenero y setGenero', () => {
    pelicula1.setGenero(`terrror`);
    expect( pelicula1.getGenero()).to.eql (`terrror`);
  });
  it('comprobar método print', () => {
    expect( pelicula1.print()).not.to.eql (null);
  });
});

describe('Test clase CollectionPelicula', () => {
  it('comprobar coleccionPelicula', () => {
    expect( coleccionPeliculas1 instanceof CollectionPeliculas).to.eql (true);
  });
  it('comprobar método getNameVideo', () => {
    expect( coleccionPeliculas1.getNameVideo(`CARACOLA`)).not.to.eql (null);
  });
  it('comprobar método getYearVideo', () => {
    expect( coleccionPeliculas1.getYearVideo(1999)).not.to.eql (null);
  });
  
});
describe('Test clase CollectionSerie', () => {
  it('comprobar coleccionSerie', () => {
    expect( coleccionSeries1 instanceof CollectionSeries).to.eql (true);
  });
  it('comprobar método getNameVideo', () => {
    expect( coleccionSeries1.getNameVideo(`Titanic`)).not.to.eql (null);
  });
  it('comprobar método getYearVideo', () => {
    expect( coleccionSeries1.getYearVideo(1999)).not.to.eql (null);
  });
  
});
describe('Test clase CollectionDocumental', () => {
  it('comprobar coleccionPelicula', () => {
    expect( coleccionDocumentales1 instanceof CollectionDocumentales).to.eql (true);
  });
  it('comprobar método getNameVideo', () => {
    expect( coleccionDocumentales1.getNameVideo(`Titanic`)).not.to.eql (null);
  });
  it('comprobar método getYearVideo', () => {
    expect( coleccionDocumentales1.getYearVideo(1999)).not.to.eql (null);
  });
  it('comprobar método getSize', () => {
    expect( coleccionDocumentales1.getSize()).not.to.eql (null);
  });
  it('comprobar método add', () => {
    expect( coleccionDocumentales1.add(documental1)).not.to.eql (null);
  }); 
});