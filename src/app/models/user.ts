export interface Users {
    address: Address;
    company: Company;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo
}

export interface Company {
    bs: string;
    catchPhrase: string;
    name: string
}

export interface Geo {
    lat: string;
    lng: string;
}
export interface counterState {
    counter: number;
}

