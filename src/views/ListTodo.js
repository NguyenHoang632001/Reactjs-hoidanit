import React from "react";
import {  toast } from 'react-toastify';
import Add from './Add'
class ListTodo extends React.Component{
    state={
        todoList:[
          {id:1,title:'Play game'},
          {id:2,title:'Play volleyball'},
          {id:3,title:'Play chess'}
          
        ],
        editIdItem:'',
        todo:'',
      }
      add=()=>
      {
        toast.error('Success')

      }
      handleToAddWork=(work)=>
      {
        // if(work=''||work.length===0)
        // {
        //     toast.error('Missing paramater')
        // }else{
        //   this.setState({
        //     todoList:[...this.state.todoList,work]
        //    })
        //    toast.success('success')
        // }
        this.setState({
          todoList:[...this.state.todoList,work]
        })
      
      }
      handleToDelete=(work)=>
      {
        this.setState({
          todoList:this.state.todoList.filter((item)=>
          {
              return item!==work;
          })
        
        }) 
         toast.success('success to delete')
      }
      handleToEdit=(item)=>
      {
       this.setState({
        editIdItem:item.id,
        todo:item,
       })
      }
      handleToSave=()=>
      {
        this.setState({
          editIdItem:'',

        })
      }
      handleFixWork=(e)=>
      {
       
       
      }
    render()
    {
     
        return ( <div>
            <h2 className='todoListName'> To do List</h2>
          <Add
          handleToAddWork={this.handleToAddWork}
          />
          <div>
            {
              this.state.todoList.map((item,index)=>
              {
                return(
                  <div key={index}>
                    <span>{index+1}</span>
                    {this.state.editIdItem!==item.id?   <span>{item.title}</span>: <input type='text' value={item.title} onChange={(e)=>{this.handleFixWork(e)}}></input>}
                 
                  
                    {this.state.editIdItem!==item.id?  <button onClick={()=>this.handleToEdit(item)}>Edit</button>:  <button onClick={()=>this.handleToSave(item)}>Save</button>}
                
                    <button onClick={()=>{this.handleToDelete(item)}}>Delete</button>
                  </div>
                )
              })
            }
          </div>
            </div>)
    }
}
export default ListTodo;