import React from 'react';

const Task = ({task}) => {
    const {nombre, estado}=task;
    return ( 
        <li className="tarea sombra">
            <p>{nombre} </p>
            <div className="estado">
                {task.estado?
                    (
                        <button
                            type="button"
                            className="completo">
                            Completo
                        </button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto">
                            Incompleto
                        </button>
                    )}
            </div>
            <div className="acciones">
                <button 
                className="btn btn-primario"
                type="button">
                    Editar
                </button>
                <button 
                className="btn btn-secundario"
                type="button"
                >
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Task;