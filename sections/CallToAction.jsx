import {useState} from 'react';
import {Input} from '@components/ui';

export const CallToAction = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    mail: '',
    description: '',
  });

  const handleSend = e => {
    e.preventDefault();
    console.log(formValue);
  };

  const fillForm = (value, field) => {
    setFormValue(prev => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <section id='contact' className='pt-20 2xl:pt-36 max-w-5xl mx-auto px-4 2xl:py-11 2xl:px-16 bg-white'>
      <div className='bg-primary rounded-[10px] pt-11 px-7 pb-12 xl:-mt-20 relative flex items-center text-center lg:text-left flex-col lg:flex-row justify-center lg:justify-between'>
        <h3 className='text-white text-xl leading-tight md:leading-normal py-0 px-4 md:px-0 mb-12 lg:mb-0'>
          Contrata los mejores
        </h3>
        <form noValidate className='w-full' onSubmit={handleSend}>
          <Input
            label='Nombre'
            field='name'
            value={formValue.name}
            onChange={({target}) => fillForm(target.value, 'name')}
          />
          <Input
            label='Correo'
            field='mail'
            value={formValue.mail}
            onChange={({target}) => fillForm(target.value, 'mail')}
          />
          <Input
            label='Asunto'
            field='description'
            value={formValue.description}
            single={false}
            onChange={({target}) => fillForm(target.value, 'description')}
          />
          <button
            onClick={handleSend}
            className='bg-white uppercase tracking-widest  font-semibold text-primary rounded-[5px] text-base py-2.5 px-6 2xl:py-3.5 2xl:px-11 outline-none hover:bg-black hover:text-white'>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
