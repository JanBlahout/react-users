import Card from '../UI/Card';
import User from './User';
import classes from './UserList.module.css';

const UserList = props => {
  return (
    <Card className={classes.users}>
      <ul>
        <h3>Users</h3>
        {props.users.map(user => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
            onDelete={props.onDeleteUser}
          >
            {props.children}
          </User>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
