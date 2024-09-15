import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const HorizontalCards = ({ data, title }) => {
  return (
    <div className="relative flex overflow-hidden">
      <div className=" grid grid-flow-col auto-cols-[minmax(14rem,1fr)] touch-pan-x snap-x overflow-y-hidden p-5 ">
        {data.length > 0 ? (
          data.map((d, i) => (
            <Link
              to={`/${d.media_type || title}/details/${d.id}`}
              key={i}
              className="min-w-[18%] h-[18rem] rounded-lg snap-center  bg-zinc-900 mr-5 mb-5"
            >
              <div className="w-full h-[7.5rem] rounded-t-lg ">
                <img
                  className="w-full h-full rounded-t-lg object-top object-cover"
                  src={
                    d.backdrop_path || d.poster_path
                      ? `https://image.tmdb.org/t/p/original${
                          d.backdrop_path || d.poster_path
                        }`
                      : noimage
                  }
                  alt=""
                />
              </div>
              <div className="text-white p-3 h-[45%] grid gap-2">
                <h1 className=" text-l font-semibold ">
                  {/* {console.log(
                    d.name !== undefined &&
                      d.name.length > 0 &&
                      d.name.slice(0, 20) + "..."
                  )} */}
                  {d.name || d.title || d.original_name || d.original_title}
                </h1>
                <p className="text-sm">
                  {d.overview.slice(0, 50)}...
                  <span className="text-zinc-500"> more</span>
                </p>
              </div>
            </Link>
          ))
        ) : (
          <h1 className="text-3xl mt-5 text-white font-black text-center">
            Nothing to show
          </h1>
        )}
      </div>
    </div>
  );
};

export default HorizontalCards;
