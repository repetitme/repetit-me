type ServicesListItem = {
    service: string;
    price: number;
}

export interface IServicesList {
    services: ServicesListItem[];
}