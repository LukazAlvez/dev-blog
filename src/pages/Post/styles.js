import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const Article = styled.article`
  width: 700px;
  max-width: 90%;

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    text-align: justify;
    padding-bottom: 10px;
  }

  h1 {
    font-size: 25px;
    padding: 10px 0;
  }
`;
