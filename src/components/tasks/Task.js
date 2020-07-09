import React,{useContext} from 'react';
import TaskContext from 'context/tasks/taskContext';
import ProjectContext from 'context/projects/projectContext';

const Task = ({task}) => {
    const projectContext=useContext(ProjectContext);
    const {project}=projectContext;

    const taskContext=useContext(TaskContext);
    const {deleteTask, getTasks, changeStateTask, updateTask} =taskContext;
    
    

    const {taskName, estado}=task;

    const [currentProject]=project;
    //funcion que se ejecuta cuando el usuario presion el btn de eliminar tarea
    const taskDelete=id=>{
        deleteTask(id);
        //getTasks(project[0].id); //otra forma de borrar una tarea
        getTasks(currentProject.id);
    }

    //function que modifica el estado de la tarea

    const changeState=task=>{
        if(task.estado){
            task.estado=false;
        }else{
            task.estado=true;
        }
        changeStateTask(task);
    }
    //console.log(changeState.toString());
    //console.log(changeStateTask.toString());
    //crear funcion que seleccione la tarea

    const selectTask=task=>{
        updateTask(task);
    }
    return ( 
        <li className="tarea sombra">
            <p>{taskName} </p>
            <div className="estado">
                {task.estado?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={()=>changeState(task)}>
                            Completo
                        </button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={()=>changeState(task)}>
                            Incompleto
                        </button>
                    )}
            </div>
            <div className="acciones">
                <button 
                className="btn btn-primario"
                type="button"
                onClick={()=>selectTask(task)}>
                    Editar
                </button>
                <button 
                className="btn btn-secundario"
                type="button"
                onClick={()=>taskDelete(task.id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Task;