import { useState } from 'react';

import { toast } from 'react-toastify';

import { db } from '../../services/firebase';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore';

import { NavBar } from '../../components/NavBar';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';

import { Main, Form } from './styles';

export const Admin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('Programação');

  const handlePost = e => {
    e.preventDefault();

    if (title === '' || content === '') {
      toast.error('Error, preencha todos os campos!');
      return;
    }

    addDoc(collection(db, 'posts'), {
      title: title,
      content: content,
      tag: tag,
      date: new Date(),
    })
      .then(() => {
        setContent('');
        setTitle('');
        toast.success('Postagem adicionada com sucesso!');
      })
      .catch(error => {
        toast.error('Erro ao salvar  o post!');
      });
  };

  return (
    <Main>
      <NavBar />
      <h2>Adicionar postagem</h2>
      <Form onSubmit={handlePost}>
        <label>Titulo da postagem:</label>
        <Input
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <label>Conteúdo da postagem:</label>
        <TextArea
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
        />
        <select
          name='tag'
          value={tag}
          onChange={e => {
            setTag(e.target.value);
          }}
        >
          <option value='Programação'>Progrmação</option>
          <option value='Jogos'>Jogos</option>
          <option value='Filmes'>Filmes</option>
        </select>
        <Button type='submit'>Postar</Button>
      </Form>
    </Main>
  );
};
