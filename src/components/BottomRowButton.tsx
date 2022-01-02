import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const StyledBottomRowButton = styled.button`
  width: 32px;
  height: 32px;
`;

interface Props {
  icon: IconDefinition;
  onClick: () => void;
  passdownId?: string;
}

const BottomRowButton = (props: Props) => {
  return (
    <StyledBottomRowButton onClick={props.onClick} id={props.passdownId}>
      <FontAwesomeIcon icon={props.icon} />
    </StyledBottomRowButton>
  )
}

export default BottomRowButton
