import React,{useReducer, Children} from 'react';
import taskReducer from './taskReducers';
import TaskContext from './taskContext';
//import { v4 as uuidv4 } from 'uuid';

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
import clientAxios from '../../config/axios';


const TaskState =props=>{
    const initialState={
        projecttask:[],
        taskerror:false,
        selectedtask:null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(taskReducer, initialState);

    //obtener las tareas de un proyecto
    const getTasks=async project=>{
        try {
            const resultTask=await clientAxios.get(`/api/tasks`, {params:{ project }});
            dispatch({
                type:TASKS_PROJECT,
                payload:resultTask.data.tasks
            })
        } catch (error) {
        }
       
    }

    //Agregar una tarea al proyecto seleccionado
    const addTask=async task=>{
        //task.id=uuidv4();
        try {
            const resultTask=await clientAxios.post('/api/tasks', task);
            dispatch({
                type:ADD_TASK,
                payload:task
            }) 
        } catch (error) {
        }
    }
   //DELETE TASK
    const deleteTask=async (taskId, project)=>{
        try {
            const resultTask=await clientAxios.delete(`/api/tasks/${taskId}`, {params:{project}});
            dispatch({
                type: DELETE_TASK,
                payload:taskId
            })
        } catch (error) {
        }
        
    }


    const viewErrorTask=()=>{
        dispatch({
            type:VALIDATE_TASK
        })
    }
    //CAMBIA EL ESTADO DE CADA TAREA
    /* const changeStateTask=task=>{
        dispatch({
            type:TASK_STATE,
            payload:task
        })
    } */
    //actualizar tarea
    const updateTask=async task=>{
        try {
            const resultUpdateTask=await clientAxios.put(`/api/tasks/${task._id}`, task);
            dispatch({
                type:UPDATE_TASK,
                payload:resultUpdateTask.data.task
            })
        } catch (error) {
        }
        
    }


    const saveCurrentTask= task=>{
        dispatch({
            type:CURRENT_TASK,
            payload:task
        })
    }

    const taskUdp=task=>{
        dispatch({
            type:TASK_UDP,
            payload:task
        })
    }

    const cleanTask=()=>{
        dispatch({
            type:CLEAN_TASK
        })
    }
    return(
        <TaskContext.Provider
        value={{
            //tasks:state.tasks,
            projecttask:state.projecttask,
            taskerror:state.taskerror,
            selectedtask:state.selectedtask,
            getTasks,
            addTask,
            viewErrorTask,
            deleteTask,
            saveCurrentTask,
            //changeStateTask,
            updateTask,
            taskUdp,
            cleanTask
        }}>
        {props.children}
        </TaskContext.Provider>
    );

}
export default TaskState;