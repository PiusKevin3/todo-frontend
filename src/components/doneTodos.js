import {useState,useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import {TodoListItem} from "./todoListItem"

export  function  DoneTodoList(){
 
   const [todos,setTodos] = useState('') 

  useEffect(()=>{
      axios.get(`http://localhost:9000/api/done_todos`)
      .then(response=>{
        setTodos(response.data.resData)

      })
      .catch(err=>err)
  },[todos])



    return (
     <div>
        {todos?todos.map(todo=>(<TodoListItem  itemData={todo} />))        
            :(<h4>Please create some Todo's!</h4>)}
            
     </div>
    );

}