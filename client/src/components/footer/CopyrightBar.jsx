import { GrFacebookOption } from "react-icons/gr";
import { SlSocialInstagram } from "react-icons/sl";
import { RiYoutubeLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router";

function CopyrightBar() {
  return (
    <div className="bg-white border-t border-gray-300">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4 md:gap-0">
          {/* Social Icons */}
          <div className="w-full md:w-[30%] flex items-center justify-center md:justify-start">
            <ul className="flex flex-row gap-3">
              <li>
                <Link
                  to="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
                >
                  <GrFacebookOption
                    size={20}
                    className="group-hover:text-white"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
                >
                  <SlSocialInstagram
                    size={20}
                    className="group-hover:text-white"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
                >
                  <RiYoutubeLine size={20} className="group-hover:text-white" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  aria-label="Pinterest"
                  className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
                >
                  <FaPinterestP size={20} className="group-hover:text-white" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Copyright Text */}
          <div className="w-full md:w-[40%] flex justify-center items-center text-[14px] text-gray-600 text-center">
            © 2026 - All Rights Reserved.
          </div>

          {/* Payment Methods */}
          <div className="w-full md:w-[30%] flex flex-row justify-center md:justify-end items-center">
            <ul className="flex flex-wrap justify-center items-center gap-1.5">
              <li>
                <img
                  src="https://res.cloudinary.com/hyno2enn/image/upload/v1789578919/imgi_117_paypal.webp"
                  alt="PayPal"
                  className="h-7 object-contain"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/hyno2enn/image/upload/v1789578923/imgi_114_visa.webp"
                  alt="Visa"
                  className="h-7 object-contain"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/hyno2enn/image/upload/v1789578927/imgi_115_master_card.webp"
                  alt="MasterCard"
                  className="h-7 object-contain"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/hyno2enn/image/upload/v1789578931/imgi_116_american_express.webp"
                  alt="American Express"
                  className="h-7 object-contain"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopyrightBar;
