import { IoLocationOutline, IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { bio, contacts, quickLinks } from "../data/constants";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

// components/Footer.js
export default function Footer() {
  const iconMap: Record<string, IconType> = {
    call: IoCallOutline,
    location: IoLocationOutline,
    mail: IoMailOpenOutline
    // add more icons here as needed
  };

  const Icon = ({ name, ...props }: { name: string }) => {
    const IconComponent = iconMap[name];

    return IconComponent ? <IconComponent size={20}  {...props} /> : null;
  };
  return (
    <footer className=" pt-10 bg-gradient-to-tl from-gray-900 to-[#040406] px-6  md:px-8 md:pt-8  text-white">
      <div className="max-w-screen-lg mx-auto  md:px-12 flex flex-wrap py-5 ">

        {/* Column 1 */}
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
          <img
            src={"/logo.png"}
            width={60}
            height={60}
            alt="logo"
          />
          <p className="text-[12px] text-gray-300 mt-4 w-11/12">
            {bio.footerText}
          </p>
        </div>

        {/* Column 2 */}
        <div className="w-full flex-col flex-1 mb-8 sm:mb-0">
          <h3 className="text-lg font-medium mb-2 italic text-white">Contact</h3>
          <p className="h-[5px] bg-yellow-600 w-2/3 skew-x-[-20deg] animate-grow"></p>
          <ul className="text-sm text-gray-300 pt-2 w-11/12">
            {contacts.map((contact) => {
              return (
                <li className="flex row items-center gap-2 text-[14px] font-normal pb-2" key={contact.id}>
                  <Icon name={contact.icon} />
                  <p className={`flex-1 ${contact.id === 1 ? 'text-[11px]' : "text-[14px]"}`}> {contact.title}</p>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-full sm:w-[30%]">
          <h3 className="text-lg font-medium mb-2 text-white  italic">Quick Links</h3>
          <p className="h-[5px] bg-yellow-600 w-2/3 skew-x-[-20deg] animate-grow"></p>
          <ul className="text-sm text-gray-300 pt-2 w-11/12">
            {quickLinks.map((product) => {
              return (
                <li className="flex row items-center gap-2 text-[14px] font-normal pb-2" key={product.id}>
                  <Link to={'/products'}
                    state={{ title: product.title, category: product.category }}
                  >
                    {product.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="text-center text-[#d5b954] py-3 text-[13px]">
        {bio.copyRights}
      </div>
    </footer>
  );
}
