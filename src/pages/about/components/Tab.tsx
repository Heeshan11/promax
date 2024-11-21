import { useState } from "react";
import TwoColumn from "./TwoColumn";
import { bio } from "@data/constants";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Who We Are", },
    { title: "Our Mission", },
    { title: "Our Vision", },
  ];

  return (
    <div className=" w-4/5 mx-auto my-8">
      <div className="flex ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 text-sm font-medium focus:outline-none flex-1 border-b-2 ${activeTab === index
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-white hover:text-blue-500 "
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-lg ">
        {activeTab === 0 ?

          <TwoColumn data={bio.whoWeAre} title="Who we are" isReverse={true} /> :
          activeTab === 1 ?
            <TwoColumn data={bio.mission} title="Our Mission" /> :
            activeTab === 2 && 
            <TwoColumn data={bio.vision} title="Our Vision" isReverse={true} />

        }
      </div>
    </div>
  );
}
