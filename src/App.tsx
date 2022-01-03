import "./App.css";
import useStore from "./store";
import styled from "styled-components";
import Container from "./components/Container";
import SetDuration from "./components/SetDuration";
import Timer from "./components/Timer";
import Title from "./components/Title";
import ButtonRow from "./components/ButtonRow";
import BottomRowButton from "./components/BottomRowButton";
import { faPause, faPlay, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const resetState = useStore((state) => state.resetState);
  const startTimer = useStore((state) => state.startTimer);
  const pauseTimer = useStore((state) => state.pauseTimer);
  const paused = useStore((state) => state.paused);

  const resetStateFn = () => {
    const audio = (document.querySelector('#beep') as HTMLAudioElement);
    audio.pause();
    audio.currentTime = 0;
    resetState();
  }

  return (
    <StyledApp className="App">
      <Container>
        <Title />
        <Timer />
        <SetDuration />
        <ButtonRow>
          {paused ? (
            <BottomRowButton icon={faPlay} onClick={startTimer} passdownId="start_stop" label="Start" />
          ) : (
            <BottomRowButton icon={faPause} onClick={pauseTimer} passdownId="start_stop" label="Pause" />
          )}
          <BottomRowButton icon={faRedoAlt} onClick={resetStateFn} passdownId="reset" label="Reset" />
        </ButtonRow>
      </Container>
    </StyledApp>
  );
}

export default App;
