import React, {useReducer} from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
//import { v4 as uuidv4 } from 'uuid';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import { 
    FORMULARIO_PROYECTO,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT,
    ERROR_PROJECT 
} from '../../types';


const  ProjectState=props=> {
    const initialState={
        projects:[],
        formulario: false,
        errorformulario:false,
        project:null,
        msg:null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initialState);

    //serie de funciones para el crud de proyectos

    const mostrarFormulario=()=>{
        dispatch({
            type:FORMULARIO_PROYECTO
        })
    }
        //obtener los proyectos
    const getProjects=async ()=>{
        /* const token=localStorage.getItem('token');
        if(token){
            tokenAuth(token);
        } */
        try {
            //insertar el proyecto en el state
            
            const resultProject=await clientAxios.get('/api/projects');
            dispatch({
                type:GET_PROJECTS,
                payload:resultProject.data.projects //le mando el payload como action para verificar en el reducer
            });
        } catch (error) {
            const alert={
                msg:'Hubo un error',
                category: 'alerta-error '
            }
            dispatch({
                type:ERROR_PROJECT,
                payload:alert
            });
        }
        
    }

    //nuevo proyecto
    const addProject= async project=>{
       try {
                //insertar el proyecto en el state
            const resultProject=await clientAxios.post('/api/projects', project);
            dispatch({
                type:ADD_PROJECT,
                payload:resultProject.data
            });
       } catch (error) {
            const alert={
                msg:'Hubo un error',
                category: 'alerta-error '
            }
            dispatch({
                type:ERROR_PROJECT,
                payload:alert
            });
       }

    }

    const viewError=()=>{
        dispatch({
            type:VALIDATE_FORM
        })
    }

    //Selleciona el projecto que el usuario dio click
    const currentProject=projectId=>{
        dispatch({
            type: CURRENT_PROJECT,
            payload:projectId
        })
    }

    const deleteProject=async projectId=>{
        try {
            //insertar el proyecto en el state
            //const resultProject=await clientAxios.delete(`/api/projects/${projectId}`);
            const resultProject=await clientAxios.delete(`/api/projects/${projectId}`);
            dispatch({
                type: DELETE_PROJECT,
                payload:projectId
            })
        } catch (error) {
            const alert={
                msg:'Hubo un error',
                category: 'alerta-error '
            }
            dispatch({
                type:ERROR_PROJECT,
                payload:alert
            });
        }
        
    }
    return(
        <projectContext.Provider
            value={{
                projects:state.projects,
                formulario:state.formulario,  //state con minuscula
                errorformulario:state.errorformulario,
                project:state.project,
                msg:state.msg,
                mostrarFormulario,       //funcion mantenerlas con cammelcase,
                getProjects,
                addProject,
                viewError,
                currentProject,
                deleteProject
            }}>
                {props.children}
            </projectContext.Provider>
    )

}
 
export default ProjectState;