import React, { useEffect, useState } from 'react';
import Course from './Course';

const Home = () => {
    const [services, setServices]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])
    return (
        <div>
            {
                services.map(service=> <Course key={service.id} course={service}></Course>)
            }
            
        </div>
    );
};

export default Home;