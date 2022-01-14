import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  padding: 32px;
  background-color: rgb(217, 108, 104);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
`;

const Container = (props: Props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
