import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';
import './style/TodoListItem.scss';


const initialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "Write app", complete: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      } 
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, {text: newTodo, complete: false}]);
  }


  return ( 
  <React.Fragment >
    <div className="center">
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddTodoForm addTodo={addTodo}/>
    </div>
  </React.Fragment>
  );
}

export default App;
