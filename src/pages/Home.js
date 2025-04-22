import React from 'react';
import { BaristaRecommends, HandcraftedCurations, PromotionBanner } from '../data';
import { Link } from 'react-router-dom';
import Coffee from "../assests/img/coffec.jpeg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper';

const Home = () => {
  return (
    <>
      {/* Rewards Banner */}
      <div className="bg-[#1e3932] w-100 sm:mt-0 sm:top-[220px] sm:mb-56 md:mt-1 md:top-[220px] md:mb-56 lg:top-[84px] relative lg:mb-20 md:pl-24 p-7 md:pr-28 flex flex-col items-center justify-between sm:flex-row lg:flex-row">
        <div>
          <span className="text-white md:text-2xl sm:text-base sm:font-s_bold md:font-Light text-center">Rewards are pouring! Sign up now.</span>
        </div>
        <div>
          <button className="text-white text-sm border-white border-2 p-1 px-3 rounded-3xl mt-2 md:mt-0 cursor-pointer">Know More</button>
        </div>
      </div>

      {/* Handcrafted Curations */}
      <div className="bg-white py-7 w-100">
        <div className="md:pl-24  md:pr-28">
          <div className="flex justify-start mb-4 mt-2 px-4">
            <h1 className="text-[#1e3932] font-bold text-2xl">Handcrafted Curations</h1>
          </div>
          <div className='flex justify-between items-center text-center gap-5 px-3 sm:px-0 sm:gap-0 sm:w-full flex-wrap'>
            {HandcraftedCurations.map((item, index) => (
              <Link to={""} className="flex justify-center items-center flex-col" key={index}>
                <img src={item.img} alt={item.title} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full hover:border-2 border-green-600 border-solid m-1" />
                <p className='font-s_bold text-sm whitespace-normal sm:whitespace-nowrap'>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Promotion Banner */}
      <div className='bg-white pt-6 pb-10'>
        <div className="h-80 py-4 relative">
          <div className='md:px-0 px-4 sm:px-1  md:pl-20 md:pr-28'>
            <div className='my-10 relative'>
              <div className="swiper-button-banner image-swiper-button-prev-banner absolute">
                <img src="https://www.starbucks.in/swiperbtnleft.22de7f3e8db5d523.svg" alt="prev" />
              </div>
              <div className="swiper-button-banner image-swiper-button-next-banner absolute">
                <img src="https://www.starbucks.in/swiperbtnright.cbc1d309941ecd98.svg" alt="next" />
              </div>
              <div className='flex gap-2 w-full sm:px-4'>
                <Swiper modules={[Navigation]} navigation={{ nextEl: ".image-swiper-button-next-banner", prevEl: ".image-swiper-button-prev-banner", disabledClass: "swiper-button-disabled" }} mousewheel={true}>
                  {PromotionBanner.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className='flex h-60 px-3'>
                        <div className='p-5 min-w-full shadow-lg rounded-lg flex sm:gap-7' style={{ backgroundImage: `url(${item.bg})` }}>
                          <img src={item.img} className="h-full scale-125 w-16 -m-2 sm:w-auto" />
                          <div className={`text-${item.id === "1" || item.id === "3" ? 'black' : 'white'} font-Regular max-w-2xl`}>
                            <p className='text-sm font-s_bold'>{item.title}</p>
                            <h2 className='font-semibold text-base sm:text-xl my-3'>{item.head}</h2>
                            <p className='font-light text-xs sm:text-base w-full'>{item.des}</p>
                            <p className={`md:mt-7 text-xs font-Light md:text-sm text-${item.id === "1" || item.id === "3" ? '[#757070]' : 'white'} sm:text-base`}>
                              {(item.id) === "2" ? "For" : "Starting From"}
                            </p>
                            <p>₹ <span className='text-lg'>{item.price}</span><span className='text-xs'>.{item.paise}</span></p>
                          </div>
                          <button className={`bg-${item.id === "1" || item.id === "3" ? 'green-800' : 'white'} text-${item.id === "1" || item.id === "3" ? 'white' : 'black'} text-sm w-full font-s_bold max-w-[100px] md:max-w-[220px] sm:max-w-[150px] py-2 sm:py-3 right-6 bottom-2 sm:right-9 sm:bottom-5 md:py-5 absolute rounded-full `}>{item.b_content}</button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barista Recommends */}
      <div className="h-90 py-8 relative">
        <div className='md:px-0 px-4 sm:px-3 md:pl-20 md:pr-28'>
          <div className='flex items-center w-full justify-between'>
            <h1 className='text-[#1e3932] text-2xl font-bold '>Barista Recommends</h1>
            <button className='text-green-800 font-s_bold hidden sm:block m-0'>View Menu</button>
          </div>
          <div className='my-10 relative'>
            <div className="swiper-button image-swiper-button-prev absolute">
              <img src="https://www.starbucks.in/swiperbtnleft.22de7f3e8db5d523.svg" alt="prev" />
            </div>
            <div className="swiper-button image-swiper-button-next absolute">
              <img src="https://www.starbucks.in/swiperbtnright.cbc1d309941ecd98.svg" alt="next" />
            </div>
            <div className='flex gap-2 md:gap-6 w-full sm:px-4'>
              <Swiper modules={[Navigation]} navigation={{ nextEl: ".image-swiper-button-next", prevEl: ".image-swiper-button-prev", disabledClass: "swiper-button-disabled" }} mousewheel={true}>
                {BaristaRecommends.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='w-full bg-white border-2 md:min-w-[200px] min-w-[240px] sm:min-w-[340px] py-4 px-5 box-border rounded-2xl'>
                      <div className='flex gap-4'>
                        <img src={item.img} alt={item} className='w-20 bg-red-500 h-20 rounded-md object-cover' />
                        <div>
                          <img src={item.type} alt={item} className='' />
                          <h3 className='font-s_bold mb-2'>{item.title}</h3>
                          <p className='text-xs text-gray-700'>PER SERVE({item.gram} ML)-{item.kcal} kcal</p>
                        </div>
                      </div>
                      <div className='flex justify-between font-s_bold mb-2 mt-4'>
                        <p>₹ <span>{item.price}</span><span className='text-xs'>.{item.paise}</span></p>
                        <button className='text-white bg-green-800 hover:bg-[#1e3932] py-1 px-5 rounded-full shadow-box'>Add Item</button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className='flex justify-center sm:hidden'>
          <button className='bg-black text-white font-s_bold px-3 py-1 rounded-full'>View Menu</button>
        </div>
      </div>

      {/* Coffee Culture Section */}
      <section className='h-[80vh] sm:h-auto lg:h-[70vh]'>
        <div className='p-6 px-4 sm:px-3 md:pl-24 md:pr-28 relative mt-3'>
          <div className='flex items-center w-full justify-between'>
            <h1 className='text-[#1e3932] text-2xl font-bold m-0'>Learn more about the world of coffee!</h1>
            <button className='text-green-800 font-s_bold hidden sm:block m-0'>Discover More</button>
          </div>
          <div className='h-96 w-full my-9 rounded-md overflow-hidden relative cursor-pointer'>
            <img src={Coffee} alt="coffe" className="h-full w-full object-cover" />
            <div className='h-full bg-black bg-opacity-40 hover:bg-opacity-60 hover:bg-gradient-hover w-full absolute top-0 transition-all p-8 flex flex-col justify-between'>
              <p className='bg-green-50 rounded-full w-24 text-xs p-1 font-s_bold text-green-600 text-center'>Coffee Culture</p>
              <div className='text-white'>
                <h2 className='text-3xl font-s_bold py-2'>Behind Every Starbucks Cup</h2>
                <p>Ever wondered how Starbucks ensures the quality of your cup of coffee? Know about the journey our beans take to be brewed perfectly.</p>
              </div>
              <button className='self-start bg-[#1e3932] text-white text-xs px-4 py-1 rounded-full'>Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

