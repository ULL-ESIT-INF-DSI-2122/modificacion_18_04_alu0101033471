import { Solver, Strategy } from "./Solver/Solver";
import { BubbleSort } from "./BubbleSort/bubblesort";
import { Mergesort } from "./MergeSort/mergesort";

export const mySolver = new Solver([1, 2, 3, 5,4,9,8,7], new BubbleSort());
mySolver.logic();

mySolver.setStrategy(new Mergesort());
mySolver.logic();
