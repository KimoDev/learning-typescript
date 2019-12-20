import React, { useRef } from 'react';

interface propTypes {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<propTypes> = props => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // we add a ! as this could be possible null logically. However, we are pointing to this function 
    // through submitting the form and can be sure it will not be null;
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
        <label htmlFor="todo-text">Enter a todo </label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      <button type="submit">ADD TODO</button>
    </form>
  )
}

export default NewTodo;