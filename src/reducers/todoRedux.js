const initialData = {
    list : []
}

// const [list, setList] =  useState([]);
const todoReducers = (state=initialData, action) =>{
    switch(action.type){
        case "ADD_TODO":
            //Destructing
            //action.payload means extract payload property part from action parent
            // its means payload = [item1(id), item2(data)]
            //  const id = payload[0]
            //  const data = payload[0]
            const { id, data } = action.payload;
            // https://chat.openai.com/share/721be95a-a594-4c77-b71b-621e9a49335e
            return {
                ...state,
                list : [ 
                    ...state.list,
                    { id:id, data:data } ]
            }

        case "DELETE_TODO":
            const  itemId = action.id;
            const  updateNewList = state.list.filter((item)=> item.id !== itemId )

            return{
                ...state,
                   list : updateNewList
            }

        case "REMOVE_TODO":

            return{
                ...state, 
                    list : []
            }
             
             
        default: return state;
    }
}

export default todoReducers;