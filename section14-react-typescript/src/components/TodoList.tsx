import React from 'react';

// without a generic interface(propTypes) the component would not see the props passed to it from App.tsx.
interface propTypes {
  items: {id: string, text: string}[];
}

// React.FC is a generic type. Allowing us to define all extra props to this component. (besides default children prop)
// @propTypes - An interface to define our extra props and their types. 
const TodoList: React.FC<propTypes> = props => {
  return <ul>
    {props.items.map(todo => <li key={todo.id}>{todo.text}</li>)}
  </ul>
};

export default TodoList;