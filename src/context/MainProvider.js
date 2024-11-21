import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
const MainContext = createContext(() => { });
export const MainProvider = ({ children }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (_jsx(MainContext.Provider, { value: scrollToTop, children: children }));
};
export const useScrollToTop = () => useContext(MainContext);
