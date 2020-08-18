import React, { useState } from "react";
import Search from "./Search";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    setTodos([
      ...todos,
      {
        todo: text,
        checked: false,
      },
    ]);
  };

  const handleEdit = (text, index) => {
    let editedTodos = [...todos];
    editedTodos[index] = text;
    setTodos(editedTodos);
  };

  const handleDelete = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleChecked = (index) => {
    let newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], checked: !newTodos[index].checked };
    setTodos(newTodos);
  };

  return (
    <div>
      <Search onAdd={handleAdd} />
      <hr />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          index={index}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onChecked={handleChecked}
        />
      ))}
    </div>
  );
};

export default Todos;
