import { useLocation } from "react-router-dom";
import ProductCard from "@components/ProductCard";
import { useEffect, useState } from "react";
import { IProduct } from "../../interface/interface";
import { useAllProducts, useLoading, useScrollToTop } from "@app/context/MainProvider";
import Spinner from "@components/Spinner";

const Products = () => {
  const location = useLocation();
  const { title, category } = location.state || { title: 'All Products' };
  const [data, setData] = useState<IProduct[]>([]);
  const [visibleData, setVisibleData] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const scrollToTop = useScrollToTop();
  const allProducts = useAllProducts()
  const loading = useLoading(); // Get loading state from context
  console.log(" alll e",allProducts);

  useEffect(() => {
    scrollToTop()
    let products: IProduct[] = [];
    if (category !== undefined) {

products = allProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase())
} else {

      products = [...allProducts].sort(() => Math.random() - 0.5);
    }

    setData(products);
    if (products.length > 0) {
      setVisibleData(products.slice(0, itemsPerPage));
    } else {
      setVisibleData([])
    }
  }, [category,allProducts  ]);

  const handleSeeMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setVisibleData((prevData) => [
      ...prevData,
      ...data.slice(startIndex, endIndex),
    ]);
    setCurrentPage(nextPage);
  };
if(loading){
  return(
<Spinner/>
  )
}

  return (
    <div className="pt-28 min-h-screen">
      <div className="w-4/6 sm:w-10/12 mx-auto">
        <h1 className="heading_text text-2xl text-gray-800">{title}</h1>
      </div>

      <ProductCard products={visibleData} />
      <div className="text-center py-3">
        {visibleData.length < data.length && (
          <button
            className="animation_button bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
            onClick={handleSeeMore}
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
