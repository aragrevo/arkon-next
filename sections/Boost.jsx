import Image from 'next/image';
import {IoIosCheckmarkCircle} from 'react-icons/io';

const BOOST_DATA = [
  'Gestión para uso de discapacitados',
  'Modelado y visualización de proyectos',
  'Gerencia y construcción de edificaciones',
];

export const Boost = () => {
  return (
    <section className='pt-16 lg:pt-20 xl:pt-28 max-w-5xl mx-auto px-4 bg-white'>
      <div className='flex flex-wrap flex-col lg:flex-row-reverse'>
        <div className='flex flex-grow-0 flex-shrink-0 basis-full lg:basis-7/12'>
          <div className='w-full text-left 2xl:pt-24 2xl:pl-14'>
            <div className='text-center lg:text-left'>
              <h3 className='text-black text-xl xl:text-4xl 2xl:text-3xl leading-relaxed lg:leading-6 font-bold'>
                Diseño Arquitectónico
              </h3>
              <p className='text-base lg:text-lg text-secondary opacity-60 leading-6 lg:leading-relaxed 2xl:leading-loose py-0 px-5 lg:px-0 mt-4'>
                Interacción con el cliente para sus necesidades
              </p>
            </div>
            <ul className='m-0 p-0 ml-6 lg:ml-0 mb-2.5 mt-7'>
              {BOOST_DATA.map((b, i) => (
                <li
                  className='flex items-center justify-start text-base lg:text-lg text-secondary leading-loose'
                  key={`boost-post-${i}`}>
                  <IoIosCheckmarkCircle className='text-[#DADADA] w-4 h-4 lg:w-6 lg:h-6 mr-2.5' /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-grow-0 flex-shrink-0 basis-full lg:basis-5/12'>
          <Image
            className='flex relative top-0 max-w-full mix-blend-darken md:-top-10'
            width={633}
            height={707}
            src='/images/boost.webp'
            alt='person in cohete'
            priority
          />
        </div>
      </div>
    </section>
  );
};
