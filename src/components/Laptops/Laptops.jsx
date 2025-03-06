import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';

const Laptops = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
      fetch("gadgets.json")
        .then((res) => res.json())
        .then((data) => setLaptops(data));
    }, []);
    const allLaptops=laptops.filter(laptop=> laptop.category === "Laptop")
    console.log(allLaptops)
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 '>
                {
                    allLaptops.map(laptop =><Laptop 
                        key={laptop.product_id} 
                        laptop={laptop}
                        ></Laptop>)
                }
            </div>
        </div>
    );
};

export default Laptops;