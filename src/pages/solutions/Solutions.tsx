import { useAllProducts, useLoading } from '@app/context/MainProvider'
import SmallEmblaCarousel from '@components/carousel/SmallEmblaCarousel'
import Collection from '@components/Collection'
import ProductCard from '@components/ProductCard'
import Spinner from '@components/Spinner'
import { hospitalityProducts, ourSolutions } from '@data/constants'
import { Link } from 'react-router-dom'


const Solutions = () => {

  const loading = useLoading(); // Get loading state from context

  if (loading) {
    return (
      <Spinner />
    )
  }

  return (
    <div className='min-h-screen bg-gray-100  p-4 pt-28 '>
      {ourSolutions.map((solution) => {
        const allProducts = useAllProducts()

        const sliceData =  allProducts.filter((product) => product.category.toLowerCase() === solution.category.toLowerCase())

        return (
          <div key={solution.id}>
            <h1 className='heading_text m-5 text-2xl sm:w-9/12 mx-auto text-gray-800'>{solution.title}</h1>
            <ProductCard products={sliceData.slice(0,5).sort(() => Math.random() - 0.5)}  />

            <div className="text-right  text-zinc-500 font-bold ">
              {sliceData.length > 5 &&

                <Link to={'/products'}
                  state={{ title: solution.title, category: solution.category }}

                >View More</Link>
              }
            </div>
          </div>

        )
      })}
    </div>
  )
}

export default Solutions
