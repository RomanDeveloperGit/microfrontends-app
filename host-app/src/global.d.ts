interface Window {
  appEventTarget: import('./events').AppEventTarget;
}

type EventMessage = {
  id: number;
  text: string;
};
