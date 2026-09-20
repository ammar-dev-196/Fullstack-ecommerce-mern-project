import { BannerOne, BannerTwo } from "@/components/banners/HomePageBanners";
import BeautyProductsSlider from "@/components/home/BeautyProductsSlider";
import FeaturedProductsSlider from "@/components/home/FeaturedProductsSlider";
import FreeShippingBanner from "@/components/home/FreeShippingBanner";
import GroceriesProductsSlider from "@/components/home/GroceriesProductsSlider";
import LatestProductsSlider from "@/components/home/LatestProductsSlider";
import Slider from "@/components/home/Slider";

function Home() {
  return (
    <div>
      <Slider />
      <LatestProductsSlider />
      <BannerOne />
      <FreeShippingBanner />
      <FeaturedProductsSlider />
      <BannerTwo />
      <GroceriesProductsSlider />
      <BeautyProductsSlider />
    </div>
  );
}

export default Home;
