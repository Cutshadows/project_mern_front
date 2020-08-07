import React, {useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import {
    SUCCESFULL_REGISTER,
    ERROR_REGISTER,
    GET_USER,
    SUCCESFULL_LOGIN,
    ERROR_LOGIN,
    LOGOUT
} from '../../types/index';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

const AuthState=props=>{
    const initialState={
        token: localStorage.getItem('token'),
        authenticated:null,
        user:null,
        msg:null
    }
    const [state, dispatch]=useReducer(authReducer, initialState);
    
    const registerUser=async(datos)=>{
        try {
            const response= await clientAxios.post('/api/users', datos);
            //console.log(response);
            dispatch({
                type:SUCCESFULL_REGISTER,
                payload:response.data
            });
            //get user authenticated
            userAuthenticated();
        } catch (error) {
            console.log(error.response);
            const alerta={
                msg:error.response.data.msg,
                category:'alerta-error'
            }
            dispatch({
                type:ERROR_REGISTER,
                payload:alerta
            })
        }
    }

    //retorna el usuario authenticated
    const userAuthenticated=async()=>{
        const token=localStorage.getItem('token');
        if(token){
            //function para enviar el token por header
            tokenAuth(token);
        }
        try {
            const response=await clientAxios.get('/api/auth');
            console.log(response);
            dispatch({
                type: GET_USER,
                payload:response.data.users
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type:ERROR_LOGIN
            })
        }
    }

    //cuando el usuario inicia sesion
    const initSession=async datos=>{
        try {
             const responseLogin=await clientAxios.post('/api/auth', datos);
             console.log(responseLogin);
        } catch (error) {
            console.log(error.response);
            const alerta={
                msg:error.response.data.msg,
                category:'alerta-error'
            }
            dispatch({
                type:ERROR_LOGIN,
                payload:alerta
            })
        }
    }

    return(
        <authContext.Provider
        value={{
            token:state.token,
            authenticated:state.authenticated,
            user:state.user,
            msg:state.msg,
            registerUser,
            initSession

        }}>
        {props.children}
        </authContext.Provider>
    )

}
export default AuthState;
