import React, { createContext, useContext } from "react";

const MainContext = createContext<() => void>(() => {});

export const MainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <MainContext.Provider value={scrollToTop}>
            {children}
        </MainContext.Provider>
    );
};

export const useScrollToTop = () => useContext(MainContext);
