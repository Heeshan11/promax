import { FaWhatsapp } from 'react-icons/fa';
import { AllSolutionProducts, bio, office_chair, restaurantProducts, sitingProducts, sofaProducts, tblProducts } from '@data/constants';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IProduct } from '@app/interface/interface';
import ProductCard from '@components/ProductCard';
import { useAllProducts, useLoading, useScrollToTop } from '@app/context/MainProvider';
import Spinner from '@components/Spinner';
import NotFound from '@components/NotFound';

const ProductDetails = ({ }) => {
  const location = useLocation();
  const params = useParams()
  const id = params.id
  const phoneNumber = bio.phone;
  const allProducts = useAllProducts()

  const { title, category, uid } = location.state || { title: '' };
  const productUrl = `https://localhost:5173/product/${id}`;
  console.log(uid, id);

  // Generate the WhatsApp message
  const whatsappMessage =
    `Hey!,
I need this product, please share more details.
${productUrl}
   `;

  // Generate the WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const [productDetails, setProductDetails] = useState<IProduct | null>(null);
  const [similarProducts, setSimilarProducts] = useState<IProduct[]>([]);
  const scrollToTop = useScrollToTop();
  const loading = useLoading(); // Get loading state from context

  useEffect(() => {
    scrollToTop()
    const product = allProducts.find((product) => product.uid === uid) || null;

    const filterProduct = allProducts.filter((product) => (product.category === category) && (product.uid !== uid));
    setProductDetails(product);
    setSimilarProducts(filterProduct.slice(0, 10));
  }, [category, uid, allProducts]);

  if (loading) {
    return (
      <Spinner />
    )
  }
  if (uid === undefined) {
    return <NotFound/>
  }

  return (
    <div className='pt-28'>
      <div className="container mx-auto px-4 py-6 pt-20">
        <div className="flex flex-col items-center gap-2 w-5/6 mx-auto">
        <img
              className=" rounded-lg h-96 w-full object-cover"
              src={productDetails?.image}
              style={{ boxShadow: ' 1px 1px 8px gray'  }}
              alt="Your alt text"
            />
            <div className="mt-4 text-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center space-x-2 p-2"
              >
                <FaWhatsapp color="#25D366" size={24} />
                <span className="text-sm">Share on WhatsApp</span>
              </a>
            </div>

          {/* <div className="md:w-1/2 w-full text-center md:text-left">
            <h1 className="text-3xl font-semibold mb-4">{'params.productId'}</h1>
            <p className="text-lg text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit provident sapiente laudantium, et cum assumenda enim expedita ad eos minima voluptatum. Dolor voluptatum vero quae facilis ea, repellendus excepturi consectetur?</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" justify-end flex-row flex p-2"
            ><FaWhatsapp color='#25D366' size={30} /></a>

          </div> */}
        </div>
      </div>
      <div className="pt-28">
        <div className="w-4/6 sm:w-10/12 mx-auto">
          <h1 className="heading_text text-2xl text-gray-800">similar products</h1>
        </div>

        <ProductCard products={similarProducts} />
        <div className="text-center py-3">
          {/* {sofaProducts.length < data.length && (
          <button
            className="animation_button bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
            onClick={handleSeeMore}
          >
            See More
          </button>
        )} */}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
