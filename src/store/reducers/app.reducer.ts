
import * as appAction from '../actions/app.action';

export const initialState = {
    projects: [],
    employee: [],
};

export const appReducer = (state: any = initialState, action: appAction.Actions) => {
    switch (action.type) {
        case appAction.APP_ONCHANGE:
            return { ...state, [action.payload.name]: action.payload.value };
        default:
            return state;
    }
};
