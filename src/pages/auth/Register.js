import React, { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';


const Register = (props) => {
    //extraer los valores del context
    const alertContext=useContext(AlertContext);
    const {alert, viewAlert}=alertContext;

    const authContext=useContext(AuthContext);
    const {authenticated, msg, registerUser } =authContext;


    //cuando el usuario se haya registrado mal o duplicado
    useEffect(()=>{
        if(authenticated){
            props.history.push('/projects');
        }
        if(msg){
            viewAlert(msg.msg, msg.category);
            return;
        }
    }, [msg, authenticated, props.history]);

    const [user, saveUser]=useState({
        email:'',
        username:'',
        password:'',
        confirmar:''
    });


    const {email, username, password, confirmar}=user;
    const onChangeIniciarSesion=e=>{
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit=e=>{
        e.preventDefault();

        //Validar campos de el formulario
        if(email.trim()==='' || 
            username.trim()==='' || 
            password.trim()==='' || 
            confirmar.trim()===''){
                viewAlert('Todos los campos son obligatorios', 'alerta-error');
                return;
            }

        //Password minimo de 6 caracteres
        if(password.length<6){
            viewAlert('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        // Los 2 password son iguales
        if(password!==confirmar){
            viewAlert('Los password no coinciden', 'alerta-error');
            return;
        }
        //pasar al action
        registerUser({
            username,
            password,
            email
        });
        

    }
    return ( 
        <div className="form-usuario">
        {
            alert? (
                <div className={`alerta ${alert.category}`}>
                    {alert.msg} 
                </div>
                )
                :
                null
        }
            <div className="contenedor-form sombra-dark">
                <h1>Registrar Usuario</h1>
                <form 
                    onSubmit={onSubmit}>
                    <div className="campo-form">
                            <label htmlFor="username">Nombre Usuario</label>
                            <input 
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Nombre de Usuario"
                            value={username}
                            onChange={onChangeIniciarSesion}/>
                    </div>
                    <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChangeIniciarSesion}/>
                    </div>
                    <div className="campo-form">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChangeIniciarSesion}/>
                    </div>
                    <div className="campo-form">
                            <label htmlFor="confirmar">Confirmar Password</label>
                            <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirmar Password"
                            value={confirmar}
                            onChange={onChangeIniciarSesion}/>
                    </div>
                    <div className="campo-form">
                        <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Registrar"/>
                    </div>         

                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>

            </div>
        </div>

     );
}
 
export default Register;