import Head from 'next/head';

export const Seo = ({
  title = 'Arkon Arquitectura Integral',
  description = 'Arkon Arquitectura Integral',
  author = 'Hugo Vasquez',
  meta = [],
}) => {
  const metaData = [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({name, content, property}, i) => (
        <meta key={i} name={name} property={property} content={content} />
      ))}
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
