import React from 'react';
import { connect } from 'react-redux';
import { ADD_TASK} from './taskReducer';

class AddTask extends React.Component{
    constructor(props){       
        super(props);
    }

    handleBtnClick = (e) => {
        e.preventDefault();
        let task = {taskId:this.taskId.value,task:this.task.value,isCompleted:false,isEditing:false};
        let action = {type:ADD_TASK,task:task};
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <h3>Add Task</h3>
                <form>
                <label>Task#: <input type="number" ref={(val)=>this.taskId=val}/></label>
                <label>Task: <input type="text" ref={(val)=>this.task=val} /></label>
                <button onClick={this.handleBtnClick}>Add</button>
                </form>
            </div>
        );
    }
}

//export default connect()(AddTask);

let reduxHOC = connect();
let updateAddTask = reduxHOC(AddTask);
export default updateAddTask;