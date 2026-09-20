import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";

function valuetext(value) {
  return `${value}`;
}

function ProductFilter() {
  const [value, setValue] = React.useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col border w-90 min-h-screen items-center rounded-md">
      <div className="">
        <h3 className="pt-5 pb-3 font-medium">Shop By Category</h3>
        <div className="w-full h-px mb-3 bg-gray-300"></div>
        <div className="scrollbar-thin overflow-y-scroll flex  flex-col w-80 h-60 pl-2">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Fashion"
            className="w-5"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Bags"
            className="w-5"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Footwear"
            className="w-5"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Wellness"
            className="w-5"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Electronics"
            className="w-5"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Groceries"
            className="w-5"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Jewellery"
            className="w-5"
          />
        </div>
      </div>

      <div>
        <h3 className="pt-10 pb-3 font-medium">Filter By Price</h3>
        <div className="w-full h-px mb-3 bg-gray-300"></div>
        <div className="flex flex-col pl-3 pr-3 w-80">
          <Box>
            <Slider
              getAriaLabel={() => "Price Range"}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              value={value}
              onChange={handleChange}
            />
          </Box>
          <div className="flex flex-row gap-30">
            <p className="text-[14px]">
              From: <span className="font-semibold">$50.00</span>
            </p>
            <p className="text-[14px]">
              From: <span className="font-semibold">$10,000.00</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="pt-10 pb-3 font-medium">Filter By Rating</h3>
        <div className="w-full h-px mb-3 bg-gray-300"></div>
        <div className="flex flex-col w-80">
          <div className="flex items-center">
            <FormControlLabel control={<Checkbox defaultChecked />} />
            <Rating name="read-only" value={5} readOnly />
          </div>
          <div className="flex items-center">
            <FormControlLabel control={<Checkbox />} />
            <Rating name="read-only" value={4} readOnly />
          </div>
          <div className="flex items-center">
            <FormControlLabel control={<Checkbox />} />
            <Rating name="read-only" value={3} readOnly />
          </div>
          <div className="flex items-center">
            <FormControlLabel control={<Checkbox />} />
            <Rating name="read-only" value={2} readOnly />
          </div>
          <div className="flex items-center">
            <FormControlLabel control={<Checkbox />} />
            <Rating name="read-only" value={1} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
