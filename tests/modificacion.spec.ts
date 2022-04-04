import 'mocha';
import { expect } from 'chai';
import { Solver, Strategy } from "../src/Solver/Solver";
import {BubbleSort} from '../src/BubbleSort/bubblesort';
import {mySolver} from '../src/index';
import { Mergesort } from '../src/MergeSort/mergesort';


describe('Test clase BubblSort', () => {
    let buble = new BubbleSort();

    it('comprobar ', () => {
      expect( buble instanceof BubbleSort).to.eql (true);
    });
    it('comprobar método ordenar', () => {
      expect( buble.ordenar([2,4,5,1])).to.eql ([1,2,4,5]);
    });
  });

describe('Test clase Mergesort', () => {
    let merge = new Mergesort();
it('comprobar ', () => {
    expect( merge instanceof Mergesort).to.eql (true);
});
it('comprobar método divide', () => {
    
    expect( merge.divide([2,4,5,1])).to.eql ([1,2,4,5]);
});
it('comprobar método convine', () => {
    expect( merge.combine([1,2],[4,5])).to.eql ([1,2,4,5]);
});
});

describe('Test clase Solver', () => {
    
    it('comprobar ', () => {
      expect( mySolver instanceof Solver).to.eql (true);
    });
    it('comprobar método ordenar', () => {
      expect( mySolver.logic()).not.to.eql (null);
    });
  });