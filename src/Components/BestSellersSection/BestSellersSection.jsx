import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../Css/swiperstyle.css";
import style from "./BestSellersSection.module.css";

// import required modules
import { Navigation } from "swiper/modules";
const BestSellersSection = ({data,title}) => {

  return (
    <>
      <div className="w-full max-w-[1336px] lg:px-[16px] 2xl:px-0 mx-auto">
        <div className=" flex flex-col items-center justify-center py-[16px] lg:border-[1px] lg:border-[#e0e0e2] lg:rounded-[16px] bg-white">
          <div className="w-full px-[8px] lg:px-[20px] flex items-center justify-between lg:justify-center relative ">
            <div className=" flex items-center justify-center ">
              <div className=" me-[8px] flex ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.76 22.9703C14.59 22.9703 14.4299 22.9303 14.2999 22.8503C13.8499 22.5603 11.61 21.0103 11.2 18.6503C10.98 17.3403 11.3499 16.0403 12.3099 14.8003C15.0999 11.1903 15.4099 10.1403 15.4199 10.1003C15.4599 9.82029 15.6499 9.62029 15.9199 9.53029C16.1899 9.44029 16.4699 9.53029 16.6799 9.73029C18.9599 11.9403 20 14.2203 19.76 16.5103C19.38 20.1003 15.9 22.4503 15.21 22.8803C15.09 22.9303 14.92 22.9703 14.76 22.9703ZM16.3799 11.5603C15.9199 12.3703 15.0799 13.6703 13.4999 15.7003C12.7899 16.6103 12.5299 17.4903 12.6799 18.3803C12.9199 19.7703 14.14 20.8603 14.77 21.3303C15.76 20.6403 18 18.8203 18.26 16.3103C18.43 14.7703 17.7999 13.1803 16.3799 11.5603Z"
                    fill="#f9a825"
                  />
                  <path
                    d="M10.2801 22.9801C10.0201 22.9801 9.76008 22.9101 9.57008 22.8601C7.36008 22.2301 5.36009 20.2101 4.58009 17.8401C3.78009 15.4101 4.27004 12.8701 5.97004 10.6801C9.07004 6.62013 10.1001 3.35013 10.3401 2.45013C10.4501 2.02013 10.7701 1.69013 11.2101 1.56013C11.6601 1.44013 12.1501 1.57013 12.4901 1.91013C12.5201 1.93013 12.5401 1.96013 12.5601 1.99013C13.5001 3.25013 14.5101 5.50013 14.5101 8.04013C14.5101 9.78013 13.2901 11.3601 12.1101 12.8801C10.8601 14.5001 9.5701 16.1701 9.7101 17.9801C9.8401 19.3201 10.4201 20.3401 10.8101 21.0201C11.1401 21.5901 11.4501 22.1301 11.0601 22.6401C10.8501 22.9001 10.5701 22.9801 10.2801 22.9801ZM9.75007 22.2201H9.76008H9.75007ZM11.6501 3.31013C11.1901 4.82013 9.99005 7.88013 7.16005 11.6001C5.39005 13.8901 5.56008 16.0101 6.01008 17.3801C6.54008 18.9901 7.74009 20.3901 9.14009 21.0901C8.76009 20.3501 8.34004 19.3501 8.22004 18.1101C8.04004 15.7101 9.57007 13.7201 10.9301 11.9601C12.0001 10.5701 13.0101 9.26013 13.0101 8.03013C13.0101 6.13013 12.3301 4.39013 11.6501 3.31013ZM11.7901 2.82013C11.7901 2.82013 11.7901 2.83013 11.7901 2.82013C11.7901 2.82013 11.7901 2.83013 11.7901 2.82013Z"
                    fill="#f9a825"
                  />
                </svg>
              </div>
              <p className=" text-black font-bold leading-[2.1] text-[1.2rem]  ">
               {title}
              </p>
            </div>
            <Link className="">
              <p className="absolute left-0 top-0  pe-[16px] flex items-center justify-center text-[#19bfd3] font-bold ">مشاهده</p>
            </Link>
          </div>
          <div className="w-full mt-[20px] gap-4 gap-y-0 lg:gap-0 lg:mt-[28px] px-[8px] flex flex-row overflow-x-auto overflow-y-hidden">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={0}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper5 swiper5"
            >
              {data?.map((elem) => {
                return (
                  <SwiperSlide className="w-[314.5px] h-[298px] me-[20px]" key={elem.id}>
                    <div>
                      <Link className="flex w-[314.5px] h-[86px]">
                        <div className="flex">
                          <div className="w-[86px] h-[86px] me-[12PX] rounded-[8px]">
                            <img
                              src={elem.image1}
                              className="w-full object-contain"
                              alt=""
                            />
                          </div>
                          <span className="text-[#19bfd3] flex items-center me-[12px] font-bold text-[1.8rem]">
                            {elem.number1}
                          </span>
                          <div
                            className={`w-[197.59px] h-[86px] flex items-center justify-center grow ${style.bfr} relative`}
                          >
                            <p
                              className={`text-[.9rem] overflow-hidden ${style.displaytext} text-[#3f4064] text-right font-medium `}
                            >
                              {elem.text1}
                            </p>
                          </div>
                        </div>
                      </Link>
                      <Link className="flex w-[314.5px] h-[86px] mt-[20px]">
                        <div className="flex">
                          <div className="w-[86px] h-[86px] me-[12PX] rounded-[8px]">
                            <img
                              src={elem.image2}
                              className="w-full object-contain"
                              alt=""
                            />
                          </div>
                          <span className="text-[#19bfd3] flex items-center me-[12px] font-bold text-[1.8rem]">
                            {elem.number2}
                          </span>
                          <div
                            className={`w-[197.59px] h-[86px] flex items-center justify-center grow ${style.bfr} relative`}
                          >
                            <p
                              className={`text-[.9rem] overflow-hidden ${style.displaytext} text-[#3f4064] text-right font-medium `}
                            >
                              {elem.text2}
                            </p>
                          </div>
                        </div>
                      </Link>
                      <Link className="flex w-[314.5px] h-[86px] mt-[20px]">
                        <div className="flex">
                          <div className="w-[86px] h-[86px] me-[12PX] rounded-[8px]">
                            <img
                              src={elem.image3}
                              className="w-full object-contain"
                              alt=""
                            />
                          </div>
                          <span className="text-[#19bfd3] flex items-center me-[12px] font-bold text-[1.8rem]">
                            {elem.number3}
                          </span>
                          <div
                            className={`w-[197.59px] h-[86px] flex items-center justify-center grow ${style.bfr} relative`}
                          >
                            <p
                              className={`text-[.9rem] overflow-hidden ${style.displaytext} text-[#3f4064] text-right font-medium `}
                            >
                              {elem.text3}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellersSection;
