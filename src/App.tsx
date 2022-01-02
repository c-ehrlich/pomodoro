import "./App.css";
import useStore from "./store";
import styled from "styled-components";
import Container from "./components/Container";
import SetDuration from "./components/SetDuration";
import Timer from "./components/Timer";
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

  return (
    <StyledApp className="App">
      <Container>
        <Timer />
        <SetDuration />
        <ButtonRow>
          {paused ? (
            <BottomRowButton icon={faPlay} onClick={startTimer} passdownId="start_stop" />
          ) : (
            <BottomRowButton icon={faPause} onClick={pauseTimer} passdownId="start_stop" />
          )}
          <BottomRowButton icon={faRedoAlt} onClick={resetState} passdownId="reset" />
        </ButtonRow>
      </Container>
    </StyledApp>
  );
}

export default App;
