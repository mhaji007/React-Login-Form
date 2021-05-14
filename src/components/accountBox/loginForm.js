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
import {authenticate} from "../helpers/auth";
import axios from "axios"


export function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    buttonText:"",
    error: "",
    success: "",
  });
  const { switchToRegister } = useContext(AccountContext);

  const { email, password, error, success } = state;

  const handleChange = (name) => (e) => {
       setState({
         ...state,
         error: "",
         success: "",
         [name]: e.target.value,
       });


  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, loading: true, buttonText: "Logging in..." });
    login();
  };

    const login = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/login`,
          {
            email,
            password,
          }
        );
        authenticate(response.data, () => {
          setState({
            ...state,
            email: "",
            password: "",
            buttonText: "Logged in",
            success: response.data.message,
            loading: false,
            redirectToReferer: true,
          });
        });
      } catch (error) {
        console.log(error);
        setState({
          ...state,
          buttonText: "Login",
          error: error.response.data.error,
          loading: false,
        });
      }
    };





  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      transition: { duration: 1.3 },
      x: "0",
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          value={email ||""}
          onChange={handleChange("email")}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password || ""}
          onChange={handleChange("password")}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="forgot-password">Forgot your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={handleSubmit}>
        Login
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToRegister}>
          Register
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
