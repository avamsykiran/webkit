import React from 'react';

const CourseRecord = (props) => (
            <tr>
                <td>{props.data.crId}</td>
                <td>{props.data.title}</td>
                <td>{props.data.duration}</td>
                <td><a href="#" >EDIT</a></td>
            </tr>
        );
    
export default CourseRecord;