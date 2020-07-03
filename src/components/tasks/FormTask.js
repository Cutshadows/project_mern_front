import React, {useContext} from 'react';
import ProjectContext from 'context/projects/projectContext';


const FormTask = () => {
    //extraer si un proyecto esta activo
    const projectContext=useContext(ProjectContext);
    const {project}=projectContext;
    //si no hay proyecto seleccionado
    if(!project)return null;

    //array destructuring para extraer el proyecto actual
    const [currentProject]=project;
    /* const [task, saveTask]=useState({
        taskName:''
    }); */
    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="taskName"
                        type="text"/>
                </div>
                <div className="contenedor-input">
                    <input 
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                        type="submit"/>
                </div>
            </form>
        </div>
     );
}
 
export default FormTask;