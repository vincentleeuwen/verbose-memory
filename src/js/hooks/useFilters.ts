import { useState, useEffect } from 'react';

import { Person } from '../types';
import { getData, LIMIT } from './api';

export enum ordering {
    asc = 'asc',
    desc = 'desc',
}

interface outputProps {
    laureates: Person[],
    setPage: (page: number) => void,
    setOrder: (order: ordering) => void,
    order: ordering,
    prevPage: () => void,
    nextPage: () => void,
    page: number,
    loading: boolean,
    error: string,
    updateBirthRange: (from: string, to: string) => void,
    birthRange: string,
}


const useFilters = () : outputProps => {
    const [order, setOrder] = useState<ordering>(ordering.asc);
    const [page, setPage] = useState<number>(1);
    const [laureates, setLaureates] = useState<Person[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('');
    const [birthDateTo, setBirthDateTo] = useState<string>('');
    const birthRange = `${birthDate}-${birthDateTo}`;

    const offset = ((page - 1) * LIMIT).toString()
    const query = new URLSearchParams({ offset, sort: order, birthDate, birthDateTo }).toString();

    useEffect(() => {
        const getAndSetData = async () => {
            setLoading(true);
            setError('');
            try {
                const apiData = await getData(query);
                setLaureates(apiData.laureates);
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

    const updateBirthRange = (from: string, to: string) => {
        if (from === birthDate && to === birthDateTo) {
            setBirthDate('');
            setBirthDateTo('');
        } else {
            setBirthDate(from);
            setBirthDateTo(to);
        }        
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
        error,
        updateBirthRange,
        birthRange,
    }
}

export default useFilters;