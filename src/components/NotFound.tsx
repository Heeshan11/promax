import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
            <div className='h-screen text-center flex-col flex justify-center items-center'>
                <h1 className='text-5xl text-gray-800'>Product not fount :(</h1>
                <Link to={'/products'}><p className='text-xl text-gray-800 py-7'>Back to products</p></Link>
            </div>

    )
}

export default NotFound
