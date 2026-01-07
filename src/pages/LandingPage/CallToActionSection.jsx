import React from 'react';

const CallToActionSection = () => {
  return (
    <section 
      className="w-full bg-cover bg-center bg-no-repeat pt-[120px] sm:pt-[240px]"
      style={{ backgroundImage: "url('/images/img_.png')" }}
    >
      <div className="w-full max-w-[1862px] mx-auto">
        {/* CTA Content */}
        <div className="flex flex-col items-center justify-start w-full gap-[30px] sm:gap-[60px] px-[28px] sm:px-[56px] pt-[125px] sm:pt-[250px] pb-[125px] sm:pb-[250px]">
          <div className="flex flex-row items-end justify-center w-full">
            <div className="flex flex-col items-center justify-start w-[20%] mt-[58px] sm:mt-[116px]">
              {/* CTA Text */}
              <div className="flex flex-row items-center justify-start w-full">
                <h2 className="w-full text-[19px] sm:text-[27px] md:text-[32px] lg:text-[38px] font-Inter font-normal leading-[26px] sm:leading-[36px] md:leading-[43px] lg:leading-[51px] text-center text-[#000000] font-[Inter]">
                  Start Shopping{'\n'}Today
                </h2>
              </div>

              {/* CTA Subtitle */}
              <div className="flex flex-row items-start justify-center w-auto p-[3px] sm:p-[6px]">
                <div className="flex flex-row items-center justify-center w-auto px-[27px] sm:px-[54px] mb-[8px] sm:mb-[16px]">
                  <p className="w-auto text-[8px] sm:text-[11px] md:text-[13px] lg:text-[15px] font-Inter font-light leading-[10px] sm:leading-[14px] md:leading-[17px] lg:leading-[20px] text-center text-[#000000] font-[Inter]">
                    Quality fashion and uniforms await you!
                  </p>
                </div>
              </div>

              {/* App Store Button */}
              <img 
                src="/images/img_component_1.png" 
                alt="Shop now button"
                className="w-[79px] sm:w-[158px] h-[25px] sm:h-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;