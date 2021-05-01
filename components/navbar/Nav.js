import requests from "../../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className="font-semibold pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-400 text-lg"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
