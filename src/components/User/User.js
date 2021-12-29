const User = props => {
  const deleteHandler = () => {
    console.log(props);
    console.log(props.id);
    props.onDelete(props.id);
  };

  return (
    <li onClick={deleteHandler}>
      Name:{props.name} Age:{props.age}
    </li>
  );
};

export default User;
