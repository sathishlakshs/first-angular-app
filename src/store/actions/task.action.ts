import { Action } from '@ngrx/store';

export const TASK_ONCHANGE = '[TASK] onChange';

export class HandleChange implements Action {
    readonly type = TASK_ONCHANGE;
    constructor(public payload: any) { }
}

// (name, value) => ({
//   type: ASSET_FORM_ONCHANGE,
//   payload: { name: name, value: value }
// });


export type Actions = HandleChange;
