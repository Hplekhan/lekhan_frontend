import React, { useReducer, useState } from 'react'


const reducer = (state, action) => {

    switch(action.type){
        case "ADD":
            return [...state, {...action.data, complete: false}];
        case "DEL":
            return state.filter(item => item.id !== action.id);
            
        default:
            return state;

    }

}

const ToDoList= () => {

    const[input,setInput] = useState({})
    const[state,dispatch] = useReducer(reducer,[])


  return (
    <div>
    <h1>{JSON.stringify(state)}</h1>
    <input type="text" onChange={(e)=> {setInput({...input,id: e.target.value})}} />
    <input type="text" onChange={(e)=> {setInput({...input,id: e.target.value})}} />
    <button onClick={()=> dispatch({type: "ADD", data:input})}>ADD</button>
    <button onClick={()=> dispatch({type: "ADD", data:input})}>Edit</button>
    <button onClick={()=> dispatch({type: "DEL", data:input})}>Delete</button>

    </div>
  )
}

export default ToDoList;
