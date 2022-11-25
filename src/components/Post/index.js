import html from 'react-inner-html';

import { Container, Hover, Date, Text, Main } from './styles';

export const Post = props => {
  return (
    <Main>
      <Hover href={`/post/${props.id}`}>
        <Container>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Date>
            <time>{props.date}</time>
          </Date>
          <h2 style={{ fontSize: '32px' }}>{props.title}</h2>
          <Text {...html(props.body)} />
          {console.log(props)}
          <span>
            <b>Tag: </b>
            {props.tag}
          </span>
        </Container>
      </Hover>
      {props.children}
    </Main>
  );
};
