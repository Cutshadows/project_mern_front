import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    TASK_STATE,
    UPDATE_TASK
} from '../../types';


export default (state, action)=>{
    switch(action.type){
        case TASKS_PROJECT:
            return{
                ...state,
                projecttask:state.tasks.filter(task=>task.projectId===action.payload)
            }
        case ADD_TASK:
            return{
                ...state,
                tasks:[ action.payload, ...state.tasks],
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
                tasks:state.tasks.filter(task=>task.id!==action.payload)
            }
        case TASK_STATE:
            return{
                ...state,
                tasks:state.projecttask.map(task=>task.id===action.payload ? action.payload :task)
            }
        case UPDATE_TASK:
            return{
                ...state,
                selectedtask:action.payload
            }
        default:
            return state;
    }
}