import React from 'react';
import { Route } from 'react-router-dom';
import CourseList from './containers/CourseListView';
import CourseDetail from './containers/CourseDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={CourseList} />
        <Route exact path='/:articleID' component={CourseDetail} />
    </div>
);

export default BaseRouter;