import React from 'react';
import type { ProductDetail } from '@/types/product';
type Props = {
    item: ProductDetail;
};

function ProductDetail({ item }: Props) {
    return (
        <div>
            <h2>{item?.name}</h2>
            <p>{item?.code}</p>
            {item?.salePrice !== 0 ? (
                <>
                    <p className="text-red-500 text-[1.6rem]">{item?.salePrice}</p>
                    <p className="text-[1.2rem] line-through">{item?.price}</p>
                </>
            ) : (
                <p className="text-[1.2rem] line-through">{item?.price}</p>
            )}
        </div>
    );
}

export default ProductDetail;
