const User = props => {
  const deleteHandler = () => {
    console.log(props);
    console.log(props.id);
    props.onDelete(props.id);
  };

  return (
    <li onClick={deleteHandler}>
      {props.name} is {props.age} years old
    </li>
  );
};

export default User;
