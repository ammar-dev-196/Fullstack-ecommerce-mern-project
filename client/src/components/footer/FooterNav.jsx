import { IoChatboxOutline } from "react-icons/io5";
import { Link } from "react-router";

function FooterNav() {
  return (
    <div className="bg-[#fafafa]">
      <div className="container">
        <div className="border-t border-gray-300 pt-10 pb-15">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 lg:gap-6">
            {/* Contact Us */}
            <div className="w-full md:w-[48%] lg:w-[30%] lg:pr-10 lg:border-r border-gray-300 flex flex-col">
              <h2 className="font-heading text-[18px] font-semibold text-[#171717] mb-4">
                Contact us
              </h2>
              <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                Contact us Classyshop - Mega Super Store 507-Union Trade Centre
                France
              </p>
              <a
                href="mailto:sales@yourcompany.com"
                className="text-gray-700 hover:text-[#ff5252] transition-colors mb-2 text-[14px]"
              >
                sales@yourcompany.com
              </a>
              <p className="mb-4 text-[18px] font-semibold text-[#ff5252]">
                (+91) 9876-543-210
              </p>
              <div className="font-medium flex flex-row items-center gap-3 text-gray-800">
                <IoChatboxOutline size={35} className="text-[#ff5252] shrink-0" />
                <span className="text-[14px] leading-tight">
                  Online Chat Get <br />
                  Expert Help
                </span>
              </div>
            </div>

            {/* Products */}
            <div className="w-[45%] sm:w-[45%] md:w-[22%] lg:w-[18%] lg:pl-6 flex flex-col">
              <h2 className="font-heading text-[18px] font-semibold text-[#171717] mb-4">
                Products
              </h2>
              <ul className="flex flex-col gap-2.5 text-[14px] text-gray-600">
                <li>
                  <Link to="#" className="link hover:text-[#ff5252] transition-colors">
                    Prices drop
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link hover:text-[#ff5252] transition-colors">
                    New products
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link hover:text-[#ff5252] transition-colors">
                    Best sales
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link hover:text-[#ff5252] transition-colors">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link hover:text-[#ff5252] transition-colors">
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link hover:text-[#ff5252] transition-colors">
                    Store Location
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our company */}
            <div className="w-[45%] sm:w-[45%] md:w-[22%] lg:w-[18%] flex flex-col">
              <h2 className="font-heading text-[18px] font-semibold text-[#171717] mb-4">
                Our company
              </h2>
              <ul className="flex flex-col gap-2.5 text-[14px] text-gray-600">
                <li>
                  <Link to="#" className="link hover:text-[#ff5252] transition-colors">
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link hover:text-[#ff5252] transition-colors">
                    Legal Notice
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link hover:text-[#ff5252] transition-colors">
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link hover:text-[#ff5252] transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link hover:text-[#ff5252] transition-colors">
                    Secure payment
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link hover:text-[#ff5252] transition-colors">
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            {/* Subscribe to newsletter */}
            <div className="w-full md:w-[48%] lg:w-[30%] flex flex-col">
              <h2 className="font-heading text-[18px] font-semibold text-[#171717] mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>
              <div className="flex w-full max-w-sm">
                <input
                  type="email"
                  className="border border-gray-400 w-full min-w-0 rounded-tl rounded-bl px-3 py-2.5 sm:py-3 text-[14px] focus:outline-none focus:border-[#ff5252]"
                  placeholder="Your Email Address"
                />
                <button
                  type="button"
                  className="bg-[#ff5252] border-[#ff5252] border px-4 sm:px-6 py-2.5 sm:py-3 text-white font-semibold uppercase text-[13px] sm:text-[14px] rounded-tr rounded-br shrink-0 hover:bg-[#e04848] transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
