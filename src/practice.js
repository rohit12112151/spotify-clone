import React from 'react'
import { useReducer } from 'react'
function reducer(state,action){
    if(action.type==='increment')
       return {age:state.age+1}
}


function reducerf(state,action){
    if(action.type==='inc')
       return {age:state.age+1,name:state.name}
    if(action.type==='change_name'){
        return {
            name: action.nextname,
            age:state.age
        }
    }
}

export default function Practice() {
const initial={name:"rohit",age:20}
// const [state,dispatch]=useReducer(reducer,{age: 40});
const [state,dispatch]=useReducer(reducerf,initial);

function handleChange(e){
    dispatch({
        type:'change_name',
        nextname:e.target.value
    })
}
function handleClick(){
    dispatch({
        type:'inc'

    })
}

  return (
    <div>
        {/* <button onClick={()=>{dispatch({type:'increment'})}}>increment</button> */}
        {/* <p>you are {state.age}</p> */}
        <input value={state.name} onChange={handleChange}></input>
        <button onClick={handleClick}>increment</button>
        <p>your name is {state.name} and your age is {state.age}</p>
    </div>
  )
}
