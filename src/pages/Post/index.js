import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { db } from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';

import { NavBar } from '../../components/NavBar';

import { Main, Article } from './styles';

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState('');

  useEffect(() => {
    const postRef = doc(db, 'posts', id);

    getDoc(postRef)
      .then(doc => {
        setPost(doc.data());
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <div>
      <NavBar />
      <Main>
        <Article>
          <div style={{ backgroundImage: `url(${post.img})` }}>
            <h1>{post.title}</h1>
          </div>
          <p>{post.content}</p>
        </Article>
      </Main>
    </div>
  );
};
