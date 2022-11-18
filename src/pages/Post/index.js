import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { db } from '../../services/firebase';
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';

import { NavBar } from '../../components/NavBar';

import { Main, Article } from './styles';

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState('');

  useEffect(() => {
    const linkRef = collection(db, 'posts', id);
    const queryRef = query(linkRef);
    onSnapshot(queryRef, snapshot => {
      snapshot.forEach(doc => {
        let date = new Date(doc.data().date.seconds * 1000);
        setPost({
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
      });
      console.log(post);
    });
  }, []);

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
