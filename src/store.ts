import create from "zustand";
import { TimeInterface } from "./interfaces";
import { convertMillisecondTimeToObject, handleStartTimer } from "./utils";

const maxLength: number = 60;
const minLength: number = 1;

// TODO vars/functions
// are we currently on session or break?
// startNewSession
// startNewBreak
//   play the sound from here so that it's not repeated?
 
interface PomodoroState {
  sessionLength: number;
  sessionIncrement: () => void;
  sessionDecrement: () => void;
  breakLength: number;
  breakIncrement: () => void;
  breakDecrement: () => void;
  paused: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  initial: boolean;
  remainingTime: TimeInterface;
  setRemainingTimeFromTimeInterface: (remaining: TimeInterface) => void,
  setRemainingTimeFromNumber: (remaining: number) => void,
  resetState: () => void;
  endTime: number;
  setEndTimeFromNow: (addMinutes: number) => void,
  nextTimerIs: string; // either "session" or "break"
  toggleNextTimerIs: () => void;
}

const useStore = create<PomodoroState>((set) => ({
  sessionLength: 25,
  sessionIncrement: () =>
    set((state) => ({
      sessionLength:
        state.sessionLength < maxLength
          ? state.sessionLength + 1
          : state.sessionLength,
    })),
  sessionDecrement: () =>
    set((state) => ({
      sessionLength:
        state.sessionLength > minLength
          ? state.sessionLength - 1
          : state.sessionLength,
    })),
  breakLength: 5,
  breakIncrement: () =>
    set((state) => ({
      breakLength:
        state.breakLength < maxLength
          ? state.breakLength + 1
          : state.breakLength,
    })),
  breakDecrement: () =>
    set((state) => ({
      breakLength:
        state.breakLength > minLength
          ? state.breakLength - 1
          : state.breakLength,
    })),
  paused: true,
  startTimer: () =>
    // TODO calculate end time
    // if we're coming from initial: it's just now + that many minutes
    // if we're coming from paused: it's now + remainingTime
    set((state) => ({
      ...handleStartTimer({
        initial: state.initial,
        sessionLength: state.sessionLength,
        breakLength: state.breakLength,
        remainingTime: state.remainingTime,
      })
    })),
  pauseTimer: () =>
    // TODO save current remaining time
    set((state) => ({
      paused: true,
    })),
  initial: true,
  resetState: () =>
    set({ sessionLength: 25, breakLength: 5, paused: true, initial: true }),
  remainingTime: {
    minutes: 69,
    seconds: 69,
  },
  setRemainingTimeFromTimeInterface: (remaining: TimeInterface) => {
    set({
      remainingTime: {
        minutes: remaining.minutes,
        seconds: remaining.seconds,
      }
    })
  },
  setRemainingTimeFromNumber: (remaining: number) => {
    set({
      remainingTime: {...convertMillisecondTimeToObject(remaining)}
    })
  },
  endTime: 0,
  setEndTimeFromNow: (addMinutes: number) => set(() => ({
    endTime: Date.now() + addMinutes * 60000,
  })),
  nextTimerIs: "break",
  toggleNextTimerIs: () => {
    set((state) => ({
      nextTimerIs: state.nextTimerIs === "break" ? "session" : "break",
    }))
  }
}));

export default useStore;
