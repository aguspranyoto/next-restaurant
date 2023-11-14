import { Detail } from "../../../components";
import Image from "next/image";
import Link from "next/link";

async function getRestaurant(id) {
  const res = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`, {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}
async function DetailPage({ params }) {
  const id = params.id;
  const data = await getRestaurant(id);
  console.log(data);
  const restaurant = data.restaurant;
  return (
    <>
      <main className="border-t border-slate-300 mx-auto max-w-5xl py-6 px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-2xl">Detail Restaurant</h1>
        <div className="w-full my-5">
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
          <p>{restaurant.city}</p>
          <p>{restaurant.address}</p>
          <Image
            src={`https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`}
            width={300}
            height={300}
            alt="image restaurant"
          />
          {restaurant.categories.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          ))}
          {restaurant.menus.foods.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          ))}
          {restaurant.menus.drinks.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          ))}
          <p>{restaurant.rating}</p>
          {restaurant.customerReviews.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
              <p>{item.review}</p>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default DetailPage;
