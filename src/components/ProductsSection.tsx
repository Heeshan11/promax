import React from 'react'
import SmallEmblaCarousel from './carousel/SmallEmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { newArrivals } from '../data/constants.ts'
import Link from 'next/link'

const ProductsSection = () => {
    const SMALLOPTIONS: EmblaOptionsType = { align: 'center' }
    const SLIDE_COUNT = 6
    return (
        <div className='max-w-[2000px] mx-auto'>
            <p className="heading_text m-5 text-2xl pl-6   text-gray-800">New Arrivals </p>
            <SmallEmblaCarousel data={newArrivals} />
        </div>
    )
}

export default ProductsSection