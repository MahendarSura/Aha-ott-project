import React, { useState } from "react";

// --- Reusable Components ---

const NAV_ITEMS = ["Home", "Movies", "Shows", "Watch Free", "Offers", "My Aha"];

const Navbar = ({ current, setCurrent }) => (
  <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white sticky top-0 z-50">
    {/* Logo left */}
    <div className="text-3xl font-bold text-orange-500 cursor-pointer">Aha</div>

    {/* Navigation middle */}
    <ul className="hidden md:flex space-x-8 font-semibold text-gray-300">
      {NAV_ITEMS.map((item) => (
        <li
          key={item}
          className={`cursor-pointer hover:text-white ${
            current === item ? "text-white border-b-2 border-orange-500" : ""
          }`}
          onClick={() => setCurrent(item)}
        >
          {item}
        </li>
      ))}
    </ul>

    {/* Right side */}
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search"
        className="hidden md:block rounded px-3 py-1 text-black"
      />
      <select className="bg-gray-700 text-white rounded px-2 py-1">
        <option>Telugu</option>
        <option>English</option>
      </select>
      <button className="bg-orange-500 px-4 py-1 rounded hover:bg-orange-600">
        Subscribe
      </button>
      <button className="border border-orange-500 px-4 py-1 rounded hover:bg-orange-500 hover:text-white">
        Sign In
      </button>
    </div>
  </nav>
);

const MovieCard = ({ title, img, isPremium, isAgeRated, isSmall }) => (
  <div className="flex-shrink-0 w-36 cursor-pointer transform transition-transform duration-200 hover:scale-105 relative">
    <div className={`rounded-lg overflow-hidden ${isSmall ? "h-48" : "h-60"}`}>
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
    {isAgeRated && (
      <span className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded font-bold">
        A
      </span>
    )}
    {isPremium && (
      <span className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-yellow-400 text-xs px-2 py-1 rounded font-bold">
        Premium
      </span>
    )}
    <p className="text-sm mt-2 text-white font-semibold text-center">{title}</p>
  </div>
);

