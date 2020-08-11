import React, {useContext, useEffect} from 'react';
import Project from './Project';
import ProjectContext from 'context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ProjectList = () => {
    
    const projectContext=useContext(ProjectContext);
    const {msg, projects, getProjects}= projectContext;

    const alertContext=useContext(AlertContext);
    const {alert, viewAlert}= alertContext;

    useEffect(()=>{
        //si hay un error
        if(msg){
            viewAlert(msg.msg, msg.category);
        }
        getProjects();
    }, [msg])

    if(projects.length ===0) return <p className="correcto">No hay proyectos, crea uno</p>;

   
    return ( 
        <ul className="listado-proyectos">
            {alert? (
                <div className={` alerta ${alert.category}`}>{alert.msg}</div>
            ):null}
            <TransitionGroup>
            {projects.map(project=>(
                <CSSTransition
                key={project._id}
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