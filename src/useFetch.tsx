import React from 'react';
import { Link } from '@material-ui/core';



const UseFetch = () : JSX.Element => {

    let offers: any[] = [];

    fetch('http://localhost:8000/offers')
        .then(res => res.json())
        .then(data => {
            offers = data;
        });
    console.log(offers);
    return (
        <div>
            { offers.map(i =>(
                <Link key={i.title}>

                    <p>{i.title}</p>
                </Link>
            ))}
        </div>
    );
};

export default UseFetch;