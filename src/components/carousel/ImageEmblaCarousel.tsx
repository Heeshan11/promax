import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { IService } from '@/app/interface/interface'
import ViewBtn from '../ViewBtn'
import WatermarkedImage from '../WaterMark'

type PropType = {
  data: IService[]
  IsBtn?: boolean | false
}
const OPTIONS = { loop: true }
const ImageEmblaCarousel: React.FC<PropType> = (props) => {
  const { data, IsBtn } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  return (
    <section className="image__embla">
      <div className="image__embla__viewport" ref={emblaRef}>
        <div className="image__embla__container">
          {data.map((item, index) => (
            <div className="image__embla__slide select-none" key={index}>
              <div className="w-full h-60 overflow-hidden relative group rounded-xl">
                {/* <WatermarkedImage imageUrl={item.image ? item.image : item} targetHeight={240} imgStyle={"w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110 "} /> */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110 "
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 ease-in-out"></div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 group-hover:top-1/2  transition-all duration-500 ease-in-out text-center 
                ">
                  <h1 className="text-white text-lg font-semibold tracking-wide mb-2 md:text-base md:mb-4 xs:text-[18px]">
                    {item.title}</h1>
                  {IsBtn && <ViewBtn to='#' text="Read more" />
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageEmblaCarousel
