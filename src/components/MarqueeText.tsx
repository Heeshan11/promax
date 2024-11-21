import { bio } from '../data/constants';
// import styles from './Marquee.module.css';

const Marquee = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div className='marqueeContainer z-50'>
      <div className={`marquee text-xs font-bold  `}>
        <p className='glow text-yellow-500'>Promax-Exceeding your Expectation,&nbsp;&nbsp;&nbsp; Please Contact : {bio.email}</p>
      </div>
    </div>
  );
};

export default Marquee;
