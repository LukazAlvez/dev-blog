import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  width: 100%;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  background: #111111;
  z-index: 1;
  ul {
    display: flex;
  }
  li {
    padding: 10px;
    list-style: none;
    transition: ease-in-out 0.2s;
  }
  li:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  p {
    font-size: 30px;
    font-weight: 700;
  }
`;
