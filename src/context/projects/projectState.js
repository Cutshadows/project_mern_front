import React, {useReducer} from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { v4 as uuidv4 } from 'uuid';

import { 
    FORMULARIO_PROYECTO,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT 
} from '../../types';


const  ProjectState=props=> {
    const projects=[
        {id:1, projectName:'tienda Virtual'},
        {id:2, projectName:"Intranet"},
        {id:3, projectName:'Diseño web'},
        {id:4, projectName:'Diseño de BD'}
    ];
    const initialState={
        projects:[],
        formulario: false,
        errorformulario:false,
        project:null
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
    const getProjects=()=>{
        dispatch({
            type:GET_PROJECTS,
            payload:projects //le mando el payload como action para verificar en el reducer
        })
    }

    //nuevo proyecto
    const addProject=project=>{
        project.id=uuidv4();

        //insertar el proyecto en el state
        dispatch({
            type:ADD_PROJECT,
            payload:project
        })

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

    const deleteProject=projectId=>{
        dispatch({
            type: DELETE_PROJECT,
            payload:projectId
        })
    }
    return(
        <projectContext.Provider
            value={{
                projects:state.projects,
                formulario:state.formulario,  //state con minuscula
                errorformulario:state.errorformulario,
                project:state.project,
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