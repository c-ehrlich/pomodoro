import { TimeInterface } from "./interfaces";

export const createTimerText = (time: TimeInterface): string => {
  return `${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
}

/**
 * @function getRemainingTime
 * Gets the remaining time of a timer.
 *
 * @param endTime the start time of the timer in unix time,
 * multiplied by 1000 to get milliseconds
 * @returns an object with { minutes, seconds }
 */
export const getRemainingTime = (endTime: number): TimeInterface => {
  return convertMillisecondTimeToObject(endTime - Date.now());
};

/**
 * @function minutesToMilliseconds
 * multiplies a number by 60000
 */
export const minutesToMilliseconds = (minutes: number): number => {
  return minutes * 60000;
};

/**
 * @function convertMillisecondTimeToObject
 * takes a JavaScript time (number of milliseconds) and converts it to an object
 * This object only contains minutes and seconds because that's all we want for the timer
 * (a time of 60:00 should not display as 1:00:00)
 *
 * @param time
 * @returns
 */
export const convertMillisecondTimeToObject = (time: number): TimeInterface => {
  return {
    minutes: Math.floor(time / 60000),
    seconds: Math.floor((time % 60000) / 1000),
  };
};

/**
 * @function convertObjectTimeToMilliseconds
 *
 * @param time
 * @returns
 */
export const convertObjectTimeToMilliseconds = (
  time: TimeInterface
): number => {
  return time.minutes * 60000 + time.seconds * 1000;
};

export const handleStartTimer = ({
  initial,
  sessionLength,
  remainingTime,
}: {
  initial: boolean;
  sessionLength: number;
  remainingTime: TimeInterface;
}) => {
  let endTime: number;
  if (initial) {
    endTime = Date.now() + minutesToMilliseconds(sessionLength) + 999;
  } else {
    endTime = Date.now() + convertObjectTimeToMilliseconds(remainingTime);
  }

  return {
    endTime: endTime,
    paused: false,
    initial: false,
  }
};

export const handlePauseTimer = ({
  endTime,
}:{
  endTime: number,
}
) => {
  return {
    paused: true,
    remainingTime: convertMillisecondTimeToObject(endTime - Date.now()),
  }
}
