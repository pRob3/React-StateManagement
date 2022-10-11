import useStore from '../store/useStore';

const Friends2 = () => {
  const friends = useStore((state: any) => state.friends);
  const removeUserFromFriends = useStore(
    (state: any) => state.removeUserFromFriends
  );

  return (
    <div>
      <h4>Friends ({friends.length})</h4>
      <div>
        {friends.map((friend: any) => (
          <span key={friend.id}>
            {friend.name}
            <button onClick={() => removeUserFromFriends(friend.id)}>x</button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Friends2;
