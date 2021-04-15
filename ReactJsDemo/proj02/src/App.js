import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "My RB App",
      tagLine: "--a bootstrap integration demo and event handling--"
    };

    this.tagLineModifier = React.createRef();

  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleTagLineChange = (e) => {
    this.setState({ tagLine: this.tagLineModifier.current.value });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} tagLine={this.state.tagLine} />
        <section className="container">
          <div className="col-sm-4  bg-info">
            <form>
              <div className="form-group">
                <label className="form-label">Title: </label>
                <input type="text" className="form-control"
                  value={this.state.title} onChange={this.handleTitleChange} />
              </div>
            </form>
          </div>

          <div className="col-sm-4">
            <form>
              <div className="form-group">
                <label className="form-label">TagLine: </label>
                <input type="text" className="form-control" ref={this.tagLineModifier}
                  defaultValue={this.state.tagLine}  />
                <button onClick={this.handleTagLineChange}>Change</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default App;