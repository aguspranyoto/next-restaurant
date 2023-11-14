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
  const restaurant = data.restaurant;
  return (
    <>
      <section className="border-t border-slate-300 mx-auto max-w-5xl py-6 px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Detail Restaurant</h1>
          <Link href={"/"} className="btn btn-primary">
            Homepage
          </Link>
        </div>
        <div className="flex flex-col py-5">
          <Image
            src={`https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`}
            width={300}
            height={300}
            alt="image restaurant"
            className="mx-auto w-[50%] object-cover object-center rounded border border-gray-200"
          />
          <div className="my-5">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {restaurant.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">{restaurant.rating}</span>
              </span>
            </div>
            <p className="leading-relaxed">{restaurant.description}</p>
            <div className="flex mt-6 items-center py-5 border-b-2 border-t-2 border-gray-200 ">
              <div className="flex">
                <span className="mr-3">City : {restaurant.city}</span>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Address : {restaurant.address}</span>
              </div>
            </div>
            <div className="flex items-center py-5 border-b-2 border-gray-200 ">
              <div>
                <h2>
                  Categories :{" "}
                  {restaurant.categories.map((item, i, row) => (
                    <span className="ml-2" key={item.name}>
                      {i + 1 === row.length ? `${item.name}.` : `${item.name},`}
                    </span>
                  ))}
                </h2>
              </div>
            </div>
            <div className="flex py-5 border-b-2 border-gray-200 flex-col">
              <h2 className="text-2xl mb-2"> Menus </h2>
              <div className="flex flex-row w-full">
                <div>
                  <h2 className="font-medium">Foods:</h2>
                  {restaurant.menus.foods.map((item) => (
                    <div className="flex flex-col" key={item.name}>
                      <span className="">{item.name}</span>
                    </div>
                  ))}
                </div>

                <div className="ml-6">
                  <h2 className="font-medium">Drinks:</h2>
                  {restaurant.menus.drinks.map((item) => (
                    <div className="flex flex-col   " key={item.name}>
                      <span className="">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex py-5 border-b-2 border-gray-200 flex-col">
              <h2 className="text-2xl mb-2"> Customer Reviews </h2>
              <div className="flex flex-col w-full">
                {restaurant.customerReviews.map((item) => (
                  <div
                    className="card bg-slate-900 text-white w-1/3 mb-2 flex flex-col p-4"
                    key={item.name}
                  >
                    <div className="flex justify-between mb-2 items-center">
                      <span className="text-xl font-bold">{item.name}</span>
                      <span className="text-sm">{item.date}</span>
                    </div>
                    <span className="">{item.review}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailPage;
