import React, {useContext, useState, useEffect} from 'react';
import ProjectContext from 'context/projects/projectContext';
import TaskContext from 'context/tasks/taskContext';


const FormTask = () => {
    //extraer si un proyecto esta activo
    const projectContext=useContext(ProjectContext);
    const {project}=projectContext;
    
    const taskContext=useContext(TaskContext);
    const {selectedtask, taskerror, addTask, viewErrorTask, getTasks}=taskContext;
    const [task, saveTask]=useState({
        taskName:''
    });
    //si no hay proyecto seleccionado
    if(!project)return null;

    //array destructuring para extraer el proyecto actual
    const [currentProject]=project;
    
    //leer los valores del formulario
    const handleChange=e=>{
        saveTask({
            ...task,
            [e.target.name]:e.target.value
        })
    }
    const {taskName}=task;
    
    useEffect(()=>{

    }, [])

    const onSubmit=e=>{
        e.preventDefault();
        //validar
        if(taskName.trim()===''){
            viewErrorTask();
            return;   
        }
        //pasar la validacion

        //add new task
        task.projectId=currentProject.id;
        task.estado=false;
        addTask(task);
        //Obtener y filtrar
        getTasks(currentProject.id);

        //reiniciar
        saveTask({
            taskName:''
        });

    }
    return ( 
        <div className="formulario">
            <form 
                onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input 
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="taskName"
                        value={taskName}
                        onChange={handleChange}
                        type="text"/>
                </div>
                <div className="contenedor-input">
                    <input 
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                        type="submit"/>
                </div>
            </form>
            {
                taskerror?
                <p 
                    className="mensaje error">
                    El nombre de la tarea es obligatorio
                </p> 
                :
                null
            }
        </div>
     );
}
 
export default FormTask;