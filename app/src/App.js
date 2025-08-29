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
    <div className={`rounded-lg overflow-hidden ${isSmall ? 'h-48' : 'h-60'}`}>
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
    {isAgeRated && (
      <span className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded font-bold">A</span>
    )}
    {isPremium && (
      <span className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-yellow-400 text-xs px-2 py-1 rounded font-bold">Premium</span>
    )}
    <p className="text-sm mt-2 text-white font-semibold text-center">{title}</p>
  </div>
);

const CardCarousel = ({ title, items, isSmall = false, showAll = true }) => (
  <section className="mb-10">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {showAll && <a href="#" className="text-orange-500 hover:underline">See all</a>}
    </div>
    <div className="flex gap-4 overflow-x-auto scrollbar-hide">
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
        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
      </div>
      <p className="flex justify-center space-x-4">
        <span>Connect with us</span>
        <span>Download aha mobile app</span>
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" aria-label="Android app"><i className="fab fa-android text-3xl"></i></a>
        <a href="#" aria-label="iOS app"><i className="fab fa-apple text-3xl"></i></a>
      </div>
      <p>Contact us: support@aha.video</p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:underline">View Plans</a>
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">FAQs / Help</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Grievance Redressal</a>
        <a href="#" className="hover:underline">Blog</a>
      </div>
      <p className="mt-4">© Copyright 2025 Arha Media and Broadcasting Pvt Ltd. All rights reserved.</p>
    </div>
  </footer>
);

