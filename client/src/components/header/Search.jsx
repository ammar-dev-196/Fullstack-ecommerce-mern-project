import Button from "@mui/material/Button";
import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className="search-box w-full h-12.5 bg-[#e5e5e5] rounded">
      <div className="flex flex-row ">
        <input
          type="text"
          placeholder="Search products"
          className="w-full h-12 focus:outline-none pl-10"
        />
        <Button className="">
          <CiSearch className="text-2xl" />
        </Button>
      </div>
    </div>
  );
}

export default Search;
