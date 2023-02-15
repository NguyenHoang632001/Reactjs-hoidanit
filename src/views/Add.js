import React from "react";

class Add extends React.Component{
    state={
        content:'',
    }
    handleAdd=(e)=>
    {
        this.setState({
            content:e.target.value,
        })
    }
    add=(work)=>
    {
      
    this.props.handleToAddWork(work);
    this.setState({
        content:'',
    })

    }
    
    
    render(){
     
        return (
        
            <div>
            <input type='text' value={this.state.content} onChange={(e)=>{this.handleAdd(e)}}></input>
            <button type="button" onClick={()=>
            {
                this.add(this.state.content)
            }}>Add</button>
          </div>
         
     
        )
    }
}
export default Add;