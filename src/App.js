import "./App.css";
import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import ForgotPassword from "./components/accountBox/forgotPasswordForm";

import {motion} from "framer-motion"

const app = "forgot"


const AppContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ app }) => (app === "forgot" ? `#2a2a72` : `#fff`)};

  background-image: ${({ app }) =>
    app === "forgot"
      ? "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)"
      : `#fff`};

  overflow: hidden;
`;


  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      transition: { duration: 1.2 },
      x:"0"
    },
    // exit: {
    //   x: "-100vw",
    //   transition: { ease: "easeInOut" },
    // },
  };


function App() {
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  let location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/home">
            <AppContainer
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              // exit="exit"
            >
              {" "}
              {/* <Home /> */}
            </AppContainer>
          </Route>
          <Route path="/forgot-password">
            <AppContainer
              app="forgot"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              // exit="exit"
            >
              <ForgotPassword />
            </AppContainer>
          </Route>
          <Route path="/register">
            <AppContainer
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              // exit="exit"
            >
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
