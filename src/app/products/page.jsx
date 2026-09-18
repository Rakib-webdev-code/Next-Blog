import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductsPage = async() => {
        const res =await fetch('https://dummyjson.com/products')
        const data = await res.json()
      const  Products = data.products
     
    return (
        <main className='container mx-auto px-4 py-10'>
            
            <section className='text-center mx-auto my-8'>
                <p className='tracking-widest text-sm font-semibold text-orange-600 mb-3'>our Products</p>
                <h1 className='text-4xl font-bold mb-5'>Product</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        Products.map((Product) => <ProductCard key={Product.id} Product={Product}/>)
                    }
                </div>

            </section>
        </main>
    );
};

export default ProductsPage;