import { FaWhatsapp } from 'react-icons/fa';
import { bio } from '../data/constants';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { IProduct } from '@app/interface/interface';

const ProductCard = ({ products }: { products: IProduct[] }) => {
    const phoneNumber = bio.phone; // WhatsApp number for sharing
    const itemVariants = {
        hidden: { opacity: 0, y: 50 }, // Initial state (hidden)
        visible: { opacity: 1, y: 0 },   // Final state (visible)
    };

    return (
        <div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container mx-auto py-6 px-6">
                {products.map((product, index: number) => {
                    const { image, id, uid, category } = product;
                    const productUrl = `https://promax-oid0.onrender.com/product/${uid}`;

                    // Generate the WhatsApp message
                    const whatsappMessage =
                        `Hey!,
I need this product, please share more details.
${productUrl}
                     `;

                    // Generate the WhatsApp link
                    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                delay: (index % 10) * 0.2,
                            }}
                            style={{boxShadow:'0px 3px 6px 1px rgb(0 0 0 / 20%), 0 2px 4px -2px rgb(0 0 0 / 0.1)'}}
                            className='bg-white rounded-lg  text-center  border-slate-300 '
                        >
                            {/* Link to Product Details */}
                            <Link to={`/product/${id}`}
                            style={{borderBottom:'1px solid #e0e0e0'}}
                                state={{ title: product.uid, category: product.category, uid: product.uid }}
                                className="block overflow-hidden relative group ">
                                <div className="">
                                    <img
                                        src={image}
                                        alt={"title"}
                                        width={300}
                                        height={200}
                                        className="rounded-t-lg object-cover h-40 transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        loading='lazy'
                                    />

                                </div>
                            </Link>
                            {/* WhatsApp Sharing */}
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
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductCard;
