// import react from 'react';
import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(null);

  const modalWindowHandler = () => setError(null);

  const submitHandler = e => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log('Both fields need to be filled');
      setError({
        title: 'Check username and age',
        message: 'Both fields need to be filled',
      });
      return;
    }

    if (enteredAge < 0) {
      console.log('please enter only positive numbers');
      setError({
        title: 'Check age',
        message: 'Age has to be a positive number bigger than 0',
      });
      return;
    }

    props.onAddHandler(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const usernameChangeHandler = e => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = e => {
    setEnteredAge(e.target.value);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          modalWindowConfirm={modalWindowHandler}
        ></ErrorModal>
      )}

      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter your name"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            placeholder="Enter your age"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
