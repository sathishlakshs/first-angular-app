import { Action } from '@ngrx/store';
import { Customer } from '../../app/model/customer.model';

export const CUSTOMER_ONCHANGE = '[CUSTOMER] onChange';
export const CUSTOMER_FORM_CHANGE = '[CUSTOMER] formChange';
export const CUSTOMER_FORM_ONCHANGE = '[CUSTOMER] formHandleChange';

export class HandleChange implements Action {
    readonly type = CUSTOMER_ONCHANGE;
    constructor(public payload: any) {}
}

export class FormChange implements Action {
    readonly type = CUSTOMER_FORM_CHANGE;
    constructor(public payload: Customer) {}
}

export class FormOnChange implements Action {
    readonly type = CUSTOMER_FORM_ONCHANGE;
    constructor(public payload: any) {}
}

// (name, value) => ({
//   type: ASSET_FORM_ONCHANGE,
//   payload: { name: name, value: value }
// });


export type Actions = HandleChange | FormChange | FormOnChange;
