import React from "react";
import Profile from './Profile/Profile.js'
import user from "./Profile/profiles.json"
import data from "./Statistics/statistical-data.json"
import Statistic from "./Statistics/Statistics.js"
import transactions from "./TransactionsHistory/transactions.json"
import TransactionHistory from "./TransactionsHistory/Transactions.js"
import friends from "./FriendList/friend-list.json"
import FriendList from "./FriendList/FriendList.js"
import './App.css';

function App() {
return(
  <>
<Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistic title="Upload stats" stats={data} />;

<TransactionHistory items={transactions} />;
<FriendList friends={friends} />,

</>
)
}

export default App;