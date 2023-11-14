"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({ datas }) {
  const router = useRouter();
  const [isGood, setIsGood] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const kota = datas;
  const cities = kota.map((item) => item.city);
  const uniqueCities = [...new Set(cities)];

  useEffect(() => {
    router.push(`?goodRating=${isGood}&city=${selectedCity}`);
  }, [selectedCity, isGood]);
  return (
    <nav className="mx-auto max-w-5xl py-6 px-2 sm:px-6 lg:px-8  bg-transparent border-t border-b border-slate-300 flex flex-col justify-center sm:flex-row sm:justify-between items-center">
      <div className="w-full flex flex-col mx-auto justify-center sm:justify-start sm:flex-row space-x-4 items-center">
        <div className="">
          <h1>Filter By:</h1>
        </div>
        <div className="flex flex-col w-2/3 space-y-6 sm:space-y-0 mb-4 sm:mb-0 sm:flex-row sm:space-x-4">
          <div className="form-control text-sm border-b-2 border-slate-300">
            <label className="label cursor-pointer space-x-2">
              <input
                type="checkbox"
                checked={isGood ? `checked` : ""}
                readOnly
                onClick={(e) => {
                  setIsGood(!isGood);
                }}
              />
              <span className="label-text">Good Rating</span>
            </label>
          </div>
          <select
            className="text-sm border-b-2 border-slate-300"
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value={""}>City</option>
            {uniqueCities.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="sm:w-40 sm:text-end">
        <button
          className="px-6 py-2 border border-slate-900 text-slate-900 text-xs"
          onClick={() => {
            router.push(`?goodRating=false&city=`);
          }}
        >
          CLEAR ALL
        </button>
      </div>
    </nav>
  );
}
