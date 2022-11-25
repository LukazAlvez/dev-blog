import { useState } from 'react';

import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Main } from './styles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    if (email === '' || password === '') {
      toast.error('Preencha todos os campos');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Bem vindo de volta🖖');
        navigate('/admin', { replace: true });
      })
      .catch(error => {
        toast.error('Erro ao tentar fazer login!');
      });
  };

  return (
    <Main>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <Input
          placeholder='Email'
          type='email'
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder='Senha'
          type='password'
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <Button>Entrar</Button>
      </form>
    </Main>
  );
};
