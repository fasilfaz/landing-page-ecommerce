import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="w-full bg-white">
      <div className="w-full max-w-[1862px] mx-auto px-[15px] sm:px-[29px]">
        {/* Footer Content */}
        <div className="flex flex-row items-start justify-center w-full px-[28px] sm:px-[56px]">
          {/* Logo */}
          <img 
            src="/images/img_6446f11db63dbee.png" 
            alt="Fashion & Uniforms logo"
            className="w-[111px] sm:w-[222px] h-[23px] sm:h-[46px] mb-[15px] sm:mb-[30px]"
          />

          {/* Social Media Icons */}
          <div className="flex flex-row items-center justify-end w-full mt-[7px] sm:mt-[14px] gap-[15px] sm:gap-[30px]">
            <a 
              href="#" 
              className="text-[#000000] hover:text-[#1877f2] transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook className="w-[15px] sm:w-[30px] h-[15px] sm:h-[30px]" />
            </a>
            <a 
              href="#" 
              className="text-[#000000] hover:text-[#1da1f2] transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter className="w-[15px] sm:w-[30px] h-[15px] sm:h-[30px]" />
            </a>
            <a 
              href="#" 
              className="text-[#000000] hover:text-[#e4405f] transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="w-[15px] sm:w-[30px] h-[15px] sm:h-[30px]" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-row items-start justify-center w-full px-[28px] sm:px-[56px]">
          <div className="flex flex-row items-center justify-center w-auto gap-[3px] sm:gap-[6px] mb-[15px] sm:mb-[30px]">
            <div className="flex flex-row items-center justify-center w-auto">
              <p className="w-auto text-[6px] sm:text-[9px] md:text-[11px] lg:text-[12px] font-Inter font-light leading-[9px] sm:leading-[13px] md:leading-[15px] lg:leading-[18px] text-center text-[#000000] font-[Inter]">
                Privacy Policy
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-auto">
              <p className="w-auto text-[8px] sm:text-[11px] md:text-[13px] lg:text-[15px] font-Inter font-light leading-[9px] sm:leading-[13px] md:leading-[15px] lg:leading-[18px] text-center text-[#000000] font-[Inter]">
                ·
              </p>
            </div>
            <div className="flex flex-row items-center justify-center w-auto">
              <p className="w-auto text-[6px] sm:text-[9px] md:text-[11px] lg:text-[12px] font-Inter font-light leading-[9px] sm:leading-[13px] md:leading-[15px] lg:leading-[18px] text-center text-[#000000] font-[Inter]">
                © 2024, Fashion & Uniforms. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;