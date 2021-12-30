import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  width: 600px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Container = (props: Props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
