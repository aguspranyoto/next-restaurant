const Navbar = () => {
  return (
    <nav className="mx-auto max-w-5xl py-6 px-2 sm:px-6 lg:px-8  bg-transparent border-t border-b border-slate-300 flex flex-col justify-center sm:flex-row sm:justify-between items-center">
      <div className="w-full flex flex-col mx-auto justify-center sm:justify-start sm:flex-row space-x-4 items-center">
        <div className="">
          <h1>Filter By:</h1>
        </div>
        <div className="flex flex-col w-2/3 space-y-6 sm:space-y-0 mb-4 sm:mb-0 sm:flex-row sm:space-x-4">
          <div className="form-control text-sm border-b-2 border-slate-300">
            <label className="label cursor-pointer space-x-2">
              <input type="checkbox" checked="checked" readOnly className="" />
              <span className="label-text">Open Now</span>
            </label>
          </div>
          <select className="text-sm border-b-2 border-slate-300">
            <option disabled value={""}>
              Price
            </option>
            <option value={""}>100 - 200</option>
            <option value={""}>200 - 300</option>
          </select>
          <select className="text-sm border-b-2 border-slate-300">
            <option disabled value={""}>
              Categories
            </option>
            <option value={""}>Fast Food</option>
            <option value={""}>Traditional</option>
          </select>
        </div>
      </div>

      <div className="sm:w-40 sm:text-end">
        <button className="px-6 py-2 border border-slate-300 text-slate-300 text-xs">
          CLEAR ALL
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
