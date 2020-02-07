import React from 'react';
import { Route } from 'react-router-dom';
import CourseList from './containers/CourseListView';

const BaseRouter = () => {
    <Route exact path='/' component={CourseList} />
    <Route exact path='/:articleID' component={CourseList} />
}