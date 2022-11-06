export const Input = ({label, field, onChange, value, single = true}) => {
  return (
    <div className='relative mb-4 pt-0 w-full'>
      {single ? (
        <input
          onChange={onChange}
          value={value}
          type='text'
          id={field}
          className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-white rounded-[5px] appearance-none focus:outline-none peer'
          placeholder=' '
        />
      ) : (
        <textarea
          onChange={onChange}
          value={value}
          className='block px-2.5 pb-2.5 pt-4 w-full text-sm border-white text-black bg-white rounded-[5px] appearance-none focus:outline-none peer'
          name={field}
          placeholder=' '
          id={field}
          rows='4'></textarea>
      )}
      <label
        htmlFor={field}
        className='absolute text-sm  text-black duration-300 transform -translate-y-4 scale-90 top-3 origin-[0] px-2 peer-focus:font-bold peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-90 peer-focus:-translate-y-4 left-1'>
        {label}
      </label>
    </div>
  );
};
