//Custom Action Types (each indicates an operation)
export const ADD_TASK = "add_task";
export const TOGGLE_STATUS = "toggle_status";
export const DELETE_TASK = "delete_task";
export const EDIT_TASK = "edit_task";
export const UPDATE_TASK = "update_task";
export const CANCEL_EDIT = "cancel_edit";

const initialState = () => {
    return  [
        { taskId: 101, task: 'React Assignments', isCompleted: false, isEditing: false },
        { taskId: 102, task: 'React Downloads from GIT', isCompleted: false, isEditing: false }
    ];
}

export const taskReducer = (state = initialState(), action) => {

    let modifiedState;

    switch (action.type) {
        case ADD_TASK:
            modifiedState = state.concat(action.task);
            break;
        case TOGGLE_STATUS:
            modifiedState = state.map(
                (t) => t.taskId == action.taskId ? { ...t, isCompleted: !t.isCompleted } : t);
            break;
        case DELETE_TASK:
            modifiedState = state.filter((task) => task.taskId != action.taskId);
            break;
        case EDIT_TASK:
            modifiedState = state.map(
                (t) => t.taskId == action.taskId ? { ...t, isEditing: true } : t);
            break;
        case CANCEL_EDIT:
            modifiedState = state.map(
                (t) => t.taskId == action.taskId ? { ...t, isEditing: false } : t);
            break;
        case UPDATE_TASK:
            modifiedState = state.map(
                (t) => t.taskId == action.task.taskId ? { ...action.task } : t);
            break;
        default:
            modifiedState = state;
    }

    return modifiedState;
};