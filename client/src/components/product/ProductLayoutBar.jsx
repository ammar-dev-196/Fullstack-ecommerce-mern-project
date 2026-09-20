import { HiMiniBars3 } from "react-icons/hi2";
import { IoGrid } from "react-icons/io5";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

function ProductLayoutBar({ itemView, setItemView }) {
  const [sortBy, setSortBy] = React.useState(10);
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="flex flex-row h-14 items-center bg-[#f1f1f1] rounded-md text-[15px]">
      <div className="flex flex-row w-[50%] items-center pl-3 gap-2 ">
        <button
          type="button"
          className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all border ${
            itemView === "list"
              ? "bg-[#ff5252] text-white border-[#ff5252]"
              : "bg-white text-gray-700 border-gray-300 hover:border-[#ff5252]"
          }`}
          onClick={() => setItemView("list")}
        >
          <HiMiniBars3 size={15} />
        </button>
        <button
          type="button"
          className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all border ${
            itemView === "grid"
              ? "bg-[#ff5252] text-white border-[#ff5252]"
              : "bg-white text-gray-700 border-gray-300 hover:border-[#ff5252]"
          }`}
          onClick={() => setItemView("grid")}
        >
          <IoGrid size={15} />
        </button>
        <p className=" ml-2">There are 15 products</p>
      </div>

      <div className="flex flex-row items-center w-[50%]  gap-2 justify-end pr-3">
        <p>Sort By: </p>
        <FormControl
          sx={{ m: 1, minWidth: 120, fontSize: 10 }}
          className="border-none hover:border:[#ff5252]"
        >
          <Select
            value={sortBy}
            onChange={handleSortChange}
            className="h-10 bg-white focus:border-[#ff5252] hover:border:[#ff5252]"
          >
            <MenuItem value={10}>Name: A To Z</MenuItem>
            <MenuItem value={20}>Name: Z To A</MenuItem>
            <MenuItem value={30}>Price: Low To High</MenuItem>
            <MenuItem value={40}>Price: High To Low</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default ProductLayoutBar;
