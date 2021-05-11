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
  width: 173%;
  height: 535px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(59deg);
  top: -290px;
  left: -70px;
  background-color: #2a2a72;
  background-image:  linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);

`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top:40px;
  bottom:40px;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;


const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  /* z-index: 10; */
  margin: 0;
  margin-top: 7px;
`;

export function AccountBox(props) {
  return (
    <BoxContainer>
      <TopContainer>
        <BackDrop />
        <HeaderContainer>
          <HeaderText>Welcome</HeaderText>
          <HeaderText>Back</HeaderText>
          <SmallText>Please sign-in to continue!</SmallText>
        </HeaderContainer>
      </TopContainer>
    </BoxContainer>
  );
}
