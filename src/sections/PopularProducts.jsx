import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 py-16">
      
      <div className="flex flex-col justify-start gap-5 text-white">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="">Popular</span> Furniture
        </h2>

        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-300 tracking-wide">
          Explore our most loved furniture pieces, crafted to combine
          elegance, durability, and modern comfort. Perfect additions
          to elevate your living space.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 select-none sm:gap-6 gap-10">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>

    </section>
  );
};

export default PopularProducts;