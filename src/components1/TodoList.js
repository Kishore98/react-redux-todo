import React from 'react'

function TodoList({todolist, deletedTodo}) {

    const lists=todolist.map(list=> {
        return <div key={list.id} className="list-items">
                    <div className="item">{list.text} 
                        <span onClick={()=>deletedTodo(list.id)}>
                            <i  className="fas fa-trash"></i>
                        </span> 
                    </div>
                </div>
    })
    return (
        <div className="lists">
             {lists}            
        </div>
    )
}

export default TodoList
