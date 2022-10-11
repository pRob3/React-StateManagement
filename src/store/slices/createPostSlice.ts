export const createPostSlice = (set: any, get: any) => ({
  posts: [],
  postsFromFriends: [],
  fetchPosts: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    set({ posts: await res.json() });
  },
  filterPostsByFriends: () => {
    const postsFromFriends = get().posts.filter((post: any) =>
      get().friends.find((friend: any) => friend.id === post.userId)
    );

    set({ postsFromFriends });
  },
});
