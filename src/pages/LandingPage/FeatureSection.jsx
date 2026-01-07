const FeatureSection = () => {
  const handleSchoolUniformsClick = () => {
    window.open('https://school-eco-fe.vercel.app/', '_blank');
  };

  const handleFashionDressesClick = () => {
    window.open('https://mizaash-designs-fe.vercel.app/', '_blank');
  };
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1862px] mx-auto px-[23px] sm:px-[46px]">
        {/* Features Grid */}
        <div className="flex flex-col lg:flex-row items-start justify-start w-full mb-[16px] sm:mb-[32px]">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-[15px] sm:gap-[30px] px-[28px] sm:px-[56px]">
            
            {/* Feature 1 - Fashion Dresses */}
            <div 
              className="flex flex-col items-center justify-start w-full lg:w-[44%] h-auto bg-[#f4f5f5] rounded-[20px] sm:rounded-[40px] gap-[7px] sm:gap-[14px] cursor-pointer hover:bg-[#e8e9e9] transition-colors duration-200"
              onClick={handleFashionDressesClick}
            >
              <div className="flex flex-col items-center justify-center w-[44%] mt-[19px] sm:mt-[38px]">
                <img 
                  src="/public/Container.png" 
                  alt="Fashion dresses icon"
                  className="w-[23px] sm:w-[46px] h-[23px] sm:h-[46px] cursor-pointer"
                />
                <h3 className="w-auto text-[12px] sm:text-[17px] md:text-[20px] lg:text-[23px] font-Inter font-medium leading-[15px] sm:leading-[21px] md:leading-[25px] lg:leading-[29px] text-center text-[#000000] font-[Inter] mt-[7px] sm:mt-[14px]">
                  Trendy Fashion{'\n'}Dresses
                </h3>
              </div>
              
              {/* Mobile Screenshots Stack */}
              <div className="relative w-full flex items-end justify-center">
               
                <img 
                  src="/public/Container.png" 
                  alt="Fashion collection preview"
                  className="w-[310px] sm:w-[620px] h-[196px] sm:h-[392px] cursor-pointer"
                />
              </div>
              
              {/* Fashion Store Description */}
              <div className="w-full px-[20px] sm:px-[40px] pb-[20px] sm:pb-[40px]">
                <p className="text-[10px] sm:text-[14px] font-Inter font-light leading-[14px] sm:leading-[18px] text-center text-[#666666]">
                  Explore our curated collection of trendy dresses, casual wear, and formal attire. 
                  From everyday essentials to special occasion outfits.
                </p>
              </div>
            </div>

            {/* Feature 2 - School Uniforms */}
            <div 
              className="flex flex-col items-center justify-start w-full lg:w-[44%] h-auto bg-[#f4f5f5] rounded-[20px] sm:rounded-[40px] gap-[7px] sm:gap-[14px] cursor-pointer hover:bg-[#e8e9e9] transition-colors duration-200"
              onClick={handleSchoolUniformsClick}
            >
              <div className="flex flex-col items-center justify-start w-[46%] mt-[19px] sm:mt-[38px]">
                <img 
                  src="/public/test.png" 
                  alt="School uniforms icon"
                  className="w-[23px] sm:w-[46px] h-[23px] sm:h-[46px] cursor-pointer"
                />
                <div className="flex flex-row items-end justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-full mt-[7px] sm:mt-[14px]">
                    <h3 className="w-full text-[12px] sm:text-[17px] md:text-[20px] lg:text-[23px] font-Inter font-medium leading-[15px] sm:leading-[21px] md:leading-[25px] lg:leading-[29px] text-center text-[#000000] font-[Inter]">
                      Quality School{'\n'}Uniforms
                    </h3>
                  </div>
                </div>
              </div>

              {/* Mobile Screenshots Stack */}
              <div className="relative w-full flex items-center justify-center px-[58px] sm:px-[116px]">
                <img 
                  src="/public/test.png" 
                  alt="School uniform preview"
                  className="w-[178px] sm:w-[356px] h-[256px] sm:h-[512px] relative z-10 cursor-pointer"
                />
              </div>
              
              {/* School Uniform Description */}
              <div className="w-full px-[20px] sm:px-[40px] pb-[20px] sm:pb-[40px]">
                <p className="text-[10px] sm:text-[14px] font-Inter font-light leading-[14px] sm:leading-[18px] text-center text-[#666666]">
                  Premium school uniforms tailored for different institutions. 
                  Comfortable, durable, and compliant with school dress codes.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;