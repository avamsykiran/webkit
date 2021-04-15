import React from 'react';
import { connect } from 'react-redux';
import EditTask from './EditTask';
import TaskRow from './TaskRow';

class TaskList extends React.Component {
    render() {
        return (
            <div>
                <h3>Tasks List</h3>
                <table>
                    <tr>
                        <th>Task#</th>
                        <th>Task</th>
                        <th>status</th>
                    </tr>
                    {this.props.tasks ? this.props.tasks.map(
                        (task) => (
                            task.isEditing ? 
                            <EditTask key={task.taskId} task={task}/> : 
                            <TaskRow key={task.taskId} task={task}/>
                        )
                    ) : <tr><td colspan="3">No Tasks</td></tr>}
                </table>
            </div>
        );
    }
}

export default connect((state) => ({ tasks: state }))(TaskList);