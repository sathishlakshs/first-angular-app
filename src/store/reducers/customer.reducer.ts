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
                    communicationTypeId: 0,
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

export const customerReducer = (state: any = initialState, action: CustomerActions.Actions) => {
    switch (action.type) {
        case CustomerActions.CUSTOMER_FORM_ONCHANGE:
            return { ...state, form: { ...state.form, [action.payload.name]: action.payload.value }};
        case CustomerActions.CUSTOMER_FORM_CHANGE:
            return { ...state, form: action.payload };
            case CustomerActions.CUSTOMER_ONCHANGE:
            return { ...state,  [action.payload.name]: action.payload.value };
            default:
                return state;
    }
};

