import { 
    FORMULARIO_PROYECTO,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT 
} from '../../types';


export default projectReducers=(action, type)=>{
    switch(type){
        case FORMULARIO_PROYECTO:
            return{

            }
        default:
            return {
                state
            }
    }
}