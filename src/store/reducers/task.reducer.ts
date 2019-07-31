
import * as TaskAction from '../actions/task.action';
export const initialState = {
    taskForm: {
        projectId: '',
        name: '',
        targetDate: '',
        assignTo: [],
        isNotify: true,
        isMailNotify: true,
        estimatedhours: '',
        story: '',
        statusId: '',
    },
};
export const taskReducer = (state: any = initialState, action: TaskAction.Actions) => {
    switch (action.type) {
        case TaskAction.TASK_ONCHANGE:
            return { ...state, [action.payload.name]: action.payload.value };
        default:
            return state;
    }
};
