import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="p-2 group cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        alt={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
      />
      <div className="p-2">
        <p className="truncate max-w-md font-bold">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_title || result.original_name}
        </h2>
      </div>
      <p className="flex capitalize items-center opacity-0 group-hover:opacity-100">
        {result.media_type && `${result.media_type} ●`}{" "}
        {result.release_date || result.first_air_date}{" "}
        <ThumbUpIcon className="mx-2 h-5" /> ● {result.vote_average}
      </p>
    </div>
  );
};

export default Thumbnail;
