



import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList";

var destination = document.querySelector('#container');

const root = ReactDOM.createRoot(destination);
root.render(
  <TodoList/>
);