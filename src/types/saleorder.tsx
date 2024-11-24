import { ResponseData } from './common';
import { CustomerInfo } from './customer';
import { ProductDetail } from './product';

export type SaleOrder = {
    id: number;
    code: string;
    customerId: CustomerInfo;
    productDetail: Pick<ProductDetail, 'name' | 'salePrice' | 'price'>;
    created: Date;
    voucher: string;
    totalPrice: number;
    // paymentMethod: ;
};

export type SaleOrderList = SaleOrder[];

export type ResponseSaleOrder = ResponseData<{ data: SaleOrderList; total: number }>;
