import { Customer } from 'src/app/model/customer.model';
import * as CustomerActions from '../actions/customer.action';

export const initialState = {
        willModifyId: '',
        form: {
            name: '',
            type_of_company: '',
            countryId: '',
            currency: '',
            emailId: '',
            address: '',
            website: '',
            GST: '',
            pan: '',
            NDA: '',
            MSA: '',
            isDeleted: false,
            contactPersons: [
                {
                    name: '',
                    emailId: '',
                    phoneNumber: '',
                    communicationId: '',
                    communicationTypeId: '',
                    isSPOC: true,
                    isDeleted: false,
                    errorMsg: '',
                }
            ],
            customerSOW: [
                {
                    sowNumber: '',
                    sowTitle: '',
                    sowFile: '',
                    errorMsg: '',
                }
            ]
        },
        errorMsg: {},
        data: [],
        companyType: [],
        country: [],
};

export const customerReducer = (state: Customer = initialState.form, action: CustomerActions.Actions) => {
    switch (action.type) {
        case CustomerActions.CUSTOMER_ONCHANGE:
            return { ...state, [action.payload.name]: action.payload.value };
            default:
                return state;
    }
};

