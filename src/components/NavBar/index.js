import { Link } from 'react-router-dom';

import { Nav } from './styles';

export const NavBar = ({ children }) => {
  return (
    <Nav>
      <Link to='/'>
        <p>Dev Blog</p>
      </Link>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
        {children}
      </ul>
    </Nav>
  );
};
