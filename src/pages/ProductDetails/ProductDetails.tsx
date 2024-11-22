import { FaWhatsapp } from 'react-icons/fa';
import { AllSolutionProducts, bio, office_chair, restaurantProducts, sitingProducts, sofaProducts, tblProducts } from '@data/constants';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IProduct } from '@app/interface/interface';
import ProductCard from '@components/ProductCard';

const ProductDetails = ({ }) => {
  const location = useLocation();
  const params = useParams()
  const uid = params.id
  const { title, category } = location.state || { title: '' };
  const productUrl = `https://promax-oid0.onrender.com/product/${uid}`;

  // Generate the WhatsApp message
  const whatsappMessage =
    `Hey!,
I need this product, please share more details.
${productUrl}
   `;

  // Generate the WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const AllProdcts = [...office_chair, ...
    sofaProducts, ...
  sitingProducts, ...
  restaurantProducts, ...
  tblProducts, ...AllSolutionProducts]
  const [productDetails, setProductDetails] = useState<IProduct | null>(null);
  const [similarProducts, setSimilarProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const product = AllProdcts.find((pro) => pro.uid === title || pro.uid === uid) || null;
    const filterProduct = AllProdcts.filter((pro) => (pro.category === category || pro.category === product?.category) && (pro.uid !== title || pro.uid !== title));
    setProductDetails(product);
    setSimilarProducts(filterProduct);
  }, [title, uid]);

  return (
    <div className='pt-28'>
      <div className="container mx-auto px-4 py-6 pt-20">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              className="embla__slide__img rounded-lg"
              src={productDetails?.image}
              alt="Your alt text"
            />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" justify-end flex-row flex p-2"
            ><FaWhatsapp color='#25D366' size={30} /></a>
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
