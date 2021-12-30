import "./App.css";
import styled from "styled-components";
import Container from "./components/Container";
import SetDuration from "./components/SetDuration";
import Timer from "./components/Timer";
import ButtonRow from "./components/ButtonRow";
import ButtonInput from "./components/ButtonInput";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <StyledApp className="App">
      <Container>
        <Timer />
        <SetDuration />
        <ButtonRow>
          <ButtonInput />
          <div>hello</div>
        </ButtonRow>
      </Container>
    </StyledApp>
  );
}

export default App;
