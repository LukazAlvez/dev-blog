import { Link } from 'react-router-dom';

import { Container } from './styles';

export const Error = () => {
  return (
    <Container>
      <h1>Pagina não encontrada!</h1>
      <Link to='/'>Retornar para pagina inicial</Link>
    </Container>
  );
};
