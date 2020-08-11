import React,{useContext} from 'react';
import TaskContext from 'context/tasks/taskContext';
import ProjectContext from 'context/projects/projectContext';

const Task = ({task}) => {
    const projectContext=useContext(ProjectContext);
    const {project}=projectContext;

    const taskContext=useContext(TaskContext);
    const {deleteTask, getTasks, updateTask, saveCurrentTask } =taskContext; //changeStateTask
    
    

    const {taskName, status}=task;

    const [currentProject]=project;
    //funcion que se ejecuta cuando el usuario presion el btn de eliminar tarea
    const taskDelete=id=>{
        deleteTask(id, currentProject._id);
        //getTasks(project[0].id); //otra forma de borrar una tarea
        getTasks(currentProject._id);
    }

    //function que modifica el estado de la tarea

    const changeState=task=>{
        if(task.status){
            task.status=false;
        }else{
            task.status=true;
        }
        updateTask(task);
    }
    //crear funcion que seleccione la tarea

    const selectTask=task=>{
        //updateTask(task);
        saveCurrentTask(task);
    }
    return ( 
        <li className="tarea sombra">
            <p>{taskName} </p>
            <div className="estado">
                {task.status?
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
                onClick={()=>taskDelete(task._id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Task;