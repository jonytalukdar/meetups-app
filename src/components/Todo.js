const Todo = (props) => {
  const deleteHandler = () => {
    console.log('clicked');
    console.log(props.title);
  };

  return (
    <div className="card">
      <h3>{props.title}</h3>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
