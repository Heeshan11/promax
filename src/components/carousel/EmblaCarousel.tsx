
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { IProduct, Iproject } from '@app/interface/interface'
import WatermarkedImage from '@components/WatermarkedImage';


interface ProductCardProps {
  data: IProduct[];
}
const EmblaCarousel: React.FC<ProductCardProps>= ({ data }) => {
  const OPTIONS = { loop: true }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()])

  return (
    <section className="embla bg-white">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((banner, index) => (
            <div className="embla__slide" key={index}>
              <WatermarkedImage imageUrl={banner.image} imgStyle={"embla__slide__img"} targetHeight={500}/>
              {/* <img
                className="embla__slide__img "
                src={banner.image}
                alt="Your alt text"

              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel