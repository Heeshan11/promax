import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { bio, gurantee, overviewData, whatWeDo } from "@data/constants";
import Collaboration from "./components/Collaboration";
import { FourColumnSection } from "./components/FourColumn";
import HeroSection from "./components/HeroSection";
import Tab from "./components/Tab";
export default function About() {
    { /* <motion.div
            initial={{ opacity: 0,y:50 }}
            whileInView={{ opacity: 1,y:0,transition:{delay:.2,duration:.5} }}
            viewport={{ once: false, amount:.5}}
          ></motion.div> */
    }
    return (_jsxs("div", { className: "bg-black", children: [_jsx(HeroSection, {}), _jsx(Tab, {}), _jsx(FourColumnSection, { data: whatWeDo, title: bio.whatwedo.title, desc: bio.whatwedo.desc }), _jsx(Collaboration, {}), _jsx(FourColumnSection, { data: gurantee, title: bio.gurantee.title, desc: bio.gurantee.desc }), _jsx(FourColumnSection, { data: overviewData, title: bio.overview.title, desc: bio.overview.desc })] }));
}
