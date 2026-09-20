import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";
import { Link } from "react-router";
import { RiMenu2Line } from "react-icons/ri";

function Navbar() {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <div className="container flex gap-10 items-center py-2">
      <div className="w-[20%]">
        <button
          onClick={openCategoryPanel}
          className="flex items-center  w-full py-2 px-3 rounded-sm"
        >
          <span className="mr-3">
            <RiMenu2Line />
          </span>
          Shop By Category
          <span className="ml-5">
            <FaAngleDown />
          </span>
        </button>
      </div>
      <div className="w-px h-6 bg-gray-300"></div>

      <div className="w-[80%]">
        <ul className="nav flex items-center gap-10 w-full transition">
          <li className="list-none">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="list-none relative">
            <Link to={"product-category"} className="link">
              Fashion
            </Link>

            {/* Submenu */}
            <div className="submenu opacity-0 absolute top-full left-0 min-w-40 px-4 py-3 mt-4 bg-white shadow-md transition-all">
              <ul className="flex flex-col gap-2">
                <li className="list-none w-full h-full">
                  <Link to="#" className="link w-full">
                    Men
                  </Link>

                  {/* Inner Submenu */}
                  <div className="submenu opacity-0 absolute top-full left-0 min-w-40 px-4 py-3 bg-white shadow-md transition-all">
                    <ul className="flex flex-col gap-2">
                      <li className="list-none w-full">
                        <Link to="#" className="link w-full">
                          Shirts
                        </Link>
                      </li>
                      <li className="list-none w-full">
                        <Link to="#" className="link w-full">
                          Pants
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Inner Submenu end */}
                </li>

                <li className="list-none w-full">
                  <Link to="#" className="link w-full">
                    Women
                  </Link>
                </li>
              </ul>
            </div>
            {/* Submenu end */}
          </li>

          <li className="list-none">
            <Link to="#" className="link">
              Jewellery
            </Link>
          </li>
          <li className="list-none">
            <Link to="#" className="link">
              Footwear
            </Link>
          </li>
          <li className="list-none">
            <Link to="#" className="link">
              Wellness
            </Link>
          </li>
          <li className="list-none">
            <Link to="#" className="link">
              Bags
            </Link>
          </li>
          <li className="list-none">
            <Link to="#" className="link">
              Electronics
            </Link>
          </li>
          <li className="list-none">
            <Link to="#" className="link">
              Groceries
            </Link>
          </li>
        </ul>
      </div>

      <CategoryPanel
        setIsOpenCatPanel={setIsOpenCatPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </div>
  );
}

export default Navbar;
