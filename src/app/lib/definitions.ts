export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}

export type Customer = {
    id: number;
    name: string | null;
    email: string;
    image_url: string;
}

export type Invoice = {
    id: number;
    ownerId: number,
    amount: number,
    date: string;
    status: 'pending' | 'paid';
}

export type Revenue = {
    month: string;
    revenue: number;
}

export type LatestInvoice = {
    amount: number;
    owner: Customer;
}
