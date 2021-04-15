import React from 'react';

const InstructorsPanel = (props) => (
    <ol>
        {props.instructors.map(
                (rec, index) =>
                 <li key={index}>
                    {rec.firstName} {rec.lastName} <strong>{rec.experience}</strong>
                 </li>
            )
        }
    </ol>
);

export default InstructorsPanel;