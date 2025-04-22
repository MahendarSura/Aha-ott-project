import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const PromotionBanner = ({ bannerData }) => {
  return (
    <div className="h-80 py-4 relative">
      <div className="swiper-button-banner swiper-button-banner-left absolute left-0 z-10">
        <img src="https://www.starbucks.in/swiperbtnleft.22de7f3e8db5d523.svg" alt="prev" />
      </div>
      <div className="swiper-button-banner swiper-button-banner-right absolute right-0 z-10">
        <img src="https://www.starbucks.in/swiperbtnright.cbc1d309941ecd98.svg" alt="next" />
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-banner-right',
          prevEl: '.swiper-button-banner-left',
          disabledClass: 'swiper-button-disabled',
        }}
      >
        {bannerData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-60 px-3">
              <div
                className="p-5 min-w-full shadow-lg rounded-lg flex sm:gap-7 relative"
                style={{ backgroundImage: `url(${item.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <img src={item.img} className="h-full scale-125 w-16 -m-2 sm:w-auto" loading="lazy" alt={item.title} />
                <div className={`text-${item.id === "1" || item.id === "3" ? 'black' : 'white'} font-Regular`}>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <h2 className="font-semibold text-base sm:text-xl my-3">{item.head}</h2>
                  <p className="font-light text-xs sm:text-base w-full">{item.des}</p>
                  <p className={`md:mt-7 text-xs md:text-sm text-${item.id === "1" || item.id === "3" ? '[#757070]' : 'white'} sm:text-base`}>
                    {item.id === "2" ? "For" : "Starting From"}
                  </p>
                  <p>
                    ₹ <span className="text-lg">{item.price}</span>
                    <span className="text-xs">.{item.paise}</span>
                  </p>
                </div>
                <button
                  className={`bg-${item.id === "1" || item.id === "3" ? 'green-800' : 'white'} text-${item.id === "1" || item.id === "3" ? 'white' : 'black'} text-sm w-full font-semibold max-w-[100px] md:max-w-[220px] sm:max-w-[150px] py-2 sm:py-3 right-6 bottom-2 sm:right-9 sm:bottom-5 md:py-5 absolute rounded-full`}
                >
                  {item.b_content}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

PromotionBanner.propTypes = {
  bannerData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Home = () => {
  const PromotionBannerData = [
    {
      id: "1",
      title: "Winter Special",
      head: "Hot Chocolate Drink",
      des: "Enjoy our hot chocolate with marshmallows this winter season.",
      price: "150",
      paise: "00",
      bg: "https://example.com/banner1.jpg",
      img: "https://example.com/product1.jpg",
      b_content: "Order Now"
    },
    {
      id: "2",
      title: "New Year Offer",
      head: "Coffee Combo",
      des: "Get a free dessert with your coffee combo for New Year's celebration.",
      price: "200",
      paise: "50",
      bg: "https://example.com/banner2.jpg",
      img: "https://example.com/product2.jpg",
      b_content: "Shop Now"
    },
    {
      id: "3",
      title: "Valentine's Day Special",
      head: "Romantic Gift Box",
      des: "Give the gift of love this Valentine's Day.",
      price: "500",
      paise: "99",
      bg: "https://example.com/banner3.jpg",
      img: "https://example.com/product3.jpg",
      b_content: "Buy Now"
    }
  ];

  return (
    <div>
      {/* Other sections of your homepage can go here */}

      <PromotionBanner bannerData={PromotionBannerData} />

      {/* More sections */}
    </div>
  );
};

export default Home;
