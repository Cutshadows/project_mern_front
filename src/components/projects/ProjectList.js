import React, {useContext, useEffect} from 'react';
import Project from './Project';
import ProjectContext from 'context/projects/projectContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ProjectList = () => {
    
    const projectContext=useContext(ProjectContext);
    const {projects, getProjects}= projectContext;

    useEffect(()=>{
        getProjects();
    }, [])

    if(projects.length ===0) return <p className="correcto">No hay proyectos, crea uno</p>;

   
    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
            {projects.map(project=>(
                <CSSTransition
                key={project.id}
                timeout={200}
                classNames="proyecto" 
                >
                    <Project
                        project={project}
                    />
                </CSSTransition>

            ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ProjectList;