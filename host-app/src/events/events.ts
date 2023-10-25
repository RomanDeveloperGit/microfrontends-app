const appEventTarget = new EventTarget();

export type AppEventTarget = typeof appEventTarget;

export const initAppEventTarget = () => {
  window.appEventTarget = appEventTarget;

  console.log('[HOST] EventBus was initialized and inserted into Window.');
};
