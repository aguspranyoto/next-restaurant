"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ButtonLoadMore = ({ city, goodRating }) => {
  const initial = 16;
  const increment = 8;
  const [perPage, setPerPage] = useState(initial);
  const router = useRouter();

  return (
    <button
      onClick={() => (
        setPerPage(perPage + increment),
        router.push(
          `?goodRating=${goodRating}&city=${city}&per_page=${perPage}`
        )
      )}
      className="w-[35%] border border-slate-900 hover:bg-slate-900 hover:text-white text-black font-bold py-2 px-4 text-xs"
    >
      LOAD MORE
    </button>
  );
};

export default ButtonLoadMore;
