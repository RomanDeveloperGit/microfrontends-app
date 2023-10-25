import { makeAutoObservable } from 'mobx';

class Counter {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  set(value: number) {
    this.counter = value;
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter += 1;
  }

  reset() {
    this.counter = 0;
  }
}

export const counter = new Counter();
