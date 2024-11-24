import { Link } from 'react-router-dom';
import { ourSolutions } from '@data/constants';
import { textSlice } from '@app/constants/ReusableFn';


const Collection = () => {

  return (
    <div className="flex flex-wrap justify-center gap-5 max-w-[2000px] mx-auto">
      {ourSolutions.map((card, index) => (
        <Link to={{ pathname: '/products' }}
          state={{ title: card.title, category: card.category }}

          key={index}
          className={`flex flex-col 
           bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer 
           w-full xs-range:w-5/12 xs:w-4/5 md:w-1/4 lg:w-1/4 xl:w-1/6`}
        >
          {/* Image with Zoom on Hover */}
          <div className="w-full h-40 overflow-hidden relative group">

            {/* <WatermarkedImage targetHeight={160} imageUrl={card.image} imgStyle={'w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110'}/> */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
              loading='lazy'
            />
          </div>

          {/* Card Text */}
          <div className="p-3">
            <h3 className="font-bold text-lg text-gray-900 text-center">{textSlice(card.title, 0, 50)}</h3>
            {/* <p className="text-gray-600 text-sm">{textSlice(card.desc, 0, 100)}</p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Collection;
