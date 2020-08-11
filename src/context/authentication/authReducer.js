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
        case SUCCESFULL_LOGIN:
        case SUCCESFULL_REGISTER:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated:true,
                msg:null,
                loading:false
            }
        case LOGOUT:
        case ERROR_LOGIN:
        case ERROR_REGISTER:
            return {
                ...state,
                token:null,
                user:null,
                authenticated:null,
                msg:action.payload,
                lading:true
            }
        case GET_USER:
            return {
                ...state,
                authenticated:true,
                user:action.payload,
                loading:false
            }
        default:
            return state;
    }
}