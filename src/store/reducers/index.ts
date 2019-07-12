import { Customer } from '../../app/model/customer.model';

export interface AppState {
    readonly customers: Customer[];
}
