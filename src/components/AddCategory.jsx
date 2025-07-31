
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('One Punch');
    
    const onInputChange = ({target}) => {
        setinputValue(target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return; // Prevent adding empty or short categories
        onNewCategory(inputValue.trim());
        setinputValue(''); // Clear the input after submission
    }

  return (
    <form onSubmit={onSubmit}>
        <h2>Add Category</h2>
        <input 
            type="text"
            placeholder="Buscar Gif"
            value={inputValue} 
            onChange={ onInputChange }
        />
    </form>
  );
};
