import { useState } from "react"
import {AddCategory, GifGrid } from "./components"; 

export const GifExpertApp =()=> {

  const [categoires, setCategoires] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if (categoires.includes(newCategory)){alert('Ya existe esa categoría'); return;} // Check if the category already exists
    setCategoires([...categoires, newCategory]);  
  }

  return ( 
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
         onNewCategory={onAddCategory} //Le pasamos la función para agregar una nueva categoría 
         />

        <h3>Categorías</h3>
        <ol>
          {categoires.map(category =>(
            <GifGrid 
              key={category} 
              category={category} />
          ))}
        </ol>
    </>
  )
}
