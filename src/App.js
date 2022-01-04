import { useState } from 'react/cjs/react.development';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

const dummyData = [
  { id: 1, name: 'User1', age: 40 },
  { id: 2, name: 'user2', age: 32 },
];

function App() {
  const [userList, setUserList] = useState(dummyData);

  const addUserHandler = (userName, userAge) => {
    setUserList(prevState => {
      return [
        ...prevState,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
    // console.log(userList);
  };

  const deleteUserHandler = userID => {
    setUserList(prevState => {
      const filteredUsers = prevState.filter(user => user.id !== userID);
      return filteredUsers;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No users found. Maybe add one?</p>
  );

  if (userList.length > 0) {
    content = (
      <UserList users={userList} onDeleteUser={deleteUserHandler}></UserList>
    );
  }

  return (
    <div>
      <AddUser onAddHandler={addUserHandler}></AddUser>
      {content}
      {/* {userList.length > 0 && (
        <UserList users={userList} onDeleteUser={deleteUserHandler}></UserList>
      )} */}
      {/* <UserList users={userList} onDeleteUser={deleteUserHandler}></UserList> */}
    </div>
  );
}

export default App;
