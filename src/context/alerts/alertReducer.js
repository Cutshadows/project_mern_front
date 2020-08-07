import {
    VIEW_ALERT,
    HIDDEN_ALERT
} from '../../types/index';


export default (state, action)=>{
    switch(action.type){
        case VIEW_ALERT:
            return {
                alert:action.payload
            }
        case HIDDEN_ALERT:
            return{
                alert:null
            }   
        default:
            return state;
    }
}