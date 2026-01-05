import { Star } from "lucide-react";

interface CardProps {
  img: string;
  name: string;
  description: string;
  profileImg: string;
  profileName: string;
  profileDesc: string;
  rate: number | string;
  price: number | string;
}

function Card({
  img,
  name,
  description,
  profileImg,
  profileName,
  profileDesc,
  rate,
  price,
}: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden md:max-w-[320px] transition-all hover:shadow-md h-full grid grid-cols-2 sm:grid-cols-1 md:flex md:flex-col mx-auto justify-center items-center ">
      <div className="p-2 flex flex-col justify-between">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="w-full md:h-[180px] md:w-[90vw] h-[100px] object-cover rounded-lg mx-auto"
        />
        {/* Mobile Stars */}
        <div className="flex items-center gap-1 mt-2 md:hidden">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < 3
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 underline decoration-gray-300 underline-offset-2 ml-1">
            {rate}
          </span>
        </div>
      </div>

      <div className="px-2 pb-4 flex flex-col flex-grow relative top-2 md:static">
        <h1 className="text-[14px] font-bold text-gray-900 leading-tight mb-2 w-[200px]">
          {name}
        </h1>
        <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow hidden md:block">
          {description}
        </p>

        <div className="flex items-center gap-1 md:gap-3 mb-2 md:mb-4">
          <img
            src={profileImg}
            alt={profileName}
            loading="lazy"
            className="w-7 h-7 md:w-9 md:h-9 rounded-md object-cover"
          />
          <div className="flex flex-col ">
            <span className="text-xs md:text-sm font-bold text-gray-900 leading-none mb-1">
              {profileName}
            </span>
            <span className="text-[10px] md:text-xs text-gray-400 leading-none">
              {profileDesc}
            </span>
          </div>
        </div>

        {/* Mobile Price */}
        <p className="text-green-500 font-bold text-lg md:hidden self-end relative top-[1.3vh] sm:top-[0.5vh]">
          {price}
        </p>
        {/* Dekstop Stars */}
        <div className="hidden md:flex justify-between items-center mt-auto pt-2 border-t border-gray-50 border-dashed">
          <div className="flex items-center gap-5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < 3
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 underline decoration-gray-300 underline-offset-2">
              {rate}
            </span>
          </div>
          <p className="text-green-500 font-bold text-lg">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
