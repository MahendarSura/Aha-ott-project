import React, { useState } from "react";

// Placeholder image to prevent broken links
const PLACEHOLDER_IMG = "https://placehold.co/150x225/A50000/ffffff?text=Poster";

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
  // Real Telugu movie poster URLs
  // The following movie posters have been updated based on user request.
  const moviePosters = {
    sarkaar: "https://m.media-amazon.com/images/M/MV5BMmM3OTkwYjctNTdlYS00YjRiLWE2ZTQtTFljYTdlOGZkODg5XkEyXkFqcGdeQXVyMjg4OTUxMjg@._V1_.jpg",
    kothapallilo: "https://assets.gadgets360cdn.com/pricee/assets/product/202305/Kothapalli-Lo-Okappudu-poster_1684742742.jpeg",
    papa: "https://m.media-amazon.com/images/M/MV5BZWQ4MGM1MmEtMWU5Mi00MjRjLWE0NTUtYmY0N2YzNDY2ZTExXkEyXkFqcGdeQXVyMjk4MDQ1NDk@._V1_.jpg",
    network: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00329094-pgrhftdaxm-square_image.jpg",
    virginBoys: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00318531-hdwkqwfrcs-square_image.jpg",
    vijayanand: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00345638-qfghwzswag-square_image.jpg",
    premalu: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00388916-pfrfzzpfdj-square_image.jpg",
    vidyaVasula: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00357608-wzaztvvptw-square_image.jpg",
    samajavaragamana: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00344552-kpgwddkswr-square_image.jpg",
    djTillu: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00319131-lryjtwsqks-square_image.jpg",
    brahmanandam: "https://www.thegreatandhra.com/image/1024/2023/12/28/brahmaanandam-movie-poster_10.jpg",
    ashokaVanamlo: "https://assets.gadgets360cdn.com/pricee/assets/product/202204/Ashoka-Vanamlo-Arjuna-Kalyanam-poster_1650860824.jpeg",
    vinaroBhagyamu: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00344933-jrtkwuwnnm-square_image.jpg",
    janakaAyithe: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00366663-rckdsvzrcs-square_image.jpg",
    chinnaKatha: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00389363-ahzudgksmk-square_image.jpg",
    razakar: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00389270-zssvthgssm-square_image.jpg",
    baby: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00362395-lqkkkwkkhg-square_image.jpg",
    colourPhoto: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00146757-vrythngwtd-square_image.jpg",
    pottel: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00362372-tgrdpsqckg-square_image.jpg",
    ambajipeta: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00384877-nphrwhpmgp-square_image.jpg",
    rajuYadav: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00392097-xddktdxczt-square_image.jpg",
    mercyKilling: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00397750-gzhvcmwldn-square_image.jpg",
    polimera2: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00373079-qjtvnpxzsq-square_image.jpg",
    monthOfMadhu: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00350485-rkhxxdtpgs-square_image.jpg",
    sathiGani: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00355415-pnttxdzsgw-square_image.jpg",
    baluGani: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00355325-mxgdtsrrwz-square_image.jpg",
    mixUp: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00392331-wnwsmqsswm-square_image.jpg",
    superOver: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00305086-rqrchmxtsq-square_image.jpg",
    senapathi: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00320645-wnpdtcwmwm-square_image.jpg",
    naandhi: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00306305-jppmdtkmxw-square_image.jpg",
    pandavulu: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00015569-rchjckwljd-square_image.jpg",
    sagaraSangamam: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00000966-dfrstwnqnj-square_image.jpg",
    seethammaVakitlo: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00010078-dczhzwvzhz-square_image.jpg",
    swathiMuthyam: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00001880-lklbrmvjts-square_image.jpg",
    athadu: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00002008-qckvtdkmws-square_image.jpg",
    swayamKrushi: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00000787-wthwxdmwmd-square_image.jpg",
    chakram: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00002166-mndmcmmkgs-square_image.jpg",
    apathbandhavudu: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00001083-pttdmmntqs-square_image.jpg",
    suryavamsam: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00001402-ppqzzrddsd-square_image.jpg",
    thuppaki: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00010955-kdrzszrmkq-square_image.jpg",
    nenuRowdy: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00033003-pfszprqghg-square_image.jpg",
    nagaram: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00309990-lkmhsqmrmg-square_image.jpg",
    hundredDays: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00014022-ppqzzrddsd-square_image.jpg",
    selfieRaja: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00043810-klpwsfspgw-square_image.jpg",
    mrKarthik: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00305108-jddjtwmswg-square_image.jpg",
    memu: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00057404-fsgmrmdsmk-square_image.jpg",
    utthamaVillain: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00010169-zpslkmgsqk-square_image.jpg",
    yuddhaBhoomi: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00013898-swgprqfsqk-square_image.jpg",
    sixteen: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00327315-zkmwthwsxs-square_image.jpg",
    anasuya: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00004246-mzzltdkwdc-square_image.jpg",
    midnightMurders: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00392095-rddkwmdkdr-square_image.jpg",
    forensic: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00309195-gprhshqzwj-square_image.jpg",
    locked: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00310243-shltswnwwh-square_image.jpg",
    chunduru: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00397737-lhmssndsmj-square_image.jpg",
    jallikattu: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00318357-jdwkwhsmdm-square_image.jpg",
    anukoniAthidhi: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00309852-zssqkmwtdt-square_image.jpg",
    nipahVirus: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00330990-lqjwszzqmg-square_image.jpg",
    trance: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00125868-hbrstqmkrm-square_image.jpg",
    coldCase: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00310578-jkhthwzwdc-square_image.jpg",
    anaganaga: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00308007-ghqswgmtfs-square_image.jpg",
    theRoad: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00384878-ptndzsqtdg-square_image.jpg",
    neneNaa: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00341731-pwshzqqrqc-square_image.jpg",
    bloodyMary: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00325492-wzhzzsvtwt-square_image.jpg",
    csiSanatan: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00332824-dwzsvtnrdd-square_image.jpg",
    arjunSuravaram: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00057401-yrtldjrqtd-square_image.jpg",
    tantra: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00390641-kttzthsqsq-square_image.jpg",
    kajalKarthika: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00329949-rmrnjgkhwj-square_image.jpg",
    bhoothaddam: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00388915-njttvtrgkk-square_image.jpg",
    pindam: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00388914-qgmdqzhqwm-square_image.jpg",
    hidimbha: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00355416-mdsgtdzzsj-square_image.jpg",
    raniGari: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00350483-tgrkthndgs-square_image.jpg",
    mataRaani: "https://assets-in.bmscdn.com/discovery-catalog/events/truly/et00382903-rqfswrdnwn-square_image.jpg",

    // New Indian movie posters added
    aadujeevitham: "https://m.media-amazon.com/images/M/MV5BMmMwNWM3MTItYjJlMS00NmQ4LWFhOWMtYmU1MzA1NjcwODdjXkEyXkFqcGdeQXVyMTUwMDg3OTg3._V1_FMjpg_UX1000_.jpg",
    manjummel: "https://m.media-amazon.com/images/M/MV5BNTI2YjE5YjEtODc3NC00YjBjLTg3MzYtMDYwZjE3ZGU0ZDUyXkEyXkFqcGdeQXVyMTY5Mjg5MzE3._V1_.jpg",
    kantara: "https://m.media-amazon.com/images/M/MV5BNDUyOTY5MzMtNDdlZi00YzliLThmZDYtOTIxMjMyN2UyYWM4XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
    rrr: "https://m.media-amazon.com/images/M/MV5BODg1OTNlNGEtOTliYS00MDUwLWI4ODQtYjQ3MjMyYjJjYjZkXkEyXkFqcGdeQXVyODE5NzE3OTEz._V1_.jpg",
    jawan: "https://m.media-amazon.com/images/M/MV5BNmQyN2QzNGYtOTgzYS00YjBjLThlNDUtNTIyYjFlYjI2YjQyXkEyXkFqcGdeQXVyMTA5NzkwOTYx._V1_.jpg",
    vikram: "https://m.media-amazon.com/images/M/MV5BYzA4ZTgxMTctYjEzYi00MDY4LWEyMDktMGY3YTcxMGYwZGIwXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
    salaar: "https://m.media-amazon.com/images/M/MV5BMjkwYzkwNzMtODg4MS00MTYxLTk1NzUtYTg0ZDYzODMyYjQ1XkEyXkFqcGdeQXVyMTUwMDg3OTg3._V1_FMjpg_UX1000_.jpg",
    gadar2: "https://m.media-amazon.com/images/M/MV5BYzhmN2NjM2EtZjYyNC00M2YzLWFiMDctMDIwZDIxZDNmZTAwXkEyXkFqcGdeQXVyMTUyMDY3Mzc3._V1_.jpg",
  };

  const newReleases = [
    { title: "Sarkaar 5 Ep 12", img: moviePosters.sarkaar, isPremium: true },
    { title: "Kothapallilo Okappudu", img: moviePosters.kothapallilo, isPremium: true },
    { title: "PA... PA... (O Naanna)", img: moviePosters.papa, isPremium: true },
    { title: "Network", img: moviePosters.network, isPremium: true },
    { title: "Virgin Boys", img: moviePosters.virginBoys, isPremium: true },
    { title: "Vijayanand", img: moviePosters.vijayanand, isPremium: true, isAgeRated: true },
    { title: "Kaliyugam 2064", img: moviePosters.jawan, isPremium: true },
    { title: "Saree", img: moviePosters.kantara, isPremium: true },
    { title: "Saradhi", img: moviePosters.rrr, isPremium: true, isAgeRated: true },
    { title: "Sri Sri Sri Raja Vaaru", img: moviePosters.vikram, isPremium: true },
    { title: "Fusion Meets Medly", img: moviePosters.aadujeevitham, isPremium: true },
    { title: "Masti's (The Movie)", img: moviePosters.manjummel, isPremium: true },
    { title: "23 (Iravai Moodu)", img: moviePosters.gadar2, isPremium: true, isAgeRated: true },
    { title: "Ghatikachalam", img: moviePosters.salaar, isPremium: true },
    { title: "Oka Yamudi Premakatha", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Karthika Missing Case", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "SIN(The Movie)", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Arjun S/o Vyjayanthi", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Demon", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
  ];

  const ganeshaFamilyTime = [
    { title: "Brahma-Anandam", img: moviePosters.brahmanandam, isPremium: true },
    { title: "Premalu", img: moviePosters.premalu, isPremium: true },
    { title: "Vidya Vasula Aham", img: moviePosters.vidyaVasula, isPremium: true },
    { title: "Samajavaragamana", img: moviePosters.samajavaragamana, isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: moviePosters.ashokaVanamlo, isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: moviePosters.vinaroBhagyamu, isPremium: true },
    { title: "DJ Tillu", img: moviePosters.djTillu, isPremium: true },
    { title: "Maruthi Nagar Subrahmanyam", img: moviePosters.kantara, isPremium: true },
    { title: "Janaka Ayithe Ganaka", img: moviePosters.janakaAyithe, isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: moviePosters.chinnaKatha, isPremium: true },
  ];

  const vereLevelOffice = [
    { title: "Movie Review", img: moviePosters.jawan, isPremium: true },
    { title: "The Saree Boss", img: moviePosters.rrr, isPremium: true },
    { title: "The Office Love Stories", img: moviePosters.aadujeevitham, isPremium: true },
    { title: "Cow dung cake sale", img: moviePosters.gadar2, isPremium: true },
    { title: "Boycott juniors", img: moviePosters.vikram, isPremium: true },
    { title: "The Potluck", img: moviePosters.salaar, isPremium: true },
    { title: "Training Cancelled, Potluck Approved.", img: moviePosters.manjummel, isPremium: true },
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
    { title: "Razakar", img: moviePosters.razakar, isPremium: true, isAgeRated: true },
    { title: "Baby", img: moviePosters.baby, isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: moviePosters.chinnaKatha, isPremium: true },
    { title: "Colour Photo", img: moviePosters.colourPhoto, isPremium: true },
    { title: "Pottel", img: moviePosters.pottel, isPremium: true },
    { title: "Ambajipeta Marriage Band", img: moviePosters.ambajipeta, isPremium: true },
    { title: "Raju Yadav", img: moviePosters.rajuYadav, isPremium: true },
    { title: "Mercy Killing", img: moviePosters.mercyKilling, isPremium: true },
    { title: "Polimera 2", img: moviePosters.polimera2, isPremium: true, isAgeRated: true },
    { title: "Month of Madhu", img: moviePosters.monthOfMadhu, isPremium: true, isAgeRated: true },
  ];

  const ahaOriginals = [
    { title: "SARKAAR", img: moviePosters.jawan, isPremium: true },
    { title: "Vere Level Office", img: moviePosters.kantara, isPremium: true },
    { title: "Masti's (The Movie)", img: moviePosters.rrr, isPremium: true, isAgeRated: true },
    { title: "SIN(The Movie)", img: moviePosters.vikram, isPremium: true, isAgeRated: true },
    { title: "Telugu Indian Idol", img: moviePosters.aadujeevitham, isPremium: true },
    { title: "Dance Ikon", img: moviePosters.manjummel, isPremium: true },
    { title: "Hometown", img: moviePosters.gadar2, isPremium: true },
    { title: "Chef mantra", img: moviePosters.salaar, isPremium: true },
    { title: "Emoji", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Unstoppable", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bhamakalapam 2", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "My Dear Donga", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Arthamainda Arun Kumar", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bhamakalapam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Sathi Gani Rendu Ekaralu", img: moviePosters.sathiGani, isPremium: true },
    { title: "Balu Gani Talkies", img: moviePosters.baluGani, isPremium: true },
    { title: "Mix Up", img: moviePosters.mixUp, isPremium: true, isAgeRated: true },
    { title: "Super Over", img: moviePosters.superOver, isPremium: true },
    { title: "Senapathi", img: moviePosters.senapathi, isPremium: true },
  ];

  const recentlyAdded = [
    { title: "Kothapallilo Okappudu", img: moviePosters.kothapallilo, isPremium: true },
    { title: "Sarkaar 5 Ep 12", img: moviePosters.sarkaar, isPremium: true },
    { title: "The Saree Boss", img: moviePosters.vikram, isPremium: true },
    { title: "Vijayanand", img: moviePosters.vijayanand, isPremium: true },
    { title: "Network", img: moviePosters.network, isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: moviePosters.rrr, isPremium: true },
    { title: "Jolly O Gymkhana", img: moviePosters.jawan, isPremium: true },
    { title: "Aparadhi", img: moviePosters.aadujeevitham, isPremium: true },
    { title: "The Devil's Chair", img: moviePosters.salaar, isPremium: true, isAgeRated: true },
    { title: "Rekhachithram", img: moviePosters.manjummel, isPremium: true },
    { title: "Marco", img: moviePosters.gadar2, isPremium: true, isAgeRated: true },
    { title: "Hometown", img: moviePosters.kantara, isPremium: true },
    { title: "Veeraaraju 1991", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Brahma-Anandam", img: moviePosters.brahmanandam, isPremium: true },
    { title: "Naandhi", img: moviePosters.naandhi, isPremium: true },
    { title: "Pandavulu Pandavulu Tummeda", img: moviePosters.pandavulu, isPremium: false },
    { title: "Chef Mantra Project K Episode 4", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Vere Level Office", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Vivekanandan Viral", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Kalpana 3", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
  ];

  const evergreens = [
    { title: "Sagara Sangamam", img: moviePosters.sagaraSangamam, isPremium: true },
    { title: "Seethamma Vakitlo Sirimalle Chettu", img: moviePosters.seethammaVakitlo, isPremium: true },
    { title: "Swathi Muthyam", img: moviePosters.swathiMuthyam, isPremium: true },
    { title: "Athadu", img: moviePosters.athadu, isPremium: true },
    { title: "Swayam Krushi", img: moviePosters.swayamKrushi, isPremium: true },
    { title: "Chakram", img: moviePosters.chakram, isPremium: true },
    { title: "Apathbandhavudu", img: moviePosters.apathbandhavudu, isPremium: true },
    { title: "Suryavamsam", img: moviePosters.suryavamsam, isPremium: true },
  ];

  const trendingTop10 = [
    { title: "Kothapallilo Okappudu", img: moviePosters.kothapallilo, isPremium: true },
    { title: "Sarkaar 5 Ep 12", img: moviePosters.sarkaar, isPremium: true },
    { title: "PA... PA... (O Naanna)", img: moviePosters.papa, isPremium: true },
    { title: "Network", img: moviePosters.network, isPremium: true },
    { title: "Virgin Boys", img: moviePosters.virginBoys, isPremium: true, isAgeRated: true },
    { title: "Vijayanand", img: moviePosters.vijayanand, isPremium: true },
    { title: "Rekhachithram", img: moviePosters.manjummel, isPremium: true },
    { title: "Telugu Indian Idol", img: moviePosters.aadujeevitham, isPremium: true },
    { title: "Kaliyugam 2064", img: moviePosters.gadar2, isPremium: true },
    { title: "Marco", img: moviePosters.salaar, isPremium: true, isAgeRated: true },
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
    { title: "Mix Up", img: moviePosters.mixUp, isPremium: true, isAgeRated: true },
    { title: "Masti's", img: moviePosters.manjummel, isPremium: true },
    { title: "Krishna and His Leela", img: moviePosters.rrr, isPremium: true },
  ];

  const ahaSpecials = [
    { title: "Locked", img: moviePosters.locked, isPremium: true },
    { title: "Unstoppable", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: moviePosters.ashokaVanamlo, isPremium: true },
    { title: "Ori Devuda", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: moviePosters.chinnaKatha, isPremium: true },
    { title: "Sri Ramadasu", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Stalin", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Simha", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Fidaa", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Athadu", img: moviePosters.athadu, isPremium: true },
    { title: "Adhurs", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Khakee", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Zombie Reddy", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Telugu Indian Idol", img: moviePosters.aadujeevitham, isPremium: true },
    { title: "Das Ka Dhamki", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Janaka Ayithe Ganaka", img: moviePosters.janakaAyithe, isPremium: true },
    { title: "Krack", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Pottel", img: moviePosters.pottel, isPremium: true },
    { title: "3 Roses", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Bhamakalapam 2", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const upcoming = [
    { title: "Telugu Indian Idol Season 4 - Launch Promo", img: PLACEHOLDER_IMG, isPremium: false },
  ];

  const meeAha = [
    { title: "Love Story", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Premalu", img: moviePosters.premalu, isPremium: true },
    { title: "Colour Photo", img: moviePosters.colourPhoto, isPremium: true },
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
    { title: "Sathi Gani Rendu Ekaralu", img: moviePosters.sathiGani, isPremium: true },
    { title: "Samajavaragamana", img: moviePosters.samajavaragamana, isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: moviePosters.ashokaVanamlo, isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: moviePosters.vinaroBhagyamu, isPremium: true },
    { title: "Swathi Muthyam", img: moviePosters.swathiMuthyam, isPremium: true },
    { title: "SR Kalyanamandapam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Laggam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bheemla Nayak", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bhamakalapam 2", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Love Story", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const blockbusters = [
    { title: "Polimera 2", img: moviePosters.polimera2, isPremium: true, isAgeRated: true },
    { title: "Sagara Sangamam", img: moviePosters.sagaraSangamam, isPremium: true },
    { title: "Karthikeya", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Samajavaragamana", img: moviePosters.samajavaragamana, isPremium: true },
    { title: "Chandamama", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Khaidi", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Keedaa Cola", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Swayam Krushi", img: moviePosters.swayamKrushi, isPremium: true },
    { title: "Shankara Bharanam", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Masooda", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true },
    { title: "Krack", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Bhamakalapam 2", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "DJ Tillu", img: moviePosters.djTillu, isPremium: true },
    { title: "Bheemla Nayak", img: PLACEHOLDER_IMG, isPremium: true },
    { title: "Premalu", img: moviePosters.premalu, isPremium: true },
    { title: "Baby", img: moviePosters.baby, isPremium: true },
  ];

  const liveChannels = [
    { title: "TV9 Telugu Live TV", img: PLACEHOLDER_IMG, isPremium: true },
  ];

  const genres = [
    { title: "Telugu Drama Movies", img: moviePosters.vikram, isSmall: true },
    { title: "Telugu Action Movies", img: moviePosters.rrr, isSmall: true },
    { title: "Telugu Romance Movies", img: moviePosters.premalu, isSmall: true },
    { title: "Telugu Comedy Movies", img: moviePosters.djTillu, isSmall: true },
    { title: "Telugu Thriller Movies", img: moviePosters.locked, isSmall: true },
    { title: "Telugu Crime Movies", img: moviePosters.forensic, isSmall: true },
    { title: "Romance Comedy", img: moviePosters.mixUp, isSmall: true },
    { title: "Family Drama", img: moviePosters.swathiMuthyam, isSmall: true },
    { title: "Devotional", img: PLACEHOLDER_IMG, isSmall: true },
    { title: "Horror Comedy", img: PLACEHOLDER_IMG, isSmall: true },
  ];

  const freeMovies = [
    { title: "Thuppaki", img: moviePosters.thuppaki, isSmall: true },
    { title: "Nenu Rowdy Ne", img: moviePosters.nenuRowdy, isSmall: true },
    { title: "Nagaram", img: moviePosters.nagaram, isSmall: true },
    { title: "100 Days Of Love", img: moviePosters.hundredDays, isSmall: true },
    { title: "Selfie Raja", img: moviePosters.selfieRaja, isSmall: true },
    { title: "Mr Karthik", img: moviePosters.mrKarthik, isSmall: true },
    { title: "Memu", img: moviePosters.memu, isSmall: true },
    { title: "Utthama Villian", img: moviePosters.utthamaVillain, isSmall: true },
    { title: "Yuddha Bhoomi", img: moviePosters.yuddhaBhoomi, isSmall: true },
  ];

  const classicThrillers = [
    { title: "16 Every Detail Count", img: moviePosters.sixteen, isPremium: true, isSmall: true },
    { title: "Anasuya", img: moviePosters.anasuya, isPremium: true, isSmall: true },
    { title: "Midnight Murders", img: moviePosters.midnightMurders, isPremium: true, isSmall: true },
    { title: "Forensic", img: moviePosters.forensic, isPremium: true, isSmall: true },
    { title: "Locked", img: moviePosters.locked, isPremium: true, isSmall: true },
    { title: "Chunduru Police Station", img: moviePosters.chunduru, isPremium: true, isSmall: true },
    { title: "Vetrimaaran's Jallikattu", img: moviePosters.jallikattu, isPremium: true, isSmall: true },
    { title: "Anukoni Athidhi", img: moviePosters.anukoniAthidhi, isPremium: true, isSmall: true },
    { title: "Nipah Virus", img: moviePosters.nipahVirus, isPremium: true, isSmall: true },
    { title: "Trance", img: moviePosters.trance, isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Cold Case", img: moviePosters.coldCase, isPremium: true, isSmall: true },
    { title: "Anaganaga O Athidhi", img: moviePosters.anaganaga, isPremium: true, isSmall: true },
    { title: "The Road", img: moviePosters.theRoad, isPremium: true, isSmall: true },
    { title: "Nene Naa", img: moviePosters.neneNaa, isPremium: true, isSmall: true },
    { title: "Khakee", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Senapathi", img: moviePosters.senapathi, isPremium: true, isSmall: true },
    { title: "Naandhi", img: moviePosters.naandhi, isPremium: true, isSmall: true },
    { title: "Bloody Mary", img: moviePosters.bloodyMary, isPremium: true, isSmall: true },
    { title: "CSI Sanatan", img: moviePosters.csiSanatan, isPremium: true, isSmall: true },
    { title: "Arjun Suravaram", img: moviePosters.arjunSuravaram, isPremium: true, isSmall: true },
  ];

  const screamParty = [
    { title: "Tantra", img: moviePosters.tantra, isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Polimera 2", img: moviePosters.polimera2, isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Kajal Karthika", img: moviePosters.kajalKarthika, isPremium: true, isSmall: true },
    { title: "Bhoothaddam Bhaskar Narayana", img: moviePosters.bhoothaddam, isPremium: true, isSmall: true },
    { title: "Masooda", img: PLACEHOLDER_IMG, isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Pindam", img: moviePosters.pindam, isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Hidimbha", img: moviePosters.hidimbha, isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Cold Case", img: moviePosters.coldCase, isPremium: true, isSmall: true },
    { title: "Rani Gari Bangala", img: moviePosters.raniGari, isPremium: true, isSmall: true },
    { title: "Mata Raani Mounamidi", img: moviePosters.mataRaani, isPremium: true, isSmall: true },
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
    { title: "Suryavamsam", img: moviePosters.suryavamsam, isPremium: true, isSmall: true },
    { title: "Premabhishekam", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Premikulu", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
    { title: "Sri Ramadasu", img: PLACEHOLDER_IMG, isPremium: true, isSmall: true },
  ];

  const teluguIdolS3 = [
    { title: "Launch - Auditions Day 1", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Auditions Day 2", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Auditions Day 3", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Auditions Day 4", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Auditions Day 5", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Grand Premier", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Grand Premier Day 2", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Bhavageetalu Special", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Chithra's Magic", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Swarana Sangeetham", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Jury's Choice", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Guru Brahma", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "90s Melodies", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Romantic Melodies", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
    { title: "Challenger Round", img: PLACEHOLDER_IMG, isPremium: false, isSmall: true },
  ];

  return (
    <div className="bg-gray-800 text-white font-sans min-h-screen">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      ></link>
      <header className="px-6 py-4 bg-gray-900 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-orange-500">
          Aha Video - తెలుగు
        </h1>
      </header>
      <main className="p-6 md:p-12 space-y-10">
        <section className="relative h-60 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://m.media-amazon.com/images/S/pv-target-images/2a35368a5c3702587f730248e353b30d0617637841c66f50c0590a7833075c35._SX1080_SY608_FMjpg_.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end p-6 md:p-12">
            <div>
              <h2 className="text-2xl md:text-5xl font-bold mb-2">
                DJ Tillu
              </h2>
              <p className="hidden md:block text-gray-300">
                A young man who loves music and living life to the fullest.
              </p>
              <button className="mt-4 bg-orange-500 px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors">
                Watch Now
              </button>
            </div>
          </div>
        </section>

        <CardCarousel title="కొత్తగా విడుదలైనవి" items={newReleases} />
        <CardCarousel title="గణేష్ పండుగ స్పెషల్" items={ganeshaFamilyTime} />
        <CardCarousel title="వెరీ లెవెల్ ఆఫీస్" items={vereLevelOffice} />
        <CardCarousel title="అవార్డ్ విన్నింగ్ సినిమాలు" items={awardWinningMovies} />
        <CardCarousel title="అహ ఒరిజినల్స్" items={ahaOriginals} />
        <CardCarousel title="రీసెంట్ గా చేర్చబడినవి" items={recentlyAdded} />
        <CardCarousel title="ఎవర్‌గ్రీన్స్" items={evergreens} />
        <CardCarousel title="ట్రెండింగ్ టాప్ 10" items={trendingTop10} />
        <CardCarousel title="కొత్తగా చేర్చబడినవి" items={kDrama} />
        <CardCarousel title="న్యూ ఏజ్ రొమాన్స్" items={newAgeRomance} />
        <CardCarousel title="అహ స్పెషల్స్" items={ahaSpecials} />
        <CardCarousel title="వచ్చేవి" items={upcoming} showAll={false} />
        <CardCarousel title="మీ అహ" items={meeAha} />
        <CardCarousel title="మా ప్రత్యేక ఎంపిక" items={handpicked} />
        <CardCarousel title="బ్లాక్‌బస్టర్స్" items={blockbusters} />
        <CardCarousel title="లైవ్ ఛానెల్స్" items={liveChannels} />
        <CardCarousel title="జానర్స్" items={genres} isSmall={true} showAll={false} />
        <CardCarousel title="ఉచిత సినిమాలు" items={freeMovies} isSmall={true} showAll={false} />
        <CardCarousel title="క్లాసిక్ థ్రిల్లర్స్" items={classicThrillers} isSmall={true} />
        <CardCarousel title="స్క్రీమ్ పార్టీ" items={screamParty} isSmall={true} />
        <CardCarousel title="భక్తి" items={devotional} />
        <CardCarousel title="రీవైండ్ క్లాసిక్స్" items={rewindClassics} isSmall={true} />
        <CardCarousel title="తెలుగు ఇండియన్ ఐడల్ S3" items={teluguIdolS3} isSmall={true} />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <script src="https://cdn.tailwindcss.com"></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Navbar current={currentPage} setCurrent={setCurrentPage} />
      <HomeContent />
    </div>
  );
};

export default App;
