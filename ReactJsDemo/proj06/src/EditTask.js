import React from 'react';
import { connect } from 'react-redux';
import { UPDATE_TASK, CANCEL_EDIT } from './taskReducer';

class EditTask extends React.Component {
   
    cancelEdit = (taskId) => {
        let action = {
            type: CANCEL_EDIT,
            taskId: taskId
        };
        this.props.dispatch(action);
    }

    updateTask = (taskId,taskName) => {
        let action = {
            type: UPDATE_TASK,
            task: {taskId:taskId,task:taskName,isCompleted:false,isEditing:false}
        };
        this.props.dispatch(action);
    }

    render() {
        let task = this.props.task;
        return (
            <tr>
                <td>{task.taskId}</td>
                <td><input type="text" ref={(val)=>this.taskName=val} defaultValue={task.task} /></td>
                <td>{task.isCompleted ? 'closed' : 'open'}</td>
                <td>
                   <a href="#" onClick={(event) => { this.updateTask(task.taskId,this.taskName.value); }}>Save</a> |
                   <a href="#" onClick={(event) => { this.cancelEdit(task.taskId); }}>Cancel</a>
                </td>
            </tr>
        );
    }
}

export default connect()(EditTask);