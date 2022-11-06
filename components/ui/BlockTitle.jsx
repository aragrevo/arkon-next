export const BlockTitle = ({title, slogan}) => {
  return (
    <div className='mb-11 xl:mb-16 text-center'>
      <p className='text-primary text-sm md:text-lg leading-none mb-2.5'>{slogan}</p>
      <h2 className='text-black font-bold text-xl xl:text-3xl 2xl:text-4xl leading-tight xl:leading-relaxed xl:-tracking-[-1.5px]'>
        {title}
      </h2>
    </div>
  );
};
