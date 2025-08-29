import React, { useState } from "react";

// Placeholder image for now
const PLACEHOLDER_IMG = "https://via.placeholder.com/150";

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
      <img src={img || PLACEHOLDER_IMG} alt={title} className="w-full h-full object-cover" />
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

const HomeContent = () => {
  const newReleases = [
    { title: "Sarkaar 5 Ep 12", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Kothapallilo Okappudu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "PA... PA... (O Naanna)", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Movie Review", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Network", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Virgin Boys", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Vijayanand", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Kaliyugam 2064", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Saree", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Saradhi", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Sri Sri Sri Raja Vaaru", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Fusion Meets Medly", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Masti's (The Movie)", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "23 (Iravai Moodu)", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Ghatikachalam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Oka Yamudi Premakatha", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Karthika Missing Case", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "SIN(The Movie)", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Arjun S/o Vyjayanthi", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Demon", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
  ];

  const ganeshaFamilyTime = [
    { title: "Brahma-Anandam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Premalu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Vidya Vasula Aham", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Samajavaragamana", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "DJ Tillu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Maruthi Nagar Subrahmanyam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Janaka Ayithe Ganaka", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const vereLevelOffice = [
    { title: "Movie Review", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "The Saree Boss", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "The Office Love Stories", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Cow dung cake sale", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Boycott juniors", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "The Potluck", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Training Cancelled, Potluck Approved.", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "The Corporate Bachelor", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Dreams on Hold", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Nisha’s Last Note", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Captaincy War: Satya vs Nikhil", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Ex-tra' Pressure at the Top", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Corporate IPL – Ishq, Pressure, Layoff", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Motivation or Termination?", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Mission: Client Possible", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "3 Problems, 0 Solutions", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Love, Laughter & Marriage Application", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Cold Wars & Cake Fights", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Making girlfriend in office", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "One mail can change your job", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const awardWinningMovies = [
    { title: "Razakar", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Baby", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Colour Photo", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Pottel", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Ambajipeta Marriage Band", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Raju Yadav", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Mercy Killing", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Polimera 2", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Month of Madhu", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
  ];

  const ahaOriginals = [
    { title: "SARKAAR", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Vere Level Office", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Masti's (The Movie)", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "SIN(The Movie)", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Telugu Indian Idol", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Dance Ikon", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Hometown", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Chef mantra", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Emoji", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Unstoppable", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bhamakalapam 2", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "My Dear Donga", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Arthamainda Arun Kumar", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bhamakalapam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Sathi Gani Rendu Ekaralu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Balu Gani Talkies", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Mix Up", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Super Over", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Senapathi", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const recentlyAdded = [
    { title: "Kothapallilo Okappudu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Sarkaar 5 Ep 12", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "The Saree Boss", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Vijayanand", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Network", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Jolly O Gymkhana", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Aparadhi", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "The Devil's Chair", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Rekhachithram", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Marco", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Hometown", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Veeraaraju 1991", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Brahma-Anandam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Naandhi", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Pandavulu Pandavulu Tummeda", img: PLACEHOLDER_IMG, isPremium: false },
    { title: "Chef Mantra Project K Episode 4", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Vere Level Office", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Vivekanandan Viral", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Kalpana 3", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
  ];

  const evergreens = [
    { title: "Sagara Sangamam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Seethamma Vakitlo Sirimalle Chettu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Swathi Muthyam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Athadu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Swayam Krushi", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Chakram", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Apathbandhavudu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Suryavamsam", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const trendingTop10 = [
    { title: "Kothapallilo Okappudu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Sarkaar 5 Ep 12", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "PA... PA... (O Naanna)", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Network", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Virgin Boys", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Vijayanand", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Rekhachithram", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Telugu Indian Idol", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Kaliyugam 2064", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Marco", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
  ];

  const kDrama = [
    { title: "FIGHT FOR MY WAY", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Hwarang - The Poet Warrior Youth", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Youth of May", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "SCHOOL 2017", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Couple on the Backtrack", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const newAgeRomance = [
    { title: "3 Roses", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "SIN(The Movie)", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Sshhh", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Bubble Gum", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Hot Spot", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Manmatha Leela", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Locked", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Dirty Hari", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "EVOL", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Siddharth Roy", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Mix Up", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Masti's", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Krishna and His Leela", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const ahaSpecials = [
    { title: "Locked", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Unstoppable", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Ori Devuda", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Sri Ramadasu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Stalin", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Simha", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Fidaa", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Athadu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Adhurs", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Khakee", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Zombie Reddy", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Telugu Indian Idol", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Das Ka Dhamki", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Janaka Ayithe Ganaka", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Krack", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Pottel", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "3 Roses", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Bhamakalapam 2", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const upcoming = [
    { title: "Telugu Indian Idol Season 4 - Launch Promo", img: PLACEHOLDER_IMG, isPremium: false },
  ];

  const meeAha = [
    { title: "Love Story", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Premalu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Colour Photo", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Sundaram Master", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "96", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bubble Gum", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Sammathame", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "18 Pages", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Ori Devuda", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Neeli Megha Shyama", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const handpicked = [
    { title: "Maruthi Nagar Subrahmanyam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bhamakalapam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Magadheera", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Intinti Ramayanam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Sathi Gani Rendu Ekaralu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Samajavaragamana", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Swathi Muthyam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "SR Kalyanamandapam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Laggam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bheemla Nayak", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bhamakalapam 2", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Love Story", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const blockbusters = [
    { title: "Polimera 2", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Sagara Sangamam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Karthikeya", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Samajavaragamana", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Chandamama", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Khaidi", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Keedaa Cola", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Swayam Krushi", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Shankara Bharanam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Masooda", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Krack", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bhamakalapam 2", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "DJ Tillu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bheemla Nayak", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Premalu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Baby", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const liveChannels = [
    { title: "TV9 Telugu Live TV", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const genres = [
    { title: "Telugu Drama Movies", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Telugu Action Movies", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Telugu Romance Movies", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Telugu Comedy Movies", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Telugu Thriller Movies", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Telugu Crime Movies", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Romance Comedy", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Family Drama", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Devotional", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Horror Comedy", img: PLACEHOLDER_IMG, isSmall: true },
  ];

  const freeMovies = [
    { title: "Thuppaki", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Nenu Rowdy Ne", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Nagaram", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "100 Days Of Love", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Selfie Raja", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Mr Karthik", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Memu", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Utthama Villian", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Yuddha Bhoomi", img: PLACEHOLDER_IMG, isSmall: true },
  ];

  const classicThrillers = [
    { title: "16 Every Detail Count", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Anasuya", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Midnight Murders", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Forensic", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Locked", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Chunduru Police Station", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Vetrimaaran's Jallikattu", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Anukoni Athidhi", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Nipah Virus", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Trance", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Cold Case", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Anaganaga O Athidhi", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "The Road", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Nene Naa", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Khakee", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Senapathi", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Naandhi", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Bloody Mary", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "CSI Sanatan", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Arjun Suravaram", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
  ];

  const screamParty = [
    { title: "Tantra", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Polimera 2", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Kajal Karthika", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Bhoothaddam Bhaskar Narayana", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Masooda", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Pindam", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Hidimbha", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Cold Case", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Rani Gari Bangala", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Mata Raani Mounamidi", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
  ];

  const devotional = [
    { title: "Sri Ramadasu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Sarvam Shakthi Mayam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Rama Ayodhya", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Aha Godari", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Maha Ganesha", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Samatha Kumbh 2024", img: PLACEHOLDER_IMG, isPremium: false },
    { title: "Good luck Ganesha", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const rewindClassics = [
    { title: "Jamba Lakidi Pamba", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Suryavamsam", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Premabhishekam", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Premikulu", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Sri Ramadasu", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
  ];

  const teluguIdolS3 = [
    { title: "Launch - Auditions Day 1", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Auditions Day 2", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Auditions Day 3", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Auditions Day 4", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Grand Gala with Top 12 - Part 1", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Grand Gala with Top 12 - Part 2", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "VD’s Rowdy 12- Part 1", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "VD’s Rowdy 12- Part 2", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "The First Elimination - Part 1", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "The First Elimination - Part 2", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Journey to TOP 10 - Part 1", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Journey to TOP 10 - Part 2", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Concert Night with Sivamani- Part 1", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Concert Night with Sivamani- Part 2", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Love Ragas with Rashmika- Part 1", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Love Ragas with Rashmika- Part 2", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Judges Face Off- Part 1", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Judges Face Off- Part 2", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Non Stop Entertainment with Nani- Part 1", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Non Stop Entertainment with Nani- Part 2", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
  ];

  const ahaKids = [
    { title: "Bala Bharatham", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Christmas Thatha", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Maha Ganesha", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
  ];

  const actions = [
    { title: "1996 Dharmapuri", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Aadu Magaadra Bujji", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Adhurs", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Aithe 2.0", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Alluri", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Antony", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Apathbandhavudu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Arjun Suravaram", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Ashok", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Asuraguru", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Athadu", img: PLACEHOLDER_IMG, isPremium: true },
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
    { title: "All Movies", img: PLACEHOLDER_IMG },
    { title: "Premium Movies", img: PLACEHOLDER_IMG },
    { title: "Free Movies", img: PLACEHOLDER_IMG },
    { title: "New Releases", img: PLACEHOLDER_IMG },
    { title: "Award Winning Movies", img: PLACEHOLDER_IMG },
    { title: "Upcoming", img: PLACEHOLDER_IMG },
    { title: "Blockbusters", img: PLACEHOLDER_IMG },
    { title: "Classics", img: PLACEHOLDER_IMG },
    { title: "Dubbed Movies", img: PLACEHOLDER_IMG },
    { title: "Kids Movies", img: PLACEHOLDER_IMG },
    { title: "Original Movies", img: PLACEHOLDER_IMG },
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
    { title: "All Shows", img: PLACEHOLDER_IMG },
    { title: "Premium Shows", img: PLACEHOLDER_IMG },
    { title: "Free Shows", img: PLACEHOLDER_IMG },
    { title: "Original Shows", img: PLACEHOLDER_IMG },
    { title: "K-Drama", img: PLACEHOLDER_IMG },
    { title: "Upcoming", img: PLACEHOLDER_IMG },
    { title: "Reality Shows", img: PLACEHOLDER_IMG },
    { title: "Talk Shows", img: PLACEHOLDER_IMG },
    { title: "Comedy Shows", img: PLACEHOLDER_IMG },
    { title: "Horror Shows", img: PLACEHOLDER_IMG },
    { title: "Kids Shows", img: PLACEHOLDER_IMG },
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
