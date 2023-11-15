import { useSearchParams } from "next/navigation";
import { Card, Navbar, ButtonLoadMore } from "../components";

async function getData() {
  const res = await fetch("https://restaurant-api.dicoding.dev/list", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function Home({ searchParams }) {
  const data = await getData();
  const restaurants = data.restaurants;
  const cities = data.restaurants;

  // search params
  const goodRating = searchParams["goodRating"];
  const city = searchParams["city"];
  const per_page = searchParams["per_page"];

  const filteredData =
    city?.length > 0 && goodRating == "true"
      ? restaurants.filter(
          (value) => (value.rating >= 4.2) & (value.city == city)
        )
      : city?.length > 0 && goodRating == "false"
      ? restaurants.filter((value) => value.city == city)
      : city?.length == 0 && goodRating == "true"
      ? restaurants.filter((value) => value.rating >= 4.2)
      : restaurants;

  return (
    <>
      <Navbar datas={cities} per_page={per_page} />
      <main className="mx-auto max-w-5xl py-6 px-4 sm:px-6 lg:px-8 shadow-xl mb-6">
        <h1 className="text-2xl">All Restaurants</h1>
        <div className="w-full grid sm:grid-cols-2 items-center justify-center md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 ">
          <Card data={filteredData} per_page={per_page} />
        </div>
        <div className="w-full text-center">
          <ButtonLoadMore city={city} goodRating={goodRating} />
        </div>
      </main>
    </>
  );
}
