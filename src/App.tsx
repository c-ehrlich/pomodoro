import "./App.css";
import styled from "styled-components";
import Container from "./components/Container";
import SetDurationUI from "./components/SetDurationUI";
import SetDuration from "./components/SetDuration";

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
        <SetDuration />
      </Container>
    </StyledApp>
  );
}

export default App;
