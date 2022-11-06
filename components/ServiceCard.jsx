import Image from 'next/image';

export const ServiceCard = ({title, text, icon, className}) => {
  return (
    <div className={`${className} text-center group`}>
      <picture
        className='flex mx-auto w-20 h-20 lg:w-28 lg:h-28 justify-center items-center rounded-[20px] lg:rounded-[40px]
       bg-gradient-to-tl from-[#FFCC40] via-[#FFCC40]  to-[rgba(255, 204, 64, 0.5)] group-[:nth-of-type(3)_&]:bg-black'>
        <Image src={icon} alt='' height={50} width={50} />
      </picture>
      <h3 className='m-0 text-lg lg:text-base leading-none font-bold text-black mt-7 mb-5'>{title}</h3>
      <p className='m-0 text-[15px] text-heading_secondary leading-loose'>{text}</p>
    </div>
  );
};
