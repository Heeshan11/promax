import SmallEmblaCarousel from '@components/carousel/SmallEmblaCarousel'
import Collection from '@components/Collection'
import ProductCard from '@components/ProductCard'
import { hospitalityProducts, ourSolutions } from '@data/constants'
import { Link } from 'react-router-dom'

const Solutions = () => {
  return (
    <div className='min-h-screen bg-gray-100  p-4 pt-28 '>
      {ourSolutions.map((solution) => {
        const sliceData = solution.data.slice(0, 5)
        return (
          <>
            <h1 className='heading_text m-5 text-2xl sm:w-9/12 mx-auto text-gray-800'>{solution.title}</h1>
            <ProductCard products={sliceData}  />

            <div className="text-right  text-zinc-500 font-bold ">
              {solution.data.length > 5 &&

                <Link to={'/products'}
                  state={{ title: solution.title, category: solution.category }}

                >View More</Link>
              }
            </div>
          </>

        )
      })}
    </div>
  )
}

export default Solutions
