import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import ProductCard from "@components/ProductCard";
import { AllSolutionProducts, commericalProducts, educationProducts, healthCareProducts, hospitalityProducts, MainCategories, office_chair, publicSpaceProducts, restaurantProducts, sitingProducts, subCategories, tblProducts } from "@data/constants";
import { useEffect, useState } from "react";
import { useScrollToTop } from "@app/context/MainProvider";
const Products = () => {
    const location = useLocation();
    const { title } = location.state || { title: 'All Products' };
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const scrollToTop = useScrollToTop();
    useEffect(() => {
        scrollToTop();
        let products = [];
        switch (title) {
            case MainCategories.Hospitality:
                products = hospitalityProducts;
                break;
            case MainCategories.Educational:
                products = educationProducts;
                break;
            case MainCategories.Commercial:
                products = commericalProducts;
                break;
            case MainCategories.PublicSpaces:
                products = publicSpaceProducts;
                break;
            case MainCategories.Healthcare:
                products = healthCareProducts;
                break;
            case subCategories.Seating:
                products = sitingProducts;
                break;
            case 'Restaurant Tables + Desks':
                products = restaurantProducts;
                break;
            case 'Office Chairs':
                products = office_chair;
                break;
            case 'Desks + Tables':
                products = tblProducts;
                break;
            case "All Products":
                products = AllSolutionProducts;
                break;
            default:
                break;
        }
        setData(products);
        if (products.length > 0) {
            setVisibleData(products.slice(0, itemsPerPage));
        }
        else {
            setVisibleData([]);
        }
    }, [title]);
    console.log(AllSolutionProducts);
    console.log(tblProducts);
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
    return (_jsxs("div", { className: "pt-28", children: [_jsx("div", { className: "w-4/6 sm:w-10/12 mx-auto", children: _jsx("h1", { className: "heading_text text-2xl text-gray-800", children: title }) }), _jsx(ProductCard, { products: visibleData }), _jsx("div", { className: "text-center py-3", children: visibleData.length < data.length && (_jsx("button", { className: "animation_button bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full", onClick: handleSeeMore, children: "See More" })) })] }));
};
export default Products;
