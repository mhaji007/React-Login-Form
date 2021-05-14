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

export function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
  });
  const { switchToRegister } = useContext(AccountContext);

  const { email, password, error, success } = state;

  const handleSubmit = () => {
    console.log("Submitting...");
  };

  const handleChange = (name) => (e) => {
    setState({ [name]: e.target.value });


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
