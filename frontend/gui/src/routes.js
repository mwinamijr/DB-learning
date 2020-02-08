import React from 'react';
import { Route } from 'react-router-dom';
import CourseList from './containers/CourseListView';
import CourseDetail from './containers/CourseDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Index from './containers/Index';
import About from './containers/About';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Index} />
        <Route exact path='/courses' component={CourseList} />
        <Route exact path='/:courseID' component={CourseDetail} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/about' component={About} />        
    </div>
);

export default BaseRouter;