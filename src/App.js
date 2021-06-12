import React from "react";
import { GlobalStyle } from "./global-styles";
import "./App.css";
import {
  MainWrapper,
  Logo,
  TextWrapper,
  TitleText,
  SubText,
  Button,
} from "./app-style";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Logo src="/images/logo-red.svg" />
        <TextWrapper>
          <TitleText>COMING SOON</TitleText>
          <SubText>
            We will be launchign our website in a few days, and you'll be able
            to place orders. If you want to be the first to know, join the
            mailing list.
          </SubText>
        </TextWrapper>
        <Button>JOIN THE WAITLIST</Button>
      </MainWrapper>
    </>
  );
}

export default App;
