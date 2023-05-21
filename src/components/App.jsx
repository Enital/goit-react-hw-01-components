import user from '../Data/user';
import data from '../Data/data.json';
import friends from '../Data/friends.json'
import transactions from '../Data/transactions.json';

import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FriendList from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: 16,
        padding: '50px 0',
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      
    <Statistics
      title="Upload stats" stats={data} />

    <FriendList friends={friends} />
    
    <TransactionHistory items={transactions} />
      </div>
    </>
  );
};