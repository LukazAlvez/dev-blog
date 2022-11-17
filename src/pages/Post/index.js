import { NavBar } from '../../components/NavBar';

import { Main, Article } from './styles';

export const Post = () => {
  return (
    <div>
      <NavBar />
      <Main>
        <Article>
          <h1>Post</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            cupiditate excepturi. Quos beatae, et expedita voluptas minima,
            veniam labore enim molestiae vel aperiam dicta. Suscipit soluta
            alias ipsam officia magnam, voluptatibus eum cum similique aperiam
            totam, iste eligendi amet? Sapiente.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            cupiditate excepturi. Quos beatae, et expedita voluptas minima,
            veniam labore enim molestiae vel aperiam dicta. Suscipit soluta
            alias ipsam officia magnam, voluptatibus eum cum similique aperiam
            totam, iste eligendi amet? Sapiente.
          </p>
        </Article>
      </Main>
    </div>
  );
};
