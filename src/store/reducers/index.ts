import { Customer } from '../../app/model/customer.model';
import { Employee } from 'src/app/model/employee.model';

export interface AppState {
    readonly customers: Customer[];
    readonly employee: Employee[];
}
