import { ResponseData } from './common';

export type ProductSortPrice = 'price_asc' | 'price_desc';

export type ProductSearchParams = Partial<{
    sort: string;
    q: string;
    page: string;
    limit: string;
}>;

export type ProductItem = {
    id: number;
    name: string;
    code: string;
    caterogy: string;
    salePrice: number;
    price: number;
    quantity: number;
    image: string;
};

export type ProductList = ProductItem[];

export type ProductDetail = {
    id: number;
    code: string;
    name: string;
    // color: string;
    stock: number;
    salePrice: number;
    price: number;
    image: string;
};

export type QueryProduct = {
    numProduct: number;
    keyword: string;
    page: number;
    limit: number;
    orderBy: string;
    ascending: string;
};

export type ResponseProduct = ResponseData<{ data: ProductList; total: number }>;
export type ResponseProductDetail = ResponseData<ProductDetail>;
