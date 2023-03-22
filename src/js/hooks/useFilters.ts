import { useEffect, useState } from 'react';

import { Person } from '../types';

import { getData, LIMIT } from './api';

export enum Ordering {
  asc = 'asc',
  desc = 'desc',
}

interface OutputProps {
  laureates: Person[];
  updatePage: (page: number) => void;
  updateOrder: (order: Ordering) => void;
  order: Ordering;
  prevPage: () => void;
  nextPage: () => void;
  page: number;
  loading: boolean;
  error: string;
  updateBirthRange: (from: string, to: string) => void;
  birthRange: string;
}

const useFilters = (): OutputProps => {
  const [order, setOrder] = useState<Ordering>(Ordering.asc);
  const [page, setPage] = useState<number>(1);
  const [laureates, setLaureates] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [birthDateTo, setBirthDateTo] = useState<string>('');
  const birthRange = `${birthDate}-${birthDateTo}`;

  const offset = ((page - 1) * LIMIT).toString();
  const query = new URLSearchParams({
    offset,
    sort: order,
    birthDate,
    birthDateTo,
  }).toString();

  useEffect(() => {
    const getAndSetData = async () => {
      setLoading(true);
      setError('');
      try {
        const apiData = await getData(query);
        setLaureates(apiData.laureates);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {
        setError('Something went wrong.');
      } finally {
        setLoading(false);
      }
    };
    void getAndSetData();
  }, [query]);

  const nextPage = () => {
    if (page === 3 || loading) return;
    setPage((p) => p + 1);
  };

  const prevPage = () => {
    if (page === 1 || loading) return;
    setPage((p) => p - 1);
  };

  const updatePage = (p: number) => !loading && setPage(p);

  const updateOrder = (o: Ordering) => !loading && setOrder(o);

  const updateBirthRange = (from: string, to: string) => {
    if (loading) return;
    if (from === birthDate && to === birthDateTo) {
      setBirthDate('');
      setBirthDateTo('');
    } else {
      setBirthDate(from);
      setBirthDateTo(to);
    }
  };

  return {
    laureates,
    updatePage,
    updateOrder,
    order,
    prevPage,
    nextPage,
    page,
    loading,
    error,
    updateBirthRange,
    birthRange,
  };
};

export default useFilters;
