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






const App  = () => {
    return (
        <ProjectState>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/projects" component={Project}/>
                </Switch>
            </Router>
        </ProjectState>


     );
}
 
export default App;