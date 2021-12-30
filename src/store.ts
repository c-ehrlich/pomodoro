import create from "zustand";

const maxLength: number = 100;
const minLength: number = 1;

interface PomodoroState {
  sessionLength: number;
  sessionIncrement: () => void;
  sessionDecrement: () => void;
  breakLength: number;
  breakIncrement: () => void;
  breakDecrement: () => void;
  paused: boolean;
  togglePaused: () => void;
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
  togglePaused: () => set((state) => ({ paused: !state.paused })),
}));

export default useStore;
