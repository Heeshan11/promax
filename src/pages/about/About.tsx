import { bio, gurantee, overviewData, whatWeDo } from "@data/constants";
import Collaboration from "./components/Collaboration";
import { FourColumnSection } from "./components/FourColumn";
import HeroSection from "./components/HeroSection";
import Tab from "./components/Tab";

export default function About() {
{/* <motion.div
        initial={{ opacity: 0,y:50 }}
        whileInView={{ opacity: 1,y:0,transition:{delay:.2,duration:.5} }}
        viewport={{ once: false, amount:.5}}
      ></motion.div> */}
  return (
    <div className="bg-black">
      <HeroSection />
      <Tab />
      <FourColumnSection data={whatWeDo} title={bio.whatwedo.title} desc={bio.whatwedo.desc}/>
      <Collaboration />
      <FourColumnSection data={gurantee} title={bio.gurantee.title} desc={bio.gurantee.desc}/>
      <FourColumnSection data={overviewData} title={bio.overview.title} desc={bio.overview.desc}/>
  
    </div>
  )
}