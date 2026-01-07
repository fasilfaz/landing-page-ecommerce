import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="w-full h-screen relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ 
        backgroundImage: "linear-gradient(135deg, rgba(254, 211, 26, 0.8) 0%, rgba(255, 165, 0, 0.6) 25%, rgba(255, 255, 255, 0.4) 50%, rgba(242, 241, 240, 0.7) 75%, rgba(254, 211, 26, 0.5) 100%), url('/images/img_0x0.png')",
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="w-full max-w-[1862px] mx-auto px-[16px] sm:px-[32px] lg:px-[46px] py-[16px] sm:py-[32px] lg:py-[46px] relative h-full flex items-center justify-center">
        {/* Header Section */}
        <div className="flex flex-col items-center w-full mb-[7px] sm:mb-[14px] shadow-[0px_0px_200px_#00000019]">
          <div className="flex flex-col items-center w-full sm:w-[88%]">
            {/* Top Navigation Bar */}
            {/* <div className="flex flex-row items-center justify-start w-full sm:w-[34%] bg-[#f2f1f0] rounded-[8px] sm:rounded-[16px] p-[4px] sm:p-[8px] pl-[45px] sm:pl-[90px] pr-[28px] sm:pr-[56px] mb-[25px] sm:mb-[0px] shadow-[0px_14px_44px_#0000000c]">
              <Button
                text="Visit Our Stores"
                text_font_size="13"
                text_font_family="Inter"
                text_font_weight="500"
                text_line_height="17px"
                text_text_align="center"
                text_color="#000000"
                fill_background_color="#fed31a"
                border_border_radius="12px"
                padding="t=14px,r=22px,b=14px,l=22px"
                layout_width="auto"
                position=""
                variant=""
                size=""
                className=""
                onClick={() => {}}
              />
            </div> */}

            {/* Main Hero Content */}
            <div className="flex flex-col items-center justify-center w-full gap-[12px] sm:gap-[18px] px-[16px] sm:px-[12px]">
              {/* Main Heading */}
              <div className="flex flex-row items-center justify-center w-full">
                <h1 className="w-full text-[28px] sm:text-[40px] md:text-[50px] lg:text-[66px] font-Inter font-medium leading-[32px] sm:leading-[44px] md:leading-[54px] lg:leading-[69px] text-center text-[#000000] font-[Inter] max-w-[600px]">
                  <span>Fashion </span>
                  <span className="font-light italic">&amp;</span>
                  <span> School Uniforms{'\n'}Your Style, Our Quality</span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="w-full max-w-[500px] text-[14px] sm:text-[18px] md:text-[21px] lg:text-[25px] font-Inter font-light leading-[20px] sm:leading-[26px] md:leading-[32px] lg:leading-[37px] text-center text-[#000000] font-[Inter] px-[8px]">
                Discover premium fashion dresses and quality school uniforms{'\n'}tailored for every style and institution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;