import React, { useReducer, useState } from 'react'
import './Test.css'

export default function Testreducer() {

  
 const reducer = (state , action) => {
     switch(action.type) {
      case 'ADD' : {
         return [
          { id : 1 , title : 'item1'}
         ]
      }
     }
 }

   
     const [todos , dispatch ] = useReducer(reducer , [])
      
     console.log(todos);
       
  return (
    <div>
      <h1>TODOS</h1>

      <button className='btn btn-primary' onClick={() => dispatch({type : 'ADD'})}>add todos</button>


      <ul>
        
        {todos.length  ? (
        todos[0].title
      ) : (
         'null'
      )}
      
      </ul>
    
    </div>
  )
}
