import axios from 'axios';

import { Person } from '../types';


export const LIMIT = 30;

const BASE_URL = `https://api.nobelprize.org/2.1/laureates?limit=${LIMIT}`;

interface apiResponse {
    laureates: Person[],
}


export const getData = async (params: string) : Promise<apiResponse> => {
    const url = `${BASE_URL}&${params}`
    const response = await axios.get(url);
    return response.data;
}