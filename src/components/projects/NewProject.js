import React, {Fragment, useState, useContext} from 'react';
import ProjectContext from 'context/projects/projectContext';

const NewProject = () => {
    //obtener state del formulario
    const projectContext=useContext(ProjectContext);
    const {formulario, errorformulario, mostrarFormulario, addProject, viewError}= projectContext;

    const [proyecto, guardarProyecto]=useState({
        projectName:''
    });


    const {projectName}=proyecto;
    const onChangeProyecto=e=>{
            guardarProyecto({
                    ...proyecto,
                [e.target.name]:e.target.value
            });
    }
    const onSubmitProject=e=>{
        e.preventDefault();

        //validar proyecto
        if(projectName===''){
            viewError();
            return;
        }

        //agregar al state
        addProject(proyecto); 

        //reiniciar el form
        guardarProyecto({
            projectName:''
        })
    }
    const onClickFormulario=()=>{
        mostrarFormulario();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                /* onClick={()=>mostrarFormulario()} */
                onClick={onClickFormulario}
                >Nuevo Proyecto</button>
            {
                formulario? 
                    (
                        <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProject}
                        >
                            <input 
                                placeholder="Nombre Proyecto"
                                name="projectName"
                                className="input-text"
                                value={projectName}
                                type="text"
                                onChange={onChangeProyecto}/>
                            <input 
                                className="btn btn-block btn-primario"
                                value="Agregar proyecto"
                                type="submit"/>
                        </form>
                    )
                :null
            }
            {errorformulario? <p className="mensaje error"> El nombre del proyecto es  obligatorio</p>: null}    
            
        </Fragment> 
        
     );
}
 
export default NewProject;