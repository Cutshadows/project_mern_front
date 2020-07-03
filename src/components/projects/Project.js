import React,{useContext, useState} from 'react';
import ProjectContext from 'context/projects/projectContext';


const Project = ({project}) => {
    const projectContext=useContext(ProjectContext);
    const {currentProject}=projectContext;
    
    console.log(currentProject.toString())
    
    return ( 
        <li>
            <button 
                type="button"
                className="btn btn-black"
                onClick={()=>currentProject(project.id)}
                >{project.projectName}</button>
        </li>
     );
}
 
export default Project;