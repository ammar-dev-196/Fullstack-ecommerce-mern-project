import { Link } from "react-router";
import Search from "./Search";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "@mui/material/Button";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function Header() {
  // Cart list item
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" className="categoryPanel">
      <h3 className="p-4 text-[15px] font-semibold border-b border-gray-300 flex items-center justify-between">
        Shopping Cart (0)
        <IoClose
          className="cursor-pointer text-[20px]"
          onClick={toggleDrawer(false)}
        />
      </h3>
      <div className="scroll">
        <div class="flex items-center justify-center flex-col pt-[100px] gap-5">
          <img
            src="https://res.cloudinary.com/hyno2enn/image/upload/v1789674713/empty-cart.png"
            class="w-38"
          />
          <h4 className="text-[14px]">Your cart is currently empty</h4>
        </div>
        {/* Cart list item */}
      </div>
    </Box>
  );

  return (
    <header
      className="bg-white fixed lg:sticky left-0 w-full top-0 lg:-top-11.75z 
    z-101 border-b border-gray-300"
    >
      {/* Top bar */}
      <div className="top-strip hidden lg:block py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-[50%] hidden lg:block">
              <p className="text-[14px] font-normal mt-0 mb-0">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="flex items-center justify-between w-full lg:w-[50%] lg:justify-end">
              <ul className="flex items-center gap-3 w-full justify-between lg:w-50">
                <li className="list-none">
                  <Link
                    to="#"
                    className="text-[14px] lg:text-[13px] link font-normal transition hover:text-blue-300"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="#"
                    className="text-[14px] lg:text-[13px] link font-normal transition hover:text-blue-300"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle bar */}
      <div className="border-b border-gray-300">
        <div className="container ">
          <div className="flex items-center justify-between py-5 ">
            <div className="col1 w-[25%] lg:w-[25%]">
              <img
                src="https://res.cloudinary.com/hyno2enn/image/upload/v1789474422/classy-shop-logo.png"
                className="max-w-35 lg:max-w-50"
              />
            </div>

            <div className="w-[45%] lg:w-[40%]">
              <Search />
            </div>

            <div className="w-[30%] lg:w-[30%] flex items-center ">
              <ul className="flex items-center justify-end gap-2 w-full">
                <li className="list-none">
                  <Link to={"#"} className="link">
                    Login
                  </Link>
                </li>
                <div className="w-px h-6 bg-gray-300"></div>
                <li className="list-none mr-10">
                  <Link to={"#"} className="link">
                    SignUp
                  </Link>
                </li>
                <li className="list-none">
                  <IconButton aria-label="view cart with 2 items">
                    {/* Wishlist Icon */}
                    <GoHeart />
                    <CartBadge
                      badgeContent={1}
                      color="primary"
                      overlap="circular"
                    />
                  </IconButton>
                </li>
                <li className="list-none">
                  {/* Cart list items Icon */}
                  <IconButton
                    aria-label="view cart with 2 items"
                    onClick={toggleDrawer(true)}
                  >
                    <IoCartOutline />
                    <CartBadge
                      badgeContent={2}
                      color="primary"
                      overlap="circular"
                    />
                  </IconButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex">
        <Navbar />
      </div>

      {/* Cart list item */}
      <div>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </header>
  );
}

export default Header;
