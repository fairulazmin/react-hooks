import React, { useState } from "react";

const Search = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    props.onAdd(todo);
    setTodo("");
  };

  return (
    <div>
      <form>
        <label htmlFor="">What to do?</label>
        <br />
        <input type="text" value={todo} onChange={handleChange} />
        <input type="button" value="+" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Search;
