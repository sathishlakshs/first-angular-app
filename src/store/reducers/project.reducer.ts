import { Project } from '../../app/model/project.model';
import * as ProjectActions from '../actions/project.action';

export const initialState = {
        willModifyId: 0,
        form: {
            name: '',
        }
};

export const projectReducer = (state: any = initialState, action: ProjectActions.Actions) => {
    switch (action.type) {
        case ProjectActions.PROJECT_FORM_ONCHANGE:
            return { ...state, form: { ...state.form, [action.payload.name]: action.payload.value }};
        case ProjectActions.PROJECT_FORM_CHANGE:
            return { ...state, form: action.payload };
            case ProjectActions.PROJECT_ONCHANGE:
            return { ...state,  [action.payload.name]: action.payload.value };
            default:
                return state;
    }
};

