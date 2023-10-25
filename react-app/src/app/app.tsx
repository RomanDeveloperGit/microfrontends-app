import { EventsBox } from '../events-box';

export const App = () => {
  const handleSendMessage = () => {
    const message = prompt(
      'Введите текст сообщения, которые вы хотите отправить в приложение Solid JS',
    );

    if (message === null) return;

    window.appEventTarget.dispatchEvent(
      new CustomEvent('message-to-solid', {
        detail: message || 'Пустое сообщение',
      }),
    );
  };

  return (
    <div>
      <h1>React App</h1>
      <button onClick={handleSendMessage}>Отправить сообщение в Solid JS приложение</button>
      <EventsBox />
    </div>
  );
};
