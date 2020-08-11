import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import Project from '../pages/projects/Project';
import ProjectState from '../context/projects/projectState';
import TaskState from '../context/tasks/taskState';
import AlertState from '../context/alerts/alertState';
import AuthState from '../context/authentication/authState';
import tokenAuth from '../config/tokenAuth';
import PrivateRoute from '../components/rutes/PrivateRutes';
const token=localStorage.getItem('token');
if(token){
    tokenAuth(token);
}

const App  = () => {
    return (
        <ProjectState>
            <TaskState>
                <AlertState>
                        <AuthState>
                            <Router>
                                <Switch>
                                    <Route exact path="/" component={Login}/>
                                    <Route exact path="/register" component={Register}/>
                                    <PrivateRoute exact path="/projects" component={Project}/>
                                </Switch>
                            </Router>
                        </AuthState>
                    </AlertState>
            </TaskState>
        </ProjectState>
     );
}

export default App;