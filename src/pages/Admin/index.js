import { NavBar } from '../../components/NavBar';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';

import { Main, Container } from './styles';

export const Admin = () => {
  return (
    <Main>
      <NavBar />
      <Container>
        <label>Titulo da postagem:</label>
        <Input />
        <label>Conteudo da postagem:</label>
        <TextArea />
        <Button>Postar</Button>
      </Container>
    </Main>
  );
};
