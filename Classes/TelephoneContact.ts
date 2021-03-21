import { ContactType } from '../Types';

class TelephoneContact {
    telephone: number;
    type: ContactType;

    constructor(telephone: number, type: ContactType) {
        this.telephone = telephone;
        this.type = type;
    }

    public set_telephone_number(telephone: number) {
        this.telephone = telephone;
    }

    public set_telephone_type(type: ContactType) {
        this.type = type;
    }

}

export default TelephoneContact;