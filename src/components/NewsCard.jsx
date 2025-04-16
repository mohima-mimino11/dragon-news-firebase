import React from "react";
import { FaEye, FaStar, FaShareAlt, FaBookmark } from "react-icons/fa";


const NewsCard = ({ news }) => {
  const {
    title,
    details,
    image_url,
    total_view,
    author,
    rating,
  } = news;

  return (
    <div className="card  w-full bg-base-100 shadow-md border rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
        <FaBookmark></FaBookmark>
        <FaShareAlt className="text-gray-500 hover:text-primary cursor-pointer" />
        </div>
      </div>
      <h2 className="card-title text-xl font-bold mx-5">{title}</h2>
      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={image_url}
          alt="News"
          className="rounded-xl  w-[518px] object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body px-4 py-2">
        
        <p className="text-sm text-gray-700">
          {details.length > 150 ? details.slice(0, 150) + "..." : details}
          <span className="text-red-500 font-medium cursor-pointer ml-1">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="card-actions flex justify-between items-center px-4 pb-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(rating.number)
                  ? "text-orange-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
