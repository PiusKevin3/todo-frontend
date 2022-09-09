import {useState,useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import {TodoListItem} from "./todoListItem"

export  function  TodoList(){
 
   const [todos,setTodos] = useState('')
 

  useEffect(()=>{
      axios.get(`http://localhost:9000/api/show_todos`)
      .then(response=>{
        setTodos(response.data.resData)

      })
      .catch(err=>err)
  },[todos])



    return (
     <div>
        {todos?todos.map(todo=>(<div key={todo.id} ><TodoListItem  itemData={todo} /></div>))        
            :(<h4>Please create some Todo's!</h4>)}
            
     </div>
    );

}