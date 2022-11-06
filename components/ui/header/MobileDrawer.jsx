import {useState} from 'react';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import {IoMdClose, IoMdMenu} from 'react-icons/io';
import {menuItems} from './header.data';
import {Logo} from '..';

export const MobileDrawer = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='flex items-center justify-center shrink-0 w-6 md:hidden'>
      <button className='flex items-center justify-center' onClick={() => setShow(true)}>
        <IoMdMenu size='22px' />
      </button>
      <aside
        className={`fixed top-0 left-0 bg-opacity-30 bg-black right-full h-full overflow-hidden transition-all   ${
          show ? 'opacity-1 w-full z-10' : ' opacity-0 -z-10'
        }`}>
        <div
          className={`flex flex-col h-full pt-7 pb-10 px-7 bg-white max-w-[320px] relative transition-transform ease-in-out -translate-x-[500px]  duration-500 ${
            show ? 'translate-x-0' : '-translate-x-[500px]'
          }`}>
          <button className='absolute right-7 flex items-center justify-center' onClick={() => setShow(false)}>
            <IoMdClose size='24px' color='#02073E' />
          </button>
          <Logo />
          <ul className='flex flex-col mt-7'>
            {menuItems.map(({path, label}) => (
              <ScrollLink
                onClick={() => setShow(false)}
                className='text-base text_secondary font-normal cursor-pointer leading-7 py-1.5 hover:text-primary transition-colors duration-500'
                activeClass='text-primary'
                to={path}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                key={path}>
                {label}
              </ScrollLink>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};
