import React from 'react';

import TodoList from './components/TodoList';

// A contsant variable that stores/executes a function.
// React.FC is a custom type that is a Functional Component interface. Also have has ClassicalComponet for classes.
const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
