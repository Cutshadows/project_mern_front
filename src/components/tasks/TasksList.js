import React, {Fragment, useContext} from 'react';
import Task from './Task';
import ProjectContext from 'context/projects/projectContext';


const TasksList = () => {
    const projectContext=useContext(ProjectContext);
    const {project, deleteProject}=projectContext;
    
    console.log(deleteProject.toString());
    if(!project)return <h2>Selecciona un proyecto</h2>;
    const [currentProject]=project;

    const tasks=[
        {id:1, nombre:'Elegir Plataforma', estado:true},
        {id:2, nombre:'Elegir Colores', estado:false},
        {id:3, nombre:'Elegir plataforma de pago', estado:false},
        {id:4, nombre:'Elegir hosting', estado:true},
    ];
    // const tasks=[];
    //array destructuring para extraer el proyecto
    const onClickEliminar=()=>{
        deleteProject(currentProject.id);
    }
    return ( 
        <Fragment>
            <h2>Proyecto: {currentProject.projectName}</h2>
            <ul className="listado-tareas">
                {tasks.length===0
                    ?(<li className="tarea"><p>No hay tareas</p></li>)
                    :
                    tasks.map(task=>(
                        <Task 
                            key={task.id}
                            task={task}
                        />
                    ))}
                <button
                    className="btn btn-eliminar"
                    type="button"
                    onClick={onClickEliminar}>
                    Eliminar &times;
                </button>
            </ul>
               
        </Fragment>
     );
}
 
export default TasksList;