import React from 'react';

const Header = (props) => {
        var headerLight = {
            backgroundColor: '#afafaf',
            color: '#010101',
            padding: 20,
            marginTop:0
        };
        var headerDark = {
            backgroundColor: '#010101',
            color: '#ffffff',
            padding: 20,
            marginTop:0
        };

        return (
            <header>
                <h1 style={'dark' === props.theme ? headerDark : headerLight}>
                {props.title}
                </h1>
            </header>
        );
    };

Header.defaultProps = {
    title:'Default Title',
    theme:'dark'
}

export default Header;