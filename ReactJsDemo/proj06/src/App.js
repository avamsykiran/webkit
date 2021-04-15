import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

const App = (props) => (
  <div>
    <header>
      <h2>TaskManager - A React Redux Demo</h2>
    </header>
    <AddTask />
    <TaskList />
  </div>
);

export default App;
