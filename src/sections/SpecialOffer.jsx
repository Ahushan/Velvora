import { arrowRight } from "../assets/icons";
import { Button } from "../components";
import ImageGrid from "../components/ImageGrid";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      
      <div className='flex-1'>
        <ImageGrid />
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin text-white font-bold'>
          <span className=''>Modern </span>
          Furniture Deals
        </h2>

        <p className='mt-4 info-text !text-slate-300'>
          Transform your living space with our carefully crafted modern 
          furniture collection. Designed with elegance and comfort in mind, 
          each piece brings style, durability, and functionality to your home.
        </p>

        <p className='mt-6 info-text !text-slate-300'>
          From cozy sofas to statement chairs and minimalist tables, discover 
          furniture that perfectly blends contemporary design with everyday 
          living. Upgrade your home today with exclusive limited-time offers.
        </p>

        <div className='mt-11 flex flex-wrap gap-4 font-montserrat'>
          <Button label='Shop Collection' iconURL={arrowRight} />

          <Button
            label='Explore Designs'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
            className={'border font-montserrat'}
          />
        </div>
      </div>

    </section>
  );
};

export default SpecialOffer;