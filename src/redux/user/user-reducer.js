const INITIAL_STATE={
    currentUser:null
}

//when reducer is first rendered,state value will be null so we use defualt value.
const UserReducer=(state=INITIAL_STATE,action) =>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser:action.payload
            }
        default:return state;
    }
}

export default UserReducer;