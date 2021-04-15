import React from 'react';

const CourseRecordEditable = (props) => (
            <tr>
                <td>{props.data.crId}</td>
                <td><input type="text" value={props.data.title} /></td>
                <td><input type="text" value={props.data.duration} /></td>
                <td>
                    <a href="#" >SAVE</a> <span>|</span>
                    <a href="#" >CANCEL</a>
                </td>
            </tr>
        );
    
export default CourseRecordEditable;