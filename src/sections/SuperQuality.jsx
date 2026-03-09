import { qualityImage } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-container py-12 lg:py-16"
    >
      {/* Text Section */}
      <div className="flex flex-col lg:max-w-xl bg-white/90 backdrop-blur-md px-6 sm:px-8 lg:px-10 py-6 lg:py-8 rounded-xl">

        <h2 className="font-palanquin capitalize text-2xl sm:text-3xl lg:text-4xl text-black font-bold leading-tight">
          We Provide
          <p className="underline ml-2">Premium</p>
          <p className="underline font-beauty ml-2">Furniture</p>{' '}
          <p> For Modern Living</p>
        </h2>

        <p className="mt-4 text-black font-montserrat text-sm sm:text-base leading-relaxed">
          Discover beautifully crafted furniture designed to bring comfort,
          style, and elegance into your home. Our collection blends modern
          design with high-quality materials to create pieces that last for
          years.
        </p>

        <p className="mt-4 text-slate-500 font-montserrat text-sm sm:text-base leading-relaxed">
          From stylish sofas to elegant tables and chairs, every piece is
          carefully designed to enhance your living space.
        </p>

        <div className="mt-8">
          <Button
            label="Explore Collection"
            styles="hover:bg-white hover:text-black font-montserrat hover:scale-105 transition duration-300 w-full sm:w-fit"
          />
        </div>

      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full lg:w-auto">
        <img
          src={qualityImage}
          alt="modern furniture"
          className="w-full max-w-md lg:max-w-lg object-cover object-[center_90%] rounded-xl shadow-lg"
        />
      </div>

    </section>
  );
};

export default SuperQuality;