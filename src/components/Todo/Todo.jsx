 import React, { useState } from 'react'
 import './Todo.css'
 import {useDispatch, useSelector} from 'react-redux'
 import {addTodo, deleteTodo, removeTodo} from '/Applications/ local/reactredux/reduxtodo/src/actions'

 const Todo = () => {

  const [inputData, setInputData] = useState("");
  //useSelect is used to get the array list details
  const list = useSelector((state)=> state.todoReducers.list)
  const dispatch = useDispatch();
   
   return (
    <>
     <div className='main-div'>
       <div className="child-div">
        <figure>
          <figcaption>Add your List Here👍🏻</figcaption>
        </figure>

        <div className="addItem">
          <input type="text" placeholder='✍🏻add list'
            value={inputData}
            onChange={(event)=> setInputData(event.target.value)}
          />
          <i class="fa-solid fa-plus plusicon" onClick={()=> dispatch(addTodo(inputData), setInputData(''))}></i>
        </div>
       
        <div className="showItem">
        {/* // https://stackoverflow.com/questions/72424878/why-is-used-instead-of-curly-braces-brackets-inside-javascript-map-fun  when to use () bracket or {} bracket with returb inside map function */}
          {
            list.map((elem)=>{
              return(
                <div className="eachItem" key={elem.id}>
                <p>{elem.data}</p>
                <span class="material-symbols-outlined trashicon" onClick={()=> dispatch(deleteTodo(elem.id))}>
                  delete
                  </span>
               </div>
              )
            })
          }
        </div>


        <div className="showItem">
           <button className="btnRemoveAll" onClick={()=> dispatch(removeTodo())}>RemoveAll</button>
        </div>
       </div>
     </div>
     </>
   )
 }
 
 export default Todo
 