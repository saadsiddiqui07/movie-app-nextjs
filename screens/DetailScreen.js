import Image from "next/image";
import { useRouter } from "next/router";

const DetailScreen = ({ details }) => {
  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const backToHome = () => {
    router.push("/");
  };
  return (
    <div className="px-5 my-10">
      <Image
        src={`${BASE_URL}${details.poster_path || details.backdrop_path}`}
        layout="responsive"
        height={1080}
        width={1920}
        className="object-contain p-2 group cursor-pointer transition-all duration-200 ease-in transform hover:scale-105 hover:z-50"
      />
      <h2 className="text-2xl text-green-300 font-bold p-2">{details.title}</h2>
      <p className="p-2 font-serif font-semibold">{details.overview}</p>
      <button
        onClick={backToHome}
        className="text-2xl font-bold justify-center flex px-5 border-white"
      >
        ⬅ Back
      </button>
    </div>
  );
};

export default DetailScreen;
