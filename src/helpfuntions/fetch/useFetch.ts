import { useEffect } from 'react';
import { useAuthSettings } from '../../AuthContext';
import axios from 'axios';
import { useSettings } from '../../Settings';
import { parseJwt } from '../accesToken/decodeAccessToken';


const useFetch = (url : string) : void => {
    const { setUsername, setRole, setIsAuthenticated } = useAuthSettings();
    const { setData } = useSettings();
    const { setUserOffers, } = useAuthSettings();

    useEffect( () => {
        axios.get(url,
            {
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(<string>localStorage.getItem('accessToken'))
                }
            })
            .then(async (response) => {
                if (url === 'http://localhost:3000/offers') {
                    setData(response.data);
                    setIsAuthenticated(true);
                    setUsername(parseJwt(<string>localStorage.getItem('accessToken')).username);
                    setRole(parseJwt(<string>localStorage.getItem('accessToken')).role);
                } else if (url === 'http://localhost:3000/offers/your-offers') {
                    setUserOffers(response.data);
                }
            })
            .catch(() => {
                setIsAuthenticated(false);
            });
    }, [url]);
};

export { useFetch };