import React, { useState } from 'react'
const Course = () => {

    const [items , setItems] = useState([]);
    const [course , setCourse] = useState('');
    const addItems = ()=>{
        if(course.trim() !==''){
        setItems([...items , course]);
        setCourse('');
        }
    }
    const delItems = (i)=>{
        const newItems = [...items];
        newItems.splice(i,1)
        setItems(newItems)
    }



 
   
   return (
      <div className='course'>
        <h1>Select Course</h1>
        <select onChange={(e)=>{
            setCourse(e.target.value)

        }}>
            <option value={course}>select</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>JAVASCRIPT</option>
            <option>REACT JS</option>
        </select>
        <button id="add" onClick={addItems}>ADD</button>
        <div className='tbl'>
        <table border="1px">
            <tbody>
            {items.map((item, index) => (
                <tr key={index}> 
                <td>{item} </td>
                <td><button onClick={() => delItems(index)}><u>Delete</u></button></td>
                  </tr>
                  ))}


            </tbody>
            </table>

        </div>
      
        
       
          
      
          
            
        
      
         </div>
    );
}

export default Course
