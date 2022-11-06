import {BlockTitle} from '@components/ui';
import {ServiceCard} from '@components/index';

const SERVICES_DATA = [
  {
    icon: '/icons/service-1-1.svg',
    title: 'Importaciones',
    text: 'Ordinarias, programas especiales, Plan Vallejo, temporales, licencias previas, franquicias, las demás',
  },
  {
    icon: '/icons/service-1-2.svg',
    title: 'Exportaciones',
    text: 'Ordinarias, temporales para perfeccionamiento, temporales para reimportación, re-exportaciones, reembarques, muestras sin valor comercial, las demás.',
  },
  {
    icon: '/icons/service-1-3.svg',
    title: 'Transporte Internacional',
    text: 'Desde y hacia cualquier parte del mundo.',
  },
  {
    icon: '/icons/service-1-4.svg',
    title: 'Almacenamiento de Mercancia',
    text: 'Depósito Aduanero Zona Franca',
  },
];

export const Services = () => {
  return (
    <section id='services' className='pt-20 2xl:pt-36 max-w-5xl mx-auto'>
      <BlockTitle slogan='Servicios' title='Meet exciting feature of app' />
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
