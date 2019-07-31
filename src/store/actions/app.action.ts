import { Action } from '@ngrx/store';

export const APP_ONCHANGE = '[APP] onChange';

export class HandleChange implements Action {
    readonly type = APP_ONCHANGE;
    constructor(public payload: any) { }
}
export type Actions = HandleChange;
