import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import CustomLayout from './containers/Layouts';
import CourseList from './containers/CourseListView';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <CourseList />
      </CustomLayout>
    </div>
  );
}

export default App;
