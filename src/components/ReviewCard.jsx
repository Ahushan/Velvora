import { Icon } from "@iconify/react";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col text-center px-4">

      {/* Customer Image */}
      <img
        src={imgURL}
        alt={customerName}
        className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md"
      />

      {/* Feedback */}
      <p className="mt-6 max-w-sm text-center text-slate-300 info-text">
        {feedback}
      </p>

      {/* Rating */}
      <div className="mt-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon
            key={i}
            icon="mdi:star"
            className={`text-lg ${
              i < Math.floor(rating) ? "text-yellow-400" : "text-gray-400"
            }`}
          />
        ))}

        <p className="ml-2 text-lg font-montserrat text-slate-300">
          ({rating})
        </p>
      </div>

      {/* Customer Name */}
      <h3 className="mt-3 font-palanquin text-xl sm:text-2xl font-bold text-white">
        {customerName}
      </h3>

    </div>
  );
};

export default ReviewCard;