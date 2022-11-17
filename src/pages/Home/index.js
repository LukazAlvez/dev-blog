import { NavBar } from '../../components/NavBar';
import { Post } from '../../components/Post';

import { Main, Container } from './styles';

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Main>
        <Container>
          <Post
            title='Meu Post'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro maiores quaerat! Inventore labore doloribus, repellat est quo vero. Provident, aliquid recusandae aperiam inventore praesentium optio earum nemo saepe iure?'
          />
          <Post
            title='Meu Post'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro maiores quaerat! Inventore labore doloribus, repellat est quo vero. Provident, aliquid recusandae aperiam inventore praesentium optio earum nemo saepe iure?'
          />
          <Post
            title='Meu Post'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro maiores quaerat! Inventore labore doloribus, repellat est quo vero. Provident, aliquid recusandae aperiam inventore praesentium optio earum nemo saepe iure?'
          />
        </Container>
      </Main>
    </div>
  );
};
