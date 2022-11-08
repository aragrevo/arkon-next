import Image from 'next/image';
export const GalleryCard = ({image, title}) => {
  return (
    <div className='rounded-md overflow-hidden mb-1.5 break-inside-auto'>
      <div className='overflow-hidden'>
        <Image className='block w-full' width={633} height={707} src={image} alt={title} />
      </div>
      <div className='bg-white px-5 lg:px-7 pt-4 lg:pt-6 pb-2.5 xl:pb-7 border border-[#F3F4F5] border-t-0'>
        <h3 className='text-text_secondary font-semibold text-base lg:text-lg leading-normal'>{title}</h3>
      </div>
    </div>
  );
};
