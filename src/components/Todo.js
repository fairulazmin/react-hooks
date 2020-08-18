import React from "react";

const Todo = (props) => {
  const handleChecked = () => {
    props.onChecked(props.index);
  };

  const handleChange = (e) => {
    props.onEdit(e.target.value, props.index);
  };

  const handleDelete = () => {
    props.onDelete(props.index);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={handleChecked}
      />
      <input type="text" value={props.todo.todo} onChange={handleChange} />
      <input type="button" value="-" onClick={handleDelete} />
    </div>
  );
};

export default Todo;
