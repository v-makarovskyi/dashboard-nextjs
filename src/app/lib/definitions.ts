

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
}

export type Customer = {
    id: string;
    name: string | null;
    email: string;
    image_url: string;
}

export type Invoice = {
    id: string;
    ownerId: string,
    amount: number,
    date: string;
    status: 'pending' | 'paid';
}

export type Revenue = {
    id: string;
    month: string;
    revenue: number;
}

export type LatestInvoice = {
    id: string;
    amount: number | null;
    owner: Customer;
}

export type CustomerField = {
    id: string,
    name: string | null,
}

export type InvoiceForm = {
    id: string;
    ownerId: string,
    amount: number | null;
    status: 'pending' | 'paid';
} 
