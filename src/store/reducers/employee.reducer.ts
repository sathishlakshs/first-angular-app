import { Employee } from 'src/app/model/employee.model';
import * as EmployeeActions from '../actions/employee.action';
export const initialState = {
    employeeForm: {
        companyId: 1,
        attandance_id: 0,
        gender: 0,
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        dob: '',
        comm_address: '',
        per_address: '',
        isActive: true,
        profilePic: ''
    }
};
export const employeeReducer = (state: any = initialState, action: EmployeeActions.Actions) => {
    switch (action.type) {
        case EmployeeActions.EMPLOYEE_ONCHANGE:
            return { ...state, [action.payload.name]: action.payload.value };
        default:
            return state;
    }
};
