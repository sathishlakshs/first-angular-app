import { Action } from '@ngrx/store';
import { Customer } from '../../app/model/customer.model';

export const CUSTOMER_ONCHANGE = '[CUSTOMER] onChange';

export class HandleChange implements Action {
    readonly type = CUSTOMER_ONCHANGE;
    constructor(public payload: any) {}
}

// (name, value) => ({
//   type: ASSET_FORM_ONCHANGE,
//   payload: { name: name, value: value }
// });


export type Actions = HandleChange;
