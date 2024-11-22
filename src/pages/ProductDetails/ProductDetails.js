import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaWhatsapp } from 'react-icons/fa';
import { AllSolutionProducts, bio, office_chair, restaurantProducts, sitingProducts, sofaProducts, tblProducts } from '@data/constants';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '@components/ProductCard';
const ProductDetails = ({}) => {
    const location = useLocation();
    const params = useParams();
    const uid = params.id;
    // // Retrieve the hidden data
    // const title = urlParams.get('title'); // "Hos1"
    // const category = urlParams.get('category'); // "Hospitality"
    const phoneNumber = bio.phone; // WhatsApp number for sharing
    const { title, category } = location.state || { title: '' };
    const productUrl = `https://promax-oid0.onrender.com/product/${title}`;
    // Generate the WhatsApp message
    const whatsappMessage = `Hey!,
I need this product, please share more details.
${productUrl}
   `;
    // Generate the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    const AllProdcts = [...office_chair, ...sofaProducts, ...sitingProducts, ...restaurantProducts, ...tblProducts, ...AllSolutionProducts];
    const [productDetails, setProductDetails] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    useEffect(() => {
        const product = AllProdcts.find((pro) => pro.uid === title || pro.uid === uid) || null;
        const filterProduct = AllProdcts.filter((pro) => (pro.category === category || pro.category === (product === null || product === void 0 ? void 0 : product.category)) && (pro.uid !== title || pro.uid !== title));
        setProductDetails(product);
        setSimilarProducts(filterProduct);
    }, [title, uid]);
    return (_jsxs("div", { className: 'pt-28', children: [_jsx("div", { className: "container mx-auto px-4 py-6 pt-20", children: _jsx("div", { className: "flex flex-col md:flex-row items-center gap-2", children: _jsxs("div", { className: "md:w-1/2 w-full mb-6 md:mb-0", children: [_jsx("img", { className: "embla__slide__img rounded-lg", src: productDetails === null || productDetails === void 0 ? void 0 : productDetails.image, alt: "Your alt text" }), _jsx("a", { href: whatsappLink, target: "_blank", rel: "noopener noreferrer", className: " justify-end flex-row flex p-2", children: _jsx(FaWhatsapp, { color: '#25D366', size: 30 }) })] }) }) }), _jsxs("div", { className: "pt-28", children: [_jsx("div", { className: "w-4/6 sm:w-10/12 mx-auto", children: _jsx("h1", { className: "heading_text text-2xl text-gray-800", children: "similar products" }) }), _jsx(ProductCard, { products: similarProducts }), _jsx("div", { className: "text-center py-3" })] })] }));
};
export default ProductDetails;
