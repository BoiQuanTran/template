import React from 'react';
import ProductItem from './item';
import type { ProductList } from '@/types/product';

type Props = {
    list: ProductList;
};

function ProductList({ list = [] }: Props) {
    return (
        <div>
            {list.map((item) => (
                <ProductItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default ProductList;
