import './App.css';
import { useTimer } from './useTimer';

function useQuery() {
  return new URLSearchParams(window.location.search);
}

function App() {
  const query = useQuery();

  // Get date from query params or fall back to default
  const DATE_DEFAULT = query.get('date') || 'December 4, 2021';
  const DEFAULT_TITLE = `Time Since ${query.get('title') || 'I+J First Date'}`;

  // Convert date string to Date object
  const date = new Date(DATE_DEFAULT);

  const {
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
  } = useTimer(date);

  return (
    <div className="App">
      <header className="App-header">
        <h3>{DEFAULT_TITLE}</h3>
        <div className="timer-box">
          <div>{days}</div>
          <div>{hours}</div>
          <div>{minutes}</div>
          <div>{seconds}</div>
          <div>{milliseconds}</div>
          <div className='text'>Days</div>
          <div className='text'>Hours</div>
          <div className='text'>Minutes</div>
          <div className='text'>Seconds</div>
          <div className='text'>Milliseconds</div>
        </div>
      </header>
    </div>
  );
}

export default App;
