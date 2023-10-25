export const initAppEventTarget = () => {
  // @ts-ignore
  window.appEventTarget ||= new EventTarget();
};
