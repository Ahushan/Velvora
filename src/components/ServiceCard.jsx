const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full bg-white/90 rounded-[20px] shadow-3xl px-10 py-5'>
      <div className='w-11 h-11 flex justify-center items-center bg-black rounded-full'>
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-xl text-blacl leading-normal font-bold'>
        {label}
      </h3>
      <p className='mt-3 break-words font-montserrat text-md font-semibold leading-normal text-slate-700'>
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
