import React, { useState } from "react";
import "./todo.css";
import { FcTodoList } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { FcEditImage } from "react-icons/fc";

function Todo() {
  const [inputTodo, setInputTodo] = useState("");
  const [items, setItems] = useState([]);

  const handleTodoInput = (event) => {
    let todoName = event.target.value;
    setInputTodo(todoName);
  };

  const addItem = () => {
    setItems([...items, inputTodo]);
    setInputTodo("");
  };

  const handleDelete = (id) => {
    console.log(id);
    let updatedTodos = items.filter((elm, index) => {
      return index !== id;
    });
    setItems(updatedTodos);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <div className="todo-container">
      <div className="todo">
        <div className="icon">
          <FcTodoList />
        </div>

        <h1>Add your todos here</h1>

        <div className="input-field">
          <input
            type="text"
            placeholder="Enter your Todo"
            value={inputTodo}
            onChange={(event) => handleTodoInput(event)}
          />
          <button className="addTodos" onClick={addItem}>
            Add Todos
          </button>
        </div>

        <div className="showItems">
          {items.map((item, index) => {
            return (
              <>
                <div className="eachItems flex" key={item.index}>
                  <h3>{item}</h3>

                  <MdDelete
                    className="showIcons"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </>
            );
          })}

        </div>

        <div className="btn-submit">
          <button className="removeAll" onClick={removeAll}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
