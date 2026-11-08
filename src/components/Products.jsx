import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProducts() {
            try {
                const res = await fetch("https://dummyjson.com/products");

                if (!res.ok){
                    throw new Error("Can't fetch products");
                }

                const data = await res.json();

                setProducts(data.products);
            } catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        getProducts();
    }, []);

    console.log(products);

    if (loading) {
        return (
            <div className='w-screen h-screen flex justify-center items-center'>
                <h2>Loading product....</h2>
            </div>
        )
    }

    if (error) {
        return(
            <div className='w-screen h-screen flex justify-center items-center'>
                <h2>Error: {error}</h2>
            </div>
        )
    }
    
    return (
        <div>
            <h2 className='text-center my-10 text-4xl'>Products fetch from DummyJSON</h2>

            <div className='grid grid-cols-4 gap-3'>
                {products.map((item) => (
                    <div key={item.id}>
                        <img className='w-full' src={item.thumbnail} alt="" />
                        {item.title}
                    </div>
                ))}            
            </div>
        </div>
    )
}

export default Products