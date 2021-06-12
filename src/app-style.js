import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("/images/tea-bag-mockup.png");
  background-size: cover;
  background-position: left center;

  @media only screen and (max-width: 600px) {
    background-position: 10%;
  }
`;

export const Logo = styled.img`
  width: 7rem;
  padding-top: 1rem;
  padding-left: 2rem;
`;

export const TextWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-top: 15vh;
  margin-left: 2rem;

  @media only screen and (max-width: 600px) {
    width: 200px;
  }
`;

export const TitleText = styled.h1`
  font-family: "Roboto Condensed";
  font-size: 6rem;
  line-height: 1;
  font-weight: 300;

  @media only screen and (max-width: 600px) {
    font-size: 4rem;
  }
`;

export const SubText = styled.p`
  margin-top: 1rem;
  line-height: 1.2;
`;

export const Button = styled.button`
  margin-top: 2rem;
  margin-left: 2rem;
  font-family: "Roboto Condensed";
  font-size: 1rem;
  background-color: #d02e2e;
  color: #fff;

  &:hover {
    background-color: #157813;
  }
`;
