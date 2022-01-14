import styled from "styled-components";
import "@fontsource/roboto/300.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const StyledSetDurationUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: white;
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
  width: 20px;
  text-align: center;
`;

const adjustButtonShadow: number = 4;
const AdjustButton = styled.button`

  background-color: white;
  color: rgb(218, 85, 80);
  border: none;
  border-radius: 4px;
  box-shadow: 0px ${adjustButtonShadow}px 0px rgb(235, 235, 235);
  margin-bottom: ${adjustButtonShadow}px;

  &:active {
    margin-top: ${adjustButtonShadow}px;
    margin-bottom: 0;
    box-shadow: none;
  }
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
        <AdjustButton id={`${props.unit}-decrement`} onClick={props.decrement}>
          <FontAwesomeIcon icon={faMinus} />
        </AdjustButton>
        <AdjustNumber id={`${props.unit}-length`}>{props.value}</AdjustNumber>
        <AdjustButton id={`${props.unit}-increment`} onClick={props.increment}>
          <FontAwesomeIcon icon={faPlus} />
        </AdjustButton>
      </AdjustRow>
    </StyledSetDurationUI>
  );
};

export default SetDurationUI;
