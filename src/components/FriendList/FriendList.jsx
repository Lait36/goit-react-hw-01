import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
export default function friendList({friends}) {
  return (
    <ul className={css.container}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
