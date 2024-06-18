import css from "./FriendListItem.module.css";
import clsx from "clsx";
export default function Profile({ friends: { avatar, name, isOnline } }) {
  const isOnlineClsx = clsx(css.text, isOnline ? css.online : css.offline);
  return (
    <div className={css.container}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p className={isOnlineClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
