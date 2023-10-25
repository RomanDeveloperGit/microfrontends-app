import { initAppEventTarget } from './events';
import { initStore } from './store';

initAppEventTarget();
initStore();

console.log('Host App initialized.');

export {};
