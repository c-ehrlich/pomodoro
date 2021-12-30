import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const StyledButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const ButtonRow = (props: Props) => {
  return <StyledButtonRow>{props.children}</StyledButtonRow>;
};

export default ButtonRow;
