import React, {useContext, useEffect} from 'react';
import Sidebar from '../../components/layout/Sidebar';
import Barra from '../../components/layout/Barra';
import FormTask from '../../components/tasks/FormTask';
import TaskList from '../../components/tasks/TasksList';
import AuthContext from '../../context/authentication/authContext';

const Project = () => {
    //extraer la informacion de authentication
    const authContext=useContext(AuthContext);
    const {userAuthenticated}=authContext;

    useEffect(() => {
        userAuthenticated();
    }, []);

    return ( 
        <div className="contenedor-app">
                <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <FormTask/>

                    <div className="contenedor-tareas">
                        <TaskList />
                    </div>
                </main>
            </div>

        </div>
     );
}
 
export default Project;