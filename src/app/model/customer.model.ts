export interface Customer {
        name: string;
        type_of_company: string;
            countryId: string;
            currency: string;
            emailId: string;
            address: string;
            website: string;
            GST: string;
            pan: string;
            NDA: string;
            MSA: string;
            isDeleted: boolean;
            contactPersons: { name: string;
            emailId: string;
            phoneNumber: string;
            communicationId: string;
            communicationTypeId: string;
            isSPOC: boolean;
            isDeleted: boolean;
            errorMsg: string }[];
            customerSOW: {
                sowNumber: string;
                sowTitle: string;
                sowFile: string;
                errorMsg: string;
            }[];
}
