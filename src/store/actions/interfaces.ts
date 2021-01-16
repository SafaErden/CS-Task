export interface IListItem {
    id: string;
    about: string;
    animal_breed: string;
    bids: {
        data: IBid[]
    };
    category: string;
    delivery: IDelivery;
    title: string;
    mileage: number;
    subcategory: string;
}
export interface IBid {
    id: number;
    amount: number;
    status: string;
}
export interface IDelivery {
    city: string;
    adress: string;
}