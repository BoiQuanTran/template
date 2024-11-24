import { ResponseData } from './common';
import { SaleOrder } from './saleorder';
export type CustomerInfo = {
    id: number;
    name: string;
    birth: Date;
    address: string;
    phone: string;
    saleOrder: SaleOrder;
};

export type ResponseCustomer = ResponseData<CustomerInfo>;
