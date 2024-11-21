
import { FaLightbulb, FaChartLine, FaUsers, FaLeaf } from "react-icons/fa";
import { IAboutDetail } from "../../../interface/interface";
type Tprop= {
    data: IAboutDetail[],
    title: string,
    desc:string
}
export const FourColumnSection = ({ data, title, desc }: Tprop) => {
    return (
        <div className="container mx-auto py-12 px-4">
           <div className="xs:w-3/4 w-3/5 mx-auto">
           <h1 className="mb-5 font-heading text-3xl font-semibold text-white sm:text-4xl md:text-[50px] md:leading-[60px] text-center capitalize">
                {title}
            </h1>
            <p className="mb-5 font-heading text-sm font-semibold text-dark text-gray-600 text-center mx-auto">
                {desc}
            </p>
           </div>
            <div className="flex flex-wrap justify-center gap-8">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 text-center"
                    >
                        <div className="flex flex-col items-center">
                            <item.icon className={`h-12 w-12 mb-4 ${item.color}`} />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
