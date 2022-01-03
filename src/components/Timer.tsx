import { useEffect, useRef, useMemo, useState } from "react";
import useStore from "../store";
import {
  createTimerText,
  getRemainingTime,
} from "../utils";
const alarmAudio = require("../media/alarm.mp3");

const Timer = () => {
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
  const [justPlayedSound, setJustPlayedSound] = useState(false);
  const toggleCurrentTimerType = useStore((state) => state.toggleCurrentTimerType);

  const countdown = (): void => {
    setRemainingTimeFromNumber(endTime - Date.now());
    timerRef.current = setTimeout(countdown, 100);
  };

  const getTimeLeft = useMemo((): string => {
    if (initial) {
      return `${String(sessionLength).padStart(2, '0')}:00`;
    } else if (paused) {
      return createTimerText(remainingTime);
    }
    const timeLeft = getRemainingTime(endTime);
    if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      if (justPlayedSound === false) {
        setJustPlayedSound(true);
        audioRef.current?.play();
        setInterval(() => setJustPlayedSound(false), 5000);
      }
    }
    if (timeLeft.minutes < 0) {
      audioRef.current?.play();
      if (currentTimerType === "session") {
        setEndTimeFromNow(breakLength);
      } else {
        setEndTimeFromNow(sessionLength);
      }
      toggleCurrentTimerType();
    }
    return createTimerText(timeLeft);
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
    justPlayedSound,
  ]);

  useEffect(() => {
    if (paused) {
      clearTimeout(timerRef.current as ReturnType<typeof setTimeout>);
    } else {
      timerRef.current = setTimeout(countdown, 100);
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
      <audio id="beep" ref={audioRef} src={alarmAudio}/>
    </div>
  );
};

export default Timer;
