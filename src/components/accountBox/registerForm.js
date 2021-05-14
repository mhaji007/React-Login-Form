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
import axios from "axios"

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

  const handleSubmit = (e) => {
        e.preventDefault();
        setState({ ...state, buttonText: "Signing up..." });
        register();
  }


    const register = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/signup`,
          {
            name,
            email,
            password,
          }
        );
        setState({
          ...state,
          name: "",
          email: "",
          password: "",
          buttonText: "Signed up",
          success: response.data.message,
        });
      } catch (error) {
        console.log(error);
        setState({
          ...state,
          buttonText: "Sign up",
          error: error.response.data.error,
        });
      }
    };

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
      <MutedLink href="/forgot-password">Forgot your password?</MutedLink>
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
