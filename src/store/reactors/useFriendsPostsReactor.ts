import React from 'react';
import useStore from '../useStore';

export const useFriendsPostsReactor = () => {
  const friends = useStore((state: any) => state.friends);
  const posts = useStore((state: any) => state.posts);
  const postsFromFriends = useStore((state: any) => state.postsFromFriends);
  const filterPostsByFriends = useStore(
    (state: any) => state.filterPostsByFriends
  );

  React.useEffect(() => {
    filterPostsByFriends();
  }, [filterPostsByFriends, friends, posts]);

  return postsFromFriends;
};
