import { useSearchParams } from "next/navigation";
import { Card, Navbar } from "../components";

async function getCity() {
  const res = await fetch(`https://restaurant-api.dicoding.dev/list`, {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

async function getRestaurants() {
  const res = await fetch("https://restaurant-api.dicoding.dev/list", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function Home({ searchParams }) {
  const data2 = await getRestaurants();
  const restaurants = data2.restaurants;
  const data = await getCity();
  const cities = data.restaurants;

  // search params
  const goodRating = searchParams["goodRating"];
  console.log(goodRating);
  const city = searchParams["city"];
  console.log(city);

  const filteredData =
    city?.length > 0 && goodRating == "true"
      ? restaurants.filter((value) => (value.rating > 4) & (value.city == city))
      : city?.length > 0 && goodRating == "false"
      ? restaurants.filter((value) => value.city == city)
      : city?.length == 0 && goodRating == "true"
      ? restaurants.filter((value) => value.rating > 4)
      : restaurants;

  return (
    <>
      <Navbar datas={cities} />
      <main className="mx-auto max-w-5xl py-6 px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-2xl">All Restaurants</h1>
        <div className="w-full grid sm:grid-cols-2 items-center justify-center md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
          <Card data={filteredData} />
        </div>
        <div className="w-full text-center">
          <button className="w-[35%] border border-slate-900 text-black font-bold py-2 px-4 text-xs">
            LOAD MORE
          </button>
        </div>
      </main>
    </>
  );
}
