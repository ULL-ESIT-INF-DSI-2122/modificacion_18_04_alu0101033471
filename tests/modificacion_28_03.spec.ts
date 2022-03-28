import 'mocha';
import { expect } from 'chai';
import {PrimeNumber} from '../src/modificacion_28_03';

describe('Test clase PrimeNumber', () => {
    const primeNumber = PrimeNumber.getPrimeNumber();
    it('comprobar método getPrimerosPrimos', () => {
        
      expect( primeNumber.getPrimerosPrimos(100)).not.to.eql (null);
    });
    it('comprobar método getRangoPimos', () => {
      expect( primeNumber.getRangoPrimos(10,41)).not.to.eql (null);
    });
   
  });
  
