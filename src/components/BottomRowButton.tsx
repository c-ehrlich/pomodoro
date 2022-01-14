import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "@fontsource/roboto/300.css";

const buttonShadow: number = 6;

const StyledBottomRowButton = styled.button`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background-color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px ${buttonShadow}px 0px rgb(235, 235, 235);
  margin-bottom: ${buttonShadow}px;
  color: rgb(218, 85, 80);

  &:active {
    margin-top: ${buttonShadow}px;
    margin-bottom: 0;
    box-shadow: none;
  }
`;

const ButtonLabel = styled.div`
  width: 48px;
  font-family: "Roboto";
`;

interface Props {
  icon: IconDefinition;
  onClick: () => void;
  passdownId?: string;
  label: string;
}

const BottomRowButton = (props: Props) => {
  return (
    <StyledBottomRowButton onClick={props.onClick} id={props.passdownId}>
      <FontAwesomeIcon icon={props.icon} size="lg" />
      <ButtonLabel>{props.label}</ButtonLabel>
    </StyledBottomRowButton>
  );
};

export default BottomRowButton;
