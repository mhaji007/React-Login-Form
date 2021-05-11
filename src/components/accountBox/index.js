import React from "react";

import styled from "styled-components";

const BoxContainer = styled.div`
  width: 250px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.2);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled.div`
  width: 160%;
  height: 510px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(59deg);
  top: -290px;
  left: -70px;
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
`;

export function AccountBox(props) {
  return (
    <BoxContainer>
      <TopContainer>
        <BackDrop />
      </TopContainer>
    </BoxContainer>
  );
}