// --- Page Content Components ---
const HomeContent = () => {
  const newReleases = [
    { title: "Sarkaar 5 Ep 12", img: "/sarkaar-poster.jpg", isPremium: true },
    { title: "Kothapallilo Okappudu", img: "/kothapallilo-okappudu-poster.jpg", isPremium: true },
    { title: "PA... PA... (O Naanna)", img: "/pa-naanna-poster.jpg", isPremium: true },
    { title: "Movie Review", img: "/movie-review-poster.jpg", isPremium: true },
    { title: "Network", img: "/network-poster.jpg", isPremium: true },
    { title: "Virgin Boys", img: "/virgin-boys-poster.jpg", isPremium: true },
    { title: "Vijayanand", img: "/vijayanand-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Kaliyugam 2064", img: "/kaliyugam-poster.jpg", isPremium: true },
    { title: "Saree", img: "/saree-poster.jpg", isPremium: true },
    { title: "Saradhi", img: "/saradhi-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Sri Sri Sri Raja Vaaru", img: "/raja-vaaru-poster.jpg", isPremium: true },
    { title: "Fusion Meets Medly", img: "/fusion-medly-poster.jpg", isPremium: true },
    { title: "Masti's (The Movie)", img: "/mastis-poster.jpg", isPremium: true },
    { title: "23 (Iravai Moodu)", img: "/23-iravai-moodu-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Ghatikachalam", img: "/ghatikachalam-poster.jpg", isPremium: true },
    { title: "Oka Yamudi Premakatha", img: "/yamudi-premakatha-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Karthika Missing Case", img: "/karthika-poster.jpg", isPremium: true },
    { title: "SIN(The Movie)", img: "/sin-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Arjun S/o Vyjayanthi", img: "/arjun-poster.jpg", isPremium: true },
    { title: "Demon", img: "/demon-poster.jpg", isPremium: true, isAgeRated: true },
  ];

  const ganeshaFamilyTime = [
    { title: "Brahma-Anandam", img: "/brahma-anandam-poster.jpg", isPremium: true },
    { title: "Premalu", img: "/premalu-poster.jpg", isPremium: true },
    { title: "Vidya Vasula Aham", img: "/vidya-vasula-poster.jpg", isPremium: true },
    { title: "Samajavaragamana", img: "/samajavaragamana-poster.jpg", isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: "/ashoka-vanamlo-poster.jpg", isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: "/vinaro-bhagyamu-poster.jpg", isPremium: true },
    { title: "DJ Tillu", img: "/dj-tillu-poster.jpg", isPremium: true },
    { title: "Maruthi Nagar Subrahmanyam", img: "/maruthi-nagar-poster.jpg", isPremium: true },
    { title: "Janaka Ayithe Ganaka", img: "/janaka-ayithe-poster.jpg", isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: "/chinna-katha-poster.jpg", isPremium: true },
  ];

  const vereLevelOffice = [
    { title: "Movie Review", img: "/movie-review-poster.jpg", isPremium: true },
    { title: "The Saree Boss", img: "/saree-boss-poster.jpg", isPremium: true },
    { title: "The Office Love Stories", img: "/office-love-stories-poster.jpg", isPremium: true },
    { title: "Cow dung cake sale", img: "/cow-dung-poster.jpg", isPremium: true },
    { title: "Boycott juniors", img: "/boycott-juniors-poster.jpg", isPremium: true },
    { title: "The Potluck", img: "/potluck-poster.jpg", isPremium: true },
    { title: "Training Cancelled, Potluck Approved.", img: "/training-poster.jpg", isPremium: true },
    { title: "The Corporate Bachelor", img: "/corporate-bachelor-poster.jpg", isPremium: true },
    { title: "Dreams on Hold", img: "/dreams-on-hold-poster.jpg", isPremium: true },
    { title: "Nisha’s Last Note", img: "/nisha-note-poster.jpg", isPremium: true },
    { title: "Captaincy War: Satya vs Nikhil", img: "/captaincy-war-poster.jpg", isPremium: true },
    { title: "Ex-tra' Pressure at the Top", img: "/extra-pressure-poster.jpg", isPremium: true },
    { title: "Corporate IPL – Ishq, Pressure, Layoff", img: "/corporate-ipl-poster.jpg", isPremium: true },
    { title: "Motivation or Termination?", img: "/motivation-poster.jpg", isPremium: true },
    { title: "Mission: Client Possible", img: "/client-possible-poster.jpg", isPremium: true },
    { title: "3 Problems, 0 Solutions", img: "/problems-poster.jpg", isPremium: true },
    { title: "Love, Laughter & Marriage Application", img: "/love-laughter-poster.jpg", isPremium: true },
    { title: "Cold Wars & Cake Fights", img: "/cold-wars-poster.jpg", isPremium: true },
    { title: "Making girlfriend in office", img: "/girlfriend-in-office-poster.jpg", isPremium: true },
    { title: "One mail can change your job", img: "/one-mail-poster.jpg", isPremium: true },
  ];

  const awardWinningMovies = [
    { title: "Razakar", img: "/razakar-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Baby", img: "/baby-poster.jpg", isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: "/chinna-katha-poster.jpg", isPremium: true },
    { title: "Colour Photo", img: "/colour-photo-poster.jpg", isPremium: true },
    { title: "Pottel", img: "/pottel-poster.jpg", isPremium: true },
    { title: "Ambajipeta Marriage Band", img: "/ambajipeta-poster.jpg", isPremium: true },
    { title: "Raju Yadav", img: "/raju-yadav-poster.jpg", isPremium: true },
    { title: "Mercy Killing", img: "/mercy-killing-poster.jpg", isPremium: true },
    { title: "Polimera 2", img: "/polimera2-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Month of Madhu", img: "/month-of-madhu-poster.jpg", isPremium: true, isAgeRated: true },
  ];

  const ahaOriginals = [
    { title: "SARKAAR", img: "/sarkaar-poster.jpg", isPremium: true },
    { title: "Vere Level Office", img: "/vere-level-office-poster.jpg", isPremium: true },
    { title: "Masti's (The Movie)", img: "/mastis-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "SIN(The Movie)", img: "/sin-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Telugu Indian Idol", img: "/telugu-idol-poster.jpg", isPremium: true },
    { title: "Dance Ikon", img: "/dance-ikon-poster.jpg", isPremium: true },
    { title: "Hometown", img: "/hometown-poster.jpg", isPremium: true },
    { title: "Chef mantra", img: "/chef-mantra-poster.jpg", isPremium: true },
    { title: "Emoji", img: "/emoji-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Unstoppable", img: "/unstoppable-poster.jpg", isPremium: true },
    { title: "Bhamakalapam 2", img: "/bhamakalapam2-poster.jpg", isPremium: true },
    { title: "My Dear Donga", img: "/dear-donga-poster.jpg", isPremium: true },
    { title: "Arthamainda Arun Kumar", img: "/arthamainda-arun-poster.jpg", isPremium: true },
    { title: "Bhamakalapam", img: "/bhamakalapam-poster.jpg", isPremium: true },
    { title: "Sathi Gani Rendu Ekaralu", img: "/sathi-gani-poster.jpg", isPremium: true },
    { title: "Balu Gani Talkies", img: "/balu-gani-poster.jpg", isPremium: true },
    { title: "Mix Up", img: "/mix-up-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Super Over", img: "/super-over-poster.jpg", isPremium: true },
    { title: "Senapathi", img: "/senapathi-poster.jpg", isPremium: true },
  ];

  const recentlyAdded = [
    { title: "Kothapallilo Okappudu", img: "/kothapallilo-okappudu-poster.jpg", isPremium: true },
    { title: "Sarkaar 5 Ep 12", img: "/sarkaar-poster.jpg", isPremium: true },
    { title: "The Saree Boss", img: "/saree-boss-poster.jpg", isPremium: true },
    { title: "Vijayanand", img: "/vijayanand-poster.jpg", isPremium: true },
    { title: "Network", img: "/network-poster.jpg", isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: "/arjun-poster.jpg", isPremium: true },
    { title: "Jolly O Gymkhana", img: "/jolly-gymkhana-poster.jpg", isPremium: true },
    { title: "Aparadhi", img: "/aparadhi-poster.jpg", isPremium: true },
    { title: "The Devil's Chair", img: "/devils-chair-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Rekhachithram", img: "/rekhachithram-poster.jpg", isPremium: true },
    { title: "Marco", img: "/marco-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Hometown", img: "/hometown-poster.jpg", isPremium: true },
    { title: "Veeraaraju 1991", img: "/veeraaraju-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Brahma-Anandam", img: "/brahma-anandam-poster.jpg", isPremium: true },
    { title: "Naandhi", img: "/naandhi-poster.jpg", isPremium: true },
    { title: "Pandavulu Pandavulu Tummeda", img: "/pandavulu-poster.jpg", isPremium: false },
    { title: "Chef Mantra Project K Episode 4", img: "/chef-mantra-episode4-poster.jpg", isPremium: true },
    { title: "Vere Level Office", img: "/vere-level-office-poster.jpg", isPremium: true },
    { title: "Vivekanandan Viral", img: "/vivekanandan-poster.jpg", isPremium: true },
    { title: "Kalpana 3", img: "/kalpana3-poster.jpg", isPremium: true, isAgeRated: true },
  ];

  const evergreens = [
    { title: "Sagara Sangamam", img: "/sagara-sangamam-poster.jpg", isPremium: true },
    { title: "Seethamma Vakitlo Sirimalle Chettu", img: "/seethamma-vakitlo-poster.jpg", isPremium: true },
    { title: "Swathi Muthyam", img: "/swathi-muthyam-poster.jpg", isPremium: true },
    { title: "Athadu", img: "/athadu-poster.jpg", isPremium: true },
    { title: "Swayam Krushi", img: "/swayam-krushi-poster.jpg", isPremium: true },
    { title: "Chakram", img: "/chakram-poster.jpg", isPremium: true },
    { title: "Apathbandhavudu", img: "/apathbandhavudu-poster.jpg", isPremium: true },
    { title: "Suryavamsam", img: "/suryavamsam-poster.jpg", isPremium: true },
  ];

  const trendingTop10 = [
    { title: "Kothapallilo Okappudu", img: "/kothapallilo-okappudu-poster.jpg", isPremium: true },
    { title: "Sarkaar 5 Ep 12", img: "/sarkaar-poster.jpg", isPremium: true },
    { title: "PA... PA... (O Naanna)", img: "/pa-naanna-poster.jpg", isPremium: true },
    { title: "Network", img: "/network-poster.jpg", isPremium: true },
    { title: "Virgin Boys", img: "/virgin-boys-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Vijayanand", img: "/vijayanand-poster.jpg", isPremium: true },
    { title: "Rekhachithram", img: "/rekhachithram-poster.jpg", isPremium: true },
    { title: "Telugu Indian Idol", img: "/telugu-idol-poster.jpg", isPremium: true },
    { title: "Kaliyugam 2064", img: "/kaliyugam-poster.jpg", isPremium: true },
    { title: "Marco", img: "/marco-poster.jpg", isPremium: true, isAgeRated: true },
  ];

  const kDrama = [
    { title: "FIGHT FOR MY WAY", img: "/fight-for-my-way-poster.jpg", isPremium: true },
    { title: "Hwarang - The Poet Warrior Youth", img: "/hwarang-poster.jpg", isPremium: true },
    { title: "Youth of May", img: "/youth-of-may-poster.jpg", isPremium: true },
    { title: "SCHOOL 2017", img: "/school-2017-poster.jpg", isPremium: true },
    { title: "Couple on the Backtrack", img: "/couple-on-backtrack-poster.jpg", isPremium: true },
  ];

  const newAgeRomance = [
    { title: "3 Roses", img: "/3-roses-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "SIN(The Movie)", img: "/sin-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Sshhh", img: "/sshhh-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Bubble Gum", img: "/bubble-gum-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Hot Spot", img: "/hot-spot-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Manmatha Leela", img: "/manmatha-leela-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Locked", img: "/locked-poster.jpg", isPremium: true },
    { title: "Dirty Hari", img: "/dirty-hari-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "EVOL", img: "/evol-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Siddharth Roy", img: "/siddharth-roy-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Mix Up", img: "/mix-up-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Masti's", img: "/mastis-poster.jpg", isPremium: true },
    { title: "Krishna and His Leela", img: "/krishna-leela-poster.jpg", isPremium: true },
  ];

  const ahaSpecials = [
    { title: "Locked", img: "/locked-poster.jpg", isPremium: true },
    { title: "Unstoppable", img: "/unstoppable-poster.jpg", isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: "/ashoka-vanamlo-poster.jpg", isPremium: true },
    { title: "Ori Devuda", img: "/ori-devuda-poster.jpg", isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: "/chinna-katha-poster.jpg", isPremium: true },
    { title: "Sri Ramadasu", img: "/sri-ramadasu-poster.jpg", isPremium: true },
    { title: "Stalin", img: "/stalin-poster.jpg", isPremium: true },
    { title: "Simha", img: "/simha-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Fidaa", img: "/fidaa-poster.jpg", isPremium: true },
    { title: "Athadu", img: "/athadu-poster.jpg", isPremium: true },
    { title: "Adhurs", img: "/adhurs-poster.jpg", isPremium: true },
    { title: "Khakee", img: "/khakee-poster.jpg", isPremium: true },
    { title: "Zombie Reddy", img: "/zombie-reddy-poster.jpg", isPremium: true },
    { title: "Telugu Indian Idol", img: "/telugu-idol-poster.jpg", isPremium: true },
    { title: "Das Ka Dhamki", img: "/das-ka-dhamki-poster.jpg", isPremium: true },
    { title: "Janaka Ayithe Ganaka", img: "/janaka-ayithe-poster.jpg", isPremium: true },
    { title: "Krack", img: "/krack-poster.jpg", isPremium: true },
    { title: "Pottel", img: "/pottel-poster.jpg", isPremium: true },
    { title: "3 Roses", img: "/3-roses-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Bhamakalapam 2", img: "/bhamakalapam2-poster.jpg", isPremium: true },
  ];

  const upcoming = [
    { title: "Telugu Indian Idol Season 4 - Launch Promo", img: "/telugu-idol-s4-promo-poster.jpg", isPremium: false },
  ];

  const meeAha = [
    { title: "Love Story", img: "/love-story-poster.jpg", isPremium: true },
    { title: "Premalu", img: "/premalu-poster.jpg", isPremium: true },
    { title: "Colour Photo", img: "/colour-photo-poster.jpg", isPremium: true },
    { title: "Sundaram Master", img: "/sundaram-master-poster.jpg", isPremium: true },
    { title: "96", img: "/96-poster.jpg", isPremium: true },
    { title: "Bubble Gum", img: "/bubble-gum-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Sammathame", img: "/sammathame-poster.jpg", isPremium: true },
    { title: "18 Pages", img: "/18-pages-poster.jpg", isPremium: true },
    { title: "Ori Devuda", img: "/ori-devuda-poster.jpg", isPremium: true },
    { title: "Neeli Megha Shyama", img: "/neeli-megha-poster.jpg", isPremium: true },
  ];

  const handpicked = [
    { title: "Maruthi Nagar Subrahmanyam", img: "/maruthi-nagar-poster.jpg", isPremium: true },
    { title: "Bhamakalapam", img: "/bhamakalapam-poster.jpg", isPremium: true },
    { title: "Magadheera", img: "/magadheera-poster.jpg", isPremium: true },
    { title: "Intinti Ramayanam", img: "/intinti-ramayanam-poster.jpg", isPremium: true },
    { title: "Sathi Gani Rendu Ekaralu", img: "/sathi-gani-poster.jpg", isPremium: true },
    { title: "Samajavaragamana", img: "/samajavaragamana-poster.jpg", isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: "/ashoka-vanamlo-poster.jpg", isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: "/vinaro-bhagyamu-poster.jpg", isPremium: true },
    { title: "Swathi Muthyam", img: "/swathi-muthyam-poster.jpg", isPremium: true },
    { title: "SR Kalyanamandapam", img: "/sr-kalyanamandapam-poster.jpg", isPremium: true },
    { title: "Laggam", img: "/laggam-poster.jpg", isPremium: true },
    { title: "Bheemla Nayak", img: "/bheemla-nayak-poster.jpg", isPremium: true },
    { title: "Bhamakalapam 2", img: "/bhamakalapam2-poster.jpg", isPremium: true },
    { title: "Love Story", img: "/love-story-poster.jpg", isPremium: true },
  ];

  const blockbusters = [
    { title: "Polimera 2", img: "/polimera2-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Sagara Sangamam", img: "/sagara-sangamam-poster.jpg", isPremium: true },
    { title: "Karthikeya", img: "/karthikeya-poster.jpg", isPremium: true },
    { title: "Samajavaragamana", img: "/samajavaragamana-poster.jpg", isPremium: true },
    { title: "Chandamama", img: "/chandamama-poster.jpg", isPremium: true },
    { title: "Khaidi", img: "/khaidi-poster.jpg", isPremium: true },
    { title: "Keedaa Cola", img: "/keedaa-cola-poster.jpg", isPremium: true },
    { title: "Swayam Krushi", img: "/swayam-krushi-poster.jpg", isPremium: true },
    { title: "Shankara Bharanam", img: "/shankara-bharanam-poster.jpg", isPremium: true },
    { title: "Masooda", img: "/masooda-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Krack", img: "/krack-poster.jpg", isPremium: true },
    { title: "Bhamakalapam 2", img: "/bhamakalapam2-poster.jpg", isPremium: true },
    { title: "DJ Tillu", img: "/dj-tillu-poster.jpg", isPremium: true },
    { title: "Bheemla Nayak", img: "/bheemla-nayak-poster.jpg", isPremium: true },
    { title: "Premalu", img: "/premalu-poster.jpg", isPremium: true },
    { title: "Baby", img: "/baby-poster.jpg", isPremium: true },
  ];

  const liveChannels = [
    { title: "TV9 Telugu Live TV", img: "/tv9-telugu-live-poster.jpg", isPremium: true },
  ];

  const genres = [
    { title: "Telugu Drama Movies", img: "/telugu-drama-poster.jpg" },
    { title: "Telugu Action Movies", img: "/telugu-action-poster.jpg" },
    { title: "Telugu Romance Movies", img: "/telugu-romance-poster.jpg" },
    { title: "Telugu Comedy Movies", img: "/telugu-comedy-poster.jpg" },
    { title: "Telugu Thriller Movies", img: "/telugu-thriller-poster.jpg" },
    { title: "Telugu Crime Movies", img: "/telugu-crime-poster.jpg" },
    { title: "Romance Comedy", img: "/romance-comedy-poster.jpg" },
    { title: "Family Drama", img: "/family-drama-poster.jpg" },
    { title: "Devotional", img: "/devotional-poster.jpg" },
    { title: "Horror Comedy", img: "/horror-comedy-poster.jpg" },
  ];

  const freeMovies = [
    { title: "Thuppaki", img: "/thuppaki-poster.jpg" },
    { title: "Nenu Rowdy Ne", img: "/nenu-rowdy-ne-poster.jpg" },
    { title: "Nagaram", img: "/nagaram-poster.jpg" },
    { title: "100 Days Of Love", img: "/100-days-love-poster.jpg" },
    { title: "Selfie Raja", img: "/selfie-raja-poster.jpg" },
    { title: "Mr Karthik", img: "/mr-karthik-poster.jpg" },
    { title: "Memu", img: "/memu-poster.jpg" },
    { title: "Utthama Villian", img: "/utthama-villian-poster.jpg" },
    { title: "Yuddha Bhoomi", img: "/yuddha-bhoomi-poster.jpg" },
  ];

  const classicThrillers = [
    { title: "16 Every Detail Count", img: "/16-detail-poster.jpg", isPremium: true },
    { title: "Anasuya", img: "/anasuya-poster.jpg", isPremium: true },
    { title: "Midnight Murders", img: "/midnight-murders-poster.jpg", isPremium: true },
    { title: "Forensic", img: "/forensic-poster.jpg", isPremium: true },
    { title: "Locked", img: "/locked-poster.jpg", isPremium: true },
    { title: "Chunduru Police Station", img: "/chunduru-poster.jpg", isPremium: true },
    { title: "Vetrimaaran's Jallikattu", img: "/jallikattu-poster.jpg", isPremium: true },
    { title: "Anukoni Athidhi", img: "/anukoni-athidhi-poster.jpg", isPremium: true },
    { title: "Nipah Virus", img: "/nipah-virus-poster.jpg", isPremium: true },
    { title: "Trance", img: "/trance-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Cold Case", img: "/cold-case-poster.jpg", isPremium: true },
    { title: "Anaganaga O Athidhi", img: "/anaganaga-athidhi-poster.jpg", isPremium: true },
    { title: "The Road", img: "/the-road-poster.jpg", isPremium: true },
    { title: "Nene Naa", img: "/nene-naa-poster.jpg", isPremium: true },
    { title: "Khakee", img: "/khakee-poster.jpg", isPremium: true },
    { title: "Senapathi", img: "/senapathi-poster.jpg", isPremium: true },
    { title: "Naandhi", img: "/naandhi-poster.jpg", isPremium: true },
    { title: "Bloody Mary", img: "/bloody-mary-poster.jpg", isPremium: true },
    { title: "CSI Sanatan", img: "/csi-sanatan-poster.jpg", isPremium: true },
    { title: "Arjun Suravaram", img: "/arjun-suravaram-poster.jpg", isPremium: true },
  ];

  const screamParty = [
    { title: "Tantra", img: "/tantra-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Polimera 2", img: "/polimera2-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Kajal Karthika", img: "/kajal-karthika-poster.jpg", isPremium: true },
    { title: "Bhoothaddam Bhaskar Narayana", img: "/bhoothaddam-poster.jpg", isPremium: true },
    { title: "Masooda", img: "/masooda-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Pindam", img: "/pindam-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Hidimbha", img: "/hidimbha-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Cold Case", img: "/cold-case-poster.jpg", isPremium: true },
    { title: "Rani Gari Bangala", img: "/rani-bangala-poster.jpg", isPremium: true },
    { title: "Mata Raani Mounamidi", img: "/mata-raani-poster.jpg", isPremium: true },
  ];

  const devotional = [
    { title: "Sri Ramadasu", img: "/sri-ramadasu-poster.jpg", isPremium: true },
    { title: "Sarvam Shakthi Mayam", img: "/sarvam-shakthi-poster.jpg", isPremium: true },
    { title: "Rama Ayodhya", img: "/rama-ayodhya-poster.jpg", isPremium: true },
    { title: "Aha Godari", img: "/aha-godari-poster.jpg", isPremium: true },
    { title: "Maha Ganesha", img: "/maha-ganesha-poster.jpg", isPremium: true },
    { title: "Samatha Kumbh 2024", img: "/samatha-kumbh-poster.jpg", isPremium: false },
    { title: "Good luck Ganesha", img: "/good-luck-ganesha-poster.jpg", isPremium: true },
  ];

  const rewindClassics = [
    { title: "Jamba Lakidi Pamba", img: "/jamba-lakidi-poster.jpg", isPremium: true },
    { title: "Suryavamsam", img: "/suryavamsam-poster.jpg", isPremium: true },
    { title: "Premabhishekam", img: "/premabhishekam-poster.jpg", isPremium: true },
    { title: "Premikulu", img: "/premikulu-poster.jpg", isPremium: true },
    { title: "Sri Ramadasu", img: "/sri-ramadasu-poster.jpg", isPremium: true },
  ];

  const teluguIdolS3 = [
    { title: "Launch - Auditions Day 1", img: "/ti-s3-auditions1-poster.jpg", isPremium: false },
    { title: "Auditions Day 2", img: "/ti-s3-auditions2-poster.jpg", isPremium: false },
    { title: "Auditions Day 3", img: "/ti-s3-auditions3-poster.jpg", isPremium: false },
    { title: "Auditions Day 4", img: "/ti-s3-auditions4-poster.jpg", isPremium: false },
    { title: "Grand Gala with Top 12 - Part 1", img: "/ti-s3-gala1-poster.jpg", isPremium: true },
    { title: "Grand Gala with Top 12 - Part 2", img: "/ti-s3-gala2-poster.jpg", isPremium: true },
    { title: "VD’s Rowdy 12- Part 1", img: "/ti-s3-rowdy1-poster.jpg", isPremium: true },
    { title: "VD’s Rowdy 12- Part 2", img: "/ti-s3-rowdy2-poster.jpg", isPremium: true },
    { title: "The First Elimination - Part 1", img: "/ti-s3-elimination1-poster.jpg", isPremium: true },
    { title: "The First Elimination - Part 2", img: "/ti-s3-elimination2-poster.jpg", isPremium: true },
    { title: "Journey to TOP 10 - Part 1", img: "/ti-s3-top10-1-poster.jpg", isPremium: true },
    { title: "Journey to TOP 10 - Part 2", img: "/ti-s3-top10-2-poster.jpg", isPremium: true },
    { title: "Concert Night with Sivamani- Part 1", img: "/ti-s3-sivamani-1-poster.jpg", isPremium: true },
    { title: "Concert Night with Sivamani- Part 2", img: "/ti-s3-sivamani-2-poster.jpg", isPremium: true },
    { title: "Love Ragas with Rashmika- Part 1", img: "/ti-s3-rashmika-1-poster.jpg", isPremium: true },
    { title: "Love Ragas with Rashmika- Part 2", img: "/ti-s3-rashmika-2-poster.jpg", isPremium: true },
    { title: "Judges Face Off- Part 1", img: "/ti-s3-judges-1-poster.jpg", isPremium: true },
    { title: "Judges Face Off- Part 2", img: "/ti-s3-judges-2-poster.jpg", isPremium: true },
    { title: "Non Stop Entertainment with Nani- Part 1", img: "/ti-s3-nani-1-poster.jpg", isPremium: true },
    { title: "Non Stop Entertainment with Nani- Part 2", img: "/ti-s3-nani-2-poster.jpg", isPremium: true },
  ];

  const ahaKids = [
    { title: "Bala Bharatham", img: "/bala-bharatham-poster.jpg", isPremium: true },
    { title: "Christmas Thatha", img: "/christmas-thatha-poster.jpg", isPremium: false },
    { title: "Maha Ganesha", img: "/maha-ganesha-poster.jpg", isPremium: true },
  ];

  const actions = [
    { title: "1996 Dharmapuri", img: "/1996-dharmapuri-poster.jpg", isPremium: true },
    { title: "Aadu Magaadra Bujji", img: "/aadu-magaadra-poster.jpg", isPremium: true },
    { title: "Adhurs", img: "/adhurs-poster.jpg", isPremium: true },
    { title: "Aithe 2.0", img: "/aithe2-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Alluri", img: "/alluri-poster.jpg", isPremium: true },
    { title: "Antony", img: "/antony-poster.jpg", isPremium: true },
    { title: "Apathbandhavudu", img: "/apathbandhavudu-poster.jpg", isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: "/arjun-poster.jpg", isPremium: true },
    { title: "Arjun Suravaram", img: "/arjun-suravaram-poster.jpg", isPremium: true },
    { title: "Ashok", img: "/ashok-poster.jpg", isPremium: true },
    { title: "Asuraguru", img: "/asuraguru-poster.jpg", isPremium: true },
    { title: "Athadu", img: "/athadu-poster.jpg", isPremium: true },
    { title: "Ayogya", img: "/ayogya-poster.jpg", isPremium: true },
    { title: "Baadshah", img: "/baadshah-poster.jpg", isPremium: true },
    { title: "Bhairathi Ranagal", img: "/bhairathi-poster.jpg", isPremium: true },
    { title: "Bhamakalapam 2", img: "/bhamakalapam2-poster.jpg", isPremium: true },
    { title: "Bheemla Nayak", img: "/bheemla-nayak-poster.jpg", isPremium: true },
    { title: "Chapra Murder Case (Anchakkallakokkan)", img: "/chapra-murder-poster.jpg", isPremium: true },
    { title: "Crime Reel", img: "/crime-reel-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Darja", img: "/darja-poster.jpg", isPremium: true },
  ];

  const romance = [
    { title: "#MayaLO", img: "/mayalo-poster.jpg", isPremium: true },
    { title: "100 Days Of Love", img: "/100-days-love-poster.jpg", isPremium: false },
    { title: "18 Pages", img: "/18-pages-poster.jpg", isPremium: true },
    { title: "30 Rojullo Preminchadam Ela?", img: "/30-rojullo-poster.jpg", isPremium: true },
    { title: "7 Days 6 Nights", img: "/7-days-6-nights-poster.jpg", isPremium: true },
    { title: "96", img: "/96-poster.jpg", isPremium: true },
    { title: "Akash Vaani", img: "/akash-vaani-poster.jpg", isPremium: true },
    { title: "Akkada Romeo Ikkada Juliet", img: "/romeo-juliet-poster.jpg", isPremium: true },
    { title: "Alludu Gaaru", img: "/alludu-gaaru-poster.jpg", isPremium: true },
    { title: "Amaram Akhilam Prema", img: "/amaram-prema-poster.jpg", isPremium: true },
    { title: "Android Kattappa", img: "/android-kattappa-poster.jpg", isPremium: true },
    { title: "Arya 2", img: "/arya2-poster.jpg", isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: "/ashoka-vanamlo-poster.jpg", isPremium: true },
    { title: "Avunanna Kadanna", img: "/avunanna-kadanna-poster.jpg", isPremium: true },
    { title: "Awaara", img: "/awaara-poster.jpg", isPremium: true },
    { title: "Baby", img: "/baby-poster.jpg", isPremium: true },
    { title: "Bavagaru Bagunara", img: "/bavagaru-poster.jpg", isPremium: true },
    { title: "Bhanumathi & Ramakrishna", img: "/bhanumathi-ramakrishna-poster.jpg", isPremium: true },
    { title: "Bootcut Balaraju", img: "/bootcut-balaraju-poster.jpg", isPremium: true },
    { title: "Boss", img: "/boss-poster.jpg", isPremium: true },
  ];

  const drama = [
    { title: "#BFF", img: "/bff-poster.jpg", isPremium: true },
    { title: "#MayaLO", img: "/mayalo-poster.jpg", isPremium: true },
    { title: "#MENTOO", img: "/mentoo-poster.jpg", isPremium: true },
    { title: "100 Days Of Love", img: "/100-days-love-poster.jpg", isPremium: false },
    { title: "11th Hour", img: "/11th-hour-poster.jpg", isPremium: true },
    { title: "11th Hour (The Movie)", img: "/11th-hour-movie-poster.jpg", isPremium: true },
    { title: "1996 Dharmapuri", img: "/1996-dharmapuri-poster.jpg", isPremium: true },
    { title: "3 Roses", img: "/3-roses-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "35 Chinna Katha Kadhu", img: "/chinna-katha-poster.jpg", isPremium: true },
    { title: "36 Vayasulo", img: "/36-vayasulo-poster.jpg", isPremium: true },
    { title: "96", img: "/96-poster.jpg", isPremium: true },
    { title: "Aanandam", img: "/aanandam-poster.jpg", isPremium: true },
    { title: "Addham", img: "/addham-poster.jpg", isPremium: true },
    { title: "Aha Godari", img: "/aha-godari-poster.jpg", isPremium: true },
    { title: "Allu Arjun Presents aha", img: "/allu-arjun-presents-poster.jpg", isPremium: true },
    { title: "Amaram Akhilam Prema", img: "/amaram-prema-poster.jpg", isPremium: true },
    { title: "Ambajipeta Marriage Band", img: "/ambajipeta-poster.jpg", isPremium: true },
    { title: "And The Oscar Goes To..", img: "/oscar-goes-to-poster.jpg", isPremium: true },
    { title: "Anubhavinchu Raja", img: "/anubhavinchu-raja-poster.jpg", isPremium: true },
    { title: "Apathbandhavudu", img: "/apathbandhavudu-poster.jpg", isPremium: true },
  ];

  const thriller = [
    { title: "100 Crores", img: "/100-crores-poster.jpg", isPremium: true },
    { title: "105 (One Not Five) Minuttes", img: "/105-minutes-poster.jpg", isPremium: true },
    { title: "16 Every Detail Count", img: "/16-detail-poster.jpg", isPremium: true },
    { title: "23 (Iravai Moodu)", img: "/23-iravai-moodu-poster.jpg", isPremium: true },
    { title: "7/G", img: "/7g-poster.jpg", isPremium: true },
    { title: "Aarambham", img: "/aarambham-poster.jpg", isPremium: true },
    { title: "Agent Anand Santosh", img: "/agent-anand-poster.jpg", isPremium: true },
    { title: "Aithe 2.0", img: "/aithe2-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Akaali", img: "/akaali-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Akshara", img: "/akshara-poster.jpg", isPremium: true },
    { title: "Amma Rajyam Lo Kadapa Biddalu", img: "/amma-rajyam-poster.jpg", isPremium: true },
    { title: "Anaganaga O Athidhi", img: "/anaganaga-athidhi-poster.jpg", isPremium: true },
    { title: "Anasuya", img: "/anasuya-poster.jpg", isPremium: true },
    { title: "Angulika", img: "/angulika-poster.jpg", isPremium: true },
    { title: "Antony", img: "/antony-poster.jpg", isPremium: true },
    { title: "Anukoni Athidhi", img: "/anukoni-athidhi-poster.jpg", isPremium: true },
    { title: "Aparadhi", img: "/aparadhi-poster.jpg", isPremium: true },
    { title: "Arjun Suravaram", img: "/arjun-suravaram-poster.jpg", isPremium: true },
    { title: "Arjuna Phalguna", img: "/arjuna-phalguna-poster.jpg", isPremium: true },
    { title: "Asuraguru", img: "/asuraguru-poster.jpg", isPremium: true },
  ];

  const crime = [
    { title: "100 Crores", img: "/100-crores-poster.jpg", isPremium: true },
    { title: "16 Every Detail Count", img: "/16-detail-poster.jpg", isPremium: true },
    { title: "23 (Iravai Moodu)", img: "/23-iravai-moodu-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Aithe 2.0", img: "/aithe2-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Akaali", img: "/akaali-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Balu Gani Talkies", img: "/balu-gani-poster.jpg", isPremium: true },
    { title: "Bhamakalapam", img: "/bhamakalapam-poster.jpg", isPremium: true },
    { title: "Bloody Mary", img: "/bloody-mary-poster.jpg", isPremium: true },
    { title: "Case30", img: "/case30-poster.jpg", isPremium: true },
    { title: "Chunduru Police Station", img: "/chunduru-poster.jpg", isPremium: true },
    { title: "Crime Reel", img: "/crime-reel-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "CSI Sanatan", img: "/csi-sanatan-poster.jpg", isPremium: true },
    { title: "Dandupalya 1", img: "/dandupalya1-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Dochevaarevarura", img: "/dochevaarevarura-poster.jpg", isPremium: true },
    { title: "Donga Donga", img: "/donga-donga-poster.jpg", isPremium: true },
    { title: "Driver Jamuna", img: "/driver-jamuna-poster.jpg", isPremium: true },
    { title: "Garuda 2.0", img: "/garuda2-poster.jpg", isPremium: true },
    { title: "Harom Hara", img: "/harom-hara-poster.jpg", isPremium: true, isAgeRated: true },
    { title: "Hide N Seek", img: "/hide-n-seek-poster.jpg", isPremium: true },
    { title: "Hidimbha", img: "/hidimbha-poster.jpg", isPremium: true, isAgeRated: true },
  ];
  
  return (
    <main className="max-w-7xl mx-auto px-6 py-10 text-white">
      {/* Featured movie */}
      <section className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-4xl font-bold">Kothapallilo Okappudu</h1>
          <p className="text-sm text-gray-400">2025 • 2h 3m • Comedy Drama • U/A 16+</p>
          <p>
            Praveena Paruchuri directs Kothapallilo Okappudu. In this comedy-drama, Ramakrishna runs a small recording dance troupe. He loves Savithri, the granddaughter of a powerful landlord. Hoping to win her heart, he tries to bring her on stage, but a scandal turns his plans upside down. Watch the story of love, power and a rural life with superstition.
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-orange-500 px-6 py-2 rounded hover:bg-orange-600">
              Play Trailer
            </button>
            <button className="bg-white text-gray-900 px-6 py-2 rounded hover:bg-gray-200">
              Subscribe Now
            </button>
          </div>
          <div className="flex space-x-6 mt-4 text-gray-400">
            <button>🔈 Mute</button>
            <button>🔗 Share</button>
          </div>
        </div>
        <div className="md:w-1/3">
          <img
            src="/kothapallilo-okappudu-poster.jpg"
            alt="Kothapallilo Okappudu Poster"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>
      
      {/* Carousels Section */}
      <CardCarousel title="New Releases" items={newReleases} />
      <CardCarousel title="Ganesha & Family Time" items={ganeshaFamilyTime} />
      <CardCarousel title="Vere Level Office Reloaded" items={vereLevelOffice} />
      <CardCarousel title="Award Winning Movies" items={awardWinningMovies} />
      <CardCarousel title="Aha Originals" items={ahaOriginals} />
      <CardCarousel title="Recently Added" items={recentlyAdded} />
      <CardCarousel title="Evergreens on aha" items={evergreens} />
      <CardCarousel title="Trending Top 10" items={trendingTop10} />
      <CardCarousel title="K-Drama" items={kDrama} />
      <CardCarousel title="New Age Romance" items={newAgeRomance} />
      <CardCarousel title="Aha Specials" items={ahaSpecials} />
      <CardCarousel title="Upcoming On aha" items={upcoming} showAll={false} />
      <CardCarousel title="Mee aha with love" items={meeAha} />
      <CardCarousel title="Handpicked For You" items={handpicked} />
      <CardCarousel title="Blockbusters on aha" items={blockbusters} />
      <CardCarousel title="Live Channels" items={liveChannels} />
      
      {/* Genres section with smaller cards */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Genres</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {genres.map((genre, index) => (
            <MovieCard
              key={index}
              title={genre.title}
              img={genre.img}
              isSmall
            />
          ))}
        </div>
      </section>

      <CardCarousel title="Free Movies" items={freeMovies} />
      <CardCarousel title="Classic Thrillers" items={classicThrillers} />
      <CardCarousel title="Scream Party" items={screamParty} />
      <CardCarousel title="Devotional" items={devotional} />
      <CardCarousel title="Rewind Classics" items={rewindClassics} />
      <CardCarousel title="Telugu Indian Idol Season 3" items={teluguIdolS3} />
      <CardCarousel title="Aha Kids" items={ahaKids} />
      <CardCarousel title="Action" items={actions} />
      <CardCarousel title="Romance" items={romance} />
      <CardCarousel title="Drama" items={drama} />
      <CardCarousel title="Thriller" items={thriller} />
      <CardCarousel title="Crime" items={crime} />
    </main>
  );
};

const MoviesContent = () => {
  const trending = [
    { title: "Alappuzha Gymkhana", img: "/alappuzha-gymkhana-poster.jpg", isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: "/arjun-poster.jpg", isPremium: true },
    { title: "Brahma-Anandam", img: "/brahma-anandam-poster.jpg", isPremium: true },
    { title: "Rekhachithram", img: "/rekhachithram-poster.jpg", isPremium: true },
    { title: "Bhairathi Ranagal", img: "/bhairathi-poster.jpg", isPremium: true },
    { title: "Marco", img: "/marco-poster.jpg", isPremium: true },
    { title: "The Smile Man", img: "/the-smile-man-poster.jpg", isPremium: true },
    { title: "Razakar", img: "/razakar-poster.jpg", isPremium: true },
    { title: "Viswam", img: "/viswam-poster.jpg", isPremium: true },
    { title: "Martin", img: "/martin-poster.jpg", isPremium: true },
    { title: "Gorre Puranam", img: "/gorre-puranam-poster.jpg", isPremium: true },
    { title: "Prathinidhi 2", img: "/prathinidhi2-poster.jpg", isPremium: true },
    { title: "Rakshana", img: "/rakshana-poster.jpg", isPremium: true },
    { title: "Keedaa Cola", img: "/keedaa-cola-poster.jpg", isPremium: true },
    { title: "Dhoomam", img: "/dhoomam-poster.jpg", isPremium: true },
    { title: "Prasanna Vadanam", img: "/prasanna-vadanam-poster.jpg", isPremium: true },
    { title: "Vidya Vasula Aham", img: "/vidya-vasula-poster.jpg", isPremium: true },
    { title: "Geethanjali Malli Vachindi", img: "/geethanjali-poster.jpg", isPremium: true },
    { title: "Premalu", img: "/premalu-poster.jpg", isPremium: true },
    { title: "My Dear Donga", img: "/dear-donga-poster.jpg", isPremium: true },
  ];

  const newReleases = [
    { title: "Virgin Boys", img: "/virgin-boys-poster.jpg", isPremium: true },
    { title: "Vijayanand", img: "/vijayanand-poster.jpg", isPremium: true },
    { title: "PA... PA... (O Naanna)", img: "/pa-naanna-poster.jpg", isPremium: true },
    { title: "Saradhi", img: "/saradhi-poster.jpg", isPremium: true },
    { title: "Saree", img: "/saree-poster.jpg", isPremium: true },
    { title: "Kaliyugam 2064", img: "/kaliyugam-poster.jpg", isPremium: true },
    { title: "Sri Sri Sri Raja Vaaru", img: "/raja-vaaru-poster.jpg", isPremium: true },
    { title: "23 (Iravai Moodu)", img: "/23-iravai-moodu-poster.jpg", isPremium: true },
    { title: "Ghatikachalam", img: "/ghatikachalam-poster.jpg", isPremium: true },
    { title: "SIN(The Movie)", img: "/sin-poster.jpg", isPremium: true },
    { title: "Alappuzha Gymkhana", img: "/alappuzha-gymkhana-poster.jpg", isPremium: true },
    { title: "Eleven", img: "/eleven-poster.jpg", isPremium: true },
    { title: "Karthika Missing Case", img: "/karthika-poster.jpg", isPremium: true },
    { title: "Oka Yamudi Premakatha", img: "/yamudi-premakatha-poster.jpg", isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: "/arjun-poster.jpg", isPremium: true },
    { title: "Jolly O Gymkhana", img: "/jolly-gymkhana-poster.jpg", isPremium: true },
    { title: "Demon", img: "/demon-poster.jpg", isPremium: true },
    { title: "The Devil's Chair", img: "/devils-chair-poster.jpg", isPremium: true },
    { title: "Aparadhi", img: "/aparadhi-poster.jpg", isPremium: true },
    { title: "Solo Boy", img: "/solo-boy-poster.jpg", isPremium: true },
  ];

  const allTimeHits = [
    { title: "Atharintiki Daaredi", img: "/atharintiki-daaredi-poster.jpg", isPremium: true },
    { title: "Athadu", img: "/athadu-poster.jpg", isPremium: true },
    { title: "EEGA", img: "/eega-poster.jpg", isPremium: true },
    { title: "Vedam", img: "/vedam-poster.jpg", isPremium: true },
    { title: "Magadheera", img: "/magadheera-poster.jpg", isPremium: true },
    { title: "Simha", img: "/simha-poster.jpg", isPremium: true },
    { title: "Fidaa", img: "/fidaa-poster.jpg", isPremium: true },
    { title: "Stalin", img: "/stalin-poster.jpg", isPremium: true },
    { title: "Chakram", img: "/chakram-poster.jpg", isPremium: true },
    { title: "Ashok", img: "/ashok-poster.jpg", isPremium: true },
    { title: "Narasimhudu", img: "/narasimhudu-poster.jpg", isPremium: true },
    { title: "Sarocharu", img: "/sarocharu-poster.jpg", isPremium: true },
    { title: "Nippu", img: "/nippu-poster.jpg", isPremium: true },
    { title: "Don", img: "/don-poster.jpg", isPremium: true },
    { title: "Boss", img: "/boss-poster.jpg", isPremium: true },
    { title: "Shadow", img: "/shadow-poster.jpg", isPremium: true },
    { title: "DJ Tillu", img: "/dj-tillu-poster.jpg", isPremium: true },
    { title: "Das Ka Dhamki", img: "/das-ka-dhamki-poster.jpg", isPremium: true },
    { title: "Bheemla Nayak", img: "/bheemla-nayak-poster.jpg", isPremium: true },
    { title: "Love Story", img: "/love-story-poster.jpg", isPremium: true },
  ];

  const lovedByMasses = [
    { title: "Samajavaragamana", img: "/samajavaragamana-poster.jpg", isPremium: true },
    { title: "Chaavu Kaburu Challaga", img: "/chaavu-kaburu-poster.jpg", isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: "/ashoka-vanamlo-poster.jpg", isPremium: true },
    { title: "Month of Madhu", img: "/month-of-madhu-poster.jpg", isPremium: true },
    { title: "Keedaa Cola", img: "/keedaa-cola-poster.jpg", isPremium: true },
    { title: "Ambajipeta Marriage Band", img: "/ambajipeta-poster.jpg", isPremium: true },
    { title: "Malli Pelli", img: "/malli-pelli-poster.jpg", isPremium: true },
    { title: "Konchem Ishtam Konchem Kashtam", img: "/konchem-ishtam-poster.jpg", isPremium: true },
    { title: "Naandhi", img: "/naandhi-poster.jpg", isPremium: true },
    { title: "Sundaram Master", img: "/sundaram-master-poster.jpg", isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: "/vinaro-bhagyamu-poster.jpg", isPremium: true },
    { title: "Swathi Muthyam", img: "/swathi-muthyam-poster.jpg", isPremium: true },
    { title: "Raja Vaaru Rani Gaaru", img: "/raja-vaaru-poster.jpg", isPremium: true },
    { title: "Dikkulu Choodaku Ramayya", img: "/dikkulu-choodaku-poster.jpg", isPremium: true },
    { title: "Zombie Reddy", img: "/zombie-reddy-poster.jpg", isPremium: true },
    { title: "Mail", img: "/mail-poster.jpg", isPremium: true },
    { title: "Life Is Beautiful", img: "/life-is-beautiful-poster.jpg", isPremium: true },
    { title: "Arjun Suravaram", img: "/arjun-suravaram-poster.jpg", isPremium: true },
    { title: "Baby", img: "/baby-poster.jpg", isPremium: true },
    { title: "Colour Photo", img: "/colour-photo-poster.jpg", isPremium: true },
  ];
  
  return (
    <main className="max-w-7xl mx-auto px-6 py-10 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Movies</h1>
        <div className="flex items-center space-x-4">
          <select className="bg-gray-700 text-white rounded px-3 py-1">
            <option>Telugu</option>
            <option>English</option>
          </select>
          <button className="bg-orange-500 px-5 py-1 rounded hover:bg-orange-600">
            Subscribe Now
          </button>
          <button className="border border-orange-500 px-5 py-1 rounded hover:bg-orange-500 hover:text-white">
            Sign In
          </button>
        </div>
      </div>

      <section className="mb-12 bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold">Virgin Boys</h2>
          <p className="text-gray-400">2025 • 2h 11m • Romance • Comedy • A</p>
          <p>
            Virgin Boys is about three naive friends, Arya, Rony and Dundi. They enter a prestigious co-education college after completing their schooling. Unexpectedly, they had a clash with the wealthy kid. Meanwhile, these boys connect with different girls. Watch the fun, emotional campus story of first love, friendship and rivalry!
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src="/virgin-boys-poster.jpg"
            alt="Virgin Boys Poster"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Genres</h2>
        <div className="flex flex-wrap gap-4">
          {[
            "Romance", "Comedy", "Action", "Thriller", "Drama", "Horror",
            "Mystery", "Family", "Fantasy", "Biography",
          ].map((genre, i) => (
            <button
              key={i}
              className="bg-gray-700 hover:bg-gray-600 rounded px-4 py-2 cursor-pointer transition"
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      <CardCarousel title="Trending" items={trending} />
      <CardCarousel title="New Releases" items={newReleases} />
      <CardCarousel title="All Time Hits" items={allTimeHits} />
      <CardCarousel title="Loved by the Masses" items={lovedByMasses} />

      <section className="mb-12 bg-gray-800 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Get the Aha App</h2>
        <p className="mb-6 text-gray-300">
          Watch your favorite Telugu movies & shows anytime, anywhere.
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-green-600 px-6 py-3 rounded hover:bg-green-700 transition">
            Download for Android
          </button>
          <button className="bg-gray-300 text-black px-6 py-3 rounded hover:bg-gray-400 transition">
            Download for iOS
          </button>
        </div>
      </section>
    </main>
  );
};

const ShowsContent = () => {
    const popularShows = [
      { title: "Sarkaar", img: "/sarkaar-poster.jpg", isPremium: true },
      { title: "Unstoppable", img: "/unstoppable-poster.jpg", isPremium: true },
      { title: "Vere Level Office", img: "/vere-level-office-poster.jpg", isPremium: true },
      { title: "Telugu Indian Idol", img: "/telugu-idol-poster.jpg", isPremium: true },
      { title: "Cooku with Komali", img: "/cooku-with-komali-poster.jpg", isPremium: true },
      { title: "Dance Ikon", img: "/dance-ikon-poster.jpg", isPremium: true },
      { title: "Sarkaar 2", img: "/sarkaar2-poster.jpg", isPremium: true },
      { title: "Bhamakalapam", img: "/bhamakalapam-poster.jpg", isPremium: true },
      { title: "11th Hour", img: "/11th-hour-poster.jpg", isPremium: true },
      { title: "Chef mantra", img: "/chef-mantra-poster.jpg", isPremium: true },
    ];
  
    const hindiDubbed = [
      { title: "Arthamainda Arun Kumar", img: "/arthamainda-arun-poster.jpg", isPremium: true },
      { title: "My Dear Donga", img: "/dear-donga-poster.jpg", isPremium: true },
      { title: "Pavitra", img: "/pavitra-poster.jpg", isPremium: true },
      { title: "Locked", img: "/locked-poster.jpg", isPremium: true },
      { title: "SIN(The Movie)", img: "/sin-poster.jpg", isPremium: true },
      { title: "3 Roses", img: "/3-roses-poster.jpg", isPremium: true },
      { title: "Unstoppable with NBK", img: "/unstoppable-nbk-poster.jpg", isPremium: true },
      { title: "Chef mantra", img: "/chef-mantra-poster.jpg", isPremium: true },
      { title: "11th Hour", img: "/11th-hour-poster.jpg", isPremium: true },
      { title: "Bhamakalapam 2", img: "/bhamakalapam2-poster.jpg", isPremium: true },
    ];

    return (
      <main className="max-w-7xl mx-auto px-6 py-10 text-white">
        <h1 className="text-3xl font-bold mb-8">Shows</h1>

        <section className="mb-12 bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-3xl font-bold">Unstoppable with NBK</h2>
            <p className="text-gray-400">Talk Show • U/A 7+</p>
            <p>
              Nandamuri Balakrishna hosts an exciting talk show where he interacts with celebrities, politicians, and socialites. Get ready for some unfiltered conversations and shocking revelations!
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              src="/unstoppable-nbk-poster.jpg"
              alt="Unstoppable with NBK Poster"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        <CardCarousel title="Popular Shows" items={popularShows} />
        <CardCarousel title="Hindi Dubbed Shows" items={hindiDubbed} />
        <CardCarousel title="Telugu Web Series" items={popularShows} />
        <CardCarousel title="Comedy Shows" items={popularShows} />
      </main>
    );
};
  
const WatchFreeContent = () => {
  const featuredMovie = {
    title: "Utthama Villian",
    year: 2015,
    duration: "2h 30m",
    genres: "Drama",
    rating: "U/A 7+",
    description:
      "The story revolves around a superstar diagnosed with a brain tumour and decides to make his last comedy film with his mentor with whom he had a fall-out years ago.",
    poster: "/utthama-villian-poster.jpg",
  };

  const handleWatchClick = () => {
    alert("Enjoy watching Utthama Villian for free!");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-16 text-white">
      <div className="bg-gray-900 rounded-lg p-8 shadow-lg flex flex-col md:flex-row gap-8">
        <img
          src={featuredMovie.poster}
          alt={featuredMovie.title}
          className="w-full md:w-1/3 rounded-lg object-cover"
        />
        <div className="md:w-2/3 flex flex-col justify-center space-y-4">
          <h2 className="text-4xl font-bold">{featuredMovie.title}</h2>
          <p className="text-gray-400 text-lg">
            {featuredMovie.year} • {featuredMovie.duration} • {featuredMovie.genres}
          </p>
          <p className="text-yellow-400 font-semibold">{featuredMovie.rating}</p>
          <p className="text-gray-300 leading-relaxed">{featuredMovie.description}</p>
          <button
            onClick={handleWatchClick}
            className="mt-6 bg-green-600 hover:bg-green-700 px-8 py-3 rounded font-semibold transition"
          >
            Watch for Free
          </button>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold">
          Live chat: Chat with an Expert
        </button>
      </div>
    </div>
  );
};

const OffersContent = () => {
  const offers = [
    { id: 1, title: "50% Off on Annual Subscription", expiry: "Expires: Sep 30, 2025", details: "Get a flat 50% discount on your first year of subscription." },
    { id: 2, title: "Get 1 Month Free Trial", expiry: "Expires: Oct 15, 2025", details: "New users can enjoy a free trial for one month." },
    { id: 3, title: "Refer a Friend, Get 10% Off", expiry: "Valid for next 3 months", details: "Invite a friend and get a discount on your next purchase." },
    { id: 4, title: "Student Discount", expiry: "Verify with Student ID", details: "Students get an exclusive discount on monthly plans." }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Exclusive Offers</h1>
      <section className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Available Promotions</h3>
        <ul className="space-y-4">
          {offers.map((offer) => (
            <li key={offer.id} className="bg-gray-700 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <span className="text-lg font-bold">{offer.title}</span>
                <p className="text-gray-400 text-sm">{offer.details}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <small className="text-gray-400 block">{offer.expiry}</small>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded mt-2">
                  Claim Offer
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold">
          Live chat: Chat with an Expert
        </button>
      </div>
    </div>
  );
};

const MyAhaContent = () => {
  const myAhaItems = [
    { id: 1, title: "My Watchlist", count: 12, icon: "/watchlist-icon.png" },
    { id: 2, title: "Downloaded", count: 5, icon: "/download-icon.png" },
    { id: 3, title: "Favorites", count: 8, icon: "/favorites-icon.png" },
  ];

  const recentlyWatched = [
    { title: "Bhamakalapam 2", img: "/bhamakalapam2-poster.jpg", isPremium: true },
    { title: "Maruthi Nagar Subrahmanyam", img: "/maruthi-nagar-poster.jpg", isPremium: true },
    { title: "Samajavaragamana", img: "/samajavaragamana-poster.jpg", isPremium: true },
    { title: "Polimera 2", img: "/polimera2-poster.jpg", isPremium: true },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">My Aha</h1>

      <section className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Your Content</h3>
        <ul className="flex flex-wrap justify-center gap-6">
          {myAhaItems.map((item) => (
            <li
              key={item.id}
              className="bg-gray-700 p-4 rounded-lg flex flex-col items-center flex-1 min-w-[150px] max-w-[200px]"
            >
              {item.icon && <img src={item.icon} alt={item.title} className="w-12 h-12 mb-2" />}
              <span className="text-xl font-bold">{item.count}</span>
              <span className="text-gray-400 text-center">{item.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <CardCarousel title="Continue Watching" items={recentlyWatched} />
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold">
          Live chat: Chat with an Expert
        </button>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
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
    <div className="bg-gray-950 min-h-screen font-sans">
      <Navbar current={current} setCurrent={setCurrent} />
      {renderContent()}
      <Footer />
    </div>
  );
}
