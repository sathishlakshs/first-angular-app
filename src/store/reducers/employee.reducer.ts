import { Employee } from 'src/app/model/employee.model';

export const initialState = {
    form: {
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
        isDeleted: false,
        profilePic: '',
    },
};
export const employeeReducer = (state: Employee[] = [initialState.form]) => {
    return state;
};
