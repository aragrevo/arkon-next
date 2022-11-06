import Image from 'next/image';

export const Banner = () => {
  return (
    <section id='banner' className='bg-[#F6F8FB] overflow-hidden w-full pt-28 pb-12 md:pt-52 md:pb-16'>
      <div className='grid grid-cols-1 gap-0 px-4 max-w-5xl mx-auto md:grid-cols-2'>
        <div>
          <h1 className='font-bold leading-snug text-3xl mb-4 tracking-tight md:mb-5 md:text-6xl md:max-w-lg'>
            Arkon Arquitectura integral
          </h1>
          <p className='text-base text-text_secondary mb-5 md:max-w-md md:text-xl md:mb-8'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus, velit aspernatur unde dolore
            doloremque, maxime, reiciendis adipisci q
          </p>
        </div>
        <div>
          <Image
            className='flex relative top-0 max-w-full mix-blend-darken md:-top-10'
            width={958}
            height={765}
            src='/images/banner-image.webp'
            alt='sit down person'
          />
        </div>
      </div>
    </section>
  );
};
