import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "@fontsource/roboto/300.css";

const StyledBottomRowButton = styled.button`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
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
