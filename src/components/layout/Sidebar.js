import React from 'react';
import NewProject from 'components/projects/NewProject';
import ProjectList from 'components/projects/ProjectList';


const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN <span>Tasks</span></h1>
            <NewProject />            
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                    <ProjectList />
            </div>
        </aside>
     );
}
 
export default Sidebar;