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






const App  = () => {
    return (
        <ProjectState>
            <TaskState>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/projects" component={Project}/>
                    </Switch>
                </Router>
            </TaskState>
        </ProjectState>
     );
}
 
export default App;