import "./App.css";
import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import ForgotPassword from "./components/accountBox/forgotPasswordForm";

const app = "forgot"


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ app }) => (app === "forgot" ? `#2a2a72` : `#fff`)};


  background-image: ${({ app }) => (app === "forgot" ? "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)" : `#fff`)};




  overflow: hidden;
`;

function App() {
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  let location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/home">
            <AppContainer> {/* <Home /> */}</AppContainer>
          </Route>
          <Route path="/forgot-password">
            <AppContainer app="forgot">
              <ForgotPassword />
            </AppContainer>
          </Route>
          <Route path="/register">
            <AppContainer>
              {" "}
              <AccountBox />
            </AppContainer>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
