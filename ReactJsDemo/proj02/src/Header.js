import React from 'react';

const Header = (props) => {
    return (
        <header className="jumbotron">
            <h3>
                {props.title}
                <small>
                    {props.tagLine}
                </small>
            </h3>
        </header>
    );
};

export default Header;