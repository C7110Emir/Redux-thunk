import {GET_USER_INFOS_START,GET_USER_INFOS_SUCCESS,GET_USER_INFOS_ERROR} from "../types"


const initialState = {
    users: [],
    message:"",
    loading: false
}

const userReducer = (state = initialState,action) =>{
    switch (action.type) {
        case GET_USER_INFOS_START:
            return{...state,loading:true,message:""}
            
        case GET_USER_INFOS_SUCCESS:
            return{...state,loading:false,users:action.payload}
        case GET_USER_INFOS_ERROR:
            return{...state,loading:false,message:action.payload}
        default:
            return state;
    }

}

export default userReducer













