import React from 'react';
import axios from 'axios';

import Courses from '../components/Courses';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class CourseList extends React.Component {
   
        state = {
            courses:[]
        }

        componentDidMount() {
            axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    courses: res.data
                });
            })
        }
    render() {
        return(
            <Courses data={this.state.courses}/>
        )
    }
}

export default CourseList;