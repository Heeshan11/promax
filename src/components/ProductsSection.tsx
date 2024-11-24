import React from 'react'
import SmallEmblaCarousel from './carousel/SmallEmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { newArrivals } from '@data/constants'
import { useAllProducts } from '@app/context/MainProvider'

const ProductsSection = () => {
    const allProducts = useAllProducts()
   let products = [...allProducts].sort(() => Math.random() - 0.5);

    return (
        <div className='max-w-[2000px] mx-auto'>
            <p className="heading_text m-5 text-2xl pl-6   text-gray-800">New Arrivals </p>
            <SmallEmblaCarousel data={products.slice(0,6)} />
        </div>
    )
}

export default ProductsSection