import Head from "next/head";
import Header from "../components/header/Header";
import Nav from "../components/navbar/Nav";
import Results from "../components/results/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div className="scrollbar-hide">
      <Head>
        <title>Hulu App</title>
        <link
          rel="icon"
          href="https://i.pinimg.com/originals/1b/f2/96/1bf2964cd5d85f8a85d47ead994ad0c7.jpg"
        />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

// fetching the props on the server
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  // making an inital request from the api_key
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
