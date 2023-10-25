import { render } from 'solid-js/web';

import { App, initAppEventTarget } from './app';

const root = document.getElementById('solid-root');

initAppEventTarget();

render(() => <App />, root!);
