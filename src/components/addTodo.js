import {useState} from 'react';
import { Form,Label,FormGroup,Input,Button } from 'reactstrap'
import axios from 'axios'

 export const  AddTodo = ()=> {
    const [taskName,setTaskName] = useState('')
    const [dueTime,setDueTime] = useState('')

    const onSubmit=(e)=>{
            e.preventDefault()
            const data = {task_name:taskName,due_time:dueTime,complete_status:false}
         
            axios.post('http://localhost:9000/api/todo',data)

          setTaskName('')
          setDueTime('')
    }


  return (
    <div  >

<Form  onSubmit={onSubmit}  inline>
<FormGroup>
<Label for="taskName">
    Task Name
    </Label>
    <Input
      id="taskName"
      name="taskName"
      placeholder="Task Name"
      type="text"
      value={taskName}
      onChange={e=>setTaskName(e.target.value)}
    />
  </FormGroup>
  
  <FormGroup>
    <Label for="dueTime">
      Due time
    </Label>
    <Input
      id="dueTime"
      name="dueTime"
      placeholder="Due time"
      type="time"
      value={dueTime}
      onChange={e=>setDueTime(e.target.value)}
    />
  </FormGroup>
  

        <div>
        <Button color="primary">
             Add Todo
        </Button>
        </div>

 </Form>
      
    </div>
  );
}

