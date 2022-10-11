import * as React from 'react';
import useStore from '../store/useStore';

const Users = () => {
  const users = useStore((state: any) => state.users);
  const fetchUsers = useStore((state: any) => state.fetchUsers);
  const addToFriends = useStore((state: any) => state.addToFriends);

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h4>Users</h4>
      <ul>
        {users.map((user: any) => (
          <li key={user.id} onClick={() => addToFriends(user)}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
