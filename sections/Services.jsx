import {BlockTitle} from '@components/ui';
import {ServiceCard} from '@components/index';

const SERVICES_DATA = [
  {
    icon: '/icons/service-1-1.svg',
    title: 'Asesoría en Inversión para compra de Bienes',
    text: 'Usos del suelo, edificabilidad, etc',
  },
  {
    icon: '/icons/service-1-2.svg',
    title: 'Planos y estudios constructivos',
    text: 'Juegos de planos y estudios interdisciplinarios para el buen desarrollo de las obras',
  },
  {
    icon: '/icons/service-1-3.svg',
    title: 'Actualización y renovación de inmuebles',
    text: 'Adecuaciones, remodelaciones, reforzamientos estructurales.',
  },
  {
    icon: '/icons/service-1-4.svg',
    title: 'Gestión de permiso de las instituciones reguladoras',
    text: 'Curaduría, servicios públicos, habitad',
  },
];

export const Services = () => {
  return (
    <section id='services' className='pt-20 2xl:pt-40 max-w-5xl mx-auto bg-white'>
      <BlockTitle slogan='Servicios' title='Conoce como podemos ayudarte' />
      <div className='grid px-4 gap-7 2xl:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard
            className=''
            key={`service-post-${index}`}
            title={service.title}
            text={service.text}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};
