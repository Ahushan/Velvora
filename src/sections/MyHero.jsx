import { hero } from "../assets/images"


export const MyHero = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">

      <img
        src={hero}
        alt="Modern furniture"
        className="w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 text-white max-w-3xl">

        <p className="text-sm tracking-widest uppercase mb-3 font-palanquin">
          Modern Furniture Collection
        </p>

        <h1 className="text-4xl md:text-5xl font-palanquin lg:text-6xl font-bold leading-snug mb-4">
          Designed for <br /> Modern Living
        </h1>

        <p className="font-montserrat text-gray-300 text-lg leading-8 mt-6 mb-10 sm:max-w-sm">
          Discover elegant furniture crafted to bring comfort,
          beauty, and functionality into your home.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 font-montserrat py-3 font-medium hover:bg-gray-200 transition">
            Shop Now
          </button>

          <button className="border border-white px-6 py-3 font-montserrat hover:bg-white hover:text-black transition">
            Explore Collection
          </button>
        </div>

      </div>

    </section>
  )
}