import axios from 'axios';

import { Person } from '../types';

const BASE_URL = 'https://api.nobelprize.org/2.1/laureates?limit=30';


export const getData = async (params: string) : Promise<Person[]> => {
    const url = `${BASE_URL}&${params}`
    const response = await axios.get(url);
    return response.data;
}