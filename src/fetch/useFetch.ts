import { useEffect } from 'react';
import { useSettings } from '../Settings';

const url = 'https://justjoin.it/api/offers';

const useFetch = () : void => {
    const { setData } = useSettings();

    useEffect( () => {
            const fetchData = async () => {
            const response = await fetch(url);
            return response.json();
        };
        fetchData().then(data =>  setData(data));
    }, [url]);
};

export default useFetch;