const Todo = (props) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
};

export default Todo;
