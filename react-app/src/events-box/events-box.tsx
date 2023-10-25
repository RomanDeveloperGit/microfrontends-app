import { useEffect, useState } from 'react';

export const EventsBox = () => {
  const [messages, setMessages] = useState<EventMessage[]>([]);

  useEffect(() => {
    const handler = (event: Event | CustomEvent) => {
      if (!('detail' in event) || !event.detail)
        throw new Error('Укажите свойство detail в string-формате.');

      setMessages((messages) => [
        ...messages,
        {
          id: new Date().getTime(),
          text: event.detail,
        },
      ]);
    };

    window.appEventTarget.addEventListener('message-to-react', handler);

    return () => {
      window.appEventTarget.removeEventListener('message-to-react', handler);
    };
  }, []);

  const messageBox = messages.length ? (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  ) : (
    <div>Ивент-сообщения отсутствуют</div>
  );

  return (
    <div>
      <h3>Event Box</h3>
      {messageBox}
    </div>
  );
};
