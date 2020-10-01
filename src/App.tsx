import React from 'react';
import { TodoListItem } from "./TodoListItem";
import { Todo } from './types';


const todos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "Write app", complete: false }
];

const App: React.FC = () => {
  return ( 
  <React.Fragment>
    <TodoListItem todo={todos[0]} />
    <TodoListItem todo={todos[1]} />
  </React.Fragment>
  );
}

export default App;
