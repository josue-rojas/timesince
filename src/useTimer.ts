import { useEffect, useState } from 'react';

function padText(num: number, size: number, padString: string = '0') {
  let paddedText = num + '';

  while (paddedText.length < size) paddedText = padString + paddedText;

  return paddedText;
}

// A timer in milliseconds from the `startDate`
export function useTimer(startDate: Date, refreshTime: number = 1) {
  const [timeSince, setTimeSince] = useState<number>(0);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      const currentTime = Date.now();
      const dateTime = startDate.getTime();
      
      setTimeSince(currentTime - dateTime);
    }, refreshTime)

    return () => clearInterval(refreshInterval);
  }, [refreshTime, startDate]);

  const milliseconds = padText(Math.round(timeSince%1000),3);
  const seconds= padText(Math.floor(timeSince/1000.0)%60,2);
  const minutes = padText(Math.floor(timeSince/1000.0/60.0)%60,2);
  const hours = padText(Math.floor(timeSince/1000.0/60.0/60.0)%24,2);
  const days = padText(Math.floor(timeSince/1000.0/60.0/60.0/24.0),6);

  return {
    timeSince,
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
  };
}
