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
    span: 2,
  },
];

export const Gallery = () => {
  return (
    <section id='gallery' className='pt-20 2xl:pt-28 pb-20 2xl:pb-24 bg-[#F8FAFC]'>
      <div className='max-w-5xl mx-auto px-4'>
        <BlockTitle slogan='Galería' title='Nuestro trabajo' />
        <div className='flex overflow-auto snap-mandatory snap-x gap-3 p-2.5 scroll-p-2.5 md:overflow-hidden md:grid md:grid-cols-3 slides'>
          {GALLERY_DATA.map(({image, title, span}) => (
            <GalleryCard key={image} image={image} title={title} span={span} />
          ))}
        </div>
      </div>
    </section>
  );
};
