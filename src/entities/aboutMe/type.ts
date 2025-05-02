export interface IAboutMe {
    textContent: string;
    servicesList: ServicesListItem[];
}

export type ServicesListItem = {
    service: string;
    price: number;
}