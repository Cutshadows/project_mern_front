import React,{useContext, useState} from 'react';
import ProjectContext from 'context/projects/projectContext';
import TaskContext from 'context/tasks/taskContext';


const Project = ({project}) => {
    const projectContext=useContext(ProjectContext);
    const {currentProject}=projectContext;
    const taskContext=useContext(TaskContext);
    const {getTasks}=taskContext;
    //funcion para agregar el current project
    const selectProject=id=>{
        currentProject(id); //fijar un proyecto actual
        getTasks(id);//filtrar las tareas cuando se de click
    }
    return ( 
        <li>
            <button 
                type="button"
                className="btn btn-black"
                onClick={()=>selectProject(project._id)}
                >{project.projectName}</button>
        </li>
     );
}
 
export default Project;