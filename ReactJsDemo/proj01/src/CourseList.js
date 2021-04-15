import React from 'react';
import './CourseList.css';
import CourseRecord from './CourseRecord';
import CourseRecordEditable from './CourseRecordEditable';

const CourseList = (props) => (
            <table>
                <thead>
                    <tr>
                        <th>CourseId</th>
                        <th>Title</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {props.courses.map(
                        (record, index) =>
                            record.isEditable ?
                            <CourseRecordEditable key={index} data={record} /> :
                            <CourseRecord key={index} data={record} />
                    )}
                </tbody>
            </table>
        );

export default CourseList;