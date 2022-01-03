import styled from "styled-components"
import "@fontsource/roboto/700.css";

const StyledTitle = styled.h1`
  font-family: "Roboto", "sans-serif";
  font-weight: 700;
  margin: 0px 16px;
`;

const Title = () => {
  return (
    <StyledTitle>Pomodoro Clock</StyledTitle>
  )
}

export default Title
