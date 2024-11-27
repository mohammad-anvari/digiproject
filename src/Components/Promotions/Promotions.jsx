// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./promotions.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../Css/swiperstyle.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import useFetchs from "../CustomHooks/useFetchs";
import { useEffect, useState } from "react";
const Promotions = () => {
  const [data] = useFetchs("http://localhost:30018/promotions");
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hour, setHour] = useState(7);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (minutes === 0) {
        setHour(hour - 1);
        setMinutes(59);
      } else if (hour < 0) {
        setSeconds(0);
        setMinutes(0);
        setHour(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <div className="w-full max-w-[1336px]  mx-auto">
        <div
          className={`w-full max-w-[1336px] flex flex-col lg:block items-center justify-center rounded-lg overflow-hidden ${style.bgpromotions}`}
        >
          <Link className="w-full lg:hidden  flex items-center justify-between flex-row px-[20px] pt-[20px] pb-[12px]">
            <div className=" flex items-center justify-center flex-row gap-[8px]">
              <div className="flex">
              <svg width="24" height="24" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.2086 66.6112C34.1483 66.6112 28.286 65.382 22.7825 62.9582C17.4681 60.6184 12.7435 57.282 8.73926 53.0422L13.1577 48.8699C20.2611 56.392 29.8679 60.5343 40.2086 60.5343C50.5493 60.5343 59.8545 56.5166 66.9249 49.2211L71.2893 53.4504C63.0632 61.9376 52.0246 66.6112 40.2086 66.6112Z" fill="#FAFAFA"/>
<path d="M53.1453 50.1636C49.6664 50.1636 46.3841 48.037 45.0874 44.5941C43.4169 40.1561 45.6682 35.1869 50.1046 33.5164C54.5426 31.846 59.5118 34.0973 61.1837 38.5352C62.8542 42.9732 60.6029 47.9424 56.1665 49.6128C55.1714 49.988 54.1509 50.1636 53.1453 50.1636ZM52.2463 39.2016C50.9451 39.6923 50.2832 41.1496 50.774 42.4524C51.2648 43.7551 52.7221 44.4155 54.0248 43.9247C55.326 43.4339 55.9879 41.9766 55.4971 40.6754C55.0063 39.3727 53.549 38.7108 52.2463 39.2016Z" fill="#FAFAFA"/>
<path d="M49.4717 13.3898L25.5627 48.4129L30.5815 51.8391L54.4906 16.816L49.4717 13.3898Z" fill="#FAFAFA"/>
<path d="M26.9147 32.271C25.7065 32.271 24.5029 32.0128 23.3712 31.501C21.2791 30.5525 19.6807 28.8476 18.8718 26.6969C18.0628 24.5477 18.1379 22.2109 19.0864 20.1188C20.0349 18.0266 21.7398 16.4282 23.8905 15.6193C26.0397 14.8103 28.3765 14.8854 30.4687 15.8339C32.5608 16.7824 34.1592 18.4874 34.9681 20.638C36.6386 25.076 34.3873 30.0452 29.9494 31.7172C28.9633 32.0879 27.9383 32.274 26.9147 32.274V32.271ZM26.9207 21.1423C26.6205 21.1423 26.3204 21.1963 26.0307 21.3059C25.4004 21.543 24.8991 22.0128 24.6214 22.6266C24.3438 23.2405 24.3213 23.9264 24.5584 24.5567C24.7955 25.187 25.2653 25.6883 25.8791 25.966C26.493 26.2436 27.1788 26.2661 27.8092 26.029C29.1119 25.5382 29.7723 24.0809 29.2815 22.7782C29.0444 22.1479 28.5746 21.6466 27.9608 21.3689C27.6291 21.2189 27.2749 21.1423 26.9207 21.1423Z" fill="#FAFAFA"/>
</svg>

              </div>
              <div className="flex">
              <svg width="109" height="20" viewBox="0 0 109 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M82.853 0.208681C82.9557 0.0770124 83.1135 0 83.2807 0H83.8223C83.935 0 83.9984 0.129335 83.9292 0.2181L80.4695 4.65618C80.3669 4.78785 80.2091 4.86487 80.0419 4.86487H79.5003C79.3875 4.86487 79.3241 4.73553 79.3933 4.64676L82.853 0.208681Z" fill="#FAFAFA"/>
<path d="M75.7014 0.540541C75.9943 0.540541 76.2102 0.734303 76.2396 1.01287L76.243 1.07861V2.69283C76.243 2.9839 76.048 3.19837 75.7675 3.22752L75.7014 3.23091H73.8055C73.5126 3.23091 73.2966 3.03724 73.2673 2.75859L73.2639 2.69283V1.07861C73.2639 0.787641 73.4589 0.573095 73.7393 0.543931L73.8055 0.540541H75.7014Z" fill="#FAFAFA"/>
<path d="M100.398 4.40535C100.095 4.40535 99.8459 4.17766 99.814 3.88552L99.8105 3.82199L99.8107 1.12392C99.8107 0.823186 100.04 0.575644 100.334 0.543975L100.398 0.540552H102.044C102.347 0.540552 102.596 0.768046 102.628 1.06035L102.631 1.12392L102.632 1.88542L104.524 1.88529C104.827 1.88529 105.076 2.11278 105.108 2.40508L105.112 2.46865V3.82199C105.112 4.1225 104.883 4.37023 104.588 4.40193L104.524 4.40535H100.398Z" fill="#FAFAFA"/>
<path d="M59.7187 4.86487C60.0117 4.86487 60.2276 5.05863 60.2569 5.3372L60.2603 5.40294V7.01716C60.2603 7.30823 60.0654 7.52269 59.7849 7.55184L59.7187 7.55523H55.3853C55.0923 7.55523 54.8764 7.36156 54.8471 7.08292L54.8437 7.01716V5.40294C54.8437 5.11197 55.0386 4.89742 55.3191 4.86825L55.3853 4.86487H59.7187Z" fill="#FAFAFA"/>
<path d="M16.3771 17.2307C16.6701 17.2307 16.886 17.4244 16.9153 17.703L16.9187 17.7687V19.3829C16.9187 19.674 16.7238 19.8885 16.4433 19.9176L16.3771 19.921H12.0437C11.7507 19.921 11.5348 19.7273 11.5055 19.4487L11.5021 19.3829V17.7687C11.5021 17.4778 11.697 17.2632 11.9775 17.234L12.0437 17.2307H16.3771Z" fill="#FAFAFA"/>
<path d="M8.25154 2.16216C8.54446 2.16216 8.76043 2.35592 8.78979 2.63449L8.79321 2.70024V4.31445C8.79321 4.60553 8.59815 4.81999 8.31772 4.84914L8.25154 4.85253H6.62602C6.33311 4.85253 6.11713 4.65886 6.08777 4.38021L6.08436 4.31445V2.70024C6.08436 2.40926 6.27941 2.19472 6.55984 2.16555L6.62602 2.16216H8.25154Z" fill="#FAFAFA"/>
<path d="M37.7739 2.63449C37.7446 2.35592 37.5286 2.16216 37.2357 2.16216H35.3398L35.2737 2.16555C34.9932 2.19472 34.7982 2.40926 34.7982 2.70024V4.31445L34.8016 4.38021C34.8309 4.65886 35.0469 4.85253 35.3398 4.85253H37.2357L37.3018 4.84914C37.5823 4.81999 37.7773 4.60553 37.7773 4.31445V2.70024L37.7739 2.63449Z" fill="#FAFAFA"/>
<path d="M24.2277 0C24.0606 0 23.9027 0.0770124 23.8001 0.208681L20.3404 4.64676C20.2712 4.73553 20.3346 4.86487 20.4473 4.86487H20.9889C21.1561 4.86487 21.314 4.78785 21.4166 4.65618L24.8763 0.2181C24.9455 0.129335 24.8821 0 24.7694 0H24.2277Z" fill="#FAFAFA"/>
<path fillRule="evenodd" clipRule="evenodd" d="M79.2233 11.3514C79.2233 11.9248 79.1115 12.4722 78.9083 12.973H86.8058C88.356 12.973 89.5141 11.8172 89.5141 10.2703V9.72973C89.5141 8.18276 88.356 7.02703 86.8058 7.02703H80.5766C80.0891 7.02703 79.9952 6.59111 80.3058 6.21622L84.8676 0.402521C85.0789 0.147612 85.3932 0 85.7246 0H87.8055C88.2241 0 88.4535 0.486487 88.1867 0.808374L85.4516 4.32432H86.8058C89.9118 4.32432 92.2225 6.63009 92.2225 9.72973V10.2703C92.2225 11.2708 91.9817 12.1887 91.5511 12.973H94.3721C95.2697 12.973 95.9974 12.2469 95.9974 11.3514V8.10811C95.9974 7.80958 96.2399 7.56757 96.5391 7.56757H98.1644C98.4637 7.56757 98.7062 7.80958 98.7062 8.10811V11.3514C98.7062 11.9248 98.5943 12.4722 98.3912 12.973H100.324C101.221 12.973 101.949 12.2469 101.949 11.3514V8.10811C101.949 7.80958 102.192 7.56757 102.491 7.56757H104.116C104.415 7.56757 104.658 7.80958 104.658 8.10811V11.3514C104.658 11.9248 104.546 12.4722 104.343 12.973H104.666C105.563 12.973 106.291 12.2469 106.291 11.3514V8.10811C106.291 7.80958 106.534 7.56757 106.833 7.56757H108.458C108.757 7.56757 109 7.80958 109 8.10811V11.3514C109 13.7396 107.059 15.6757 104.666 15.6757H104.145C103.967 15.6757 103.801 15.5887 103.699 15.4428L103.141 14.6378C102.383 15.2848 101.399 15.6757 100.324 15.6757H98.1774C97.9996 15.6757 97.8332 15.5887 97.732 15.4428L97.1792 14.6462C96.423 15.2882 95.4429 15.6757 94.3721 15.6757H91.1344C90.9566 15.6757 90.7902 15.5887 90.689 15.4428L90.1176 14.6194C89.2164 15.289 88.0778 15.6757 86.8058 15.6757H66.7548C66.577 15.6757 66.4105 15.5887 66.3093 15.4428L65.7565 14.6462C65.0003 15.2882 64.0201 15.6757 62.9493 15.6757H52.1349C49.7412 15.6757 47.8007 13.7396 47.8007 11.3514V8.10811C47.8007 7.80958 48.0433 7.56757 48.3425 7.56757H49.9678C50.267 7.56757 50.5096 7.80958 50.5096 8.10811V11.3514C50.5096 12.2469 51.2373 12.973 52.1349 12.973H62.9493C63.847 12.973 64.5746 12.2469 64.5746 11.3514V8.10811C64.5746 7.80958 64.8172 7.56757 65.1164 7.56757H66.7417C67.0409 7.56757 67.2835 7.80958 67.2835 8.10811V11.3514C67.2835 11.9248 67.1716 12.4722 66.9684 12.973H70.87C70.6669 12.4722 70.555 11.9248 70.555 11.3514V9.72973C70.555 7.34147 72.4955 5.40541 74.8892 5.40541C77.2829 5.40541 79.2233 7.34147 79.2233 9.72973V11.3514ZM76.5145 9.72973V11.3514C76.5145 12.2469 75.7868 12.973 74.8892 12.973C73.9915 12.973 73.2639 12.2469 73.2639 11.3514V9.72973C73.2639 8.83413 73.9915 8.10811 74.8892 8.10811C75.7868 8.10811 76.5145 8.83413 76.5145 9.72973Z" fill="#FAFAFA"/>
<path d="M33.1695 10.2703C33.1695 11.2708 32.9287 12.1887 32.4982 12.973H36.9444C37.842 12.973 38.5697 12.2469 38.5697 11.3514V8.10811C38.5697 7.80958 38.8123 7.56757 39.1115 7.56757H40.7368C41.036 7.56757 41.2786 7.80958 41.2786 8.10811V11.3514C41.2786 13.7396 39.3381 15.6757 36.9444 15.6757H33.165C32.9872 15.6757 32.8208 15.5887 32.7196 15.4428L31.7347 14.0234C30.763 15.0545 29.365 15.6757 27.7529 15.6757H18.4032L17.5727 14.6173C16.812 15.2766 15.8186 15.6757 14.7318 15.6757H9.86888C9.69111 15.6757 9.52464 15.5887 9.42345 15.4428L8.82852 14.5854V14.5946C8.82852 17.6942 6.51785 20 3.41186 20H2.85843C2.52527 20 2.21063 19.8471 2.00526 19.5853L0.846109 18.1081C0.53551 17.7332 0.629443 17.2973 1.11694 17.2973H3.41186C4.96206 17.2973 6.12019 16.1416 6.12019 14.5946L6.11967 8.10811C6.11967 7.80958 6.36223 7.56757 6.66144 7.56757H8.28675C8.58596 7.56757 8.82852 7.80958 8.82852 8.10811V12.973H14.7318C15.6295 12.973 16.3572 12.2469 16.3572 11.3514V8.10811C16.3572 7.80958 16.5997 7.56757 16.8989 7.56757H18.5242C18.8234 7.56757 19.066 7.80958 19.066 8.10811V11.3514C19.066 11.9248 18.9541 12.4722 18.751 12.973H27.7529C29.303 12.973 30.4612 11.8172 30.4612 10.2703V9.72973C30.4612 8.18276 29.303 7.02703 27.7529 7.02703H21.5237C21.0362 7.02703 20.9423 6.59111 21.2529 6.21622L25.8147 0.402521C26.026 0.147612 26.3402 0 26.6716 0H28.7525C29.1712 0 29.4005 0.486487 29.1338 0.808374L26.3987 4.32432H27.7529C30.8588 4.32432 33.1695 6.63009 33.1695 9.72973V10.2703Z" fill="#FAFAFA"/>
<path d="M42.9247 2.16216C42.9247 1.86363 43.1673 1.62162 43.4665 1.62162H45.0918C45.391 1.62162 45.6336 1.86363 45.6336 2.16216V15.1351C45.6336 15.4337 45.391 15.6757 45.0918 15.6757H43.4665C43.1673 15.6757 42.9247 15.4337 42.9247 15.1351V2.16216Z" fill="#FAFAFA"/>
</svg>

              </div>
              <div className="flex">
              <div className="w-[94px] h-[24px] flex items-center">
                      <div className="w-[26px] h-[26px] rounded-[4px] bg-white flex items-center justify-center">
                        <div className="flex items-center justify-center font-bold text-[.8rem]">
                          {seconds}
                        </div>
                      </div>
                      <p className="text-white font-bold">:</p>
                      <div className="w-[26px] h-[26px] rounded-[4px] bg-white flex items-center justify-center">
                        <div className="flex items-center justify-center font-bold text-[.8rem]">
                          {minutes}
                        </div>
                      </div>
                      <p className="text-white font-bold ">:</p>
                      <div className="w-[26px] h-[26px] rounded-[4px] bg-white flex items-center justify-center">
                        <div className="flex items-center justify-center font-bold text-[.8rem]">
                          {hour}
                        </div>
                      </div>
                    </div>
              </div>
            </div>
            <div className="flex items-center justify-center font-bold text-[.8rem] text-white">
              <Link to={"/Incredible-offers"}>مشاهده همه</Link>
              <div className="flex">
              <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 20.9203C14.81 20.9203 14.62 20.8503 14.47 20.7003L7.95003 14.1803C6.89003 13.1203 6.89003 11.3803 7.95003 10.3203L14.47 3.80026C14.76 3.51026 15.24 3.51026 15.53 3.80026C15.82 4.09026 15.82 4.57026 15.53 4.86026L9.01003 11.3803C8.53003 11.8603 8.53003 12.6403 9.01003 13.1203L15.53 19.6403C15.82 19.9303 15.82 20.4103 15.53 20.7003C15.38 20.8403 15.19 20.9203 15 20.9203Z"
                              fill="#fafafa"
                            />
                          </svg>
              </div>
            </div>
          </Link>
          <div className="w-full max-w-[1336px] h-[294.04px] ps-[20px] lg:ps-0 pb-[20px] lg:py-[20px] flex rounded-[16px] ">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={4}
              modules={[Pagination, Navigation]}
              navigation={true}
              className="mySwiper3 swiper3"
            >
              <SwiperSlide className={`w-[166px] h-[254.04px] me-[2px] dspl  `}>
                <Link className="w-[126px] h-[254.04px] mx-[20px] px-[16px] flex flex-col justify-around  ">
                  <div className="w-[94px] h-[216px] flex flex-col justify-around items-center">
                    <div className="w-[88px] h-[88px] ">
                      <img
                        src="../../../public/Image/promotions/Amazings.svg"
                        alt=""
                      />
                    </div>
                    <div className="w-[94px] h-[24px] flex items-center">
                      <div className="w-[26px] h-[26px] rounded-[4px] bg-white flex items-center justify-center">
                        <div className="flex items-center justify-center font-bold text-[.8rem]">
                          {seconds}
                        </div>
                      </div>
                      <p className="text-white font-bold">:</p>
                      <div className="w-[26px] h-[26px] rounded-[4px] bg-white flex items-center justify-center">
                        <div className="flex items-center justify-center font-bold text-[.8rem]">
                          {minutes}
                        </div>
                      </div>
                      <p className="text-white font-bold ">:</p>
                      <div className="w-[26px] h-[26px] rounded-[4px] bg-white flex items-center justify-center">
                        <div className="flex items-center justify-center font-bold text-[.8rem]">
                          {hour}
                        </div>
                      </div>
                    </div>
                    <div className="w-[80px] h-[80px]">
                      <img
                        src="../../../public/Image/promotions/Amazing.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center font-bold text-[.8rem] text-white">
              <Link to={"/Incredible-offers"}>مشاهده همه</Link>
              <div className="flex">
              <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 20.9203C14.81 20.9203 14.62 20.8503 14.47 20.7003L7.95003 14.1803C6.89003 13.1203 6.89003 11.3803 7.95003 10.3203L14.47 3.80026C14.76 3.51026 15.24 3.51026 15.53 3.80026C15.82 4.09026 15.82 4.57026 15.53 4.86026L9.01003 11.3803C8.53003 11.8603 8.53003 12.6403 9.01003 13.1203L15.53 19.6403C15.82 19.9303 15.82 20.4103 15.53 20.7003C15.38 20.8403 15.19 20.9203 15 20.9203Z"
                              fill="#fafafa"
                            />
                          </svg>
              </div>
            </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="w-[162px] h-[254.04px] me-[2px]">
                <Link className="w-[160px] h-[254.04px] p-[8px] me-[2px] rounded-r-md bg-white ">
                  <div className="w-[144px] h-[238.04px] flex flex-col items-stretch justify-start">
                    <div className="w-[144px] h-[238.04px] flex grow flex-col gap-2">
                      <div className="w-[144px] h-[132px] flex items-stretch flex-col">
                        <div className="w-[132px] h-[132px] flex items-start mx-auto">
                          {" "}
                          <img
                            src="../../../public/Image/promotions/mashineslah.webp"
                            className="rounded-md"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="w-[144px] h-[98.04px] flex flex-col grow items-stretch justify-start gap-2">
                        <div className="w-[144px] h-[40px]">
                          <h3 className="!leading-[20px] text-[#62666d]  h-[40px] text-[.8rem]">
                            ماشین اصلاح موی صورت جی دبلیو مدل GW-9865
                          </h3>
                        </div>
                        <div className="w-[144px] h-[45px] flex flex-col items-stretch justify-between">
                          <div className="w-[144px] h-[24px] flex items-center justify-between">
                            <div className="w-[34px] h-[20px] px-[4px] text-white rounded-[16px] flex items-center justify-center bg-[#d32f2f]">
                              <span className="text-[.7rem] font-bold">
                                55%
                              </span>
                            </div>
                            <div className="w-[110px] h-[24px] flex items-center justify-end grow gap-1 leading-[18px] text-[14px]">
                              <span className="w-[49px] h-[24px] text-[#3f4064] font-bold">
                                339,000
                              </span>
                              <div className="w-[16px] h-[16px] "></div>
                            </div>
                          </div>
                          <div className="w-[144px] h-[21px] pe-[20px] flex items-center justify-between">
                            <p className="ms-[83.612px] text-[13px] font-[400] text-[#c0c2c5] line-through leading-[21px]">
                              750,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </Link>
              </SwiperSlide>
              {data?.map((item) => {
                return (
                  <SwiperSlide
                    className="w-[162px] h-[254.04px] me-[2px]"
                    key={item.id}
                  >
                    <Link className="w-[160px] h-[254.04px] p-[8px] me-[2px] bg-white ">
                      <div className="w-[144px] h-[238.04px] flex flex-col items-stretch justify-start">
                        <div className="w-[144px] h-[238.04px] flex grow flex-col gap-2">
                          <div className="w-[144px] h-[132px] flex items-stretch flex-col">
                            <div className="w-[132px] h-[132px] flex items-start mx-auto">
                              {" "}
                              <img
                                src={item.image}
                                className="rounded-md"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="w-[144px] h-[98.04px] flex flex-col grow items-stretch justify-start gap-2">
                            <div className="w-[144px] h-[40px]">
                              <h3 className="!leading-[20px] text-[#62666d]  h-[40px] text-[.8rem] text-ellipsis-2 box txtdisplay line-clamp-2">
                                {item.text}
                              </h3>
                            </div>
                            <div className="w-[144px] h-[45px] flex flex-col items-stretch justify-between">
                              <div className="w-[144px] h-[24px] flex items-center justify-between">
                                <div className="w-[34px] h-[20px] px-[4px] text-white rounded-[16px] flex items-center justify-center bg-[#d32f2f]">
                                  <span className="text-[.7rem] font-bold">
                                    {item.off}
                                  </span>
                                </div>
                                <div className="w-[110px] h-[24px] flex items-center justify-end grow gap-1 leading-[18px] text-[14px]">
                                  <span className="w-[49px] h-[24px] text-[#3f4064] font-bold">
                                    {item.price}
                                  </span>
                                  <div className="w-[16px] h-[16px] "></div>
                                </div>
                              </div>
                              <div className="w-[144px] h-[21px] pe-[20px] flex items-center justify-between">
                                <p className="ms-[83.612px] text-[13px] font-[400] text-[#c0c2c5] line-through leading-[21px] ">
                                  {item.lastPrice}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
              <SwiperSlide className="w-[162px] h-[254.04px] me-[2px]">
                <Link className="w-[160px] h-[254.04px] p-[8px] me-[2px] rounded-r-md bg-white ">
                  <div className="w-[144px] h-[238.04px] flex flex-col items-stretch justify-start">
                    <div className="w-[144px] h-[238.04px] flex grow flex-col gap-2">
                      <div className="w-[144px] h-[132px] flex items-stretch flex-col">
                        <div className="w-[132px] h-[132px] flex items-start mx-auto">
                          {" "}
                          <img
                            src="../../../public/Image/promotions/mashineslah.webp"
                            className="rounded-md"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="w-[144px] h-[98.04px] flex flex-col grow items-stretch justify-start gap-2">
                        <div className="w-[144px] h-[40px]">
                          <h3 className="!leading-[20px] text-[#62666d]  h-[40px] text-[.8rem]">
                            ماشین اصلاح موی صورت جی دبلیو مدل GW-9865
                          </h3>
                        </div>
                        <div className="w-[144px] h-[45px] flex flex-col items-stretch justify-between">
                          <div className="w-[144px] h-[24px] flex items-center justify-between">
                            <div className="w-[34px] h-[20px] px-[4px] text-white rounded-[16px] flex items-center justify-center bg-[#d32f2f]">
                              <span className="text-[.7rem] font-bold">
                                55%
                              </span>
                            </div>
                            <div className="w-[110px] h-[24px] flex items-center justify-end grow gap-1 leading-[18px] text-[14px]">
                              <span className="w-[49px] h-[24px] text-[#3f4064] font-bold">
                                339,000
                              </span>
                              <div className="w-[16px] h-[16px] "></div>
                            </div>
                          </div>
                          <div className="w-[144px] h-[21px] pe-[20px] flex items-center justify-between">
                            <p className="ms-[83.612px] text-[13px] font-[400] text-[#c0c2c5] line-through leading-[21px]">
                              750,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotions;
