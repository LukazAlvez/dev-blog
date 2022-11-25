import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import { HiLogout } from 'react-icons/hi';

import { auth, db } from '../../services/firebase';
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
import { Post } from '../../components/Post';

import { Main, Form, Container } from './styles';
import { signOut } from 'firebase/auth';

export const Admin = () => {
  const [title, setTitle] = useState('');
  const [imgLink, setImgLink] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('Programação');

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postRef = collection(db, 'posts');
    const queryRef = query(postRef, orderBy('date', 'desc'));

    onSnapshot(queryRef, snapshot => {
      let postList = [];

      snapshot.forEach(doc => {
        let date = new Date(doc.data().date.seconds * 1000);
        postList.push({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          tag: doc.data().tag,
          date:
            date.getHours() +
            ':' +
            date.getMinutes() +
            ', ' +
            date.toDateString(),
        });
        setPosts(postList);
      });
    });
  }, []);

  const handleDelete = id => {
    const postRef = doc(db, 'posts', id);
    deleteDoc(postRef)
      .then(() => {
        toast.success('Post deletado com sucesso!');
      })
      .catch(error => {
        toast.error('Erro ao deletar o post!');
      });
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handlePost = e => {
    e.preventDefault();

    if (title === '' || content === '') {
      toast.error('Error, preencha todos os campos!');
      return;
    }

    addDoc(collection(db, 'posts'), {
      title: title,
      img: imgLink,
      content: content,
      tag: tag,
      date: new Date(),
    })
      .then(() => {
        setContent('');
        setTitle('');
        setImgLink('');
        toast.success('Postagem adicionada com sucesso!');
      })
      .catch(error => {
        toast.error('Erro ao salvar  o post!');
      });
  };

  return (
    <Main>
      <NavBar>
        <li>
          <button onClick={handleLogout}>
            <HiLogout size={17} />
          </button>
        </li>
      </NavBar>
      <h1>Adicionar postagem</h1>
      <Form onSubmit={handlePost}>
        <label>Titulo da postagem:</label>
        <Input
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <label>Link imagem do post:</label>
        <Input
          value={imgLink}
          onChange={e => {
            setImgLink(e.target.value);
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
      <Container>
        {posts.length > 0 ? (
          posts.map(post => (
            <Post
              id={post.id}
              key={post.id}
              title={post.title}
              text={post.content}
              tag={post.tag}
              date={post.date}
            >
              <Button onClick={() => handleDelete(post.id)}>delete</Button>
            </Post>
          ))
        ) : (
          <p>Não há postagens!</p>
        )}
      </Container>
    </Main>
  );
};
