import { useEffect, useState } from 'react';

import { db } from '../../services/firebase';
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';

import { NavBar } from '../../components/NavBar';
import { Post } from '../../components/Post';

import { Main, Container } from './styles';

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const linkRef = collection(db, 'posts');
    const queryRef = query(linkRef, orderBy('date', 'desc'));

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
      console.log(postList);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Main>
        <Container>
          {posts.map(post => (
            <Post
              id={post.id}
              key={post.id}
              title={post.title}
              text={post.content}
              tag={post.tag}
              date={post.date}
            />
          ))}
        </Container>
      </Main>
    </div>
  );
};
