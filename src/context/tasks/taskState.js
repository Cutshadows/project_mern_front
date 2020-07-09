import React,{useReducer, Children} from 'react';
import taskReducer from './taskReducers';
import TaskContext from './taskContext';

import {
TASKS_PROJECT,
ADD_TASK,
VALIDATE_TASK,
DELETE_TASK,
TASK_STATE,
UPDATE_TASK
} from '../../types';


const TaskState =props=>{
    const initialState={
        tasks:[
            {id:1, taskName:'Elegir Plataforma', estado:true, projectId:1 },
            {id:2, taskName:'Elegir Colores', estado:false, projectId:2 },
            {id:3, taskName:'Elegir plataforma de pago', estado:false, projectId:3 },
            {id:4, taskName:'Elegir hosting', estado:true, projectId:4 },
            {id:5, taskName:'Elegir Plataforma', estado:true, projectId:2 },
            {id:6, taskName:'Elegir Colores', estado:true, projectId:3 },
            {id:7, taskName:'Elegir hosting', estado:false, projectId:3 },
            {id:8, taskName:'Elegir Plataforma de pago', estado:true, projectId:2 },
            {id:9, taskName:'Elegir Distribuidor', estado:true, projectId:1 },
        ],
        projecttask:null,
        taskerror:false,
        selectedtask:null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(taskReducer, initialState);


    //obtener las tareas de un proyecto
    const getTasks=projectId=>{
        dispatch({
            type:TASKS_PROJECT,
            payload:projectId
        })
    }

    //Agregar una tarea al proyecto seleccionado
    const addTask=task=>{
        dispatch({
            type:ADD_TASK,
            payload:task
        })
    }
    const viewErrorTask=()=>{
        dispatch({
            type:VALIDATE_TASK
        })
    }
    const deleteTask=taskId=>{
        dispatch({
            type: DELETE_TASK,
            payload:taskId
        })
    }

    //CAMBIA EL ESTADO DE CADA TAREA
    const changeStateTask=task=>{
        dispatch({
            type:TASK_STATE,
            payload:task
        })
    }
    //actualizar tarea
    const updateTask=task=>{
        dispatch({
            type:UPDATE_TASK,
            payload:task
        })
    }
    return(
        <TaskContext.Provider
        value={{
            tasks:state.tasks,
            projecttask:state.projecttask,
            taskerror:state.taskerror,
            selectedtask:state.selectedtask,
            getTasks,
            addTask,
            viewErrorTask,
            deleteTask,
            changeStateTask,
            updateTask
        }}>
        {props.children}
        </TaskContext.Provider>
    );

}
export default TaskState;