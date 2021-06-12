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
  Copyright,
  Footer,
} from "./app-style";

function App() {
  const today = new Date();
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Logo src="/images/logo-red.svg" />
        <TextWrapper>
          <TitleText>COMING SOON</TitleText>
          <SubText>
            We will be launching our website in a few days, and you'll be able
            to place orders. If you want to be the first to know, join the
            mailing list.
          </SubText>
        </TextWrapper>
        <Button>JOIN THE WAITLIST</Button>
      </MainWrapper>
      <Footer>
        <Copyright>Copyright &copy; {today.getFullYear()} SixCanLife</Copyright>
      </Footer>
    </>
  );
}

export default App;
