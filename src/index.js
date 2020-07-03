import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";
const styles = {
  outline: "none",
  backgroundColor: "inherit"
};
const rootElement = document.getElementById("root");

let id = 0;

const Todo = props => (
  <li>
    <input type="checkbox" />
    <button onClick={props.onDelete}> delete</button>
    <span> {props.todo.text}</span>
  </li>
);

class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("TODO text please!");
    this.setState({
      // cloning the array
      todos: [...this.state.todos, { id: id++, text: text }]
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div>
        <button style={styles} onClick={() => this.addTodo()}>
          Add TODO
        </button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo onDelete={() => this.removeTodo(todo.id)} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  rootElement
);
