import { useState, useEffect } from 'react';

import { Person } from '../types';
import { getData } from './api';

export enum ordering {
    asc = 'asc',
    desc = 'desc',
}

interface props {
    laureates: Person[],
    setPage: (page: number) => void,
    setOrder: (order: ordering) => void,
    order: ordering,
    prevPage: () => void,
    nextPage: () => void,
    page: number,
    loading: boolean,
}


const useFilters = () : props => {
    const [order, setOrder] = useState<ordering>(ordering.asc);
    const [page, setPage] = useState<number>(1);
    const [laureates, setLaureates] = useState<Person[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const query = new URLSearchParams({ page: page.toString(), order }).toString();

    useEffect(() => {
        const getAndSetData = async () => {
            setLoading(true);
            setError('');
            try {
                const apiData = await getData(query);
                setLaureates(apiData);
            } catch (error) {
                setError('Something went wrong.');
            } finally {
                setLoading(false);
            }         
        }
        getAndSetData();
    }, [query]);
    
    const nextPage = () => {
        if (page === 3) return;
        setPage(p => p + 1);
    }

    const prevPage = () => {
        if (page === 1) return;
        setPage(p => p - 1);
    }

    return {
        laureates,
        setPage,
        setOrder,
        order,
        prevPage,
        nextPage,
        page,
        loading,
    }
}

export default useFilters;