import { useEffect } from 'react';
import { useSettings } from '../Settings';

const url = 'https://justjoin.it/api/offers';

const useFetch = () : void => {
    const { setData } = useSettings();

    useEffect(() => {
        let isMounted = true;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (isMounted) {
                    setData(data);
                }
            });
        return () => {
            isMounted = false;
        };
    }, [url]);
};

export { useFetch };