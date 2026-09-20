import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";
import { useState } from "react";

function CategoryPanel(props) {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[14px] border-b border-gray-300 flex items-center justify-between">
        Shop By Category
        <IoClose
          className="cursor-pointer text-[20px]"
          onClick={toggleDrawer(false)}
        />
      </h3>

      <div className="scroll">
        {/* Main Menu Fashion */}
        <ul className="w-full">
          <li className="list-none flex flex-col items-center relative">
            <Link to="#" className="w-full" onClick={() => openSubmenu(0)}>
              <Button className="w-full text-left! justify-start! px-3! text-[#171717]!">
                Fashion
              </Button>
              {submenuIndex === 0 ? (
                <MdKeyboardArrowDown className="absolute top-2.5 right-3.75 text-[18px] cursor-pointer" />
              ) : (
                <MdKeyboardArrowRight className="absolute top-2.5 right-3.75 text-[18px] cursor-pointer" />
              )}
            </Link>

            {/* Submenu */}
            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3 flex flex-col relative">
                <li className="list-none">
                  <Link to="#" onClick={() => openInnerSubmenu(0)}>
                    <Button className="w-full text-left! justify-start! px-3! text-[#171717]!">
                      Apparel
                    </Button>
                    {innerSubmenuIndex === 0 ? (
                      <MdKeyboardArrowDown className="absolute top-2.5 right-3.75 text-[18px] cursor-pointer" />
                    ) : (
                      <MdKeyboardArrowRight className="absolute top-2.5 right-3.75 text-[18px] cursor-pointer" />
                    )}
                  </Link>
                </li>

                {/* Inner Submenu */}
                {innerSubmenuIndex === 0 && (
                  <ul className="submenu w-full pl-3">
                    <li className="list-none">
                      <Link
                        to="#"
                        className="link w-full text-left! justify-start! px-6! transition text-[12px]"
                      >
                        Men
                      </Link>
                    </li>

                    <li className="list-none">
                      <Link
                        to="#"
                        className="link w-full text-left! justify-start! px-6! transition text-[12px]"
                      >
                        Women
                      </Link>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>
        </ul>
        {/* Main menu end */}

        {/* Main Menu Bags */}
        <ul className="w-full">
          <li className="list-none flex flex-col items-center relative">
            <Link to="#" className="w-full" onClick={() => openSubmenu(1)}>
              <Button className="w-full text-left! justify-start! px-3! text-[#171717]!">
                Bags
              </Button>
              {submenuIndex === 1 ? (
                <MdKeyboardArrowDown className="absolute top-2.5 right-3.75 text-[18px] cursor-pointer" />
              ) : (
                <MdKeyboardArrowRight className="absolute top-2.5 right-3.75 text-[18px] cursor-pointer" />
              )}
            </Link>

            {/* Submenu */}
            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3 flex flex-col relative">
                <li className="list-none">
                  <Link
                    to="#"
                    className="link w-full text-left! justify-start! px-6! transition text-[12px]"
                  >
                    Men Bags
                  </Link>
                </li>

                <li className="list-none">
                  <Link
                    to="#"
                    className="link w-full text-left! justify-start! px-6! transition text-[12px]"
                  >
                    Women Bags
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        {/* Main menu end */}
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default CategoryPanel;
