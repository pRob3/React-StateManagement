import * as React from 'react';
import { useFriendsPostsReactor } from '../store/reactors/useFriendsPostsReactor';
import useStore from '../store/useStore';

const Posts = () => {
  const fetchPosts = useStore((state: any) => state.fetchPosts);
  const posts = useFriendsPostsReactor();

  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h4>Posts</h4>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
