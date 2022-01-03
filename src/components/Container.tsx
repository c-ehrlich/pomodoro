import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  // width: 600px;
  padding: 32px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 1);
`;

const Container = (props: Props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
