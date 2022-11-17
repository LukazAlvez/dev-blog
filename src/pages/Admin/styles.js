import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Form = styled.form`
  width: 700px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  select {
    margin-top: 10px;
    padding: 5px;
    outline: none;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 3px;
    color: #fff;
    font-weight: 600;
  }
  select option {
    background-color: #222222;
  }
`;
