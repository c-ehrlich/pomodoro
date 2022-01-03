import { useEffect, useRef, useState, useMemo } from "react";
import useStore from "../store";
import {
  getRemainingTime,
} from "../utils";
const alarmAudio = require("../media/alarm.mp3");

interface Props {}

const Timer = (props: Props) => {
  let timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  let audioRef = useRef<HTMLAudioElement>(null);

  const remainingTime = useStore((state) => state.remainingTime);
  const setRemainingTimeFromNumber = useStore(
    (state) => state.setRemainingTimeFromNumber
  );
  const sessionLength = useStore((state) => state.sessionLength);
  const breakLength = useStore((state) => state.breakLength);
  const endTime = useStore((state) => state.endTime);
  const setEndTimeFromNow = useStore((state) => state.setEndTimeFromNow);
  const paused = useStore((state) => state.paused);
  const initial = useStore((state) => state.initial);
  const currentTimerType = useStore((state) => state.currentTimerType);
  const toggleCurrentTimerType = useStore((state) => state.toggleCurrentTimerType);
  const [now, setNow] = useState<number>(0);

  const countdown = (): void => {
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
    if (timeLeft.minutes < 0) {
      audioRef.current?.play();
      if (currentTimerType === "session") {
        setEndTimeFromNow(breakLength);
      } else {
        setEndTimeFromNow(sessionLength);
      }
      toggleCurrentTimerType();
    }
    return `${timeLeft.minutes}:${timeLeft.seconds}`;
  }, [
    initial,
    paused,
    endTime,
    sessionLength,
    remainingTime,
    currentTimerType,
    toggleCurrentTimerType,
    setEndTimeFromNow,
    breakLength,
  ]);

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
      <div id="timer-label">{currentTimerType === "session" ? "Session" : "Break"}</div>
      <div id="time-left">{getTimeLeft}</div>
      <div>
        {now} / {endTime}
      </div>
      <audio id="beep" ref={audioRef} src={alarmAudio}/>
    </div>
  );
};

export default Timer;
