import { ADD_TODO, DELETE_TODO } from "../action/types"

const initialState={
    todos:[]    
}

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        
        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        case DELETE_TODO:
            let deletedTodo=state.todos.filter(todo=>
                todo.id!==action.payload
            )
            return {
                ...state,
                todos:deletedTodo
            }
        default:
            return state;
        
    }
}
export default todoReducer