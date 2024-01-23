export interface User {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
    address: Address;
    company: Company;
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


