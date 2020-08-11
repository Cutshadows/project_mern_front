import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/authentication/authContext';

const Barra = () => {
    const authContext=useContext(AuthContext);
    const {userAuthenticated, logoutSession, user}=authContext;

    useEffect(() => {
        userAuthenticated();
        //eslint-disable-next-line
    }, []);
    return ( 
        <header
            className="app-header">
                {user? <p className="nombre-usuario">Hola <span>{user.username}</span></p>:null}
                

                <nav className="nav-principal">
                    <button 
                    className="btn btn-black cerrar-sesion"
                    onClick={()=>logoutSession()}> Cerrar Sesión</button>
                </nav>
            </header>
     );
}
 
export default Barra;