interface Window {
  appEventTarget: import('./events').AppEventTarget;
  store: import('./store').Store;
}

type EventMessage = {
  id: number;
  text: string;
};
