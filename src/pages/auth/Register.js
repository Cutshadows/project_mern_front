import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
    const [user, saveUser]=useState({
        email:'',
        username:'',
        password:'',
        confirmar:''
    });


    const {email, username, password, confirmar}=user;
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