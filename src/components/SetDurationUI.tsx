import styled from "styled-components";
import "@fontsource/roboto/300.css";

const StyledSetDurationUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const RowDescription = styled.div`
  font-family: "Roboto";
  font-weight: 300;
  text-transform: capitalize;
`;

const AdjustRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-family: "Roboto";
`;

const AdjustNumber = styled.div`
  width: 16px;
  text-align: center;
`;

interface Props {
  unit: string;
  value: number;
  increment: () => void;
  decrement: () => void;
}

const SetDurationUI = (props: Props) => {
  return (
    <StyledSetDurationUI>
      <RowDescription id={`${props.unit}-label`}>{props.unit}</RowDescription>
      <AdjustRow>
        <button id={`${props.unit}-decrement`} onClick={props.decrement}>-</button>
        <AdjustNumber id={`${props.unit}-length`}>{props.value}</AdjustNumber>
        <button id={`${props.unit}-increment`} onClick={props.increment}>+</button>
      </AdjustRow>
    </StyledSetDurationUI>
  )
}

export default SetDurationUI
