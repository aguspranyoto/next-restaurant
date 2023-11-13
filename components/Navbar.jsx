const Navbar = () => {
  return (
    <nav className="mx-auto max-w-5xl py-6 px-2 sm:px-6 lg:px-8  bg-transparent border-t border-b border-slate-300 flex justify-between items-center ">
      <div className="flex space-x-4 items-center">
        <div>
          <h1>Filter By:</h1>
        </div>
        <form className="flex space-x-4">
          <div className="form-controltext-sm border-b-2 border-slate-300">
            <label className="label cursor-pointer space-x-2">
              <input type="checkbox" checked="checked" className="" />
              <span className="label-text">Open Now</span>
            </label>
          </div>
          <select className="text-sm border-b-2 border-slate-300">
            <option disabled selected>
              Price
            </option>
            <option>100 - 200</option>
            <option>200 - 300</option>
          </select>
          <select className="text-sm border-b-2 border-slate-300">
            <option disabled selected>
              Categories
            </option>
            <option>Fast Food</option>
            <option>Traditional</option>
          </select>
        </form>
      </div>
      <div>
        <button className="px-6 py-1 border border-slate-300 text-slate-300 text-xs">
          CLEAR ALL
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
