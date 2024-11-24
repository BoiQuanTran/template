import React from 'react';
import type { ProductSortPrice } from '@/types/product';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

type Props = {
    sort: ProductSortPrice | undefined;
};

function ProductSort(sort: Props) {
    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Price</SelectLabel>
                    <SelectItem value="asc">Price (Low to High)</SelectItem>
                    <SelectItem value="desc">Price (High to Low)</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

export default ProductSort;
