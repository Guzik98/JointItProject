import React, { useEffect, useState } from 'react';


const url = 'http://localhost:8000/offers';

const Getoffers = () => {
    const [offers, setOffers ] = useState([]);

    const getOffers = async  () => {
        const response = await fetch(url);
        const offers = await  response.json();
        setOffers(offers);
        console.log(offers);
    };


    useEffect(()=>{
        getOffers();
    }, []);

    return (
        <div>
            { offers.map((offer)=>{
                const { title } = offer;
                return (
                    <ul key={ title }>
                        <p>{title}</p>
                    </ul>
                );
            })}
        </div>
    );
};

export default Getoffers;