import { Nav } from './components';
import './index.css'
import { MyHero } from "./sections/MyHero";
import PopularProducts from './sections/PopularProducts';
import SuperQuality from './sections/SuperQuality';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import CustomerReviews from './sections/CustomerReviews';
import Subscribe from './sections/Subscribe';
import Footer from './sections/Footer';



const App = () => {
  return (
    <main className='relative select-none bg-gray-900'>
      <Nav />
      <section className=''>
        <MyHero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 bg-black w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8 '>
        <Footer />
      </section>
    </main>
  );
};

export default App;
