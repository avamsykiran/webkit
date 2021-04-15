import React from 'react';

class RandomNumber extends React.Component {
    constructor() {
        super();
    }
    refresh = () => {
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <button onClick={this.refresh}>Refresh</button>
                <label>{Math.random()*100}</label>
            </div>
        );
    }
}

export default RandomNumber;