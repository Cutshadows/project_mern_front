import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    const [user, saveUser]=useState({
        email:'',
        password:''
    });


    const {email, password}=user;
    const onChangeIniciarSesion=()=>{
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit=e=>{
        e.preventDefault();

        //Validar campos de el formulario
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form 
                    onSubmit={onSubmit}>
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
                        <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Iniciar Sesión"/>
                    </div>         

                </form>
                <Link to={'/register'} className="enlace-cuenta">
                    Obtener cuenta
                </Link>

            </div>
        </div>

     );
}
 
export default Login;