import React from 'react';

const ErrorCard = (props) =>(
    <section className="container-fluide p-4">
        <div className="card card-danger">
            <div className="card-header">
                <h3>Error</h3>
            </div>
            <div className="card-body">
                <p>{props.errText}</p>
            </div>
        </div>
    </section>
);

export default ErrorCard;