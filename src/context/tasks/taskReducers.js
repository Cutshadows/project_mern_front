import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    TASK_UDP,
    CLEAN_TASK
} from '../../types';


export default (state, action)=>{
    switch(action.type){
        case TASKS_PROJECT:
            return{
                ...state,
                projecttask:action.payload
            }
        case ADD_TASK:
            return{
                ...state,
                projecttask:[ action.payload, ...state.projecttask],
                taskerror:false
            }
        case VALIDATE_TASK:
            return{
                ...state,
                taskerror:true
            }
        case DELETE_TASK:
            return{
                ...state,
                projecttask:state.projecttask.filter(task=>task._id!==action.payload)
            }
        case UPDATE_TASK:
            return{
                ...state,
                projecttask:state.projecttask.map(task=>task._id===action.payload._id ? 
                    action.payload:task)
            }
        case TASK_UDP:
            return{
                ...state,
                projecttask:state.projecttask.map(task=>task._id===action.payload._id?
                    action.payload:task)
            }
        case CURRENT_TASK:
            return{
                ...state,
                selectedtask:action.payload
            }
        case CLEAN_TASK:
            return{
                ...state,
                selectedtask:null
            }  
        default:
            return state;
    }
}