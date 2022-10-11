export const createUserSlice = (set: any, get: any) => ({
  users: [],
  friends: [],
  fetchUsers: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    set({ users: await response.json() });
  },
  addToFriends: (user: user) => {
    set({
      friends: [...(new Set([...get().friends, user]) as any)],
    });
  },
  removeUserFromFriends: (userId: number) => {
    set({
      friends: get().friends.filter((friend: user) => friend.id !== userId),
    });
  },
});

interface user {
  id: number;
  name: string;
}

// interface model {
//   users: user[];
//   friends: user[];
//   fetchUsers: () => Promise<void>;
//   addToFriends: () => void;
// }

// interface user {
//   users: number;
//   friends: string;
// }
