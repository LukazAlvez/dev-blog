import styled from 'styled-components';

export const Container = styled.article`
  padding: 20px;
  width: 100%;
  height: 100%;
  min-height: 150px;
  position: relative;
  border-radius: 3px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  margin-top: 20px;

  h2 {
    font-size: 25px;
    padding: 10px 0;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    text-align: justify;
    padding-bottom: 10px;
  }
  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 15px;
  }
`;

export const Hover = styled.a`
  cursor: pointer;

  & span:nth-child(1) {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: scaleX(0);
    transition: ease-in-out 0.2s;
  }
  & span:nth-child(2) {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: scaleX(0);
    transition: ease-in-out 0.2s;
  }
  & span:nth-child(3) {
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #fff;
    transform: scaleY(0);
    transition: ease-in-out 0.2s;
  }
  & span:nth-child(4) {
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #fff;
    transform: scaleY(0);
    transition: ease-in-out 0.2s;
  }

  &:hover {
    & span:nth-child(1) {
      transform: scaleX(1);
    }
    & span:nth-child(2) {
      transform: scaleX(1);
    }
    & span:nth-child(3) {
      transform: scaleY(1);
    }
    & span:nth-child(4) {
      transform: scaleY(1);
    }
  }
`;
