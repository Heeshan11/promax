import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}
const images = [
  '/banners/banner1.jpg',
  '/banners/banner2.jpg',
  '/banners/banner3.jpg',
]
const EmblaThumbCarousel: React.FC<PropType> = (props) => {
  const { slides } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const OPTIONS: EmblaOptionsType = {}
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(OPTIONS)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="thumb_embla">
      <div className="thumb_embla__viewport" ref={emblaMainRef}>
        <div className="thumb_embla__container">
          {slides.map((item, index) => (
            <div className="thumb_embla__slide" key={index}>
              <img
                src={item}
                alt={item}
                className="w-full h-80 object-cover 
                transform transition-transform 
                duration-300 ease-in-out
                 group-hover:scale-110 rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg thumb_embla-thumbs">
        <div className="thumb_embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="thumb_embla-thumbs__container pl-5">
            {slides.map((item, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                thumbImg={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaThumbCarousel
