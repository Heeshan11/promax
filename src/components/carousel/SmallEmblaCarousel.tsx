import React from 'react'
import { useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from 'react-router-dom'
import { IProduct, IService } from '../../interface/interface'

type PropType = {
  data: IProduct[]
}

const SmallEmblaCarousel: React.FC<PropType> = (props) => {
  const OPTIONS = { loop: true }

  const { data } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="small__embla">
      <div className="small__embla__viewport" ref={emblaRef}>
        <div className="small__embla__container">
          {data.map((item, index) => (
            <Link to={`product/${item.id}`}
            state={{ title: item.uid, category: item.category, uid: item.uid }} 
            className="small__embla__slide select-none gap-2" key={index}>
              {/* <WatermarkedImage imageUrl={item.image} targetHeight={208} imgStyle={"small__embla__slide__img "}/> */}
              <img
                className="small__embla__slide__img "
                src={item?.image}
                alt="Your alt text"
                loading='lazy'
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="small__embla__controls">
        <div className="embla__buttons">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>

      </div>
     
    </section>
  )
}

export default SmallEmblaCarousel
