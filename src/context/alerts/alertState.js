import React, {useReducer} from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import {
    VIEW_ALERT,
    HIDDEN_ALERT
} from '../../types/index';

const AlertState=props=>{
    const initialState={
        alert:null
    }

    const [state, dispatch]=useReducer(alertReducer, initialState);

    //mostarAlerta
    const viewAlert=(msg, category)=>{
        dispatch({
            type:VIEW_ALERT,
            payload:{
                msg,
                category
            }
        });
        setTimeout(()=>{
            dispatch({
                type:HIDDEN_ALERT
            });
        }, 5000);
    }

    return(
        <alertContext.Provider
        value={{
            alert:state.alert,
            viewAlert
        }}
        >
            {props.children}        
        </alertContext.Provider>
    )
}
export default AlertState;