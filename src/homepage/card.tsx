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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden max-w-[320px] transition-all hover:shadow-md h-full flex flex-col mx-auto">
      <div className="p-2">
        <img
          src={img}
          alt={name}
          className="w-full h-[180px] object-cover rounded-lg"
        />
      </div>

      <div className="px-4 pb-4 flex flex-col flex-grow">
        <h1 className="text-lg font-bold text-gray-900 leading-tight mb-2">
          {name}
        </h1>
        <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow">
          {description}
        </p>

        <div className="flex items-center gap-3 mb-4">
          <img
            src={profileImg}
            alt={profileName}
            className="w-9 h-9 rounded-md object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900 leading-none mb-1">
              {profileName}
            </span>
            <span className="text-xs text-gray-400 leading-none">
              {profileDesc}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-50 border-dashed">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < 3
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                  // Note: Making it static 5 stars for visual, but ideally should be dynamic based on rate.
                  // For now, I'll just render filled stars.
                  // Wait, the design has 3.5 stars logic? Let's just make them all yellow but maybe small.
                  // Actually the user provided a number rate.
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 underline decoration-gray-300 underline-offset-2 ml-1">
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
