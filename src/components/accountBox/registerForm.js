import React, { useState, useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function RegisterForm(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
  });
  const { switchToLogin } = useContext(AccountContext);

  const { name, email, password, error, success } = state;

  const handleChange = (name) => (e) => {
    console.log(name);

    setState({
      [name]: e.target.value,
    });
  };
  console.log("name==>", name);
  console.log("password==>", password);
  console.log("email==>", email);

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChange("name")}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange("email")}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange("password")}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forgot your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Register</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?{" "}
        <BoldLink href="#" onClick={switchToLogin}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
