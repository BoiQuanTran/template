import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function ProductSearching() {
    const router = useRouter();
    const searchParams = useSearchParams(); // (?)
    const searchText = searchParams.get('q') || ''; // (?)
    const [keyword, setKeyword] = useState(searchText);

    const handleSeach = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (keyword.length > 0) {
                router.push(`/?q=${encodeURIComponent(keyword)}`);
            } else {
                router.push('/');
            }
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target?.value);
    };

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="keywork"
                onChange={handleChange}
                value={keyword}
                onKeyDown={handleSeach}
                placeholder="Search by name"
            />
            <Button type="submit">Search</Button>
        </div>
    );
}

export default ProductSearching;
