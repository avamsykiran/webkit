import React from 'react';
import { connect } from 'react-redux';
import { TOGGLE_STATUS, DELETE_TASK, EDIT_TASK } from './taskReducer';

class TaskRow extends React.Component {

    constructor(props) {
        super(props);
    }

    toggleStatus = (taskId) => {
        let action = {
            type: TOGGLE_STATUS,
            taskId: taskId
        };
        this.props.dispatch(action);
    }

    deleteTask = (taskId) => {
        if (window.confirm(`Are you sure of deleting the task#${taskId}`)) {
            let action = {
                type: DELETE_TASK,
                taskId: taskId
            };
            this.props.dispatch(action);
        }
    }

    editTask = (taskId) => {
        let action = {
            type: EDIT_TASK,
            taskId: taskId
        };
        this.props.dispatch(action);
    }

    render() {
        let task = this.props.task;
        return (
            <tr>
                <td>{task.taskId}</td>
                <td>{task.task}</td>
                <td>{task.isCompleted ? 'closed' : 'open'}</td>
                <td>
                    <a href="#" onClick={(event) => { this.toggleStatus(task.taskId); }}>
                        {task.isCompleted ? 'Reopen' : 'Close'}
                    </a> |
                   <a href="#" onClick={(event) => { this.editTask(task.taskId); }}>Edit</a> |
                   <a href="#" onClick={(event) => { this.deleteTask(task.taskId); }}>Delete</a>
                </td>
            </tr>
        );
    }
}

export default connect()(TaskRow);