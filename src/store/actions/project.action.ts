import { Action } from '@ngrx/store';
import { Project } from '../../app/model/project.model';

export const PROJECT_ONCHANGE = '[PROJECT] onChange';
export const PROJECT_FORM_CHANGE = '[PROJECT] formChange';
export const PROJECT_FORM_ONCHANGE = '[PROJECT] formHandleChange';

export class HandleChange implements Action {
    readonly type = PROJECT_ONCHANGE;
    constructor(public payload: any) {}
}

export class FormChange implements Action {
    readonly type = PROJECT_FORM_CHANGE;
    constructor(public payload: Project) {}
}

export class FormOnChange implements Action {
    readonly type = PROJECT_FORM_ONCHANGE;
    constructor(public payload: any) {}
}

// (name, value) => ({
//   type: ASSET_FORM_ONCHANGE,
//   payload: { name: name, value: value }
// });


export type Actions = HandleChange | FormChange | FormOnChange;
