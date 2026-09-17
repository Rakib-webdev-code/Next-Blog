import React from 'react';
import BlogCard from '../components/blog';

const BlogsPage = async () => {
    
    const res = await  fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    
    return (
        <div>
            <h2 className='text-center my-8 text-3xl font-bold'>Bloges Page</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    data.map((blog) => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;