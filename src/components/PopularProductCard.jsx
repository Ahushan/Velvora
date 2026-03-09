import { star, shopify } from "../assets/icons";
import Button from "./Button";

const PopularProductCard = ({ imgURL, name, price, mrp }) => {
  return (
    <div className="flex flex-col w-full bg-white/20 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition duration-300">

      {/* Image */}
      <div className="w-full aspect-square sm:aspect-[4/3] flex items-center justify-center p-4">
        <img
          src={imgURL}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">

        {/* Rating */}
        <div className="flex items-center gap-2">
          <img src={star} alt="rating icon" width={16} height={16} />
          <p className="font-montserrat text-sm text-white">(4.5)</p>
        </div>

        {/* Product Name */}
        <h3 className="mt-2 text-lg sm:text-xl font-semibold font-palanquin text-white line-clamp-2">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center justify-between font-montserrat mt-3">
          <div className="flex items-center gap-4">
            <p className="font-semibold flex items-center text-yellow-400 text-base sm:text-lg">
              ₹
              <span className="ml-1 text-white">{price}</span>
            </p>

            <p className="text-white/40 line-through text-sm">
              {mrp}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-5">
          <Button
            label="Shop Now"
            iconURL={shopify}
            backgroundColor={'bg-black'}
            className={'w-full border border-black text-white font-Montserrat hover:border-white'}
          />
        </div>

      </div>
    </div>
  );
};

export default PopularProductCard;