import './App.css';
import { useTimer } from './useTimer';

const DATE_DEFAULT = 'December 4, 2021';
const DEFAULT_TITLE = 'Time Since I+J First Date'
const date = new Date(DATE_DEFAULT);

function App() {
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
          <div className='text'>Hour</div>
          <div className='text'>Minutes</div>
          <div className='text'>Seconds</div>
          <div className='text'>Milliseconds</div>
        </div>
      </header>
    </div>
  );
}

export default App;
