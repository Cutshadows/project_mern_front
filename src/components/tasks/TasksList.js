import React, {useContext, Fragment} from 'react';
import Task from './Task';
import ProjectContext from 'context/projects/projectContext';
import TaskContext from 'context/tasks/taskContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


const TasksList = () => {
    const projectContext=useContext(ProjectContext);
    const {project, deleteProject}=projectContext;
    
    console.log(deleteProject.toString());
    if(!project)return <h2>Selecciona un proyecto</h2>;
    const [currentProject]=project;

    const taskContext=useContext(TaskContext);
    const {projecttask}=taskContext;

    // const tasks=[];
    //array destructuring para extraer el proyecto
    const onClickEliminar=()=>{
        deleteProject(currentProject.id);
    }
    return ( 
        <Fragment>
            <h2>Proyecto: {currentProject.projectName}</h2>
            <ul className="listado-tareas">
                {projecttask.length===0
                    ?(<li className="tarea"><p>No hay tareas</p></li>)
                    :
                    <TransitionGroup>
                        { projecttask.map(task=>(
                            <CSSTransition
                            key={task.id}
                            timeout={200}
                            classNames="tarea"
                            >
                                <Task
                                    task={task}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    }
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