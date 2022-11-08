import Image from 'next/image';
export const GalleryCard = ({image, title, span}) => {
  return (
    <div
      className={`${
        span ? 'row-span-3 row-start-1' : 'row-span-1'
      } rounded-md md:relative overflow-hidden shadow shadow-[#F3F4F5] grid-flow-row-dense mb-1.5 break-inside-auto snap-start snap-always shrink-0 grow-0 basis-11/12 `}>
      <div className='overflow-hidden'>
        <Image className='block w-full' width={320} height={707} src={image} alt={title} />
      </div>
      <div className='bg-white px-5 pt-4 pb-2.5 md:absolute md:bottom-0 md:w-full md:bg-opacity-40 md:py-0.5'>
        <h3 className='text-text_secondary font-semibold text-base tracking-wider '>{title}</h3>
      </div>
    </div>
  );
};
