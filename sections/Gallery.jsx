import {BlockTitle} from '@components/ui';
import {GalleryCard} from '@components/index';

const GALLERY_DATA = [
  {
    image: '/images/Imagen1.webp',
    title: 'Adecuaciones',
  },
  {
    image: '/images/Imagen2.webp',
    title: 'Remodelaciones',
  },
  {
    image: '/images/Imagen3.webp',
    title: 'Reforzamientos estructurales',
  },
  {
    image: '/images/Imagen4.webp',
    title: 'Planos',
  },
  {
    image: '/images/Imagen5.webp',
    title: 'Accesos',
  },
];

export const Gallery = () => {
  return (
    <section id='gallery' className='pt-20 2xl:pt-28 pb-20 2xl:pb-40 bg-[#F8FAFC]'>
      <div className='max-w-5xl mx-auto px-4'>
        <BlockTitle slogan='Galería' title='Nuestro trabajo' />
        <div className='gap-1.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {GALLERY_DATA.map(({image, title}) => (
            <GalleryCard key={image} image={image} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};
