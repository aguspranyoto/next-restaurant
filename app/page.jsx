import { Card } from "../components";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl py-6 px-2 sm:px-6 lg:px-8 ">
      <h1 className="text-2xl">All Restaurants</h1>
      <div className="w-full grid sm:grid-cols-2 items-center justify-center md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-full text-center">
        <button className="w-[35%] border border-slate-900 text-black font-bold py-2 px-4 text-xs">
          LOAD MORE
        </button>
      </div>
    </main>
  );
}
