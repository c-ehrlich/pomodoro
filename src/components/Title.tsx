import styled from "styled-components"
import "@fontsource/roboto/700.css";

const StyledTitle = styled.div`
  font-family: "Roboto", "sans-serif";
  font-weight: 700;
  margin: 0px 16px;
  color: white;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 24px;
`;

const Title = () => {
  return (
    <StyledTitle>Pomodoro Clock</StyledTitle>
  )
}

export default Title
