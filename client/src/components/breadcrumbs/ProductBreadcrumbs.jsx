import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
}

function ProductBreadcrumbs() {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="container">
        <div
          className="py-6 flex flex-row"
          role="presentation"
          onClick={handleClick}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Fashion
            </Link>
            <Typography sx={{ color: "text.primary" }}>Men</Typography>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}

export default ProductBreadcrumbs;
