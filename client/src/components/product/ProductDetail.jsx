import Rating from "@mui/material/Rating";
import * as React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import {
  FaPlus,
  FaMinus,
  FaRegHeart,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa6";
import { Link } from "react-router";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { RiShieldCheckFill } from "react-icons/ri";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { PiUserLight } from "react-icons/pi";

//   Product  Tabs
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      tabIndex={0}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
// Product tab end here

function ProductDetail() {
  // Item quantity counter
  const [quantity, setQuantity] = React.useState(1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  const handleIncrement = () => {
    if (quantity < 10) setQuantity((prev) => prev + 1);
  };

  //  Swiper image slider
  const [swiperInstance, setSwiperInstance] = React.useState(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  //  Image slide index
  const [slideIndex, setslideIndex] = React.useState(0);
  const zoomSliderBig = React.useRef();
  const zoomSliderSmall = React.useRef();

  const goto = (index) => {
    setslideIndex(index);
    zoomSliderSmall.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  // Product tabs

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // /Product tabs

  // Rating bar
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 13,
    borderRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: "#000",
      ...theme.applyStyles("dark", {
        backgroundColor: "#308fe8",
      }),
    },
  }));
  //   /Rating bar

  return (
    <div className="bg-white">
      <div className="container flex flex-row py-10">
        <div className="w-full lg:w-[40%] py-4">
          <div className="flex flex-row gap-3">
            <div className="w-full lg:w-[18%] order-2 lg:order-1 flex flex-col items-center">
              {/* Top / Prev Button (Up) */}
              <button
                type="button"
                onClick={() => swiperInstance?.slidePrev()}
                disabled={isBeginning}
                className="w-20 h-6 flex items-center justify-center bg-white hover:bg-[#f1f1f1] border border-b-0 border-gray-200 text-gray-700 transition disabled:opacity-25 cursor-pointer"
                aria-label="Previous image"
              >
                <FaAngleUp size={14} />
              </button>

              {/* Thumbnail Swiper Container */}
              <div className="w-20 h-[460px] overflow-hidden">
                <Swiper
                  ref={zoomSliderSmall}
                  onSwiper={(swiper) => {
                    setSwiperInstance(swiper);
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
                  onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
                  slidesPerView={5}
                  spaceBetween={8}
                  direction="vertical"
                  className="h-full w-full"
                >
                  <SwiperSlide>
                    <div
                      className={`item cursor-pointer group h-full
                      ${slideIndex === 0 ? "opacity" : "opacity-30"}`}
                      onClick={() => goto(0)}
                    >
                      <img
                        src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478158/imgi_36_1786331761837_csecefcwsecfwecwcewe2.webp"
                        className="w-full h-full object-contain border"
                        alt="Product thumbnail"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`item cursor-pointer group h-full
                      ${slideIndex === 1 ? "opacity" : "opacity-30"}`}
                      onClick={() => goto(1)}
                    >
                      <img
                        src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478154/imgi_35_1786331761836_csecefcwsecfwecwcewe1.webp"
                        className="w-full h-full object-contain border "
                        alt="Product thumbnail"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`item cursor-pointer group h-full
                      ${slideIndex === 2 ? "opacity" : "opacity-30"}`}
                      onClick={() => goto(2)}
                    >
                      <img
                        src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478151/imgi_30_1786896250646_hjhj1.webp"
                        className="w-full h-full object-contain border "
                        alt="Product thumbnail"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`item cursor-pointer group h-full
                      ${slideIndex === 3 ? "opacity" : "opacity-30"}`}
                      onClick={() => goto(3)}
                    >
                      <img
                        src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478148/imgi_29_1786896250645_hjhj2.webp"
                        className="w-full h-full object-contain border "
                        alt="Product thumbnail"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`item cursor-pointer group h-full
                      ${slideIndex === 4 ? "opacity" : "opacity-30"}`}
                      onClick={() => goto(4)}
                    >
                      <img
                        src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478140/imgi_24_1787548308411_vbvb4.webp"
                        className="w-full h-full object-contain border "
                        alt="Product thumbnail"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`item cursor-pointer group h-full
                      ${slideIndex === 5 ? "opacity" : "opacity-30"}`}
                      onClick={() => goto(5)}
                    >
                      <img
                        src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478137/imgi_23_1787548308410_vbvb2.webp"
                        className="w-full h-full object-contain border "
                        alt="Product thumbnail"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Bottom / Next Button (Down) */}
              <button
                type="button"
                onClick={() => swiperInstance?.slideNext()}
                disabled={isEnd}
                className="w-20 h-6 flex items-center justify-center bg-white border border-t-0 border-gray-200 hover:bg-[#f1f1f1] text-gray-700 transition cursor-pointer disabled:opacity-25"
                aria-label="Next image"
              >
                <FaAngleDown size={14} />
              </button>
            </div>
            <div className="w-full lg:w-[82%] h-auto rounded-md order-1 lg:order-2">
              <Swiper
                ref={zoomSliderBig}
                slidesPerView={1}
                spaceBetween={0}
                navigation={false}
              >
                <SwiperSlide>
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478158/imgi_36_1786331761837_csecefcwsecfwecwcewe2.webp"
                    className="rounded-md"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478154/imgi_35_1786331761836_csecefcwsecfwecwcewe1.webp"
                    className="rounded-md"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478151/imgi_30_1786896250646_hjhj1.webp"
                    className="rounded-md"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478148/imgi_29_1786896250645_hjhj2.webp"
                    className="rounded-md"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478140/imgi_24_1787548308411_vbvb4.webp"
                    className="rounded-md"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478137/imgi_23_1787548308410_vbvb2.webp"
                    className="rounded-md"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[55%] px-10 py-4">
          <h2 className="text-[22px] font-semibold">
            Beige & Blue Printed Silicone Samsung Galaxy S24 Ultra 5G Back Case
          </h2>
          <p className="mt-5">
            Brands:
            <span className="hover:underline cursor-pointer font-medium text-[#ff5252] px-2">
              QRIOH
            </span>
          </p>
          <div className="mt-2 flex items-center gap-2">
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            <span className="text-gray-600 text-sm">Review (2.5)</span>
          </div>
          <p className="mt-5">
            <span className="line-through font-semibold mr-8 text-[18px]">
              $17500
            </span>
            <span className="font-semibold text-[#ff5252] text-[18px] mr-8">
              $1599
            </span>
            Available In Stock:
            <span className="text-green-600 font-semibold pl-2">65 Items</span>
          </p>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since 1966, when designers at Letraset and James Mosley, the
            librarian at St Bride Printing Library in London, took a 1914 Cicero
            translation and scrambled it to make dummy text for Letraset's Body
            Type sazheets.a
          </p>

          <div className="flex flex-row gap-5 mt-5">
            {/* Quantity Stepper */}
            <div className="flex w-[15%] h-11 items-center border border-gray-300 rounded overflow-hidden bg-white">
              <button
                type="button"
                onClick={handleDecrement}
                className="w-10 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition cursor-pointer disabled:opacity-50"
                disabled={quantity <= 1}
              >
                <FaMinus size={12} />
              </button>
              <input
                type="number"
                min={1}
                max={10}
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(1, Math.min(10, Number(e.target.value) || 1)),
                  )
                }
                className="w-10 h-11 text-center font-semibold border-x border-gray-300 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                type="button"
                onClick={handleIncrement}
                className="w-10 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition cursor-pointer disabled:opacity-50"
                disabled={quantity >= 10}
              >
                <FaPlus size={12} />
              </button>
            </div>

            <button className="p-3 w-45 text-white bg-[#ff5252] font-medium text-[14px] cursor-pointer uppercase rounded hover:bg-black transition-all flex items-center justify-center gap-2">
              <MdOutlineShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
          <div className="mt-5 flex flex-row">
            <Link
              to="#"
              className="link flex items-center justify-center gap-2"
            >
              <FaRegHeart size={20} />
              Add to Wishlist
            </Link>
          </div>
          <div className="mt-5 flex items-center gap-1.5 text-gray-700">
            <RiShieldCheckFill size={18} className="shrink-0" />
            <span className="font-medium">Estimated Delivery:</span>
            <span>up to 3 to 4 business days</span>
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-gray-700">
            <RiShieldCheckFill size={18} className="shrink-0" />
            <span className="font-medium">Free Shipping & Returns:</span>
            <span>on all orders over $200</span>
          </div>
        </div>
      </div>
      <div className="container flex border py-8">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab
                label="Description"
                {...a11yProps(0)}
                className="text-[20px]"
              />
              <Tab label="Reviews (0)" {...a11yProps(1)} />
              <Tab label="Shipping & Return" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since 1966, when designers at Letraset and James Mosley, the
            librarian at St Bride Printing Library in London, took a 1914 Cicero
            translation and scrambled it to make dummy text for Letraset's Body
            Type sazheets.a
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="flex flex-row">
              <div className="w-[50%]  py-8 pl-8">
                <div className="flex flex-col bg-[#f1f1f1] py-10 px-8 gap-3">
                  <h3 className="text-[#171717] font-semibold text-[18px]">
                    Add a Review
                  </h3>
                  <p>Your Rating:</p>
                  <Stack spacing={1}>
                    <Rating name="size-small" defaultValue={0} size="small" />
                  </Stack>
                  <p>Your Name:</p>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="py-2 px-2 border border-gray-300  rounded bg-white"
                  />
                  <p>Your Email:</p>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="py-2 px-2 border border-gray-300  rounded bg-white"
                  />
                  <p>Your Review:</p>
                  <textarea className="py-2 px-2 border border-gray-300  h-30 rounded bg-white"></textarea>
                  <button
                    type="button"
                    className="p-3 w-30 text-white bg-[#ff5252] font-medium text-[14px] cursor-pointer uppercase rounded hover:bg-black transition-all flex items-center justify-center gap-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="w-[50%] flex flex-row py-8 pl-8 ">
                <div className="border flex flex-row w-full h-40 p-4">
                  <div className="w-[50%] flex flex-col gap-3">
                    <span className="flex flex-row gap-2">
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={2.5}
                          precision={0.5}
                          readOnly
                        />
                      </Stack>
                      <span className="font-medium">2.5 out of 5</span>
                    </span>
                    <p className="font-medium">Based on 288 reviews</p>
                  </div>
                  <div className="w-[50%] px-8">
                    <span className="flex flex-row items-center justify-center gap-2">
                      {/* Rating stars */}
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={5}
                          precision={1}
                          readOnly
                        />
                      </Stack>

                      {/* Rating bar */}
                      <Stack spacing={2} sx={{ flexGrow: 1 }}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                          aria-label="Export data"
                        />
                      </Stack>
                    </span>
                    <span className="flex flex-row items-center justify-center gap-2">
                      {/* Rating stars */}
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={4}
                          precision={1}
                          readOnly
                        />
                      </Stack>

                      {/* Rating bar */}
                      <Stack spacing={2} sx={{ flexGrow: 1 }}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                          aria-label="Export data"
                        />
                      </Stack>
                    </span>
                    <span className="flex flex-row items-center justify-center gap-2">
                      {/* Rating stars */}
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={3}
                          precision={1}
                          readOnly
                        />
                      </Stack>

                      {/* Rating bar */}
                      <Stack spacing={2} sx={{ flexGrow: 1 }}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                          aria-label="Export data"
                        />
                      </Stack>
                    </span>
                    <span className="flex flex-row items-center justify-center gap-2">
                      {/* Rating stars */}
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={2}
                          precision={1}
                          readOnly
                        />
                      </Stack>

                      {/* Rating bar */}
                      <Stack spacing={2} sx={{ flexGrow: 1 }}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                          aria-label="Export data"
                        />
                      </Stack>
                    </span>
                    <span className="flex flex-row items-center justify-center gap-2">
                      {/* Rating stars */}
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={1}
                          precision={1}
                          readOnly
                        />
                      </Stack>

                      {/* Rating bar */}
                      <Stack spacing={2} sx={{ flexGrow: 1 }}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                          aria-label="Export data"
                        />
                      </Stack>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-gray-300"></div>

            <div className="w-full my-2 p-8 h-150 overflow-y-scroll">
              {/* User Reviews */}
              <div className="flex flex-row w-full h-auto border py-4 mb-3 rounded-md">
                <div className="w-[10%] px-3  flex items-center justify-center">
                  <div className="flex items-center justify-center border bg-[#f1f1f1] w-15 h-15 rounded-full ">
                    <PiUserLight size={30} />
                  </div>
                </div>
                <div className="w-[90%] px-3">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row">
                      <div className="w-[50%] font-medium">
                        Jones – October 13, 2023
                      </div>
                      <div className="w-[50%] flex justify-end">
                        {/* Rating stars */}
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={1}
                            precision={1}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      Worth the money. Good quality. Doesn't rust. Have been
                      using this since 1.5yrs. the best stainless steel bottle
                      Worth the money. Good quality. Doesn't rust. Have been
                      using this since 1.5yrs. the best stainless steel bottle
                    </div>
                  </div>
                </div>
              </div>
              {/* User Review end here */}
              {/* User Reviews */}
              <div className="flex flex-row w-full h-auto border py-4 mb-3 rounded-md">
                <div className="w-[10%] px-3  flex items-center justify-center">
                  <div className="flex items-center justify-center border bg-[#f1f1f1] w-15 h-15 rounded-full ">
                    <PiUserLight size={30} />
                  </div>
                </div>
                <div className="w-[90%] px-3">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row">
                      <div className="w-[50%] font-medium">
                        Jones – October 13, 2023
                      </div>
                      <div className="w-[50%] flex justify-end">
                        {/* Rating stars */}
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={1}
                            precision={1}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      Worth the money. Good quality. Doesn't rust. Have been
                      using this since 1.5yrs. the best stainless steel bottle
                      Worth the money. Good quality. Doesn't rust. Have been
                      using this since 1.5yrs. the best stainless steel bottle
                    </div>
                  </div>
                </div>
              </div>
              {/* User Review end here */}
              {/* User Reviews */}
              <div className="flex flex-row w-full h-auto border py-4 mb-3 rounded-md">
                <div className="w-[10%] px-3  flex items-center justify-center">
                  <div className="flex items-center justify-center border bg-[#f1f1f1] w-15 h-15 rounded-full ">
                    <PiUserLight size={30} />
                  </div>
                </div>
                <div className="w-[90%] px-3">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row">
                      <div className="w-[50%] font-medium">
                        Jones – October 13, 2023
                      </div>
                      <div className="w-[50%] flex justify-end">
                        {/* Rating stars */}
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={1}
                            precision={1}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      Worth the money. Good quality. Doesn't rust. Have been
                      using this since 1.5yrs. the best stainless steel bottle
                      Worth the money. Good quality. Doesn't rust. Have been
                      using this since 1.5yrs. the best stainless steel bottle
                    </div>
                  </div>
                </div>
              </div>
              {/* User Review end here */}
              {/* User Reviews */}
              <div className="flex flex-row w-full h-auto border py-4 mb-3 rounded-md">
                <div className="w-[10%] px-3  flex items-center justify-center">
                  <div className="flex items-center justify-center border bg-[#f1f1f1] w-15 h-15 rounded-full ">
                    <PiUserLight size={30} />
                  </div>
                </div>
                <div className="w-[90%] px-3">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row">
                      <div className="w-[50%] font-medium">
                        Jones – October 13, 2023
                      </div>
                      <div className="w-[50%] flex justify-end">
                        {/* Rating stars */}
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={1}
                            precision={1}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      Worth the money. Good quality. Doesn't rust. Have been
                      using this since 1.5yrs. the best stainless steel bottle
                      Worth the money. Good quality. Doesn't rust. Have been
                      using this since 1.5yrs. the best stainless steel bottle
                    </div>
                  </div>
                </div>
              </div>
              {/* User Review end here */}
              {/* User Reviews */}
              <div className="flex flex-row w-full h-auto border py-4 mb-3 rounded-md">
                <div className="w-[10%] px-3  flex items-center justify-center">
                  <div className="flex items-center justify-center border bg-[#f1f1f1] w-15 h-15 rounded-full ">
                    <PiUserLight size={30} />
                  </div>
                </div>
                <div className="w-[90%] px-3">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row">
                      <div className="w-[50%] font-medium">
                        Jones – October 13, 2023
                      </div>
                      <div className="w-[50%] flex justify-end">
                        {/* Rating stars */}
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={1}
                            precision={1}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      Worth the money. Good quality. Doesn't rust. Have been
                      using this since 1.5yrs. the best stainless steel bottle
                      Worth the money. Good quality. Doesn't rust. Have been
                      using this since 1.5yrs. the best stainless steel bottle
                    </div>
                  </div>
                </div>
              </div>
              {/* User Review end here */}
              {/* User Reviews */}
              <div className="flex flex-row w-full h-auto border py-4 mb-3 rounded-md">
                <div className="w-[10%] px-3  flex items-center justify-center">
                  <div className="flex items-center justify-center border bg-[#f1f1f1] w-15 h-15 rounded-full ">
                    <PiUserLight size={30} />
                  </div>
                </div>
                <div className="w-[90%] px-3">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row">
                      <div className="w-[50%] font-medium">
                        Jones – October 13, 2023
                      </div>
                      <div className="w-[50%] flex justify-end">
                        {/* Rating stars */}
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={1}
                            precision={1}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      Worth the money. Good quality. Doesn't rust. Have been
                      using this since 1.5yrs. the best stainless steel bottle
                      Worth the money. Good quality. Doesn't rust. Have been
                      using this since 1.5yrs. the best stainless steel bottle
                    </div>
                  </div>
                </div>
              </div>
              {/* User Review end here */}
            </div>
          </CustomTabPanel>

          {/* Shipping & Return */}
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          {/* Shipping & Return end here */}
        </Box>
      </div>
    </div>
  );
}

export default ProductDetail;
