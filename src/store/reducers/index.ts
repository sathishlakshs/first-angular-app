import { Customer } from '../../app/model/customer.model';
import { Employee } from 'src/app/model/employee.model';
import { Project } from 'src/app/model/project.model';

export interface AppState {
    readonly customers: Customer;
    readonly employee: Employee;
    readonly app: any;
    readonly project: Project;
}
