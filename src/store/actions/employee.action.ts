import { Action } from '@ngrx/store';

export const EMPLOYEE_ONCHANGE = '[EMPLOYEE] onChange';

export class HandleChange implements Action {
    readonly type = EMPLOYEE_ONCHANGE;
    constructor(public payload: any) { }
}

// (name, value) => ({
//   type: ASSET_FORM_ONCHANGE,
//   payload: { name: name, value: value }
// });


export type Actions = HandleChange;
