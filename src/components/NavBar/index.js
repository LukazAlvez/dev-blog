import { Link } from 'react-router-dom';

import { Nav } from './styles';

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>
        <h1>Dev Blog</h1>
      </Link>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul>
    </Nav>
  );
};
