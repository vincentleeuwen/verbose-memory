import { useState, useEffect } from 'react';

import { Person } from '../types';

export enum ordering {
    asc = 'asc',
    desc = 'desc',
}

interface props {
    data: Person[],
    setPage: (page: number) => void,
    setOrder: (order: ordering) => void,
    order: ordering,
    prevPage: () => void,
    nextPage: () => void,
    page: number,
}


const useFilters = () : props => {
    const [order, setOrder] = useState<ordering>(ordering.asc);
    const [page, setPage] = useState<number>(1);
    const [data, setData] = useState<Person[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    const query = new URLSearchParams({ page: page.toString(), order }).toString();
    console.log('QUERY');
    console.log(query);

    useEffect(() => {

    }, []);
    
    const nextPage = () => {
        if (page === 3) return;
        setPage(p => p + 1);
    }

    const prevPage = () => {
        if (page === 1) return;
        setPage(p => p - 1);
    }

    return {
        data,
        setPage,
        setOrder,
        order,
        prevPage,
        nextPage,
        page,
    }
}

export default useFilters;