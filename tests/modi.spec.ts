import 'mocha';
import { expect } from 'chai';
import {Arithmeticable} from '../src/modi';
import {ArithmeticableCollection} from '../src/modi';
import {Complex} from '../src/modi';
import {complejo1} from '../src/modi';

describe('Test clase Complex', () => {
  it('comprobar complejo1', () => {
    expect( complejo1 instanceof Complex).to.eql (true);
  });

});