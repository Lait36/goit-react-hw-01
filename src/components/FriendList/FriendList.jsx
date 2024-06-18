import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
export default function friendList({item}) {
  return (
    <ul className={css.container}>
      {item.map((friends) => (
        <li key={friends.id}>
          <FriendListItem friends={friends} />
        </li>
      ))}
    </ul>
  );
}
