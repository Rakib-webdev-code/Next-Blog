import Link from 'next/link';
import React from 'react';

const BlogCard = ({blog}) => {

    const {id, title, body} = blog
    return (
        <div className='border rounded-2xl space-y-3 p-4 bg-gray-200'  >
            <h3>{id}</h3>
            <h2> {title} </h2>
            <h3>{body}</h3>
            <Link href={`/blogs/${id}`}>
            <button className='border bg-orange-500 text-white p-2 rounded-3xl' >Show Details</button>
            </Link>
        </div>
    );
};

export default BlogCard;