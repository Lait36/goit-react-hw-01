import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import friends from "../../friendList.json";
import FriendList from "../FriendList/FriendList";
export default function App() {
  return (
    <div>
      <Profile userData={userData} />
      <FriendList item={friends} />
    </div>
  );
}
