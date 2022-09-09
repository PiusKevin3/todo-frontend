import {  useState, useEffect } from 'react'
import { Collapse, Navbar, Nav, NavItem, NavLink, Row, Col,TabContent, TabPane } from 'reactstrap'
import axios from 'axios'
import {AddTodo} from "./addTodo"
import {TodoList} from "./todoList"
import {DoneTodoList} from "./doneTodos"

export function TabBar(props) {
 
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('1')

const toggle = tab => {
  if (active !== tab) {
    setActive(tab)
  }
}



  return (
  
    <div  className="container"  >
 
    <div className="row justify-content-md-center" >
    <h3>Todo Platform</h3>

        <Row>
          <Col sm='12'>

                
                      <Navbar className='col-md-auto justify-content-md-center justify-content-md-between w-100 mb-2' expand='md' light>
                     
                      <Collapse isOpen={isOpen} navbar>
                          <div className=' d-flex justify-content-between flex-wrap mt-1 mt-md-0'>
                          <Nav className='mb-0' pills>
                              <NavItem>
                              <NavLink className='font-weight-bold' 
                               href="#"
                                active={active === '1'}
                                onClick={() => {
                                  toggle('1')
                                }}
                              
                              >
                                
                                  <span className='d-none d-md-block'> Todo List </span>
                              </NavLink>
                              </NavItem>

                              <NavItem>
                              <NavLink className='font-weight-bold' 
                               href="#"
                                active={active === '2'}
                                onClick={() => {
                                  toggle('2')
                                }}
                              
                              >                                
                                          <span className='d-none d-md-block'>Done Todo's</span>
                              </NavLink>
                              </NavItem>
                              <NavItem>
                              <NavLink className='font-weight-bold' 
                               href="#"
                                active={active === '3'}
                                onClick={() => {
                                  toggle('3')
                                }}
                              
                              >                                
                                          <span className='d-none d-md-block'>Add Todo</span>
                              </NavLink>
                              </NavItem>

                              
                          </Nav>
                         
                          </div>
                      </Collapse>
                      </Navbar>
            


          </Col>
        </Row>
        </div>


        <TabContent activeTab={active}>
      <TabPane tabId='1'>
              <TodoList/>
      </TabPane>

      <TabPane tabId='2'>
              <DoneTodoList/>
      </TabPane>
      <TabPane tabId='3'>
                                  <AddTodo/>
      </TabPane>


     
     
    </TabContent>

  
  </div>
  );
}

