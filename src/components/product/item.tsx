import React from 'react';
import type { ProductItem } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';

type Props = {
    item: ProductItem;
};

function ProductItem({ item }: Props) {
    return (
        <Link href={`/`}>
            <div>
                <AspectRatio ratio={16 / 9} className="bg-muted">
                    <Image
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt={item?.name}
                        fill
                        className="h-full w-full rounded-md object-cover"
                    />
                </AspectRatio>
                <div>
                    <h3>{item?.name}</h3>
                    {item?.salePrice !== 0 ? (
                        <>
                            <p className="text-red-500 text-[1.6rem]">{item?.salePrice}</p>
                            <p className="text-[1.2rem] line-through">{item?.price}</p>
                        </>
                    ) : (
                        <p className="text-[1.2rem] line-through">{item?.price}</p>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default ProductItem;
