import React, { Component } from 'react'
import {connect} from "react-redux";
import {addTodo,deleteTodo} from "../redux/action/action"
import TodoList from "./TodoList";

export  class AddToDo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:"",
             err:""
        }
    }
    
    onChangeHandler=(e)=>{
        this.setState({
            text:e.target.value
        })
    }
    
    onClickHandler=(e)=>{
        e.preventDefault();
        if(this.state.text!==""){
            let id=Math.floor(Math.random()*100);
            this.props.addTodo({id, ...this.state});
            this.setState({
                text:"",
                err:""
            })
        }
        else{
            this.setState({
                err:"Provide a value"
            })         
            
        }
        
    }
    onDelete=(id)=>{
        this.props.deleteTodo(id);
    }
    
    render() {
        const {todos}=this.props
        return (
            <div className="heading">
                    <h1>Welcome to Job Seekers Site</h1>
                    <div className="todo-form">
                        <h3>Add your techenical skills</h3>
                        <p style={{fontSize:"12px",marginLeft:"1rem"}}>Example: JavaScript,Python,Node...</p>
                    
                        <p style={{fontSize:"14px", marginLeft:"1rem",color:"red" }}>{this.state.err}</p>{/* error message*/}

                <form onSubmit={ this.onClickHandler}>
                    <input type="text"  value={this.state.text}
                        placeholder="Enter your skills" onChange={this.onChangeHandler}/>
                
                    <button type="submit">Add</button>
                </form>
                
                <TodoList todolist={todos} deletedTodo={(id)=>this.onDelete(id)} />
               
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({    
    todos:state.todos
})
export default connect(mapStateToProps,{addTodo,deleteTodo})(AddToDo)



