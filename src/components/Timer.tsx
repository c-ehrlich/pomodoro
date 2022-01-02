import { useEffect, useRef, useState, useMemo } from "react";
import useStore from "../store";
import { convertMillisecondTimeToObject, convertObjectTimeToMilliseconds, getRemainingTime } from "../utils";

interface Props {}

const Timer = (props: Props) => {
  // const endTime = useStore(state => state.endTime);
  let timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const remainingTime = useStore((state) => state.remainingTime);
  const setRemainingTimeFromNumber = useStore((state) => state.setRemainingTimeFromNumber);
  const sessionLength = useStore((state) => state.sessionLength);
  const endTime = useStore((state) => state.endTime);
  const paused = useStore((state) => state.paused);
  const initial = useStore((state) => state.initial);
  const [now, setNow] = useState<number>(0);

  const countdown = (): void => {
    console.log(Date.now());
    setNow(Date.now());
    setRemainingTimeFromNumber(endTime - Date.now());
    timerRef.current = setTimeout(countdown, 1000);
  };

  const getTimeLeft = useMemo((): string => {
    if (initial) {
      return `${sessionLength}:00`;
    } else if (paused) {
      return `${remainingTime.minutes}:${remainingTime.seconds}`;
    }
    const timeLeft = getRemainingTime(endTime);
    return `${timeLeft.minutes}:${timeLeft.seconds}`;
  }, [initial, paused, endTime, sessionLength, remainingTime]);

  useEffect(() => {
    if (paused) {
      clearTimeout(timerRef.current as ReturnType<typeof setTimeout>);
    } else {
      timerRef.current = setTimeout(countdown, 1000);
    }

    return () => {
      clearTimeout(timerRef.current as ReturnType<typeof setTimeout>);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  return (
    <div>
      <div id="timer-label">Session</div>
      <div id="time-left">{getTimeLeft}</div>
      <div>{now} / {endTime}</div>
    </div>
  );
};

export default Timer;
