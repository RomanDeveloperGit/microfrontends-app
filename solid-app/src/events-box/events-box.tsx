import { For, Show, createSignal, onCleanup, onMount } from 'solid-js';

export const EventsBox = () => {
  const [messages, setMessages] = createSignal<EventMessage[]>([]);

  const handler = (event: Event | CustomEvent) => {
    if (!('detail' in event) || !event.detail)
      throw new Error('Укажите свойство detail в string-формате.');

    setMessages([
      ...messages(),
      {
        id: new Date().getTime(),
        text: event.detail,
      },
    ]);
  };

  onMount(() => {
    window.appEventTarget.addEventListener('message-to-solid', handler);
  });

  onCleanup(() => {
    window.appEventTarget.removeEventListener('message-to-solid', handler);
  });

  return (
    <div>
      <h3>Event Box</h3>
      <Show
        when={messages().length}
        fallback={<div>Ивент-сообщения отсутствуют</div>}
      >
        <ul>
          <For each={messages()}>{(message) => <li>{message.text}</li>}</For>
        </ul>
      </Show>
    </div>
  );
};
