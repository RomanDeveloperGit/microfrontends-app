import { counter } from './states/counter';

export const store = {
  counter,
};

export type Store = typeof store;

export const initStore = () => {
  window.store = store;

  console.log('[HOST] Store was initialized and inserted into Window.');
};
