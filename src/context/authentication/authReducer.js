import {
    SUCCESFULL_REGISTER,
    ERROR_REGISTER,
    GET_USER,
    SUCCESFULL_LOGIN,
    ERROR_LOGIN,
    LOGOUT
} from '../../types/index';


export default (state, action)=>{
    switch(action.type){
        case SUCCESFULL_REGISTER:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated:true,
                msg:null
            }
        case ERROR_LOGIN:
        case ERROR_REGISTER:
            return {
                ...state,
                token:null,
                msg:action.payload
            }
        case GET_USER:
            return {
                ...state,
                user:action.payload
            }
        case SUCCESFULL_LOGIN:
            return {
                alert:action.payload
            }
        case LOGOUT:
            return {
                alert:action.payload
            }
    
        default:
            return state;
    }
}