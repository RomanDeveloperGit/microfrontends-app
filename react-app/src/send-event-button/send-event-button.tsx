export const SendEventButton = () => {
  const handleClick = () => {
    const message = prompt(
      'Введите текст сообщения, которые вы хотите отправить в приложение Solid JS',
    );

    if (message === null) return;

    window.appEventTarget.dispatchEvent(
      new CustomEvent('message-to-solid', {
        detail: message,
      }),
    );
  };

  return (
    <button onClick={handleClick}>
      Отправить сообщение в Solid JS приложение
    </button>
  );
};
