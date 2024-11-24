import React, { createContext, useContext, useEffect, useState } from "react";

// Define the types for the context values
interface MainContextType {
    scrollToTop: () => void;
    allProducts: any[]; // Replace `any[]` with a more specific type for products if needed
    loading: boolean; // Add loading state
}

const MainContext = createContext<MainContextType | undefined>(undefined);

export const MainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [allProducts, setAllProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Add loading state

    useEffect(() => {
        // Fetch the products from '/products.json' every time the page is loaded or refreshed
        fetch("/products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                return response.json();
            })
            .then((data) => {
                setAllProducts(data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false); // Set loading to false even if there's an error
            });
    }, []); // Empty dependency array ensures this runs only once when the component mounts (or refreshes)

    return (
        <MainContext.Provider value={{ scrollToTop, allProducts, loading }}>
            {children}
        </MainContext.Provider>
    );
};

// Custom hooks to use the context values
export const useScrollToTop = () => {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error("useScrollToTop must be used within a MainProvider");
    }
    return context.scrollToTop;
};

export const useAllProducts = () => {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error("useAllProducts must be used within a MainProvider");
    }
    return context.allProducts;
};

export const useLoading = () => {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error("useLoading must be used within a MainProvider");
    }
    return context.loading;
};
