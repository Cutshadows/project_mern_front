import React, {useContext, useEffect} from 'react';
import Project from './Project';
import ProjectContext from 'context/projects/projectContext';
const ProjectList = () => {
    
    const projectContext=useContext(ProjectContext);
    const {projects, getProjects}= projectContext;

    useEffect(()=>{
        getProjects();
    }, [])

    if(projects.length ===0) return <p className="correcto">No hay proyectos, crea uno</p>;

   
    return ( 
        <ul className="listado-proyectos">
            {projects.map(project=>(
                <Project
                    key={project.id} 
                    project={project}
                />

            ))}
        </ul>
     );
}
 
export default ProjectList;