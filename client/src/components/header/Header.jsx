import * as React from "react";
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
import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";
import { MyContext } from "@/context/Mycontext";
import { LuUserRound } from "react-icons/lu";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { LuShoppingBag } from "react-icons/lu";
import { LuUser } from "react-icons/lu";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function Header() {
  const auth = useContext(MyContext);

  // User account dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAnchorEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // User account dropdown end here

  // Cart list item
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 350,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
      className="categoryPanel"
    >
      <h3 className="p-4 text-[15px] font-semibold border-b border-gray-300 flex items-center justify-between">
        Shopping Cart (0)
        <IoClose
          className="cursor-pointer text-[20px]"
          onClick={toggleDrawer(false)}
        />
      </h3>
      <div className="flex-1 flex flex-col min-h-0">
        {/* <div class="flex items-center justify-center flex-col pt-[100px] gap-5">
          <img
            src="https://res.cloudinary.com/hyno2enn/image/upload/v1789674713/empty-cart.png"
            class="w-38"
          />
          <h4 className="text-[14px]">Your cart is currently empty</h4>
        </div> */}
        <div className="flex-1 overflow-y-auto">
          {/* Cart list items */}
          <div className=" border border-t-0 flex-1">
            <div className="w-full flex flex-row  py-2">
              <div className="w-[20%] p-2">
                <div className="w-15 border p-1 object-contain">
                  <img
                    src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478154/imgi_35_1786331761836_csecefcwsecfwecwcewe1.webp"
                    className=""
                  />
                </div>
              </div>
              <div className="w-[70%] py-2 px-3 text-[14px] capitalize">
                <p className="line-clamp-1">
                  Beige & Blue Printed Silicone Samsung
                </p>
                <p className="text-[12px] pt-2 font-medium">T-Shirt</p>
                <p className="text-[14px] pt-1 font-medium">
                  1 X <span className="text-[#ff5252]">$36.00</span>
                </p>
              </div>
              <div className="w-[10%] py-2">
                <CiTrash size={18} className="link cursor-pointer" />
              </div>
            </div>
          </div>
          {/* Cart list items end here */}
        </div>

        {/* Cart total */}
        <div className="border-t pt-4 pb-4 px-4 bg-white mt-auto">
          {/* Line items */}
          <div className="flex flex-col gap-1.5 text-[13px]">
            <div className="flex justify-between">
              <span className="font-medium">1 item</span>
              <span className="text-[#ff5252] font-semibold">$86.00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Shipping</span>
              <span className="text-[#ff5252] font-semibold">$7.00</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 my-3"></div>

          {/* Totals */}
          <div className="flex flex-col gap-1.5 text-[13px]">
            <div className="flex justify-between">
              <span className="font-semibold">Total (tax excl.)</span>
              <span className="text-[#ff5252] font-semibold">$93.00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Total (tax incl.)</span>
              <span className="text-[#ff5252] font-semibold">$93.00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Taxes:</span>
              <span className="text-[#ff5252] font-semibold">$0.00</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              type="button"
              className="flex-1 py-2.5 bg-[#ff5252] hover:bg-black text-white text-[12px] font-bold uppercase tracking-wider rounded cursor-pointer transition-all"
            >
              View Cart
            </button>
            <Link
              to={"/checkout"}
              className="flex-1 flex items-center justify-center py-2.5 bg-[#ff5252] hover:bg-black text-white text-[12px] font-bold uppercase tracking-wider rounded cursor-pointer transition-all"
              onClick={toggleDrawer(false)}
            >
              Checkout
            </Link>
          </div>
        </div>
        {/* Cart total end here */}
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
                {auth.isLogin ? (
                  <>
                    <li className="list-none">
                      <Link to={"/login"} className="link">
                        Login
                      </Link>
                    </li>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <li className="list-none mr-10">
                      <Link to={"/register"} className="link">
                        SignUp
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="list-none flex flex-row items-center gap-2">
                      {/* <LuUserRound 
                    size={32} 
                    color="gray"
                    className="bg-[#f1f1f1] p-1 rounded-full hover:bg-[#d6d4d4] cursor-pointer"
                    />
                  
                  <span className="text-[14px] font-medium">Username</span> */}

                      <React.Fragment>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          {/* <Tooltip title="Account settings"> */}
                          <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={
                              openAnchorEl ? "account-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={openAnchorEl}
                          >
                            <Avatar sx={{ width: 32, height: 32 }}>
                              <LuUserRound
                                size={32}
                                color="gray"
                                className="bg-[#f1f1f1] p-1 rounded-full hover:bg-[#d6d4d4] cursor-pointer"
                              />
                            </Avatar>
                          </IconButton>
                          {/* </Tooltip> */}
                        </Box>
                        <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          open={openAnchorEl}
                          onClose={handleClose}
                          onClick={handleClose}
                          slotProps={{
                            paper: {
                              elevation: 0,
                              sx: {
                                overflow: "visible",
                                filter:
                                  "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 1.5,
                                "& .MuiAvatar-root": {
                                  width: 32,
                                  height: 32,
                                  ml: -0.5,
                                  mr: 1,
                                },
                                "&::before": {
                                  content: '""',
                                  display: "block",
                                  position: "absolute",
                                  top: 0,
                                  right: 14,
                                  width: 10,
                                  height: 10,
                                  bgcolor: "background.paper",
                                  transform: "translateY(-50%) rotate(45deg)",
                                  zIndex: 0,
                                },
                              },
                            },
                          }}
                          transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                          }}
                          anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <LuUser className="mr-2" />
                            Profile
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <LuShoppingBag className="mr-2" />
                            Orders
                          </MenuItem>

                          <MenuItem onClick={handleClose}>
                            <GoHeart className="mr-2" />
                            My Wishlist
                          </MenuItem>

                          <MenuItem onClick={handleClose}>
                            <RiLogoutCircleRLine className="mr-2" />
                            Logout
                          </MenuItem>
                        </Menu>
                      </React.Fragment>
                    </li>
                  </>
                )}

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
