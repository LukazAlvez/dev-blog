import { Container, Hover } from './styles';

export const Post = props => {
  return (
    <Hover href={props.ref}>
      <Container>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <span>
          <b>Tags: </b>
          javascript
        </span>
      </Container>
    </Hover>
  );
};
