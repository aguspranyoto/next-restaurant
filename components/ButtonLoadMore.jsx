"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ButtonLoadMore = ({ city, goodRating }) => {
  const initialPostList = 16;
  const incrementInitialPostList = 8;
  const [perPage, setPerPage] = useState(initialPostList);
  console.log(perPage);
  const router = useRouter();

  return (
    <button
      onClick={() => (
        setPerPage(perPage + incrementInitialPostList),
        router.push(
          `?goodRating=${goodRating}&city=${city}&per_page=${perPage}`
        )
      )}
      className="w-[35%] border border-slate-900 text-black font-bold py-2 px-4 text-xs"
    >
      LOAD MORE
    </button>
  );
};

export default ButtonLoadMore;
