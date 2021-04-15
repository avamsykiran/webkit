import React, { Component } from 'react';
import Header from './Header';
import CourseList from './CourseList';
import InstructorsPanel from "./InstructorsPanel";
import RandomNumber from './RandomNumber';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title:"My First Angular App",
      courses: [
        { crId: 101, title: 'Programming With C', duration: '30 Sessions',isEditable:false },
        { crId: 102, title: 'Web UI - HTML5', duration: '10 Sessions',isEditable:true },
        { crId: 103, title: 'Web Styling using CSS', duration: '7 Sessions',isEditable:false },
        { crId: 104, title: 'Client Side Scripting JS', duration: '30 Sessions',isEditable:true },
        { crId: 105, title: 'Server Side Scripting using ES6', duration: '7 Sessions',isEditable:false },
        { crId: 106, title: 'Reactive UI using ReactJS', duration: '10 Sessions',isEditable:false }
      ],
      instructors: [
        { istId: 101, firstName: 'Vamsy Kiran', lastName: 'Aripaka', experience: '14+ yrs' },
        { istId: 102, firstName: 'Srinivas', lastName: 'Dachepalli', experience: '10+ yrs' },
        { istId: 103, firstName: 'Venky', lastName: 'K', experience: '9+ yrs' }
      ]
    };
  }

  render() {

    let {title,instructors,courses} = this.state;

    return (
      <div>
        <Header title={title} theme="dark" />
        <InstructorsPanel instructors={instructors} />
        <div>
          <h3>A simple randome number: </h3>
          <RandomNumber />
        </div>
        <CourseList courses={courses} />
      </div>
    );
  }

  logMsg = (msg) => {
    let d = new Date().toISOString();
    console.log(`${d}>> ${msg}`);
  }

  componentWillMount = () => {
    this.logMsg("APP Component Is About To Load");
  }

  componentDidMount = () => {
    this.logMsg("APP Component Is Loaded");
  }

  componentWillUnmount= () => {
    this.logMsg("APP Component Will Unload");
  }
}

export default App;
