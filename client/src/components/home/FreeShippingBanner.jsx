import { CiDeliveryTruck } from "react-icons/ci";

function FreeShippingBanner() {
  return (
    <div className="bg-white">
      <div className="container px-4 pb-10 pt-10">
        <div className="flex justify-center">
          <div className="w-[80%] min-h-25 flex flex-col md:flex-row items-center justify-between border-2 border-[#ff5252] p-8 md:p-6 rounded-md gap-4 text-center md:text-left">
            <div className="w-full flex items-center justify-center gap-2 md:w-[30%] font-bold text-[#171717] text-lg">
              <CiDeliveryTruck size={40} />
              Free Shipping
            </div>
            <div className="w-full md:w-[40%] text-md text-[#171717] text-center">
              Free Delivery Now On Your First Order Over $200
            </div>
            <div className="w-full md:w-[30%] font-semibold text-[#ff5252] md:text-right text-lg">
              - Only $200*
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBanner;
