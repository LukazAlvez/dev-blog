import { useState, useEffect } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { toast } from 'react-toastify';

import { HiLogout, HiPlus } from 'react-icons/hi';

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
import { Button } from '../../components/Button';
import { Post } from '../../components/Post';

import { Main, Form, Container } from './styles';
import { signOut } from 'firebase/auth';

export const Admin = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tag, setTag] = useState('Programação');
  const [hidden, setHidden] = useState(true);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{ color: [] }],
      ['image', 'video', 'link'],
    ],
  };

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
          body: doc.data().body,
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

    if (title === '' || body === '') {
      toast.error('Error, preencha todos os campos!');
      return;
    }

    addDoc(collection(db, 'posts'), {
      title: title,
      body: body,
      tag: tag,
      date: new Date(),
    })
      .then(() => {
        setHidden(true);
        setBody('');
        setTitle('');
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
      {hidden === true && (
        <Button
          style={{
            background: 'none',
            borderRadius: '50%',
            border: '2px solid #fff',
          }}
          onClick={() => setHidden(false)}
        >
          <HiPlus size={35} color={'#fff'} />
        </Button>
      )}

      {hidden === false && (
        <Form onSubmit={handlePost}>
          <label>Titulo da postagem:</label>
          <Input
            style={{ border: '1px solid #cccccc' }}
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
          <ReactQuill
            modules={modules}
            theme='snow'
            value={body}
            onChange={setBody}
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
      )}

      <Container>
        {posts.length > 0 ? (
          posts.map(post => (
            <Post
              id={post.id}
              key={post.id}
              title={post.title}
              body={post.body}
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
