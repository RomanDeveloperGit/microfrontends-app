export const SendEventButton = () => {
  const handleClick = () => {
    const message = prompt(
      'Введите текст сообщения, которые вы хотите отправить в приложение React JS',
    );

    if (message === null) return;

    window.appEventTarget.dispatchEvent(
      new CustomEvent('message-to-react', {
        detail: message,
      }),
    );
  };

  return (
    <button onClick={handleClick}>
      Отправить сообщение в React JS приложение
    </button>
  );
};
