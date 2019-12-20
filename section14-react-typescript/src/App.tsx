import React from 'react';

import TodoList from './components/TodoList';

// A contsant variable that stores/executes a function.
// React.FC is a custom type that is a Functional Component interface. Also have has ClassicalComponet for classes.
const App: React.FC = () => {
  const todos =[{id: 't1', text: 'Finish the course'}]

  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
}

export default App;
