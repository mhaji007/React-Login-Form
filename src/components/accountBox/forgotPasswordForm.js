import React from "react";
import styled from "styled-components";





import {

  BoxContainer,
  FormContainer,
  Input,

  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";



export const ForgotPasswordFormContainer = styled.form`
  width: 35%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  border-radius: 0.5rem;
`;


const ForgotPasswordInput = styled(Input)`
  border-radius: 0.5rem;
`;

export const ForgotPasswordSubmitButton = styled.button`
  /* z-index: 11; */

  padding: 14px 18px;
  color: #fff;

  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #08679f);

  &:hover {
    filter: brightness(1.03);
  }
`;



const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;
const HeaderText = styled.h2`
  color: #fff;
  font-size: 35px;
  font-weight: 600;
  line-height: 1.24;
  margin: 0;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
`;
const SmallText = styled.h4`
  font-size: 22px;
  margin-bottom: 0;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
`;
const SubText = styled.h6`
  font-size: 14px;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
`;


const Icon = styled.img.attrs({
  src: "forgot.png"
})`
width: 80px;
height: 80px;
margin-bottom:15px;
`

const handleSubmit = () => {
  console.log("Submitting...");
};

 function ForgotPasswordForm(props) {


  return (
    <BoxContainer>
      <HeaderContainer>
        {/* <Icon/> */}
        <HeaderText>Forgot Your Password?</HeaderText>

        <SmallText>Don't worry, we got you.</SmallText>
        <SubText>Enter the email associated with your account</SubText>
      </HeaderContainer>

      <ForgotPasswordFormContainer>
        <ForgotPasswordInput type="email" placeholder="Email" />
      </ForgotPasswordFormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <ForgotPasswordSubmitButton type="submit" onClick={handleSubmit}>
        Send Request
      </ForgotPasswordSubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}

export default ForgotPasswordForm;
