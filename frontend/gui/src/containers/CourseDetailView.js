import React from 'react';
import axios from 'axios';
import { Card } from 'antd';

class CourseDetail extends React.Component {
   
        state = {
            courses:[]
        }

        componentDidMount() {
            const courseID=this.props.match.params.articleID;
            axios.get(`http://127.0.0.1:8000/api/${courseID}`)
            .then(res => {
                this.setState({
                    courses: res.data
                });
                console.log(res.data);
            })
        }
    render() {
        return(
            <Card title={this.state.courses.title}>
                <p>{this.state.courses.contents}</p>
            </Card>
        )
    }
}

export default CourseDetail;