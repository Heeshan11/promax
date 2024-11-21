import { FaWhatsapp } from 'react-icons/fa';
import { bio } from '@data/constants';

const ProductDetails = ({ }) => {
  const productUrl = "https://www.uispairfurniture.com/office-furniture/soft-seating/office-modular-couch.html"; // Replace with the actual product URL
  const phoneNumber = bio.phone // Replace with the recipient's WhatsApp number (in international format)
  const productName = "Awesome Product"; // Replace with the product name
  const message = `Hi, I would like to share this product with you: ${productName} - ${productUrl}`; // The message to send

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className='pt-28'>
      <div className="container mx-auto px-4 py-6 pt-20">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              className="embla__slide__img "
              src={'/banners/banner1.jpg'}
              alt="Your alt text"
            />

          </div>

          <div className="md:w-1/2 w-full text-center md:text-left">
            <h1 className="text-3xl font-semibold mb-4">{'params.productId'}</h1>
            <p className="text-lg text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit provident sapiente laudantium, et cum assumenda enim expedita ad eos minima voluptatum. Dolor voluptatum vero quae facilis ea, repellendus excepturi consectetur?</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" justify-end flex-row flex p-2"
            ><FaWhatsapp color='#25D366' size={30} /></a>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails
