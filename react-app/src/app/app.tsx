import { EventsBox } from '../events-box';
import { SendEventButton } from '../send-event-button';

export const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <SendEventButton />
      <EventsBox />
    </div>
  );
};
