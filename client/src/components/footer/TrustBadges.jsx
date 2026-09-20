import { BsTruck } from "react-icons/bs";
import { PiKeyReturn } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { RiCustomerService2Line } from "react-icons/ri";

function TrustBadges() {
  return (
    <div className="bg-[#fafafa]">
      <div className="container">
        <div className="flex justify-center py-10">
          <div className="w-[80%] flex flex-col md:flex-row justify-between items-center">
            {/* Badge 1 */}
            <div className="w-[20%] py-10">
              <div className="flex flex-col text-center items-center justify-center gap-3 text-[#171717] group">
                <BsTruck
                  size={40}
                  className="text-gray-800 group-hover:text-[#ff5252] group-hover:-translate-y-1 transition-all duration-300 "
                />
                <h2 className="text-md font-medium">Free Shipping</h2>
                <p className="text-[12px]">For all Orders Over $100</p>
              </div>
            </div>
            <div className="w-px h-25 bg-gray-300"></div>
            {/* Badge 2 */}
            <div className="w-[20%] py-10">
              <div className="flex flex-col text-center items-center justify-center gap-3 text-[#171717] group">
                <PiKeyReturn
                  size={40}
                  className="text-gray-800 group-hover:text-[#ff5252] group-hover:-translate-y-1 transition-all duration-300 "
                />
                <h2 className="text-md font-medium">30 Days Returns</h2>
                <p className="text-[12px]">For an Exchange Product</p>
              </div>
            </div>
            <div className="w-px h-25 bg-gray-300"></div>
            {/* Badge 3 */}
            <div className="w-[20%] py-10">
              <div className="flex flex-col text-center items-center justify-center gap-3 text-[#171717] group">
                <BsWallet2
                  size={40}
                  className="text-gray-800 group-hover:text-[#ff5252] group-hover:-translate-y-1 transition-all duration-300 "
                />
                <h2 className="text-md font-medium">Secured Payment</h2>
                <p className="text-[12px]">Payment Cards Accepted</p>
              </div>
            </div>
            <div className="w-px h-25 bg-gray-300"></div>
            {/* Badge 4 */}
            <div className="w-[20%] py-10">
              <div className="flex flex-col text-center items-center justify-center gap-3 text-[#171717] group">
                <GoGift
                  size={40}
                  className="text-gray-800 group-hover:text-[#ff5252] group-hover:-translate-y-1 transition-all duration-300 "
                />
                <h2 className="text-md font-medium">Special Gifts</h2>
                <p className="text-[12px]">On First Order</p>
              </div>
            </div>
            <div className="w-px h-25 bg-gray-300"></div>
            {/* Badge 5 */}
            <div className="w-[20%] py-10">
              <div className="flex flex-col text-center items-center justify-center gap-3 text-[#171717] group">
                <RiCustomerService2Line
                  size={40}
                  className="text-gray-800 group-hover:text-[#ff5252] group-hover:-translate-y-1 transition-all duration-300 "
                />
                <h2 className="text-md font-medium">Support 24/7</h2>
                <p className="text-[12px]">Contact us Anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustBadges;
