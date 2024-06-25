import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import friends from "../../friendList.json";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import items from "../../transactionHistory.json";
export default function App() {
  return (
    <div>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
}
