import React from 'react';
import { Route } from 'react-router-dom';
import CourseList from './containers/CourseListView';
import CourseDetail from './containers/CourseDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={CourseList} />
        <Route exact path='/:articleID' component={CourseDetail} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />        
    </div>
);

export default BaseRouter;