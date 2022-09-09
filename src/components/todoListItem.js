import { Container,Row,Col, NavLink} from 'reactstrap'
import axios from 'axios';


export  function  TodoListItem({itemData}){

    const completeTodo =(todoDetails)=>{
        itemData.complete_status = true
        const completedTodo = itemData
        axios.post(`http://localhost:9000/api/todo/${todoDetails.id}`,completedTodo)
    }

    const deleteTodo =(todoDetails)=>{
               axios.delete(`http://localhost:9000/api/todo/${todoDetails.id}`)
    }


    return (
     <div >
<Container>

<Row
    className="bg-success"
    md="12"
    sm="12"
    xs="12"
  >
  {itemData?(
     <div className="d-flex flex-row">

    
        <Col className="bg-light text-dark p-2" >
            {itemData.task_name}
        </Col>
        <Col className="bg-light text-dark p-2">
            {itemData.due_time}
        </Col>
        <Col className="bg-light p-2">
             <div onClick={()=>completeTodo(itemData)} >
                  {!itemData.complete_status?<NavLink href='#' className=" text-success" >COMPLETE</NavLink>:<NavLink href='#' className=" text-dark" >COMPLETED</NavLink>}
             </div>
        </Col>
        <Col className="bg-light text-danger p-2">
            <div onClick={()=>deleteTodo(itemData)} >
                  <NavLink href='#'>DELETE</NavLink>
             </div>
        </Col>

        <hr  />
     </div>

  ):null}
   
  </Row>
</Container>
     </div>
    );

}