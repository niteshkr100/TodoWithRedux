//action creator-->What to do?
export const addTodo = (data) =>{ //this function(fn start with small letter) is export as non default import function therefore where it is used, we put function inside curly bracket()

    //action
    return{
        type : "ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        } 
    }
}

export const deleteTodo = (id) =>{
    //action
    return{
        type : "DELETE_TODO",
        id:id
    }
}

export const removeTodo = () =>{
    //action
    return{
        type : "REMOVE_TODO"
    }
}