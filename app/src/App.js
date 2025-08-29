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

const HomeContent = () => {
  const newReleases = [
    { title: "Sarkaar 5 Ep 12", img: "https://i.imgur.com/Wb0S3fD.jpeg", isPremium: true },
    { title: "Kothapallilo Okappudu", img: "https://i.imgur.com/w9r3mQx.jpeg", isPremium: true },
    { title: "PA... PA... (O Naanna)", img: "https://i.imgur.com/L7r0s7F.jpeg", isPremium: true },
    { title: "Movie Review", img: "https://i.imgur.com/YtH1kQz.jpeg", isPremium: true },
    { title: "Network", img: "https://i.imgur.com/8Q7sB3u.jpeg", isPremium: true },
    { title: "Virgin Boys", img: "https://i.imgur.com/V9X2a4s.jpeg", isPremium: true },
    { title: "Vijayanand", img: "https://i.imgur.com/P4M1o2d.jpeg", isPremium: true, isAgeRated: true },
    { title: "Kaliyugam 2064", img: "https://i.imgur.com/z0S3o5A.jpeg", isPremium: true },
    { title: "Saree", img: "https://i.imgur.com/u4g6p7e.jpeg", isPremium: true },
    { title: "Saradhi", img: "https://i.imgur.com/a4f3b7k.jpeg", isPremium: true, isAgeRated: true },
    { title: "Sri Sri Sri Raja Vaaru", img: "https://i.imgur.com/i8k5h2r.jpeg", isPremium: true },
    { title: "Fusion Meets Medly", img: "https://i.imgur.com/m2p7q9s.jpeg", isPremium: true },
    { title: "Masti's (The Movie)", img: "https://i.imgur.com/x5y2z8w.jpeg", isPremium: true },
    { title: "23 (Iravai Moodu)", img: "https://i.imgur.com/j8n6m9d.jpeg", isPremium: true, isAgeRated: true },
    { title: "Ghatikachalam", img: "https://i.imgur.com/h5l8j1o.jpeg", isPremium: true },
    { title: "Oka Yamudi Premakatha", img: "https://i.imgur.com/a7c9d1g.jpeg", isPremium: true, isAgeRated: true },
    { title: "Karthika Missing Case", img: "https://i.imgur.com/y1d3e5f.jpeg", isPremium: true },
    { title: "SIN(The Movie)", img: "https://i.imgur.com/n6b4d3q.jpeg", isPremium: true, isAgeRated: true },
    { title: "Arjun S/o Vyjayanthi", img: "https://i.imgur.com/m8l6n9d.jpeg", isPremium: true },
    { title: "Demon", img: "https://i.imgur.com/p9q5r2s.jpeg", isPremium: true, isAgeRated: true },
  ];

  const ganeshaFamilyTime = [
    { title: "Brahma-Anandam", img: "https://i.imgur.com/k2p7l8a.jpeg", isPremium: true },
    { title: "Premalu", img: "https://i.imgur.com/T0b4D7G.jpeg", isPremium: true },
    { title: "Vidya Vasula Aham", img: "https://i.imgur.com/V5n8o2m.jpeg", isPremium: true },
    { title: "Samajavaragamana", img: "https://i.imgur.com/j1k7h9p.jpeg", isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: "https://i.imgur.com/z4b9x5w.jpeg", isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: "https://i.imgur.com/r7t2s8p.jpeg", isPremium: true },
    { title: "DJ Tillu", img: "https://i.imgur.com/c1g4h9o.jpeg", isPremium: true },
    { title: "Maruthi Nagar Subrahmanyam", img: "https://i.imgur.com/m4h8j1k.jpeg", isPremium: true },
    { title: "Janaka Ayithe Ganaka", img: "https://i.imgur.com/s6d9f2e.jpeg", isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: "https://i.imgur.com/v8b3n7p.jpeg", isPremium: true },
  ];

  const vereLevelOffice = [
    { title: "Movie Review", img: "https://i.imgur.com/x2c6b9e.jpeg", isPremium: true },
    { title: "The Saree Boss", img: "https://i.imgur.com/m5l8j2d.jpeg", isPremium: true },
    { title: "The Office Love Stories", img: "https://i.imgur.com/q9f3b7k.jpeg", isPremium: true },
    { title: "Cow dung cake sale", img: "https://i.imgur.com/z4d9f1e.jpeg", isPremium: true },
    { title: "Boycott juniors", img: "https://i.imgur.com/x7c1a8s.jpeg", isPremium: true },
    { title: "The Potluck", img: "https://i.imgur.com/k2o8p4m.jpeg", isPremium: true },
    { title: "Training Cancelled, Potluck Approved.", img: "https://i.imgur.com/j6n9d2f.jpeg", isPremium: true },
    { title: "The Corporate Bachelor", img: "https://i.imgur.com/b5c8x3y.jpeg", isPremium: true },
    { title: "Dreams on Hold", img: "https://i.imgur.com/r4t1s9u.jpeg", isPremium: true },
    { title: "Nisha’s Last Note", img: "https://i.imgur.com/e7f1h8j.jpeg", isPremium: true },
    { title: "Captaincy War: Satya vs Nikhil", img: "https://i.imgur.com/p1s7b3m.jpeg", isPremium: true },
    { title: "Ex-tra' Pressure at the Top", img: "https://i.imgur.com/d4g9f2s.jpeg", isPremium: true },
    { title: "Corporate IPL – Ishq, Pressure, Layoff", img: "https://i.imgur.com/x9c5n1w.jpeg", isPremium: true },
    { title: "Motivation or Termination?", img: "https://i.imgur.com/u3t8e6y.jpeg", isPremium: true },
    { title: "Mission: Client Possible", img: "https://i.imgur.com/j8s2k5m.jpeg", isPremium: true },
    { title: "3 Problems, 0 Solutions", img: "https://i.imgur.com/y7n4b1p.jpeg", isPremium: true },
    { title: "Love, Laughter & Marriage Application", img: "https://i.imgur.com/l2d8e4f.jpeg", isPremium: true },
    { title: "Cold Wars & Cake Fights", img: "https://i.imgur.com/k9o2m7n.jpeg", isPremium: true },
    { title: "Making girlfriend in office", img: "https://i.imgur.com/p5r9t1s.jpeg", isPremium: true },
    { title: "One mail can change your job", img: "https://i.imgur.com/e3g7j4l.jpeg", isPremium: true },
  ];

  const awardWinningMovies = [
    { title: "Razakar", img: "https://i.imgur.com/r6t9h2k.jpeg", isPremium: true, isAgeRated: true },
    { title: "Baby", img: "https://i.imgur.com/u1e7r4s.jpeg", isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: "https://i.imgur.com/v8b3n7p.jpeg", isPremium: true },
    { title: "Colour Photo", img: "https://i.imgur.com/m2n5a8f.jpeg", isPremium: true },
    { title: "Pottel", img: "https://i.imgur.com/o9s4t1h.jpeg", isPremium: true },
    { title: "Ambajipeta Marriage Band", img: "https://i.imgur.com/i7j1k5d.jpeg", isPremium: true },
    { title: "Raju Yadav", img: "https://i.imgur.com/p3q8s2z.jpeg", isPremium: true },
    { title: "Mercy Killing", img: "https://i.imgur.com/d6f9j3y.jpeg", isPremium: true },
    { title: "Polimera 2", img: "https://i.imgur.com/O6P4R8L.jpeg", isPremium: true, isAgeRated: true },
    { title: "Month of Madhu", img: "https://i.imgur.com/t2r8k5s.jpeg", isPremium: true, isAgeRated: true },
  ];

  const ahaOriginals = [
    { title: "SARKAAR", img: "https://i.imgur.com/x2z5c8v.jpeg", isPremium: true },
    { title: "Vere Level Office", img: "https://i.imgur.com/m9o2l4p.jpeg", isPremium: true },
    { title: "Masti's (The Movie)", img: "https://i.imgur.com/x5y2z8w.jpeg", isPremium: true, isAgeRated: true },
    { title: "SIN(The Movie)", img: "https://i.imgur.com/n6b4d3q.jpeg", isPremium: true, isAgeRated: true },
    { title: "Telugu Indian Idol", img: "https://i.imgur.com/c8f2h7y.jpeg", isPremium: true },
    { title: "Dance Ikon", img: "https://i.imgur.com/q5d8e1r.jpeg", isPremium: true },
    { title: "Hometown", img: "https://i.imgur.com/y3o7e9s.jpeg", isPremium: true },
    { title: "Chef mantra", img: "https://i.imgur.com/h9j2k5m.jpeg", isPremium: true },
    { title: "Emoji", img: "https://i.imgur.com/r4s9b2c.jpeg", isPremium: true, isAgeRated: true },
    { title: "Unstoppable", img: "https://i.imgur.com/t7h2j5d.jpeg", isPremium: true },
    { title: "Bhamakalapam 2", img: "https://i.imgur.com/e2k8r4g.jpeg", isPremium: true },
    { title: "My Dear Donga", img: "https://i.imgur.com/v9n1m3j.jpeg", isPremium: true },
    { title: "Arthamainda Arun Kumar", img: "https://i.imgur.com/w5o8c2s.jpeg", isPremium: true },
    { title: "Bhamakalapam", img: "https://i.imgur.com/x2y7h9d.jpeg", isPremium: true },
    { title: "Sathi Gani Rendu Ekaralu", img: "https://i.imgur.com/l4p9s1m.jpeg", isPremium: true },
    { title: "Balu Gani Talkies", img: "https://i.imgur.com/n7b3m9q.jpeg", isPremium: true },
    { title: "Mix Up", img: "https://i.imgur.com/q1d5e8f.jpeg", isPremium: true, isAgeRated: true },
    { title: "Super Over", img: "https://i.imgur.com/r6s2d9y.jpeg", isPremium: true },
    { title: "Senapathi", img: "https://i.imgur.com/t3h8j4m.jpeg", isPremium: true },
  ];

  const recentlyAdded = [
    { title: "Kothapallilo Okappudu", img: "https://i.imgur.com/w9r3mQx.jpeg", isPremium: true },
    { title: "Sarkaar 5 Ep 12", img: "https://i.imgur.com/Wb0S3fD.jpeg", isPremium: true },
    { title: "The Saree Boss", img: "https://i.imgur.com/m5l8j2d.jpeg", isPremium: true },
    { title: "Vijayanand", img: "https://i.imgur.com/P4M1o2d.jpeg", isPremium: true },
    { title: "Network", img: "https://i.imgur.com/8Q7sB3u.jpeg", isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: "https://i.imgur.com/m8l6n9d.jpeg", isPremium: true },
    { title: "Jolly O Gymkhana", img: "https://i.imgur.com/q1w4e8y.jpeg", isPremium: true },
    { title: "Aparadhi", img: "https://i.imgur.com/h7j2k5m.jpeg", isPremium: true },
    { title: "The Devil's Chair", img: "https://i.imgur.com/p9f3g7k.jpeg", isPremium: true, isAgeRated: true },
    { title: "Rekhachithram", img: "https://i.imgur.com/o2s7d9m.jpeg", isPremium: true },
    { title: "Marco", img: "https://i.imgur.com/n1k5j8h.jpeg", isPremium: true, isAgeRated: true },
    { title: "Hometown", img: "https://i.imgur.com/y3o7e9s.jpeg", isPremium: true },
    { title: "Veeraaraju 1991", img: "https://i.imgur.com/b5c8x3y.jpeg", isPremium: true, isAgeRated: true },
    { title: "Brahma-Anandam", img: "https://i.imgur.com/k2p7l8a.jpeg", isPremium: true },
    { title: "Naandhi", img: "https://i.imgur.com/m4h8j1k.jpeg", isPremium: true },
    { title: "Pandavulu Pandavulu Tummeda", img: "https://i.imgur.com/z4b9x5w.jpeg", isPremium: false },
    { title: "Chef Mantra Project K Episode 4", img: "https://i.imgur.com/h9j2k5m.jpeg", isPremium: true },
    { title: "Vere Level Office", img: "https://i.imgur.com/m9o2l4p.jpeg", isPremium: true },
    { title: "Vivekanandan Viral", img: "https://i.imgur.com/p1s7b3m.jpeg", isPremium: true },
    { title: "Kalpana 3", img: "https://i.imgur.com/x9c5n1w.jpeg", isPremium: true, isAgeRated: true },
  ];

  const evergreens = [
    { title: "Sagara Sangamam", img: "https://i.imgur.com/r3t9u1o.jpeg", isPremium: true },
    { title: "Seethamma Vakitlo Sirimalle Chettu", img: "https://i.imgur.com/k6l4o9e.jpeg", isPremium: true },
    { title: "Swathi Muthyam", img: "https://i.imgur.com/n2h8j5k.jpeg", isPremium: true },
    { title: "Athadu", img: "https://i.imgur.com/q8f3s7y.jpeg", isPremium: true },
    { title: "Swayam Krushi", img: "https://i.imgur.com/t1h9j4m.jpeg", isPremium: true },
    { title: "Chakram", img: "https://i.imgur.com/c5d8e2f.jpeg", isPremium: true },
    { title: "Apathbandhavudu", img: "https://i.imgur.com/p9q5r2s.jpeg", isPremium: true },
    { title: "Suryavamsam", img: "https://i.imgur.com/r4t1s9u.jpeg", isPremium: true },
  ];

  const trendingTop10 = [
    { title: "Kothapallilo Okappudu", img: "https://i.imgur.com/w9r3mQx.jpeg", isPremium: true },
    { title: "Sarkaar 5 Ep 12", img: "https://i.imgur.com/Wb0S3fD.jpeg", isPremium: true },
    { title: "PA... PA... (O Naanna)", img: "https://i.imgur.com/L7r0s7F.jpeg", isPremium: true },
    { title: "Network", img: "https://i.imgur.com/8Q7sB3u.jpeg", isPremium: true },
    { title: "Virgin Boys", img: "https://i.imgur.com/V9X2a4s.jpeg", isPremium: true, isAgeRated: true },
    { title: "Vijayanand", img: "https://i.imgur.com/P4M1o2d.jpeg", isPremium: true },
    { title: "Rekhachithram", img: "https://i.imgur.com/o2s7d9m.jpeg", isPremium: true },
    { title: "Telugu Indian Idol", img: "https://i.imgur.com/c8f2h7y.jpeg", isPremium: true },
    { title: "Kaliyugam 2064", img: "https://i.imgur.com/z0S3o5A.jpeg", isPremium: true },
    { title: "Marco", img: "https://i.imgur.com/n1k5j8h.jpeg", isPremium: true, isAgeRated: true },
  ];

  const kDrama = [
    { title: "FIGHT FOR MY WAY", img: "https://i.imgur.com/j1w3e5g.jpeg", isPremium: true },
    { title: "Hwarang - The Poet Warrior Youth", img: "https://i.imgur.com/k9o2p7h.jpeg", isPremium: true },
    { title: "Youth of May", img: "https://i.imgur.com/u4t8e6y.jpeg", isPremium: true },
    { title: "SCHOOL 2017", img: "https://i.imgur.com/o7b3m9q.jpeg", isPremium: true },
    { title: "Couple on the Backtrack", img: "https://i.imgur.com/l2d8e4f.jpeg", isPremium: true },
  ];

  const newAgeRomance = [
    { title: "3 Roses", img: "https://i.imgur.com/R3S8T2K.jpeg", isPremium: true, isAgeRated: true },
    { title: "SIN(The Movie)", img: "https://i.imgur.com/n6b4d3q.jpeg", isPremium: true, isAgeRated: true },
    { title: "Sshhh", img: "https://i.imgur.com/t5f1b8y.jpeg", isPremium: true, isAgeRated: true },
    { title: "Bubble Gum", img: "https://i.imgur.com/y9o2e7s.jpeg", isPremium: true, isAgeRated: true },
    { title: "Hot Spot", img: "https://i.imgur.com/d3g7j4l.jpeg", isPremium: true, isAgeRated: true },
    { title: "Manmatha Leela", img: "https://i.imgur.com/a7c9d1g.jpeg", isPremium: true, isAgeRated: true },
    { title: "Locked", img: "https://i.imgur.com/z1v5c8d.jpeg", isPremium: true },
    { title: "Dirty Hari", img: "https://i.imgur.com/x5c9n2w.jpeg", isPremium: true, isAgeRated: true },
    { title: "EVOL", img: "https://i.imgur.com/k2p7l8a.jpeg", isPremium: true, isAgeRated: true },
    { title: "Siddharth Roy", img: "https://i.imgur.com/m4h8j1k.jpeg", isPremium: true, isAgeRated: true },
    { title: "Mix Up", img: "https://i.imgur.com/q1d5e8f.jpeg", isPremium: true, isAgeRated: true },
    { title: "Masti's", img: "https://i.imgur.com/x5y2z8w.jpeg", isPremium: true },
    { title: "Krishna and His Leela", img: "https://i.imgur.com/s6d9f2e.jpeg", isPremium: true },
  ];

  const ahaSpecials = [
    { title: "Locked", img: "https://i.imgur.com/z1v5c8d.jpeg", isPremium: true },
    { title: "Unstoppable", img: "https://i.imgur.com/t7h2j5d.jpeg", isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: "https://i.imgur.com/z4b9x5w.jpeg", isPremium: true },
    { title: "Ori Devuda", img: "https://i.imgur.com/o2s7d9m.jpeg", isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: "https://i.imgur.com/v8b3n7p.jpeg", isPremium: true },
    { title: "Sri Ramadasu", img: "https://i.imgur.com/L9P7Q1J.jpeg", isPremium: true },
    { title: "Stalin", img: "https://i.imgur.com/n1k5j8h.jpeg", isPremium: true },
    { title: "Simha", img: "https://i.imgur.com/b5c8x3y.jpeg", isPremium: true, isAgeRated: true },
    { title: "Fidaa", img: "https://i.imgur.com/r4t1s9u.jpeg", isPremium: true },
    { title: "Athadu", img: "https://i.imgur.com/q8f3s7y.jpeg", isPremium: true },
    { title: "Adhurs", img: "https://i.imgur.com/e2k8r4g.jpeg", isPremium: true },
    { title: "Khakee", img: "https://i.imgur.com/m9o2l4p.jpeg", isPremium: true },
    { title: "Zombie Reddy", img: "https://i.imgur.com/j6n9d2f.jpeg", isPremium: true },
    { title: "Telugu Indian Idol", img: "https://i.imgur.com/c8f2h7y.jpeg", isPremium: true },
    { title: "Das Ka Dhamki", img: "https://i.imgur.com/p5r9t1s.jpeg", isPremium: true },
    { title: "Janaka Ayithe Ganaka", img: "https://i.imgur.com/s6d9f2e.jpeg", isPremium: true },
    { title: "Krack", img: "https://i.imgur.com/x9c5n1w.jpeg", isPremium: true },
    { title: "Pottel", img: "https://i.imgur.com/o9s4t1h.jpeg", isPremium: true },
    { title: "3 Roses", img: "https://i.imgur.com/R3S8T2K.jpeg", isPremium: true, isAgeRated: true },
    { title: "Bhamakalapam 2", img: "https://i.imgur.com/e2k8r4g.jpeg", isPremium: true },
  ];

  const upcoming = [
    { title: "Telugu Indian Idol Season 4 - Launch Promo", img: "https://i.imgur.com/t5f1b8y.jpeg", isPremium: false },
  ];

  const meeAha = [
    { title: "Love Story", img: "https://i.imgur.com/y7n4b1p.jpeg", isPremium: true },
    { title: "Premalu", img: "https://i.imgur.com/T0b4D7G.jpeg", isPremium: true },
    { title: "Colour Photo", img: "https://i.imgur.com/m2n5a8f.jpeg", isPremium: true },
    { title: "Sundaram Master", img: "https://i.imgur.com/o9s4t1h.jpeg", isPremium: true },
    { title: "96", img: "https://i.imgur.com/p3q8s2z.jpeg", isPremium: true },
    { title: "Bubble Gum", img: "https://i.imgur.com/y9o2e7s.jpeg", isPremium: true, isAgeRated: true },
    { title: "Sammathame", img: "https://i.imgur.com/n2h8j5k.jpeg", isPremium: true },
    { title: "18 Pages", img: "https://i.imgur.com/r6t9h2k.jpeg", isPremium: true },
    { title: "Ori Devuda", img: "https://i.imgur.com/o2s7d9m.jpeg", isPremium: true },
    { title: "Neeli Megha Shyama", img: "https://i.imgur.com/l4p9s1m.jpeg", isPremium: true },
  ];

  const handpicked = [
    { title: "Maruthi Nagar Subrahmanyam", img: "https://i.imgur.com/m4h8j1k.jpeg", isPremium: true },
    { title: "Bhamakalapam", img: "https://i.imgur.com/x2y7h9d.jpeg", isPremium: true },
    { title: "Magadheera", img: "https://i.imgur.com/w5o8c2s.jpeg", isPremium: true },
    { title: "Intinti Ramayanam", img: "https://i.imgur.com/v8b3n7p.jpeg", isPremium: true },
    { title: "Sathi Gani Rendu Ekaralu", img: "https://i.imgur.com/l4p9s1m.jpeg", isPremium: true },
    { title: "Samajavaragamana", img: "https://i.imgur.com/j1k7h9p.jpeg", isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: "https://i.imgur.com/z4b9x5w.jpeg", isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: "https://i.imgur.com/r7t2s8p.jpeg", isPremium: true },
    { title: "Swathi Muthyam", img: "https://i.imgur.com/n2h8j5k.jpeg", isPremium: true },
    { title: "SR Kalyanamandapam", img: "https://i.imgur.com/m8l6n9d.jpeg", isPremium: true },
    { title: "Laggam", img: "https://i.imgur.com/h7j2k5m.jpeg", isPremium: true },
    { title: "Bheemla Nayak", img: "https://i.imgur.com/c1g4h9o.jpeg", isPremium: true },
    { title: "Bhamakalapam 2", img: "https://i.imgur.com/e2k8r4g.jpeg", isPremium: true },
    { title: "Love Story", img: "https://i.imgur.com/y7n4b1p.jpeg", isPremium: true },
  ];

  const blockbusters = [
    { title: "Polimera 2", img: "https://i.imgur.com/O6P4R8L.jpeg", isPremium: true, isAgeRated: true },
    { title: "Sagara Sangamam", img: "https://i.imgur.com/r3t9u1o.jpeg", isPremium: true },
    { title: "Karthikeya", img: "https://i.imgur.com/q1w4e8y.jpeg", isPremium: true },
    { title: "Samajavaragamana", img: "https://i.imgur.com/j1k7h9p.jpeg", isPremium: true },
    { title: "Chandamama", img: "https://i.imgur.com/k6l4o9e.jpeg", isPremium: true },
    { title: "Khaidi", img: "https://i.imgur.com/p9f3g7k.jpeg", isPremium: true },
    { title: "Keedaa Cola", img: "https://i.imgur.com/t3h8j4m.jpeg", isPremium: true },
    { title: "Swayam Krushi", img: "https://i.imgur.com/t1h9j4m.jpeg", isPremium: true },
    { title: "Shankara Bharanam", img: "https://i.imgur.com/a4f3b7k.jpeg", isPremium: true },
    { title: "Masooda", img: "https://i.imgur.com/j8n6m9d.jpeg", isPremium: true, isAgeRated: true },
    { title: "Krack", img: "https://i.imgur.com/x9c5n1w.jpeg", isPremium: true },
    { title: "Bhamakalapam 2", img: "https://i.imgur.com/e2k8r4g.jpeg", isPremium: true },
    { title: "DJ Tillu", img: "https://i.imgur.com/c1g4h9o.jpeg", isPremium: true },
    { title: "Bheemla Nayak", img: "https://i.imgur.com/c1g4h9o.jpeg", isPremium: true },
    { title: "Premalu", img: "https://i.imgur.com/T0b4D7G.jpeg", isPremium: true },
    { title: "Baby", img: "https://i.imgur.com/u1e7r4s.jpeg", isPremium: true },
  ];

  const liveChannels = [
    { title: "TV9 Telugu Live TV", img: "https://i.imgur.com/q9f3b7k.jpeg", isPremium: true },
  ];

  const genres = [
    { title: "Telugu Drama Movies", img: "https://i.imgur.com/d6f9j3y.jpeg", isSmall: true },
    { title: "Telugu Action Movies", img: "https://i.imgur.com/a7c9d1g.jpeg", isSmall: true },
    { title: "Telugu Romance Movies", img: "https://i.imgur.com/z4b9x5w.jpeg", isSmall: true },
    { title: "Telugu Comedy Movies", img: "https://i.imgur.com/e3g7j4l.jpeg", isSmall: true },
    { title: "Telugu Thriller Movies", img: "https://i.imgur.com/k2o8p4m.jpeg", isSmall: true },
    { title: "Telugu Crime Movies", img: "https://i.imgur.com/n6b4d3q.jpeg", isSmall: true },
    { title: "Romance Comedy", img: "https://i.imgur.com/j1k7h9p.jpeg", isSmall: true },
    { title: "Family Drama", img: "https://i.imgur.com/s6d9f2e.jpeg", isSmall: true },
    { title: "Devotional", img: "https://i.imgur.com/t7h2j5d.jpeg", isSmall: true },
    { title: "Horror Comedy", img: "https://i.imgur.com/y3o7e9s.jpeg", isSmall: true },
  ];

  const freeMovies = [
    { title: "Thuppaki", img: "https://i.imgur.com/a7c9d1g.jpeg", isSmall: true },
    { title: "Nenu Rowdy Ne", img: "https://i.imgur.com/b5c8x3y.jpeg", isSmall: true },
    { title: "Nagaram", img: "https://i.imgur.com/d6f9j3y.jpeg", isSmall: true },
    { title: "100 Days Of Love", img: "https://i.imgur.com/e3g7j4l.jpeg", isSmall: true },
    { title: "Selfie Raja", img: "https://i.imgur.com/h9j2k5m.jpeg", isSmall: true },
    { title: "Mr Karthik", img: "https://i.imgur.com/j1k7h9p.jpeg", isSmall: true },
    { title: "Memu", img: "https://i.imgur.com/k2o8p4m.jpeg", isSmall: true },
    { title: "Utthama Villian", img: "https://i.imgur.com/l4p9s1m.jpeg", isSmall: true },
    { title: "Yuddha Bhoomi", img: "https://i.imgur.com/m2n5a8f.jpeg", isSmall: true },
  ];

  const classicThrillers = [
    { title: "16 Every Detail Count", img: "https://i.imgur.com/n1k5j8h.jpeg", isPremium: true, isSmall: true },
    { title: "Anasuya", img: "https://i.imgur.com/o9s4t1h.jpeg", isPremium: true, isSmall: true },
    { title: "Midnight Murders", img: "https://i.imgur.com/p3q8s2z.jpeg", isPremium: true, isSmall: true },
    { title: "Forensic", img: "https://i.imgur.com/q1d5e8f.jpeg", isPremium: true, isSmall: true },
    { title: "Locked", img: "https://i.imgur.com/r6t9h2k.jpeg", isPremium: true, isSmall: true },
    { title: "Chunduru Police Station", img: "https://i.imgur.com/s6d9f2e.jpeg", isPremium: true, isSmall: true },
    { title: "Vetrimaaran's Jallikattu", img: "https://i.imgur.com/t1h9j4m.jpeg", isPremium: true, isSmall: true },
    { title: "Anukoni Athidhi", img: "https://i.imgur.com/u1e7r4s.jpeg", isPremium: true, isSmall: true },
    { title: "Nipah Virus", img: "https://i.imgur.com/v8b3n7p.jpeg", isPremium: true, isSmall: true },
    { title: "Trance", img: "https://i.imgur.com/w5o8c2s.jpeg", isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Cold Case", img: "https://i.imgur.com/x2c6b9e.jpeg", isPremium: true, isSmall: true },
    { title: "Anaganaga O Athidhi", img: "https://i.imgur.com/y3o7e9s.jpeg", isPremium: true, isSmall: true },
    { title: "The Road", img: "https://i.imgur.com/z0S3o5A.jpeg", isPremium: true, isSmall: true },
    { title: "Nene Naa", img: "https://i.imgur.com/a4f3b7k.jpeg", isPremium: true, isSmall: true },
    { title: "Khakee", img: "https://i.imgur.com/m9o2l4p.jpeg", isPremium: true, isSmall: true },
    { title: "Senapathi", img: "https://i.imgur.com/t3h8j4m.jpeg", isPremium: true, isSmall: true },
    { title: "Naandhi", img: "https://i.imgur.com/m4h8j1k.jpeg", isPremium: true, isSmall: true },
    { title: "Bloody Mary", img: "https://i.imgur.com/j1w3e5g.jpeg", isPremium: true, isSmall: true },
    { title: "CSI Sanatan", img: "https://i.imgur.com/k9o2p7h.jpeg", isPremium: true, isSmall: true },
    { title: "Arjun Suravaram", img: "https://i.imgur.com/u4t8e6y.jpeg", isPremium: true, isSmall: true },
  ];

  const screamParty = [
    { title: "Tantra", img: "https://i.imgur.com/l2d8e4f.jpeg", isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Polimera 2", img: "https://i.imgur.com/O6P4R8L.jpeg", isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Kajal Karthika", img: "https://i.imgur.com/r3t9u1o.jpeg", isPremium: true, isSmall: true },
    { title: "Bhoothaddam Bhaskar Narayana", img: "https://i.imgur.com/p9q5r2s.jpeg", isPremium: true, isSmall: true },
    { title: "Masooda", img: "https://i.imgur.com/j8n6m9d.jpeg", isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Pindam", img: "https://i.imgur.com/x5c9n2w.jpeg", isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Hidimbha", img: "https://i.imgur.com/n6b4d3q.jpeg", isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Cold Case", img: "https://i.imgur.com/x2c6b9e.jpeg", isPremium: true, isSmall: true },
    { title: "Rani Gari Bangala", img: "https://i.imgur.com/d4g9f2s.jpeg", isPremium: true, isSmall: true },
    { title: "Mata Raani Mounamidi", img: "https://i.imgur.com/k2p7l8a.jpeg", isPremium: true, isSmall: true },
  ];

  const devotional = [
    { title: "Sri Ramadasu", img: "https://i.imgur.com/L9P7Q1J.jpeg", isPremium: true },
    { title: "Sarvam Shakthi Mayam", img: "https://i.imgur.com/i8k5h2r.jpeg", isPremium: true },
    { title: "Rama Ayodhya", img: "https://i.imgur.com/m2p7q9s.jpeg", isPremium: true },
    { title: "Aha Godari", img: "https://i.imgur.com/h5l8j1o.jpeg", isPremium: true },
    { title: "Maha Ganesha", img: "https://i.imgur.com/a7c9d1g.jpeg", isPremium: true },
    { title: "Samatha Kumbh 2024", img: "https://i.imgur.com/p1s7b3m.jpeg", isPremium: false },
    { title: "Good luck Ganesha", img: "https://i.imgur.com/y1d3e5f.jpeg", isPremium: true },
  ];

  const rewindClassics = [
    { title: "Jamba Lakidi Pamba", img: "https://i.imgur.com/u4g6p7e.jpeg", isPremium: true, isSmall: true },
    { title: "Suryavamsam", img: "https://i.imgur.com/r4t1s9u.jpeg", isPremium: true, isSmall: true },
    { title: "Premabhishekam", img: "https://i.imgur.com/m8l6n9d.jpeg", isPremium: true, isSmall: true },
    { title: "Premikulu", img: "https://i.imgur.com/p9q5r2s.jpeg", isPremium: true, isSmall: true },
    { title: "Sri Ramadasu", img: "https://i.imgur.com/L9P7Q1J.jpeg", isPremium: true, isSmall: true },
  ];

  const teluguIdolS3 = [
    { title: "Launch - Auditions Day 1", img: "https://i.imgur.com/c8f2h7y.jpeg", isPremium: false, isSmall: true },
    { title: "Auditions Day 2", img: "https://i.imgur.com/q5d8e1r.jpeg", isPremium: false, isSmall: true },
    { title: "Auditions Day 3", img: "https://i.imgur.com/y3o7e9s.jpeg", isPremium: false, isSmall: true },
    { title: "Auditions Day 4", img: "https://i.imgur.com/h9j2k5m.jpeg", isPremium: false, isSmall: true },
    { title: "Grand Gala with Top 12 - Part 1", img: "https://i.imgur.com/r4s9b2c.jpeg", isPremium: true, isSmall: true },
    { title: "Grand Gala with Top 12 - Part 2", img: "https://i.imgur.com/t7h2j5d.jpeg", isPremium: true, isSmall: true },
    { title: "VD’s Rowdy 12- Part 1", img: "https://i.imgur.com/v9n1m3j.jpeg", isPremium: true, isSmall: true },
    { title: "VD’s Rowdy 12- Part 2", img: "https://i.imgur.com/w5o8c2s.jpeg", isPremium: true, isSmall: true },
    { title: "The First Elimination - Part 1", img: "https://i.imgur.com/x2y7h9d.jpeg", isPremium: true, isSmall: true },
    { title: "The First Elimination - Part 2", img: "https://i.imgur.com/l4p9s1m.jpeg", isPremium: true, isSmall: true },
    { title: "Journey to TOP 10 - Part 1", img: "https://i.imgur.com/n7b3m9q.jpeg", isPremium: true, isSmall: true },
    { title: "Journey to TOP 10 - Part 2", img: "https://i.imgur.com/q1d5e8f.jpeg", isPremium: true, isSmall: true },
    { title: "Concert Night with Sivamani- Part 1", img: "https://i.imgur.com/r6s2d9y.jpeg", isPremium: true, isSmall: true },
    { title: "Concert Night with Sivamani- Part 2", img: "https://i.imgur.com/t3h8j4m.jpeg", isPremium: true, isSmall: true },
    { title: "Love Ragas with Rashmika- Part 1", img: "https://i.imgur.com/v9n1m3j.jpeg", isPremium: true, isSmall: true },
    { title: "Love Ragas with Rashmika- Part 2", img: "https://i.imgur.com/b5c8x3y.jpeg", isPremium: true, isSmall: true },
    { title: "Judges Face Off- Part 1", img: "https://i.imgur.com/d4g9f2s.jpeg", isPremium: true, isSmall: true },
    { title: "Judges Face Off- Part 2", img: "https://i.imgur.com/e7f1h8j.jpeg", isPremium: true, isSmall: true },
    { title: "Non Stop Entertainment with Nani- Part 1", img: "https://i.imgur.com/p1s7b3m.jpeg", isPremium: true, isSmall: true },
    { title: "Non Stop Entertainment with Nani- Part 2", img: "https://i.imgur.com/r6t9h2k.jpeg", isPremium: true, isSmall: true },
  ];

  const ahaKids = [
    { title: "Bala Bharatham", img: "https://i.imgur.com/x2c6b9e.jpeg", isPremium: true, isSmall: true },
    { title: "Christmas Thatha", img: "https://i.imgur.com/u1e7r4s.jpeg", isPremium: false, isSmall: true },
    { title: "Maha Ganesha", img: "https://i.imgur.com/y3o7e9s.jpeg", isPremium: true, isSmall: true },
  ];

  const actions = [
    { title: "1996 Dharmapuri", img: "https://i.imgur.com/z0S3o5A.jpeg", isPremium: true },
    { title: "Aadu Magaadra Bujji", img: "https://i.imgur.com/c5d8e2f.jpeg", isPremium: true },
    { title: "Adhurs", img: "https://i.imgur.com/e2k8r4g.jpeg", isPremium: true },
    { title: "Aithe 2.0", img: "https://i.imgur.com/h5l8j1o.jpeg", isPremium: true, isAgeRated: true },
    { title: "Alluri", img: "https://i.imgur.com/j1w3e5g.jpeg", isPremium: true },
    { title: "Antony", img: "https://i.imgur.com/k9o2p7h.jpeg", isPremium: true },
    { title: "Apathbandhavudu", img: "https://i.imgur.com/p9q5r2s.jpeg", isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: "https://i.imgur.com/m8l6n9d.jpeg", isPremium: true },
    { title: "Arjun Suravaram", img: "https://i.imgur.com/u4t8e6y.jpeg", isPremium: true },
    { title: "Ashok", img: "https://i.imgur.com/a4f3b7k.jpeg", isPremium: true },
    { title: "Asuraguru", img: "https://i.imgur.com/m2p7q9s.jpeg", isPremium: true },
    { title: "Athadu", img: "https://i.imgur.com/q8f3s7y.jpeg", isPremium: true },
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
    { title: "All Movies", img: "https://i.imgur.com/c5d8e2f.jpeg" },
    { title: "Premium Movies", img: "https://i.imgur.com/h5l8j1o.jpeg" },
    { title: "Free Movies", img: "https://i.imgur.com/j1w3e5g.jpeg" },
    { title: "New Releases", img: "https://i.imgur.com/k9o2p7h.jpeg" },
    { title: "Award Winning Movies", img: "https://i.imgur.com/l2d8e4f.jpeg" },
    { title: "Upcoming", img: "https://i.imgur.com/m2p7q9s.jpeg" },
    { title: "Blockbusters", img: "https://i.imgur.com/n6b4d3q.jpeg" },
    { title: "Classics", img: "https://i.imgur.com/p9q5r2s.jpeg" },
    { title: "Dubbed Movies", img: "https://i.imgur.com/q8f3s7y.jpeg" },
    { title: "Kids Movies", img: "https://i.imgur.com/t1h9j4m.jpeg" },
    { title: "Original Movies", img: "https://i.imgur.com/a4f3b7k.jpeg" },
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
    { title: "All Shows", img: "https://i.imgur.com/e3g7j4l.jpeg" },
    { title: "Premium Shows", img: "https://i.imgur.com/j1k7h9p.jpeg" },
    { title: "Free Shows", img: "https://i.imgur.com/k2o8p4m.jpeg" },
    { title: "Original Shows", img: "https://i.imgur.com/l4p9s1m.jpeg" },
    { title: "K-Drama", img: "https://i.imgur.com/q5d8e1r.jpeg" },
    { title: "Upcoming", img: "https://i.imgur.com/n7b3m9q.jpeg" },
    { title: "Reality Shows", img: "https://i.imgur.com/o2s7d9m.jpeg" },
    { title: "Talk Shows", img: "https://i.imgur.com/p1s7b3m.jpeg" },
    { title: "Comedy Shows", img: "https://i.imgur.com/c1g4h9o.jpeg" },
    { title: "Horror Shows", img: "https://i.imgur.com/y1d3e5f.jpeg" },
    { title: "Kids Shows", img: "https://i.imgur.com/h7j2k5m.jpeg" },
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
