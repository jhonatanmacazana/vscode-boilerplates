import styled from "styled-components";

export const IntroWrapper = styled.div`
  margin: 125px auto 94px;
  display: flex;
  box-sizing: border-box;
  width: 880px;
  max-width: 100%;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 850px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    margin-top: 40px;
    margin-bottom: 50px;
  }
`;

export const LineBreak = styled.div`
  border-bottom: 1px solid rgba(62, 62, 225, 0.12);
`;