const CardCarousel = ({ title, items, isSmall = false, showAll = true }) => (
  <section className="mb-10">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {showAll && (
        <a href="#" className="text-orange-500 hover:underline">
          See all
        </a>
      )}
    </div>
    {/* Updated to a flex-wrap grid for vertical display */}
    <div className="flex flex-wrap gap-4">
      {items.map((item, index) => (
        <MovieCard
          key={index}
          title={item.title}
          img={item.img}
          isPremium={item.isPremium}
          isAgeRated={item.isAgeRated}
          isSmall={isSmall}
        />
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
      <div>
        <h4 className="text-white font-bold mb-4">Popular Telugu Movies</h4>
        <ul className="space-y-2">
          <li>Maruthi Nagar Subrahmanyam</li>
          <li>35 Chinna Katha Kadhu</li>
          <li>Premalu</li>
          <li>Masooda</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Must Watch Movies</h4>
        <ul className="space-y-2">
          <li>Tantra</li>
          <li>Prasanna Vadanam</li>
          <li>Balu Gani Talkies</li>
          <li>Prathinidhi 2</li>
          <li>Gorre Puranam</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Aha Originals</h4>
        <ul className="space-y-2">
          <li>Arthamainda Arun Kumar</li>
          <li>Unstoppable</li>
          <li>Telugu Indian Idol</li>
          <li>Bhamakalapam</li>
          <li>The Baker & The Beauty</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Genres</h4>
        <ul className="space-y-2">
          <li>Telugu Drama Movies</li>
          <li>Telugu Comedy Movies</li>
          <li>Telugu Action Movies</li>
          <li>Telugu Romance Movies</li>
          <li>Telugu Thriller Movies</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto text-center space-y-4">
      <div className="flex justify-center space-x-6 text-2xl mb-4">
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p className="flex justify-center space-x-4">
        <span>Connect with us</span>
        <span>Download aha mobile app</span>
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" aria-label="Android app">
          <i className="fab fa-android text-3xl"></i>
        </a>
        <a href="#" aria-label="iOS app">
          <i className="fab fa-apple text-3xl"></i>
        </a>
      </div>
      <p>Contact us: support@aha.video</p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:underline">
          View Plans
        </a>
        <a href="#" className="hover:underline">
          About Us
        </a>
        <a href="#" className="hover:underline">
          FAQs / Help
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
        <a href="#" className="hover:underline">
          Grievance Redressal
        </a>
        <a href="#" className="hover:underline">
          Blog
        </a>
      </div>
      <p className="mt-4">
        © Copyright 2025 Arha Media and Broadcasting Pvt Ltd. All rights
        reserved.
      </p>
    </div>
  </footer>
);

// --- Page Content Components ---

// A simple function to generate a unique placeholder image URL
const getPlaceholderImage = () => `https://picsum.photos/300/450?random=${Math.random()}`;
const getSmallPlaceholderImage = () => `https://picsum.photos/300/400?random=${Math.random()}`;

const HomeContent = () => {
  const newReleases = [
    { title: "Sarkaar 5 Ep 12", img: getPlaceholderImage(), isPremium: true },
    { title: "Kothapallilo Okappudu", img: getPlaceholderImage(), isPremium: true },
    { title: "PA... PA... (O Naanna)", img: getPlaceholderImage(), isPremium: true },
    { title: "Movie Review", img: getPlaceholderImage(), isPremium: true },
    { title: "Network", img: getPlaceholderImage(), isPremium: true },
    { title: "Virgin Boys", img: getPlaceholderImage(), isPremium: true },
    { title: "Vijayanand", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Kaliyugam 2064", img: getPlaceholderImage(), isPremium: true },
    { title: "Saree", img: getPlaceholderImage(), isPremium: true },
    { title: "Saradhi", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Sri Sri Sri Raja Vaaru", img: getPlaceholderImage(), isPremium: true },
    { title: "Fusion Meets Medly", img: getPlaceholderImage(), isPremium: true },
    { title: "Masti's (The Movie)", img: getPlaceholderImage(), isPremium: true },
    { title: "23 (Iravai Moodu)", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Ghatikachalam", img: getPlaceholderImage(), isPremium: true },
    { title: "Oka Yamudi Premakatha", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Karthika Missing Case", img: getPlaceholderImage(), isPremium: true },
    { title: "SIN(The Movie)", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Arjun S/o Vyjayanthi", img: getPlaceholderImage(), isPremium: true },
    { title: "Demon", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
  ];

  const ganeshaFamilyTime = [
    { title: "Brahma-Anandam", img: getPlaceholderImage(), isPremium: true },
    { title: "Premalu", img: getPlaceholderImage(), isPremium: true },
    { title: "Vidya Vasula Aham", img: getPlaceholderImage(), isPremium: true },
    { title: "Samajavaragamana", img: getPlaceholderImage(), isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: getPlaceholderImage(), isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: getPlaceholderImage(), isPremium: true },
    { title: "DJ Tillu", img: getPlaceholderImage(), isPremium: true },
    { title: "Maruthi Nagar Subrahmanyam", img: getPlaceholderImage(), isPremium: true },
    { title: "Janaka Ayithe Ganaka", img: getPlaceholderImage(), isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: getPlaceholderImage(), isPremium: true },
  ];

  const vereLevelOffice = [
    { title: "Movie Review", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "The Saree Boss", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "The Office Love Stories", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Cow dung cake sale", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Boycott juniors", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "The Potluck", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Training Cancelled, Potluck Approved.", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "The Corporate Bachelor", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Dreams on Hold", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Nisha’s Last Note", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Captaincy War: Satya vs Nikhil", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Ex-tra' Pressure at the Top", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Corporate IPL – Ishq, Pressure, Layoff", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Motivation or Termination?", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Mission: Client Possible", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "3 Problems, 0 Solutions", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Love, Laughter & Marriage Application", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Cold Wars & Cake Fights", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Making girlfriend in office", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "One mail can change your job", img: getSmallPlaceholderImage(), isPremium: true },
  ];

  const awardWinningMovies = [
    { title: "Razakar", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Baby", img: getPlaceholderImage(), isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: getPlaceholderImage(), isPremium: true },
    { title: "Colour Photo", img: getPlaceholderImage(), isPremium: true },
    { title: "Pottel", img: getPlaceholderImage(), isPremium: true },
    { title: "Ambajipeta Marriage Band", img: getPlaceholderImage(), isPremium: true },
    { title: "Raju Yadav", img: getPlaceholderImage(), isPremium: true },
    { title: "Mercy Killing", img: getPlaceholderImage(), isPremium: true },
    { title: "Polimera 2", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Month of Madhu", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
  ];

  const ahaOriginals = [
    { title: "SARKAAR", img: getPlaceholderImage(), isPremium: true },
    { title: "Vere Level Office", img: getPlaceholderImage(), isPremium: true },
    { title: "Masti's (The Movie)", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "SIN(The Movie)", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Telugu Indian Idol", img: getPlaceholderImage(), isPremium: true },
    { title: "Dance Ikon", img: getPlaceholderImage(), isPremium: true },
    { title: "Hometown", img: getPlaceholderImage(), isPremium: true },
    { title: "Chef mantra", img: getPlaceholderImage(), isPremium: true },
    { title: "Emoji", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Unstoppable", img: getPlaceholderImage(), isPremium: true },
    { title: "Bhamakalapam 2", img: getPlaceholderImage(), isPremium: true },
    { title: "My Dear Donga", img: getPlaceholderImage(), isPremium: true },
    { title: "Arthamainda Arun Kumar", img: getPlaceholderImage(), isPremium: true },
    { title: "Bhamakalapam", img: getPlaceholderImage(), isPremium: true },
    { title: "Sathi Gani Rendu Ekaralu", img: getPlaceholderImage(), isPremium: true },
    { title: "Balu Gani Talkies", img: getPlaceholderImage(), isPremium: true },
    { title: "Mix Up", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Super Over", img: getPlaceholderImage(), isPremium: true },
    { title: "Senapathi", img: getPlaceholderImage(), isPremium: true },
  ];

  const recentlyAdded = [
    { title: "Kothapallilo Okappudu", img: getPlaceholderImage(), isPremium: true },
    { title: "Sarkaar 5 Ep 12", img: getPlaceholderImage(), isPremium: true },
    { title: "The Saree Boss", img: getPlaceholderImage(), isPremium: true },
    { title: "Vijayanand", img: getPlaceholderImage(), isPremium: true },
    { title: "Network", img: getPlaceholderImage(), isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: getPlaceholderImage(), isPremium: true },
    { title: "Jolly O Gymkhana", img: getPlaceholderImage(), isPremium: true },
    { title: "Aparadhi", img: getPlaceholderImage(), isPremium: true },
    { title: "The Devil's Chair", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Rekhachithram", img: getPlaceholderImage(), isPremium: true },
    { title: "Marco", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Hometown", img: getPlaceholderImage(), isPremium: true },
    { title: "Veeraaraju 1991", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Brahma-Anandam", img: getPlaceholderImage(), isPremium: true },
    { title: "Naandhi", img: getPlaceholderImage(), isPremium: true },
    { title: "Pandavulu Pandavulu Tummeda", img: getPlaceholderImage(), isPremium: false },
    { title: "Chef Mantra Project K Episode 4", img: getPlaceholderImage(), isPremium: true },
    { title: "Vere Level Office", img: getPlaceholderImage(), isPremium: true },
    { title: "Vivekanandan Viral", img: getPlaceholderImage(), isPremium: true },
    { title: "Kalpana 3", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
  ];

  const evergreens = [
    { title: "Sagara Sangamam", img: getPlaceholderImage(), isPremium: true },
    { title: "Seethamma Vakitlo Sirimalle Chettu", img: getPlaceholderImage(), isPremium: true },
    { title: "Swathi Muthyam", img: getPlaceholderImage(), isPremium: true },
    { title: "Athadu", img: getPlaceholderImage(), isPremium: true },
    { title: "Swayam Krushi", img: getPlaceholderImage(), isPremium: true },
    { title: "Chakram", img: getPlaceholderImage(), isPremium: true },
    { title: "Apathbandhavudu", img: getPlaceholderImage(), isPremium: true },
    { title: "Suryavamsam", img: getPlaceholderImage(), isPremium: true },
  ];

  const trendingTop10 = [
    { title: "Kothapallilo Okappudu", img: getPlaceholderImage(), isPremium: true },
    { title: "Sarkaar 5 Ep 12", img: getPlaceholderImage(), isPremium: true },
    { title: "PA... PA... (O Naanna)", img: getPlaceholderImage(), isPremium: true },
    { title: "Network", img: getPlaceholderImage(), isPremium: true },
    { title: "Virgin Boys", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Vijayanand", img: getPlaceholderImage(), isPremium: true },
    { title: "Rekhachithram", img: getPlaceholderImage(), isPremium: true },
    { title: "Telugu Indian Idol", img: getPlaceholderImage(), isPremium: true },
    { title: "Kaliyugam 2064", img: getPlaceholderImage(), isPremium: true },
    { title: "Marco", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
  ];

  const kDrama = [
    { title: "FIGHT FOR MY WAY", img: getPlaceholderImage(), isPremium: true },
    { title: "Hwarang - The Poet Warrior Youth", img: getPlaceholderImage(), isPremium: true },
    { title: "Youth of May", img: getPlaceholderImage(), isPremium: true },
    { title: "SCHOOL 2017", img: getPlaceholderImage(), isPremium: true },
    { title: "Couple on the Backtrack", img: getPlaceholderImage(), isPremium: true },
  ];

  const newAgeRomance = [
    { title: "3 Roses", img: getSmallPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "SIN(The Movie)", img: getSmallPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Sshhh", img: getSmallPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Bubble Gum", img: getSmallPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Hot Spot", img: getSmallPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Manmatha Leela", img: getSmallPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Locked", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Dirty Hari", img: getSmallPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "EVOL", img: getSmallPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Siddharth Roy", img: getSmallPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Mix Up", img: getSmallPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Masti's", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Krishna and His Leela", img: getSmallPlaceholderImage(), isPremium: true },
  ];

  const ahaSpecials = [
    { title: "Locked", img: getPlaceholderImage(), isPremium: true },
    { title: "Unstoppable", img: getPlaceholderImage(), isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: getPlaceholderImage(), isPremium: true },
    { title: "Ori Devuda", img: getPlaceholderImage(), isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: getPlaceholderImage(), isPremium: true },
    { title: "Sri Ramadasu", img: getPlaceholderImage(), isPremium: true },
    { title: "Stalin", img: getPlaceholderImage(), isPremium: true },
    { title: "Simha", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Fidaa", img: getPlaceholderImage(), isPremium: true },
    { title: "Athadu", img: getPlaceholderImage(), isPremium: true },
    { title: "Adhurs", img: getPlaceholderImage(), isPremium: true },
    { title: "Khakee", img: getPlaceholderImage(), isPremium: true },
    { title: "Zombie Reddy", img: getPlaceholderImage(), isPremium: true },
    { title: "Telugu Indian Idol", img: getPlaceholderImage(), isPremium: true },
    { title: "Das Ka Dhamki", img: getPlaceholderImage(), isPremium: true },
    { title: "Janaka Ayithe Ganaka", img: getPlaceholderImage(), isPremium: true },
    { title: "Krack", img: getPlaceholderImage(), isPremium: true },
    { title: "Pottel", img: getPlaceholderImage(), isPremium: true },
    { title: "3 Roses", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Bhamakalapam 2", img: getPlaceholderImage(), isPremium: true },
  ];

  const upcoming = [
    { title: "Telugu Indian Idol Season 4 - Launch Promo", img: getSmallPlaceholderImage(), isPremium: false },
  ];

  const meeAha = [
    { title: "Love Story", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Premalu", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Colour Photo", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Sundaram Master", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "96", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Bubble Gum", img: getSmallPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Sammathame", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "18 Pages", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Ori Devuda", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Neeli Megha Shyama", img: getSmallPlaceholderImage(), isPremium: true },
  ];

  const handpicked = [
    { title: "Maruthi Nagar Subrahmanyam", img: getPlaceholderImage(), isPremium: true },
    { title: "Bhamakalapam", img: getPlaceholderImage(), isPremium: true },
    { title: "Magadheera", img: getPlaceholderImage(), isPremium: true },
    { title: "Intinti Ramayanam", img: getPlaceholderImage(), isPremium: true },
    { title: "Sathi Gani Rendu Ekaralu", img: getPlaceholderImage(), isPremium: true },
    { title: "Samajavaragamana", img: getPlaceholderImage(), isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: getPlaceholderImage(), isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: getPlaceholderImage(), isPremium: true },
    { title: "Swathi Muthyam", img: getPlaceholderImage(), isPremium: true },
    { title: "SR Kalyanamandapam", img: getPlaceholderImage(), isPremium: true },
    { title: "Laggam", img: getPlaceholderImage(), isPremium: true },
    { title: "Bheemla Nayak", img: getPlaceholderImage(), isPremium: true },
    { title: "Bhamakalapam 2", img: getPlaceholderImage(), isPremium: true },
    { title: "Love Story", img: getPlaceholderImage(), isPremium: true },
  ];

  const blockbusters = [
    { title: "Polimera 2", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Sagara Sangamam", img: getPlaceholderImage(), isPremium: true },
    { title: "Karthikeya", img: getPlaceholderImage(), isPremium: true },
    { title: "Samajavaragamana", img: getPlaceholderImage(), isPremium: true },
    { title: "Chandamama", img: getPlaceholderImage(), isPremium: true },
    { title: "Khaidi", img: getPlaceholderImage(), isPremium: true },
    { title: "Keedaa Cola", img: getPlaceholderImage(), isPremium: true },
    { title: "Swayam Krushi", img: getPlaceholderImage(), isPremium: true },
    { title: "Shankara Bharanam", img: getPlaceholderImage(), isPremium: true },
    { title: "Masooda", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Krack", img: getPlaceholderImage(), isPremium: true },
    { title: "Bhamakalapam 2", img: getPlaceholderImage(), isPremium: true },
    { title: "DJ Tillu", img: getPlaceholderImage(), isPremium: true },
    { title: "Bheemla Nayak", img: getPlaceholderImage(), isPremium: true },
    { title: "Premalu", img: getPlaceholderImage(), isPremium: true },
    { title: "Baby", img: getPlaceholderImage(), isPremium: true },
  ];

  const liveChannels = [
    { title: "TV9 Telugu Live TV", img: getPlaceholderImage(), isPremium: true },
  ];

  const genres = [
    { title: "Telugu Drama Movies", img: getPlaceholderImage() },
    { title: "Telugu Action Movies", img: getPlaceholderImage() },
    { title: "Telugu Romance Movies", img: getPlaceholderImage() },
    { title: "Telugu Comedy Movies", img: getPlaceholderImage() },
    { title: "Telugu Thriller Movies", img: getPlaceholderImage() },
    { title: "Telugu Crime Movies", img: getPlaceholderImage() },
    { title: "Romance Comedy", img: getPlaceholderImage() },
    { title: "Family Drama", img: getPlaceholderImage() },
    { title: "Devotional", img: getPlaceholderImage() },
    { title: "Horror Comedy", img: getPlaceholderImage() },
  ];

  const freeMovies = [
    { title: "Thuppaki", img: getPlaceholderImage() },
    { title: "Nenu Rowdy Ne", img: getPlaceholderImage() },
    { title: "Nagaram", img: getPlaceholderImage() },
    { title: "100 Days Of Love", img: getPlaceholderImage() },
    { title: "Selfie Raja", img: getPlaceholderImage() },
    { title: "Mr Karthik", img: getPlaceholderImage() },
    { title: "Memu", img: getPlaceholderImage() },
    { title: "Utthama Villian", img: getPlaceholderImage() },
    { title: "Yuddha Bhoomi", img: getPlaceholderImage() },
  ];

  const classicThrillers = [
    { title: "16 Every Detail Count", img: getPlaceholderImage(), isPremium: true },
    { title: "Anasuya", img: getPlaceholderImage(), isPremium: true },
    { title: "Midnight Murders", img: getPlaceholderImage(), isPremium: true },
    { title: "Forensic", img: getPlaceholderImage(), isPremium: true },
    { title: "Locked", img: getPlaceholderImage(), isPremium: true },
    { title: "Chunduru Police Station", img: getPlaceholderImage(), isPremium: true },
    { title: "Vetrimaaran's Jallikattu", img: getPlaceholderImage(), isPremium: true },
    { title: "Anukoni Athidhi", img: getPlaceholderImage(), isPremium: true },
    { title: "Nipah Virus", img: getPlaceholderImage(), isPremium: true },
    { title: "Trance", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Cold Case", img: getPlaceholderImage(), isPremium: true },
    { title: "Anaganaga O Athidhi", img: getPlaceholderImage(), isPremium: true },
    { title: "The Road", img: getPlaceholderImage(), isPremium: true },
    { title: "Nene Naa", img: getPlaceholderImage(), isPremium: true },
    { title: "Khakee", img: getPlaceholderImage(), isPremium: true },
    { title: "Senapathi", img: getPlaceholderImage(), isPremium: true },
    { title: "Naandhi", img: getPlaceholderImage(), isPremium: true },
    { title: "Bloody Mary", img: getPlaceholderImage(), isPremium: true },
    { title: "CSI Sanatan", img: getPlaceholderImage(), isPremium: true },
    { title: "Arjun Suravaram", img: getPlaceholderImage(), isPremium: true },
  ];

  const screamParty = [
    { title: "Tantra", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Polimera 2", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Kajal Karthika", img: getPlaceholderImage(), isPremium: true },
    { title: "Bhoothaddam Bhaskar Narayana", img: getPlaceholderImage(), isPremium: true },
    { title: "Masooda", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Pindam", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Hidimbha", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Cold Case", img: getPlaceholderImage(), isPremium: true },
    { title: "Rani Gari Bangala", img: getPlaceholderImage(), isPremium: true },
    { title: "Mata Raani Mounamidi", img: getPlaceholderImage(), isPremium: true },
  ];

  const devotional = [
    { title: "Sri Ramadasu", img: getPlaceholderImage(), isPremium: true },
    { title: "Sarvam Shakthi Mayam", img: getPlaceholderImage(), isPremium: true },
    { title: "Rama Ayodhya", img: getPlaceholderImage(), isPremium: true },
    { title: "Aha Godari", img: getPlaceholderImage(), isPremium: true },
    { title: "Maha Ganesha", img: getPlaceholderImage(), isPremium: true },
    { title: "Samatha Kumbh 2024", img: getPlaceholderImage(), isPremium: false },
    { title: "Good luck Ganesha", img: getPlaceholderImage(), isPremium: true },
  ];

  const rewindClassics = [
    { title: "Jamba Lakidi Pamba", img: getPlaceholderImage(), isPremium: true },
    { title: "Suryavamsam", img: getPlaceholderImage(), isPremium: true },
    { title: "Premabhishekam", img: getPlaceholderImage(), isPremium: true },
    { title: "Premikulu", img: getPlaceholderImage(), isPremium: true },
    { title: "Sri Ramadasu", img: getPlaceholderImage(), isPremium: true },
  ];

  const teluguIdolS3 = [
    { title: "Launch - Auditions Day 1", img: getSmallPlaceholderImage(), isPremium: false },
    { title: "Auditions Day 2", img: getSmallPlaceholderImage(), isPremium: false },
    { title: "Auditions Day 3", img: getSmallPlaceholderImage(), isPremium: false },
    { title: "Auditions Day 4", img: getSmallPlaceholderImage(), isPremium: false },
    { title: "Grand Gala with Top 12 - Part 1", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Grand Gala with Top 12 - Part 2", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "VD’s Rowdy 12- Part 1", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "VD’s Rowdy 12- Part 2", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "The First Elimination - Part 1", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "The First Elimination - Part 2", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Journey to TOP 10 - Part 1", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Journey to TOP 10 - Part 2", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Concert Night with Sivamani- Part 1", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Concert Night with Sivamani- Part 2", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Love Ragas with Rashmika- Part 1", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Love Ragas with Rashmika- Part 2", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Judges Face Off- Part 1", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Judges Face Off- Part 2", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Non Stop Entertainment with Nani- Part 1", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Non Stop Entertainment with Nani- Part 2", img: getSmallPlaceholderImage(), isPremium: true },
  ];

  const ahaKids = [
    { title: "Bala Bharatham", img: getSmallPlaceholderImage(), isPremium: true },
    { title: "Christmas Thatha", img: getSmallPlaceholderImage(), isPremium: false },
    { title: "Maha Ganesha", img: getSmallPlaceholderImage(), isPremium: true },
  ];

  const actions = [
    { title: "1996 Dharmapuri", img: getPlaceholderImage(), isPremium: true },
    { title: "Aadu Magaadra Bujji", img: getPlaceholderImage(), isPremium: true },
    { title: "Adhurs", img: getPlaceholderImage(), isPremium: true },
    { title: "Aithe 2.0", img: getPlaceholderImage(), isPremium: true, isAgeRated: true },
    { title: "Alluri", img: getPlaceholderImage(), isPremium: true },
    { title: "Antony", img: getPlaceholderImage(), isPremium: true },
    { title: "Apathbandhavudu", img: getPlaceholderImage(), isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: getPlaceholderImage(), isPremium: true },
    { title: "Arjun Suravaram", img: getPlaceholderImage(), isPremium: true },
    { title: "Ashok", img: getPlaceholderImage(), isPremium: true },
    { title: "Asuraguru", img: getPlaceholderImage(), isPremium: true },
    { title: "Athadu", img: getPlaceholderImage(), isPremium: true },
  ];
  return (
    <main className="bg-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <CardCarousel title="Trending Top 10" items={trendingTop10} />
        <CardCarousel title="New Releases" items={newReleases} />
        <CardCarousel title="Ganesha Family Time" items={ganeshaFamilyTime} />
        <CardCarousel
          title="Vere Level Office"
          items={vereLevelOffice}
          isSmall={true}
        />
        <CardCarousel title="Award Winning Movies" items={awardWinningMovies} />
        <CardCarousel title="aha Originals" items={ahaOriginals} />
        <CardCarousel title="Recently Added" items={recentlyAdded} />
        <CardCarousel title="Evergreens" items={evergreens} />
        <CardCarousel title="K-Drama" items={kDrama} />
        <CardCarousel
          title="New Age Romance"
          items={newAgeRomance}
          isSmall={true}
        />
        <CardCarousel title="aha Specials" items={ahaSpecials} />
        <CardCarousel
          title="Upcoming"
          items={upcoming}
          isSmall={true}
          showAll={false}
        />
        <CardCarousel
          title="Mee Kosam, Mee Aha"
          items={meeAha}
          isSmall={true}
        />
        <CardCarousel
          title="Handpicked For You"
          items={handpicked}
          isSmall={true}
        />
        <CardCarousel title="Blockbusters" items={blockbusters} />
        <CardCarousel title="Live Channels" items={liveChannels} />
        <CardCarousel title="Genres" items={genres} isSmall={true} />
        <CardCarousel title="Free Movies" items={freeMovies} />
        <CardCarousel
          title="Classic Thrillers"
          items={classicThrillers}
          isSmall={true}
        />
        <CardCarousel
          title="Scream Party"
          items={screamParty}
          isSmall={true}
        />
        <CardCarousel title="Devotional" items={devotional} />
        <CardCarousel
          title="Rewind Classics"
          items={rewindClassics}
          isSmall={true}
        />
        <CardCarousel
          title="Telugu Indian Idol S3"
          items={teluguIdolS3}
          isSmall={true}
        />
        <CardCarousel title="Aha Kids" items={ahaKids} isSmall={true} />
        <CardCarousel title="Action" items={actions} />
      </div>
    </main>
  );
};

const MoviesContent = () => {
  const allMovies = [
    { title: "All Movies", img: getPlaceholderImage() },
    { title: "Premium Movies", img: getPlaceholderImage() },
    { title: "Free Movies", img: getPlaceholderImage() },
    { title: "New Releases", img: getPlaceholderImage() },
    { title: "Award Winning Movies", img: getPlaceholderImage() },
    { title: "Upcoming", img: getPlaceholderImage() },
    { title: "Blockbusters", img: getPlaceholderImage() },
    { title: "Classics", img: getPlaceholderImage() },
    { title: "Dubbed Movies", img: getPlaceholderImage() },
    { title: "Kids Movies", img: getPlaceholderImage() },
    { title: "Original Movies", img: getPlaceholderImage() },
  ];

  return (
    <main className="bg-gray-800 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <CardCarousel title="Movies" items={allMovies} />
        <CardCarousel title="Recently Added" items={allMovies} />
      </div>
    </main>
  );
};

const ShowsContent = () => {
  const allShows = [
    { title: "All Shows", img: getPlaceholderImage() },
    { title: "Premium Shows", img: getPlaceholderImage() },
    { title: "Free Shows", img: getPlaceholderImage() },
    { title: "Original Shows", img: getPlaceholderImage() },
    { title: "K-Drama", img: getPlaceholderImage() },
    { title: "Upcoming", img: getPlaceholderImage() },
    { title: "Reality Shows", img: getPlaceholderImage() },
    { title: "Talk Shows", img: getPlaceholderImage() },
    { title: "Comedy Shows", img: getPlaceholderImage() },
    { title: "Horror Shows", img: getPlaceholderImage() },
    { title: "Kids Shows", img: getPlaceholderImage() },
  ];

  return (
    <main className="bg-gray-800 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <CardCarousel title="Shows" items={allShows} />
        <CardCarousel title="Recently Added" items={allShows} />
      </div>
    </main>
  );
};

const WatchFreeContent = () => (
  <main className="bg-gray-800 p-6 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Watch Free</h2>
      <p className="text-white">
        Explore a variety of free movies and shows on Aha!
      </p>
    </div>
  </main>
);

const OffersContent = () => (
  <main className="bg-gray-800 p-6 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Offers</h2>
      <p className="text-white">
        Check back soon for new offers and promotions!
      </p>
    </div>
  </main>
);

const MyAhaContent = () => (
  <main className="bg-gray-800 p-6 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">My Aha</h2>
      <p className="text-white">
        Sign in to view your watch list, payment history, and profile.
      </p>
    </div>
  </main>
);

// --- Main App Component ---

const App = () => {
  const [current, setCurrent] = useState("Home");

  const renderContent = () => {
    switch (current) {
      case "Home":
        return <HomeContent />;
      case "Movies":
        return <MoviesContent />;
      case "Shows":
        return <ShowsContent />;
      case "Watch Free":
        return <WatchFreeContent />;
      case "Offers":
        return <OffersContent />;
      case "My Aha":
        return <MyAhaContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar current={current} setCurrent={setCurrent} />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default App;
