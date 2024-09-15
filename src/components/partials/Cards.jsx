import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const Cards = ({ data, title }) => {
  return (
    <div className="grid grid-cols-4 items-center  justify-items-center p-20">
      <Link
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="fixed bottom-[5%] right-[5%] flex justify-center items-center w-[5vh] h-[5vh] bg-[#6556cd] rounded-lg"
      >
        <i className="text-white ri-arrow-up-line text-xl"></i>
      </Link>
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative w-[25vh] mr-[5%] mb-[5%]"
          key={i}
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover rounded-md"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="text-xl text-zinc-300 mt-3 font-semibold text-center ">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div className="absolute right-[-10%] top-[5%] rounded-full font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
