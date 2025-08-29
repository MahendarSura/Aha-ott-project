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
    { title: "Sarkaar 5 Ep 12", img: "https://tse1.mm.bing.net/th/id/OIP.gNn5aY8qT3M1zH6X7G8R9eT9h1W5wY2oQ", isPremium: true },
    { title: "Kothapallilo Okappudu", img: "https://tse3.mm.bing.net/th/id/OIP.2i8V2oX3vC6z0fC1Z6rW9iT6xO4aD2f2o", isPremium: true },
    { title: "PA... PA... (O Naanna)", img: "https://tse4.mm.bing.net/th/id/OIP.a1s2d3f4g5h6j7k8l9zxcvbnm_y1u2i3o4p5a6s7d8f9g0h1j2k3l4z", isPremium: true },
    { title: "Movie Review", img: "https://tse1.mm.bing.net/th/id/OIP.q-r-s-t-u-v-w-x-y-z-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p", isPremium: true },
    { title: "Network", img: "https://tse3.mm.bing.net/th/id/OIP.r_s_t_u_v_w_x_y_z_a_b_c_d_e_f_g_h_i_j_k_l_m_n_o", isPremium: true },
    { title: "Virgin Boys", img: "https://tse4.mm.bing.net/th/id/OIP.a_b_c_d_e_f_g_h_i_j_k_l_m_n_o_p_q_r_s_t_u_v_w_x_y_z", isPremium: true },
    { title: "Vijayanand", img: "https://tse4.mm.bing.net/th/id/OIP.b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z", isPremium: true, isAgeRated: true },
    { title: "Kaliyugam 2064", img: "https://tse1.mm.bing.net/th/id/OIP.e1r2t3y4u5i6o7p8a9s0d1f2g3h4j5k6l7zxcvbnm", isPremium: true },
    { title: "Saree", img: "https://tse3.mm.bing.net/th/id/OIP.u-w-e-t-y-r-p-o-l-k-j-h-g-f-d-s-a-z-x-c-v-b-n-m", isPremium: true },
    { title: "Saradhi", img: "https://tse2.mm.bing.net/th/id/OIP.m-o-u-s-e-t-r-a-p-z-e-b-r-a-l-i-o-n-t-i-g-e-r", isPremium: true, isAgeRated: true },
    { title: "Sri Sri Sri Raja Vaaru", img: "https://tse1.mm.bing.net/th/id/OIP.s-r-i-s-r-i-s-r-i-r-a-j-a-v-a-a-r-u-t-u-h-o", isPremium: true },
    { title: "Fusion Meets Medly", img: "https://tse1.mm.bing.net/th/id/OIP.e-e-l-i-f-u-s-i-o-n-m-e-e-t-s-m-e-d-l-y-i-m", isPremium: true },
    { title: "Masti's (The Movie)", img: "https://tse4.mm.bing.net/th/id/OIP.m-a-s-t-i-s-t-h-e-m-o-v-i-e-p-o-s-t-e-r-s", isPremium: true },
    { title: "23 (Iravai Moodu)", img: "https://tse4.mm.bing.net/th/id/OIP.a-n-d-r-o-i-d-i-r-a-v-a-i-m-o-o-d-u", isPremium: true, isAgeRated: true },
    { title: "Ghatikachalam", img: "https://tse3.mm.bing.net/th/id/OIP.g-h-a-t-i-k-a-c-h-a-l-a-m-p-o-s-t-e-r-e-d-i-t", isPremium: true },
    { title: "Oka Yamudi Premakatha", img: "https://tse3.mm.bing.net/th/id/OIP.o-k-a-y-a-m-u-d-i-p-r-e-m-a-k-a-t-h-a-p-o-s", isPremium: true, isAgeRated: true },
    { title: "Karthika Missing Case", img: "https://tse3.mm.bing.net/th/id/OIP.k-a-r-t-h-i-k-a-m-i-s-s-i-n-g-c-a-s-e-p-o-s", isPremium: true },
    { title: "SIN(The Movie)", img: "https://tse2.mm.bing.net/th/id/OIP.s-i-n-t-h-e-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
    { title: "Arjun S/o Vyjayanthi", img: "https://tse4.mm.bing.net/th/id/OIP.a-r-j-u-n-s-o-v-y-j-a-y-a-n-t-h-i-p-o-s-t-e-r", isPremium: true },
    { title: "Demon", img: "https://tse4.mm.bing.net/th/id/OIP.d-e-m-o-n-p-o-s-t-e-r-s", isPremium: true, isAgeRated: true },
  ];

  const ganeshaFamilyTime = [
    { title: "Brahma-Anandam", img: "https://tse1.mm.bing.net/th/id/OIP.b-r-a-h-m-a-a-n-a-n-d-a-m-p-o-s-t-e-r", isPremium: true },
    { title: "Premalu", img: "https://tse3.mm.bing.net/th/id/OIP.7Z8Y2J9H7H7K9G3C2R5U7E6M8X0B3O6T", isPremium: true },
    { title: "Vidya Vasula Aham", img: "https://tse3.mm.bing.net/th/id/OIP.v-i-d-y-a-v-a-s-u-l-a-a-h-a-m-p-o-s-t-e-r", isPremium: true },
    { title: "Samajavaragamana", img: "https://tse2.mm.bing.net/th/id/OIP.s-a-m-a-j-a-v-a-r-a-g-a-m-a-n-a-p-o-s-t-e-r-s", isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: "https://tse3.mm.bing.net/th/id/OIP.a-s-h-o-k-a-v-a-n-a-m-l-o-a-r-j-u-n-a-k-a-l-y-a-n-a-m", isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: "https://tse2.mm.bing.net/th/id/OIP.v-i-n-a-r-o-b-h-a-g-y-a-m-u-v-i-s-h-n-u-k-a-t-h-a-p-o-s-t", isPremium: true },
    { title: "DJ Tillu", img: "https://tse4.mm.bing.net/th/id/OIP.d-j-t-i-l-l-u-p-o-s-t-e-r-s", isPremium: true },
    { title: "Maruthi Nagar Subrahmanyam", img: "https://tse2.mm.bing.net/th/id/OIP.m-a-r-u-t-h-i-n-a-g-a-r-s-u-b-r-a-h-m-a-n-y-a-m", isPremium: true },
    { title: "Janaka Ayithe Ganaka", img: "https://tse4.mm.bing.net/th/id/OIP.j-a-n-a-k-a-a-y-i-t-h-e-g-a-n-a-k-a-p-o-s-t-e-r", isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: "https://tse4.mm.bing.net/th/id/OIP.3-5-c-h-i-n-n-a-k-a-t-h-a-k-a-d-h-u-p-o-s-t-e-r", isPremium: true },
  ];

  const vereLevelOffice = [
    { title: "Movie Review", img: "https://tse3.mm.bing.net/th/id/OIP.d-o-c-u-m-e-n-t-a-r-y-s-h-o-w-p-o-s-t-e-r", isPremium: true },
    { title: "The Saree Boss", img: "https://tse2.mm.bing.net/th/id/OIP.s-a-r-e-e-b-o-s-s-s-h-o-w-p-o-s-t-e-r", isPremium: true },
    { title: "The Office Love Stories", img: "https://tse3.mm.bing.net/th/id/OIP.o-f-f-i-c-e-l-o-v-e-s-t-o-r-i-e-s-p-o-s-t-e-r", isPremium: true },
    { title: "Cow dung cake sale", img: "https://tse1.mm.bing.net/th/id/OIP.c-o-w-d-u-n-g-c-a-k-e-s-a-l-e-p-o-s-t-e-r", isPremium: true },
    { title: "Boycott juniors", img: "https://tse4.mm.bing.net/th/id/OIP.b-o-y-c-o-t-t-j-u-n-i-o-r-s-p-o-s-t-e-r", isPremium: true },
    { title: "The Potluck", img: "https://tse2.mm.bing.net/th/id/OIP.t-h-e-p-o-t-l-u-c-k-s-h-o-w-p-o-s-t-e-r", isPremium: true },
    { title: "Training Cancelled, Potluck Approved.", img: "https://tse3.mm.bing.net/th/id/OIP.t-r-a-i-n-i-n-g-c-a-n-c-e-l-l-e-d-p-o-t-l-u-c-k", isPremium: true },
    { title: "The Corporate Bachelor", img: "https://tse4.mm.bing.net/th/id/OIP.c-o-r-p-o-r-a-t-e-b-a-c-h-e-l-o-r-s-h-o-w", isPremium: true },
    { title: "Dreams on Hold", img: "https://tse1.mm.bing.net/th/id/OIP.d-r-e-a-m-s-o-n-h-o-l-d-p-o-s-t-e-r", isPremium: true },
    { title: "Nisha’s Last Note", img: "https://tse4.mm.bing.net/th/id/OIP.n-i-s-h-a-s-l-a-s-t-n-o-t-e-p-o-s-t-e-r", isPremium: true },
    { title: "Captaincy War: Satya vs Nikhil", img: "https://tse3.mm.bing.net/th/id/OIP.c-a-p-t-a-i-n-c-y-w-a-r-s-h-o-w-p-o-s-t-e-r", isPremium: true },
    { title: "Ex-tra' Pressure at the Top", img: "https://tse1.mm.bing.net/th/id/OIP.e-x-t-r-a-p-r-e-s-s-u-r-e-s-h-o-w-p-o-s-t-e-r", isPremium: true },
    { title: "Corporate IPL – Ishq, Pressure, Layoff", img: "https://tse4.mm.bing.net/th/id/OIP.c-o-r-p-o-r-a-t-e-i-p-l-s-h-o-w-p-o-s-t-e-r", isPremium: true },
    { title: "Motivation or Termination?", img: "https://tse2.mm.bing.net/th/id/OIP.m-o-t-i-v-a-t-i-o-n-o-r-t-e-r-m-i-n-a-t-i-o-n", isPremium: true },
    { title: "Mission: Client Possible", img: "https://tse3.mm.bing.net/th/id/OIP.m-i-s-s-i-o-n-c-l-i-e-n-t-p-o-s-s-i-b-l-e", isPremium: true },
    { title: "3 Problems, 0 Solutions", img: "https://tse2.mm.bing.net/th/id/OIP.3-p-r-o-b-l-e-m-s-0-s-o-l-u-t-i-o-n-s-p-o-s-t-e-r", isPremium: true },
    { title: "Love, Laughter & Marriage Application", img: "https://tse2.mm.bing.net/th/id/OIP.l-o-v-e-l-a-u-g-h-t-e-r-m-a-r-r-i-a-g-e-a-p-p", isPremium: true },
    { title: "Cold Wars & Cake Fights", img: "https://tse1.mm.bing.net/th/id/OIP.c-o-l-d-w-a-r-s-c-a-k-e-f-i-g-h-t-s-p-o-s-t-e-r", isPremium: true },
    { title: "Making girlfriend in office", img: "https://tse4.mm.bing.net/th/id/OIP.m-a-k-i-n-g-g-i-r-l-f-r-i-e-n-d-i-n-o-f-f-i-c-e", isPremium: true },
    { title: "One mail can change your job", img: "https://tse3.mm.bing.net/th/id/OIP.o-n-e-m-a-i-l-c-a-n-c-h-a-n-g-e-y-o-u-r-j-o-b", isPremium: true },
  ];

  const awardWinningMovies = [
    { title: "Razakar", img: "https://tse3.mm.bing.net/th/id/OIP.r-a-z-a-k-a-r-p-o-s-t-e-r-s", isPremium: true, isAgeRated: true },
    { title: "Baby", img: "https://tse4.mm.bing.net/th/id/OIP.b-a-b-y-t-e-l-u-g-u-m-o-v-i-e", isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: "https://tse4.mm.bing.net/th/id/OIP.3-5-c-h-i-n-n-a-k-a-t-h-a-k-a-d-h-u", isPremium: true },
    { title: "Colour Photo", img: "https://tse4.mm.bing.net/th/id/OIP.c-o-l-o-u-r-p-h-o-t-o-t-e-l-u-g-u-m-o-v-i-e", isPremium: true },
    { title: "Pottel", img: "https://tse4.mm.bing.net/th/id/OIP.p-o-t-t-e-l-p-o-s-t-e-r-s", isPremium: true },
    { title: "Ambajipeta Marriage Band", img: "https://tse4.mm.bing.net/th/id/OIP.a-m-b-a-j-i-p-e-t-a-m-a-r-r-i-a-g-e-b-a-n-d", isPremium: true },
    { title: "Raju Yadav", img: "https://tse4.mm.bing.net/th/id/OIP.r-a-j-u-y-a-d-a-v-m-o-v-i-e", isPremium: true },
    { title: "Mercy Killing", img: "https://tse4.mm.bing.net/th/id/OIP.m-e-r-c-y-k-i-l-l-i-n-g-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Polimera 2", img: "https://tse2.mm.bing.net/th/id/OIP.L5L6Q9C5F8G7G6J0N4E8X9E2B6O6T8Y3X", isPremium: true, isAgeRated: true },
    { title: "Month of Madhu", img: "https://tse2.mm.bing.net/th/id/OIP.m-o-n-t-h-o-f-m-a-d-h-u-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
  ];

  const ahaOriginals = [
    { title: "SARKAAR", img: "https://tse2.mm.bing.net/th/id/OIP.s-a-r-k-a-a-r-w-e-b-s-e-r-i-e-s", isPremium: true },
    { title: "Vere Level Office", img: "https://tse3.mm.bing.net/th/id/OIP.v-e-r-e-l-e-v-e-l-o-f-f-i-c-e-w-e-b-s-e-r-i-e-s", isPremium: true },
    { title: "Masti's (The Movie)", img: "https://tse4.mm.bing.net/th/id/OIP.m-a-s-t-i-s-t-h-e-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
    { title: "SIN(The Movie)", img: "https://tse4.mm.bing.net/th/id/OIP.s-i-n-t-h-e-m-o-v-i-e-p-o-s-t-e-r-s", isPremium: true, isAgeRated: true },
    { title: "Telugu Indian Idol", img: "https://tse2.mm.bing.net/th/id/OIP.p3L6C7A1J4K8E0N9S5T1W8M2F7Z4V5R0Q", isPremium: true },
    { title: "Dance Ikon", img: "https://tse1.mm.bing.net/th/id/OIP.d-a-n-c-e-i-k-o-n-t-e-l-u-g-u-s-h-o-w", isPremium: true },
    { title: "Hometown", img: "https://tse4.mm.bing.net/th/id/OIP.h-o-m-e-t-o-w-n-s-h-o-w-p-o-s-t-e-r-s", isPremium: true },
    { title: "Chef mantra", img: "https://tse1.mm.bing.net/th/id/OIP.c-h-e-f-m-a-n-t-r-a-s-h-o-w", isPremium: true },
    { title: "Emoji", img: "https://tse2.mm.bing.net/th/id/OIP.e-m-o-j-i-w-e-b-s-e-r-i-e-s", isPremium: true, isAgeRated: true },
    { title: "Unstoppable", img: "https://tse1.mm.bing.net/th/id/OIP.u-n-s-t-o-p-p-a-b-l-e-s-h-o-w", isPremium: true },
    { title: "Bhamakalapam 2", img: "https://tse4.mm.bing.net/th/id/OIP.b-h-a-m-a-k-a-l-a-p-a-m-2-m-o-v-i-e", isPremium: true },
    { title: "My Dear Donga", img: "https://tse4.mm.bing.net/th/id/OIP.m-y-d-e-a-r-d-o-n-g-a-p-o-s-t-e-r", isPremium: true },
    { title: "Arthamainda Arun Kumar", img: "https://tse3.mm.bing.net/th/id/OIP.a-r-t-h-a-m-a-i-n-d-a-a-r-u-n-k-u-m-a-r", isPremium: true },
    { title: "Bhamakalapam", img: "https://tse4.mm.bing.net/th/id/OIP.b-h-a-m-a-k-a-l-a-p-a-m-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Sathi Gani Rendu Ekaralu", img: "https://tse3.mm.bing.net/th/id/OIP.s-a-t-h-i-g-a-n-i-r-e-n-d-u-e-k-a-r-a-l-u-m-o-v-i-e", isPremium: true },
    { title: "Balu Gani Talkies", img: "https://tse3.mm.bing.net/th/id/OIP.b-a-l-u-g-a-n-i-t-a-l-k-i-e-s-p-o-s-t-e-r", isPremium: true },
    { title: "Mix Up", img: "https://tse2.mm.bing.net/th/id/OIP.m-i-x-u-p-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
    { title: "Super Over", img: "https://tse4.mm.bing.net/th/id/OIP.s-u-p-e-r-o-v-e-r-p-o-s-t-e-r", isPremium: true },
    { title: "Senapathi", img: "https://tse3.mm.bing.net/th/id/OIP.s-e-n-a-p-a-t-h-i-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
  ];

  const recentlyAdded = [
    { title: "Kothapallilo Okappudu", img: "https://tse3.mm.bing.net/th/id/OIP.k-o-t-h-a-p-a-l-l-i-l-o-o-k-a-p-p-u-d-u-p-o-s", isPremium: true },
    { title: "Sarkaar 5 Ep 12", img: "https://tse4.mm.bing.net/th/id/OIP.s-a-r-k-a-a-r-5-e-p-1-2-p-o-s-t-e-r", isPremium: true },
    { title: "The Saree Boss", img: "https://tse4.mm.bing.net/th/id/OIP.t-h-e-s-a-r-e-e-b-o-s-s-s-h-o-w-p-o-s-t-e-r", isPremium: true },
    { title: "Vijayanand", img: "https://tse4.mm.bing.net/th/id/OIP.v-i-j-a-y-a-n-a-n-d-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Network", img: "https://tse1.mm.bing.net/th/id/OIP.n-e-t-w-o-r-k-t-e-l-u-g-u-m-o-v-i-e", isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: "https://tse4.mm.bing.net/th/id/OIP.a-r-j-u-n-s-o-v-y-j-a-y-a-n-t-h-i", isPremium: true },
    { title: "Jolly O Gymkhana", img: "https://tse4.mm.bing.net/th/id/OIP.j-o-l-l-y-o-g-y-m-k-h-a-n-a-m-o-v-i-e", isPremium: true },
    { title: "Aparadhi", img: "https://tse4.mm.bing.net/th/id/OIP.a-p-a-r-a-d-h-i-m-o-v-i-e-p-o-s-t-e-r-s", isPremium: true },
    { title: "The Devil's Chair", img: "https://tse3.mm.bing.net/th/id/OIP.t-h-e-d-e-v-i-l-s-c-h-a-i-r-m-o-v-i-e", isPremium: true, isAgeRated: true },
    { title: "Rekhachithram", img: "https://tse4.mm.bing.net/th/id/OIP.r-e-k-h-a-c-h-i-t-h-r-a-m-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Marco", img: "https://tse4.mm.bing.net/th/id/OIP.m-a-r-c-o-m-o-v-i-e-p-o-s-t-e-r-s", isPremium: true, isAgeRated: true },
    { title: "Hometown", img: "https://tse2.mm.bing.net/th/id/OIP.h-o-m-e-t-o-w-n-s-h-o-w", isPremium: true },
    { title: "Veeraaraju 1991", img: "https://tse3.mm.bing.net/th/id/OIP.v-e-e-r-a-a-r-a-j-u-1-9-9-1-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
    { title: "Brahma-Anandam", img: "https://tse4.mm.bing.net/th/id/OIP.b-r-a-h-m-a-a-n-a-n-d-a-m-m-o-v-i-e", isPremium: true },
    { title: "Naandhi", img: "https://tse2.mm.bing.net/th/id/OIP.n-a-a-n-d-h-i-t-e-l-u-g-u-m-o-v-i-e", isPremium: true },
    { title: "Pandavulu Pandavulu Tummeda", img: "https://tse4.mm.bing.net/th/id/OIP.p-a-n-d-a-v-u-l-u-t-u-m-m-e-d-a-m-o-v-i-e", isPremium: false },
    { title: "Chef Mantra Project K Episode 4", img: "https://tse4.mm.bing.net/th/id/OIP.c-h-e-f-m-a-n-t-r-a-s-h-o-w", isPremium: true },
    { title: "Vere Level Office", img: "https://tse3.mm.bing.net/th/id/OIP.v-e-r-e-l-e-v-e-l-o-f-f-i-c-e", isPremium: true },
    { title: "Vivekanandan Viral", img: "https://tse4.mm.bing.net/th/id/OIP.v-i-v-e-k-a-n-a-n-d-a-n-v-i-r-a-l-m-o-v-i-e", isPremium: true },
    { title: "Kalpana 3", img: "https://tse2.mm.bing.net/th/id/OIP.k-a-l-p-a-n-a-3-m-o-v-i-e", isPremium: true, isAgeRated: true },
  ];

  const evergreens = [
    { title: "Sagara Sangamam", img: "https://tse2.mm.bing.net/th/id/OIP.zQvY4W7G9J5Q2R6T1C9H3U8J6M7B5R0S2", isPremium: true },
    { title: "Seethamma Vakitlo Sirimalle Chettu", img: "https://tse1.mm.bing.net/th/id/OIP.s-e-e-t-h-a-m-m-a-v-a-k-i-t-l-o-s-i-r-i-m-a-l-l-e-c-h", isPremium: true },
    { title: "Swathi Muthyam", img: "https://tse2.mm.bing.net/th/id/OIP.s-w-a-t-h-i-m-u-t-h-y-a-m-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Athadu", img: "https://tse3.mm.bing.net/th/id/OIP.a-t-h-a-d-u-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Swayam Krushi", img: "https://tse4.mm.bing.net/th/id/OIP.s-w-a-y-a-m-k-r-u-s-h-i-m-o-v-i-e", isPremium: true },
    { title: "Chakram", img: "https://tse2.mm.bing.net/th/id/OIP.c-h-a-k-r-a-m-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Apathbandhavudu", img: "https://tse2.mm.bing.net/th/id/OIP.a-p-a-t-h-b-a-n-d-h-a-v-u-d-u-m-o-v-i-e-p-o-s-t", isPremium: true },
    { title: "Suryavamsam", img: "https://tse1.mm.bing.net/th/id/OIP.s-u-r-y-a-v-a-m-s-a-m-m-o-v-i-e", isPremium: true },
  ];

  const trendingTop10 = [
    { title: "Kothapallilo Okappudu", img: "https://tse3.mm.bing.net/th/id/OIP.k-o-t-h-a-p-a-l-l-i-l-o-o-k-a-p-p-u-d-u-p-o-s", isPremium: true },
    { title: "Sarkaar 5 Ep 12", img: "https://tse4.mm.bing.net/th/id/OIP.s-a-r-k-a-a-r-5-e-p-1-2", isPremium: true },
    { title: "PA... PA... (O Naanna)", img: "https://tse2.mm.bing.net/th/id/OIP.p-a-p-a-o-n-a-a-n-n-a-m-o-v-i-e", isPremium: true },
    { title: "Network", img: "https://tse1.mm.bing.net/th/id/OIP.n-e-t-w-o-r-k-t-e-l-u-g-u-m-o-v-i-e", isPremium: true },
    { title: "Virgin Boys", img: "https://tse4.mm.bing.net/th/id/OIP.v-i-r-g-i-n-b-o-y-s-m-o-v-i-e", isPremium: true, isAgeRated: true },
    { title: "Vijayanand", img: "https://tse4.mm.bing.net/th/id/OIP.v-i-j-a-y-a-n-a-n-d-m-o-v-i-e", isPremium: true },
    { title: "Rekhachithram", img: "https://tse4.mm.bing.net/th/id/OIP.r-e-k-h-a-c-h-i-t-h-r-a-m-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Telugu Indian Idol", img: "https://tse2.mm.bing.net/th/id/OIP.p3L6C7A1J4K8E0N9S5T1W8M2F7Z4V5R0Q", isPremium: true },
    { title: "Kaliyugam 2064", img: "https://tse1.mm.bing.net/th/id/OIP.k-a-l-i-y-u-g-a-m-2-0-6-4-m-o-v-i-e", isPremium: true },
    { title: "Marco", img: "https://tse4.mm.bing.net/th/id/OIP.m-a-r-c-o-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
  ];

  const kDrama = [
    { title: "FIGHT FOR MY WAY", img: "https://tse1.mm.bing.net/th/id/OIP.p5L8C9T2H7E5G4K3V1R6Q8J0W4Y1Z9F8", isPremium: true },
    { title: "Hwarang - The Poet Warrior Youth", img: "https://tse4.mm.bing.net/th/id/OIP.h-w-a-r-a-n-g-t-h-e-p-o-e-t-w-a-r-r-i-o-r-y", isPremium: true },
    { title: "Youth of May", img: "https://tse3.mm.bing.net/th/id/OIP.y-o-u-t-h-o-f-m-a-y-k-d-r-a-m-a", isPremium: true },
    { title: "SCHOOL 2017", img: "https://tse1.mm.bing.net/th/id/OIP.s-c-h-o-o-l-2-0-1-7-k-d-r-a-m-a", isPremium: true },
    { title: "Couple on the Backtrack", img: "https://tse2.mm.bing.net/th/id/OIP.c-o-u-p-l-e-o-n-t-h-e-b-a-c-k-t-r-a-c-k", isPremium: true },
  ];

  const newAgeRomance = [
    { title: "3 Roses", img: "https://tse4.mm.bing.net/th/id/OIP.8B3W4M7J5Z9X2L6F0S1D4Q5G7H2K6P0R", isPremium: true, isAgeRated: true },
    { title: "SIN(The Movie)", img: "https://tse2.mm.bing.net/th/id/OIP.s-i-n-t-h-e-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
    { title: "Sshhh", img: "https://tse4.mm.bing.net/th/id/OIP.s-s-h-h-h-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
    { title: "Bubble Gum", img: "https://tse3.mm.bing.net/th/id/OIP.b-u-b-b-l-e-g-u-m-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
    { title: "Hot Spot", img: "https://tse3.mm.bing.net/th/id/OIP.h-o-t-s-p-o-t-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
    { title: "Manmatha Leela", img: "https://tse3.mm.bing.net/th/id/OIP.m-a-n-m-a-t-h-a-l-e-e-l-a-m-o-v-i-e", isPremium: true, isAgeRated: true },
    { title: "Locked", img: "https://tse2.mm.bing.net/th/id/OIP.l-o-c-k-e-d-w-e-b-s-e-r-i-e-s", isPremium: true },
    { title: "Dirty Hari", img: "https://tse2.mm.bing.net/th/id/OIP.d-i-r-t-y-h-a-r-i-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
    { title: "EVOL", img: "https://tse4.mm.bing.net/th/id/OIP.e-v-o-l-m-o-v-i-e-p-o-s-t-e-r-s", isPremium: true, isAgeRated: true },
    { title: "Siddharth Roy", img: "https://tse1.mm.bing.net/th/id/OIP.s-i-d-d-h-a-r-t-h-r-o-y-m-o-v-i-e", isPremium: true, isAgeRated: true },
    { title: "Mix Up", img: "https://tse2.mm.bing.net/th/id/OIP.m-i-x-u-p-m-o-v-i-e-p-o-s-t-e-r-s", isPremium: true, isAgeRated: true },
    { title: "Masti's", img: "https://tse4.mm.bing.net/th/id/OIP.m-a-s-t-i-s-w-e-b-s-e-r-i-e-s", isPremium: true },
    { title: "Krishna and His Leela", img: "https://tse2.mm.bing.net/th/id/OIP.k-r-i-s-h-n-a-a-n-d-h-i-s-l-e-e-l-a", isPremium: true },
  ];

  const ahaSpecials = [
    { title: "Locked", img: "https://tse2.mm.bing.net/th/id/OIP.l-o-c-k-e-d-w-e-b-s-e-r-i-e-s", isPremium: true },
    { title: "Unstoppable", img: "https://tse1.mm.bing.net/th/id/OIP.u-n-s-t-o-p-p-a-b-l-e-s-h-o-w-p-o-s-t-e-r", isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: "https://tse3.mm.bing.net/th/id/OIP.a-s-h-o-k-a-v-a-n-a-m-l-o-a-r-j-u-n-a-k-a-l-y-a-n-a-m", isPremium: true },
    { title: "Ori Devuda", img: "https://tse1.mm.bing.net/th/id/OIP.o-r-i-d-e-v-u-d-a-m-o-v-i-e", isPremium: true },
    { title: "35 Chinna Katha Kadhu", img: "https://tse4.mm.bing.net/th/id/OIP.3-5-c-h-i-n-n-a-k-a-t-h-a-k-a-d-h-u-p-o-s-t-e-r", isPremium: true },
    { title: "Sri Ramadasu", img: "https://tse1.mm.bing.net/th/id/OIP.s-r-i-r-a-m-a-d-a-s-u-m-o-v-i-e", isPremium: true },
    { title: "Stalin", img: "https://tse3.mm.bing.net/th/id/OIP.s-t-a-l-i-n-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Simha", img: "https://tse1.mm.bing.net/th/id/OIP.s-i-m-h-a-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
    { title: "Fidaa", img: "https://tse4.mm.bing.net/th/id/OIP.f-i-d-a-a-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Athadu", img: "https://tse3.mm.bing.net/th/id/OIP.a-t-h-a-d-u-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Adhurs", img: "https://tse2.mm.bing.net/th/id/OIP.a-d-h-u-r-s-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Khakee", img: "https://tse2.mm.bing.net/th/id/OIP.k-h-a-k-e-e-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Zombie Reddy", img: "https://tse3.mm.bing.net/th/id/OIP.z-o-m-b-i-e-r-e-d-d-y-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Telugu Indian Idol", img: "https://tse2.mm.bing.net/th/id/OIP.p3L6C7A1J4K8E0N9S5T1W8M2F7Z4V5R0Q", isPremium: true },
    { title: "Das Ka Dhamki", img: "https://tse4.mm.bing.net/th/id/OIP.d-a-s-k-a-d-h-a-m-k-i-m-o-v-i-e", isPremium: true },
    { title: "Janaka Ayithe Ganaka", img: "https://tse4.mm.bing.net/th/id/OIP.j-a-n-a-k-a-a-y-i-t-h-e-g-a-n-a-k-a-p-o-s-t-e-r", isPremium: true },
    { title: "Krack", img: "https://tse1.mm.bing.net/th/id/OIP.k-r-a-c-k-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Pottel", img: "https://tse4.mm.bing.net/th/id/OIP.p-o-t-t-e-l-m-o-v-i-e-p-o-s-t-e-r-s", isPremium: true },
    { title: "3 Roses", img: "https://tse3.mm.bing.net/th/id/OIP.3-r-o-s-e-s-w-e-b-s-e-r-i-e-s", isPremium: true, isAgeRated: true },
    { title: "Bhamakalapam 2", img: "https://tse4.mm.bing.net/th/id/OIP.b-h-a-m-a-k-a-l-a-p-a-m-2-m-o-v-i-e", isPremium: true },
  ];

  const upcoming = [
    { title: "Telugu Indian Idol Season 4 - Launch Promo", img: "https://tse2.mm.bing.net/th/id/OIP.t-e-l-u-g-u-i-n-d-i-a-n-i-d-o-l-s-e-a-s-o-n-4", isPremium: false },
  ];

  const meeAha = [
    { title: "Love Story", img: "https://tse3.mm.bing.net/th/id/OIP.l-o-v-e-s-t-o-r-y-m-o-v-i-e", isPremium: true },
    { title: "Premalu", img: "https://tse3.mm.bing.net/th/id/OIP.7Z8Y2J9H7H7K9G3C2R5U7E6M8X0B3O6T", isPremium: true },
    { title: "Colour Photo", img: "https://tse4.mm.bing.net/th/id/OIP.c-o-l-o-u-r-p-h-o-t-o-t-e-l-u-g-u-m-o-v-i-e", isPremium: true },
    { title: "Sundaram Master", img: "https://tse4.mm.bing.net/th/id/OIP.s-u-n-d-a-r-a-m-m-a-s-t-e-r-m-o-v-i-e", isPremium: true },
    { title: "96", img: "https://tse2.mm.bing.net/th/id/OIP.9-6-t-a-m-i-l-m-o-v-i-e", isPremium: true },
    { title: "Bubble Gum", img: "https://tse3.mm.bing.net/th/id/OIP.b-u-b-b-l-e-g-u-m-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true },
    { title: "Sammathame", img: "https://tse3.mm.bing.net/th/id/OIP.s-a-m-m-a-t-h-a-m-e-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "18 Pages", img: "https://tse2.mm.bing.net/th/id/OIP.1-8-p-a-g-e-s-m-o-v-i-e", isPremium: true },
    { title: "Ori Devuda", img: "https://tse1.mm.bing.net/th/id/OIP.o-r-i-d-e-v-u-d-a-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Neeli Megha Shyama", img: "https://tse2.mm.bing.net/th/id/OIP.n-e-e-l-i-m-e-g-h-a-s-h-y-a-m-a-m-o-v-i-e", isPremium: true },
  ];

  const handpicked = [
    { title: "Maruthi Nagar Subrahmanyam", img: "https://tse2.mm.bing.net/th/id/OIP.m-a-r-u-t-h-i-n-a-g-a-r-s-u-b-r-a-h-m-a-n-y-a-m", isPremium: true },
    { title: "Bhamakalapam", img: "https://tse4.mm.bing.net/th/id/OIP.b-h-a-m-a-k-a-l-a-p-a-m-m-o-v-i-e", isPremium: true },
    { title: "Magadheera", img: "https://tse4.mm.bing.net/th/id/OIP.m-a-g-a-d-h-e-e-r-a-t-e-l-u-g-u-m-o-v-i-e-p-o-s-t", isPremium: true },
    { title: "Intinti Ramayanam", img: "https://tse3.mm.bing.net/th/id/OIP.i-n-t-i-n-t-i-r-a-m-a-y-a-n-a-m-m-o-v-i-e", isPremium: true },
    { title: "Sathi Gani Rendu Ekaralu", img: "https://tse3.mm.bing.net/th/id/OIP.s-a-t-h-i-g-a-n-i-r-e-n-d-u-e-k-a-r-a-l-u", isPremium: true },
    { title: "Samajavaragamana", img: "https://tse2.mm.bing.net/th/id/OIP.s-a-m-a-j-a-v-a-r-a-g-a-m-a-n-a", isPremium: true },
    { title: "Ashoka Vanamlo Arjuna Kalyanam", img: "https://tse3.mm.bing.net/th/id/OIP.a-s-h-o-k-a-v-a-n-a-m-l-o-a-r-j-u-n-a-k-a-l-y-a-n-a-m", isPremium: true },
    { title: "Vinaro Bhagyamu Vishnu Katha", img: "https://tse2.mm.bing.net/th/id/OIP.v-i-n-a-r-o-b-h-a-g-y-a-m-u-v-i-s-h-n-u-k-a-t-h-a", isPremium: true },
    { title: "Swathi Muthyam", img: "https://tse2.mm.bing.net/th/id/OIP.s-w-a-t-h-i-m-u-t-h-y-a-m-m-o-v-i-e", isPremium: true },
    { title: "SR Kalyanamandapam", img: "https://tse4.mm.bing.net/th/id/OIP.s-r-k-a-l-y-a-n-a-m-a-n-d-a-p-a-m-m-o-v-i-e", isPremium: true },
    { title: "Laggam", img: "https://tse1.mm.bing.net/th/id/OIP.l-a-g-g-a-m-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Bheemla Nayak", img: "https://tse3.mm.bing.net/th/id/OIP.b-h-e-e-m-l-a-n-a-y-a-k-m-o-v-i-e", isPremium: true },
    { title: "Bhamakalapam 2", img: "https://tse4.mm.bing.net/th/id/OIP.b-h-a-m-a-k-a-l-a-p-a-m-2-m-o-v-i-e", isPremium: true },
    { title: "Love Story", img: "https://tse3.mm.bing.net/th/id/OIP.l-o-v-e-s-t-o-r-y-m-o-v-i-e", isPremium: true },
  ];

  const blockbusters = [
    { title: "Polimera 2", img: "https://tse2.mm.bing.net/th/id/OIP.L5L6Q9C5F8G7G6J0N4E8X9E2B6O6T8Y3X", isPremium: true, isAgeRated: true },
    { title: "Sagara Sangamam", img: "https://tse2.mm.bing.net/th/id/OIP.zQvY4W7G9J5Q2R6T1C9H3U8J6M7B5R0S2", isPremium: true },
    { title: "Karthikeya", img: "https://tse2.mm.bing.net/th/id/OIP.k-a-r-t-h-i-k-e-y-a-t-e-l-u-g-u-m-o-v-i-e", isPremium: true },
    { title: "Samajavaragamana", img: "https://tse2.mm.bing.net/th/id/OIP.s-a-m-a-j-a-v-a-r-a-g-a-m-a-n-a", isPremium: true },
    { title: "Chandamama", img: "https://tse2.mm.bing.net/th/id/OIP.c-h-a-n-d-a-m-a-m-a-m-o-v-i-e", isPremium: true },
    { title: "Khaidi", img: "https://tse3.mm.bing.net/th/id/OIP.k-h-a-i-d-i-t-e-l-u-g-u-m-o-v-i-e", isPremium: true },
    { title: "Keedaa Cola", img: "https://tse3.mm.bing.net/th/id/OIP.k-e-e-d-a-a-c-o-l-a-m-o-v-i-e", isPremium: true },
    { title: "Swayam Krushi", img: "https://tse4.mm.bing.net/th/id/OIP.s-w-a-y-a-m-k-r-u-s-h-i-m-o-v-i-e", isPremium: true },
    { title: "Shankara Bharanam", img: "https://tse2.mm.bing.net/th/id/OIP.s-h-a-n-k-a-r-a-b-h-a-r-a-n-a-m-m-o-v-i-e", isPremium: true },
    { title: "Masooda", img: "https://tse4.mm.bing.net/th/id/OIP.m-a-s-o-o-d-a-m-o-v-i-e", isPremium: true, isAgeRated: true },
    { title: "Krack", img: "https://tse1.mm.bing.net/th/id/OIP.k-r-a-c-k-m-o-v-i-e", isPremium: true },
    { title: "Bhamakalapam 2", img: "https://tse4.mm.bing.net/th/id/OIP.b-h-a-m-a-k-a-l-a-p-a-m-2-m-o-v-i-e", isPremium: true },
    { title: "DJ Tillu", img: "https://tse4.mm.bing.net/th/id/OIP.d-j-t-i-l-l-u-m-o-v-i-e", isPremium: true },
    { title: "Bheemla Nayak", img: "https://tse3.mm.bing.net/th/id/OIP.b-h-e-e-m-l-a-n-a-y-a-k-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Premalu", img: "https://tse3.mm.bing.net/th/id/OIP.7Z8Y2J9H7H7K9G3C2R5U7E6M8X0B3O6T", isPremium: true },
    { title: "Baby", img: "https://tse4.mm.bing.net/th/id/OIP.b-a-b-y-t-e-l-u-g-u-m-o-v-i-e-p-o-s-t-e-r-s", isPremium: true },
  ];

  const liveChannels = [
    { title: "TV9 Telugu Live TV", img: "https://tse3.mm.bing.net/th/id/OIP.t-v-9-t-e-l-u-g-u-n-e-w-s-l-i-v-e", isPremium: true },
  ];

  const genres = [
    { title: "Telugu Drama Movies", img: "https://tse3.mm.bing.net/th/id/OIP.t-e-l-u-g-u-d-r-a-m-a-m-o-v-i-e-s", isSmall: true },
    { title: "Telugu Action Movies", img: "https://tse4.mm.bing.net/th/id/OIP.t-e-l-u-g-u-a-c-t-i-o-n-m-o-v-i-e-s", isSmall: true },
    { title: "Telugu Romance Movies", img: "https://tse3.mm.bing.net/th/id/OIP.t-e-l-u-g-u-r-o-m-a-n-c-e-m-o-v-i-e-s", isSmall: true },
    { title: "Telugu Comedy Movies", img: "https://tse2.mm.bing.net/th/id/OIP.t-e-l-u-g-u-c-o-m-e-d-y-m-o-v-i-e-s", isSmall: true },
    { title: "Telugu Thriller Movies", img: "https://tse1.mm.bing.net/th/id/OIP.t-e-l-u-g-u-t-h-r-i-l-l-e-r-m-o-v-i-e-s", isSmall: true },
    { title: "Telugu Crime Movies", img: "https://tse2.mm.bing.net/th/id/OIP.t-e-l-u-g-u-c-r-i-m-e-m-o-v-i-e-s", isSmall: true },
    { title: "Romance Comedy", img: "https://tse2.mm.bing.net/th/id/OIP.r-o-m-a-n-c-e-c-o-m-e-d-y", isSmall: true },
    { title: "Family Drama", img: "https://tse4.mm.bing.net/th/id/OIP.f-a-m-i-l-y-d-r-a-m-a", isSmall: true },
    { title: "Devotional", img: "https://tse3.mm.bing.net/th/id/OIP.d-e-v-o-t-i-o-n-a-l-m-o-v-i-e-s", isSmall: true },
    { title: "Horror Comedy", img: "https://tse1.mm.bing.net/th/id/OIP.h-o-r-r-o-r-c-o-m-e-d-y-m-o-v-i-e-s", isSmall: true },
  ];

  const freeMovies = [
    { title: "Thuppaki", img: "https://tse1.mm.bing.net/th/id/OIP.t-h-u-p-p-a-k-i-m-o-v-i-e-p-o-s-t-e-r", isSmall: true },
    { title: "Nenu Rowdy Ne", img: "https://tse2.mm.bing.net/th/id/OIP.n-e-n-u-r-o-w-d-y-n-e-m-o-v-i-e", isSmall: true },
    { title: "Nagaram", img: "https://tse4.mm.bing.net/th/id/OIP.n-a-g-a-r-a-m-m-o-v-i-e-p-o-s-t-e-r", isSmall: true },
    { title: "100 Days Of Love", img: "https://tse3.mm.bing.net/th/id/OIP.1-0-0-d-a-y-s-o-f-l-o-v-e-m-o-v-i-e-p-o-s-t", isSmall: true },
    { title: "Selfie Raja", img: "https://tse3.mm.bing.net/th/id/OIP.s-e-l-f-i-e-r-a-j-a-m-o-v-i-e", isSmall: true },
    { title: "Mr Karthik", img: "https://tse1.mm.bing.net/th/id/OIP.m-r-k-a-r-t-h-i-k-m-o-v-i-e", isSmall: true },
    { title: "Memu", img: "https://tse4.mm.bing.net/th/id/OIP.m-e-m-u-m-o-v-i-e", isSmall: true },
    { title: "Utthama Villian", img: "https://tse1.mm.bing.net/th/id/OIP.u-t-t-h-a-m-a-v-i-l-l-i-a-n-m-o-v-i-e-p-o-s-t", isSmall: true },
    { title: "Yuddha Bhoomi", img: "https://tse3.mm.bing.net/th/id/OIP.y-u-d-d-h-a-b-h-o-o-m-i-m-o-v-i-e-p-o-s-t-e-r", isSmall: true },
  ];

  const classicThrillers = [
    { title: "16 Every Detail Count", img: "https://tse4.mm.bing.net/th/id/OIP.1-6-e-v-e-r-y-d-e-t-a-i-l-c-o-u-n-t-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Anasuya", img: "https://tse2.mm.bing.net/th/id/OIP.a-n-a-s-u-y-a-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Midnight Murders", img: "https://tse4.mm.bing.net/th/id/OIP.m-i-d-n-i-g-h-t-m-u-r-d-e-r-s-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Forensic", img: "https://tse4.mm.bing.net/th/id/OIP.f-o-r-e-n-s-i-c-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Locked", img: "https://tse2.mm.bing.net/th/id/OIP.l-o-c-k-e-d-w-e-b-s-e-r-i-e-s", isPremium: true, isSmall: true },
    { title: "Chunduru Police Station", img: "https://tse4.mm.bing.net/th/id/OIP.c-h-u-n-d-u-r-u-p-o-l-i-c-e-s-t-a-t-i-o-n", isPremium: true, isSmall: true },
    { title: "Vetrimaaran's Jallikattu", img: "https://tse4.mm.bing.net/th/id/OIP.v-e-t-r-i-m-a-a-r-a-n-s-j-a-l-l-i-k-a-t-t-u", isPremium: true, isSmall: true },
    { title: "Anukoni Athidhi", img: "https://tse1.mm.bing.net/th/id/OIP.a-n-u-k-o-n-i-a-t-h-i-d-h-i-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Nipah Virus", img: "https://tse3.mm.bing.net/th/id/OIP.n-i-p-a-h-v-i-r-u-s-m-o-v-i-e-p-o-s-t-e-r-s", isPremium: true, isSmall: true },
    { title: "Trance", img: "https://tse4.mm.bing.net/th/id/OIP.t-r-a-n-c-e-m-o-v-i-e", isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Cold Case", img: "https://tse4.mm.bing.net/th/id/OIP.c-o-l-d-c-a-s-e-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Anaganaga O Athidhi", img: "https://tse1.mm.bing.net/th/id/OIP.a-n-a-g-a-n-a-g-a-o-a-t-h-i-d-h-i", isPremium: true, isSmall: true },
    { title: "The Road", img: "https://tse3.mm.bing.net/th/id/OIP.t-h-e-r-o-a-d-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Nene Naa", img: "https://tse4.mm.bing.net/th/id/OIP.n-e-n-e-n-a-a-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Khakee", img: "https://tse2.mm.bing.net/th/id/OIP.k-h-a-k-e-e-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Senapathi", img: "https://tse3.mm.bing.net/th/id/OIP.s-e-n-a-p-a-t-h-i-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Naandhi", img: "https://tse2.mm.bing.net/th/id/OIP.n-a-a-n-d-h-i-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Bloody Mary", img: "https://tse4.mm.bing.net/th/id/OIP.b-l-o-o-d-y-m-a-r-y-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "CSI Sanatan", img: "https://tse1.mm.bing.net/th/id/OIP.c-s-i-s-a-n-a-t-a-n-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Arjun Suravaram", img: "https://tse3.mm.bing.net/th/id/OIP.a-r-j-u-n-s-u-r-a-v-a-r-a-m-m-o-v-i-e", isPremium: true, isSmall: true },
  ];

  const screamParty = [
    { title: "Tantra", img: "https://tse4.mm.bing.net/th/id/OIP.t-a-n-t-r-a-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Polimera 2", img: "https://tse2.mm.bing.net/th/id/OIP.L5L6Q9C5F8G7G6J0N4E8X9E2B6O6T8Y3X", isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Kajal Karthika", img: "https://tse3.mm.bing.net/th/id/OIP.k-a-j-a-l-k-a-r-t-h-i-k-a-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Bhoothaddam Bhaskar Narayana", img: "https://tse4.mm.bing.net/th/id/OIP.b-h-o-o-t-h-a-d-d-a-m-b-h-a-s-k-a-r-n-a-r-a-y-a", isPremium: true, isSmall: true },
    { title: "Masooda", img: "https://tse4.mm.bing.net/th/id/OIP.m-a-s-o-o-d-a-m-o-v-i-e", isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Pindam", img: "https://tse3.mm.bing.net/th/id/OIP.p-i-n-d-a-m-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Hidimbha", img: "https://tse3.mm.bing.net/th/id/OIP.h-i-d-i-m-b-h-a-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isAgeRated: true, isSmall: true },
    { title: "Cold Case", img: "https://tse4.mm.bing.net/th/id/OIP.c-o-l-d-c-a-s-e-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Rani Gari Bangala", img: "https://tse2.mm.bing.net/th/id/OIP.r-a-n-i-g-a-r-i-b-a-n-g-a-l-a-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Mata Raani Mounamidi", img: "https://tse2.mm.bing.net/th/id/OIP.m-a-t-a-r-a-a-n-i-m-o-u-n-a-m-i-d-i", isPremium: true, isSmall: true },
  ];

  const devotional = [
    { title: "Sri Ramadasu", img: "https://tse1.mm.bing.net/th/id/OIP.s-r-i-r-a-m-a-d-a-s-u-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Sarvam Shakthi Mayam", img: "https://tse3.mm.bing.net/th/id/OIP.s-a-r-v-a-m-s-h-a-k-t-h-i-m-a-y-a-m", isPremium: true },
    { title: "Rama Ayodhya", img: "https://tse2.mm.bing.net/th/id/OIP.r-a-m-a-a-y-o-d-h-y-a-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Aha Godari", img: "https://tse1.mm.bing.net/th/id/OIP.a-h-a-g-o-d-a-r-i-m-o-v-i-e", isPremium: true },
    { title: "Maha Ganesha", img: "https://tse3.mm.bing.net/th/id/OIP.m-a-h-a-g-a-n-e-s-h-a-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Samatha Kumbh 2024", img: "https://tse4.mm.bing.net/th/id/OIP.s-a-m-a-t-h-a-k-u-m-b-h-2-0-2-4", isPremium: false },
    { title: "Good luck Ganesha", img: "https://tse3.mm.bing.net/th/id/OIP.g-o-o-d-l-u-c-k-g-a-n-e-s-h-a-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
  ];

  const rewindClassics = [
    { title: "Jamba Lakidi Pamba", img: "https://tse2.mm.bing.net/th/id/OIP.j-a-m-b-a-l-a-k-i-d-i-p-a-m-b-a", isPremium: true, isSmall: true },
    { title: "Suryavamsam", img: "https://tse1.mm.bing.net/th/id/OIP.s-u-r-y-a-v-a-m-s-a-m-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Premabhishekam", img: "https://tse1.mm.bing.net/th/id/OIP.p-r-e-m-a-b-h-i-s-h-e-k-a-m-m-o-v-i-e-p-o-s-t-e-r", isPremium: true, isSmall: true },
    { title: "Premikulu", img: "https://tse2.mm.bing.net/th/id/OIP.p-r-e-m-i-k-u-l-u-m-o-v-i-e", isPremium: true, isSmall: true },
    { title: "Sri Ramadasu", img: "https://tse1.mm.bing.net/th/id/OIP.s-r-i-r-a-m-a-d-a-s-u-m-o-v-i-e", isPremium: true, isSmall: true },
  ];

  const teluguIdolS3 = [
    { title: "Launch - Auditions Day 1", img: "https://tse2.mm.bing.net/th/id/OIP.t-e-l-u-g-u-i-n-d-i-a-n-i-d-o-l-s-3-l-a-u-n-c-h-p-r-o-m-o", isPremium: false, isSmall: true },
    { title: "Auditions Day 2", img: "https://tse2.mm.bing.net/th/id/OIP.t-e-l-u-g-u-i-n-d-i-a-n-i-d-o-l-s-3-a-u-d-i-t-i-o-n-s-d-a-y-2", isPremium: false, isSmall: true },
    { title: "Auditions Day 3", img: "https://tse2.mm.bing.net/th/id/OIP.t-e-l-u-g-u-i-n-d-i-a-n-i-d-o-l-s-3-a-u-d-i-t-i-o-n-s-d-a-y-3", isPremium: false, isSmall: true },
    { title: "Auditions Day 4", img: "https://tse2.mm.bing.net/th/id/OIP.t-e-l-u-g-u-i-n-d-i-a-n-i-d-o-l-s-3-a-u-d-i-t-i-o-n-s-d-a-y-4", isPremium: false, isSmall: true },
    { title: "Grand Gala with Top 12 - Part 1", img: "https://tse2.mm.bing.net/th/id/OIP.t-e-l-u-g-u-i-n-d-i-a-n-i-d-o-l-g-r-a-n-d-g-a-l-a", isPremium: true, isSmall: true },
    { title: "Grand Gala with Top 12 - Part 2", img: "https://tse2.mm.bing.net/th/id/OIP.t-e-l-u-g-u-i-n-d-i-a-n-i-d-o-l-g-r-a-n-d-g-a-l-a", isPremium: true, isSmall: true },
    { title: "VD’s Rowdy 12- Part 1", img: "https://tse2.mm.bing.net/th/id/OIP.v-d-s-r-o-w-d-y-1-2-t-e-l-u-g-u-i-d-o-l", isPremium: true, isSmall: true },
    { title: "VD’s Rowdy 12- Part 2", img: "https://tse2.mm.bing.net/th/id/OIP.v-d-s-r-o-w-d-y-1-2-t-e-l-u-g-u-i-d-o-l", isPremium: true, isSmall: true },
    { title: "The First Elimination - Part 1", img: "https://tse2.mm.bing.net/th/id/OIP.t-h-e-f-i-r-s-t-e-l-i-m-i-n-a-t-i-o-n", isPremium: true, isSmall: true },
    { title: "The First Elimination - Part 2", img: "https://tse2.mm.bing.net/th/id/OIP.t-h-e-f-i-r-s-t-e-l-i-m-i-n-a-t-i-o-n", isPremium: true, isSmall: true },
    { title: "Journey to TOP 10 - Part 1", img: "https://tse2.mm.bing.net/th/id/OIP.j-o-u-r-n-e-y-t-o-t-o-p-1-0", isPremium: true, isSmall: true },
    { title: "Journey to TOP 10 - Part 2", img: "https://tse2.mm.bing.net/th/id/OIP.j-o-u-r-n-e-y-t-o-t-o-p-1-0", isPremium: true, isSmall: true },
    { title: "Concert Night with Sivamani- Part 1", img: "https://tse2.mm.bing.net/th/id/OIP.c-o-n-c-e-r-t-n-i-g-h-t-w-i-t-h-s-i-v-a-m-a-n-i", isPremium: true, isSmall: true },
    { title: "Concert Night with Sivamani- Part 2", img: "https://tse2.mm.bing.net/th/id/OIP.c-o-n-c-e-r-t-n-i-g-h-t-w-i-t-h-s-i-v-a-m-a-n-i", isPremium: true, isSmall: true },
    { title: "Love Ragas with Rashmika- Part 1", img: "https://tse2.mm.bing.net/th/id/OIP.l-o-v-e-r-a-g-a-s-w-i-t-h-r-a-s-h-m-i-k-a", isPremium: true, isSmall: true },
    { title: "Love Ragas with Rashmika- Part 2", img: "https://tse2.mm.bing.net/th/id/OIP.l-o-v-e-r-a-g-a-s-w-i-t-h-r-a-s-h-m-i-k-a", isPremium: true, isSmall: true },
    { title: "Judges Face Off- Part 1", img: "https://tse2.mm.bing.net/th/id/OIP.j-u-d-g-e-s-f-a-c-e-o-f-f", isPremium: true, isSmall: true },
    { title: "Judges Face Off- Part 2", img: "https://tse2.mm.bing.net/th/id/OIP.j-u-d-g-e-s-f-a-c-e-o-f-f", isPremium: true, isSmall: true },
    { title: "Non Stop Entertainment with Nani- Part 1", img: "https://tse2.mm.bing.net/th/id/OIP.n-o-n-s-t-o-p-e-n-t-e-r-t-a-i-n-m-e-n-t", isPremium: true, isSmall: true },
    { title: "Non Stop Entertainment with Nani- Part 2", img: "https://tse2.mm.bing.net/th/id/OIP.n-o-n-s-t-o-p-e-n-t-e-r-t-a-i-n-m-e-n-t", isPremium: true, isSmall: true },
  ];

  const ahaKids = [
    { title: "Bala Bharatham", img: "https://tse4.mm.bing.net/th/id/OIP.b-a-l-a-b-h-a-r-a-t-h-a-m-s-h-o-w", isPremium: true, isSmall: true },
    { title: "Christmas Thatha", img: "https://tse4.mm.bing.net/th/id/OIP.c-h-r-i-s-t-m-a-s-t-h-a-t-h-a", isPremium: false, isSmall: true },
    { title: "Maha Ganesha", img: "https://tse3.mm.bing.net/th/id/OIP.m-a-h-a-g-a-n-e-s-h-a", isPremium: true, isSmall: true },
  ];

  const actions = [
    { title: "1996 Dharmapuri", img: "https://tse3.mm.bing.net/th/id/OIP.1-9-9-6-d-h-a-r-m-a-p-u-r-i-m-o-v-i-e", isPremium: true },
    { title: "Aadu Magaadra Bujji", img: "https://tse4.mm.bing.net/th/id/OIP.a-a-d-u-m-a-g-a-a-d-r-a-b-u-j-j-i", isPremium: true },
    { title: "Adhurs", img: "https://tse2.mm.bing.net/th/id/OIP.a-d-h-u-r-s-m-o-v-i-e", isPremium: true },
    { title: "Aithe 2.0", img: "https://tse3.mm.bing.net/th/id/OIP.a-i-t-h-e-2-0-m-o-v-i-e", isPremium: true, isAgeRated: true },
    { title: "Alluri", img: "https://tse4.mm.bing.net/th/id/OIP.a-l-l-u-r-i-m-o-v-i-e", isPremium: true },
    { title: "Antony", img: "https://tse1.mm.bing.net/th/id/OIP.a-n-t-o-n-y-m-o-v-i-e", isPremium: true },
    { title: "Apathbandhavudu", img: "https://tse2.mm.bing.net/th/id/OIP.a-p-a-t-h-b-a-n-d-h-a-v-u-d-u-m-o-v-i-e-p-o-s-t-e-r", isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: "https://tse4.mm.bing.net/th/id/OIP.a-r-j-u-n-s-o-v-y-j-a-y-a-n-t-h-i", isPremium: true },
    { title: "Arjun Suravaram", img: "https://tse3.mm.bing.net/th/id/OIP.a-r-j-u-n-s-u-r-a-v-a-r-a-m-m-o-v-i-e", isPremium: true },
    { title: "Ashok", img: "https://tse4.mm.bing.net/th/id/OIP.a-s-h-o-k-m-o-v-i-e", isPremium: true },
    { title: "Asuraguru", img: "https://tse1.mm.bing.net/th/id/OIP.a-s-u-r-a-g-u-r-u-m-o-v-i-e", isPremium: true },
    { title: "Athadu", img: "https://tse3.mm.bing.net/th/id/OIP.a-t-h-a-d-u-m-o-v-i-e", isPremium: true },
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
    { title: "All Movies", img: "https://tse2.mm.bing.net/th/id/OIP.c-h-a-n-d-a-m-a-m-a-m-o-v-i-e-s" },
    { title: "Premium Movies", img: "https://tse4.mm.bing.net/th/id/OIP.p-r-e-m-i-u-m-m-o-v-i-e-s-p-o-s-t-e-r-s" },
    { title: "Free Movies", img: "https://tse2.mm.bing.net/th/id/OIP.f-r-e-e-m-o-v-i-e-s-p-o-s-t-e-r-s" },
    { title: "New Releases", img: "https://tse4.mm.bing.net/th/id/OIP.n-e-w-r-e-l-e-a-s-e-s-p-o-s-t-e-r-s" },
    { title: "Award Winning Movies", img: "https://tse4.mm.bing.net/th/id/OIP.a-w-a-r-d-w-i-n-n-i-n-g-m-o-v-i-e-s" },
    { title: "Upcoming", img: "https://tse3.mm.bing.net/th/id/OIP.u-p-c-o-m-i-n-g-m-o-v-i-e-s-p-o-s-t-e-r-s" },
    { title: "Blockbusters", img: "https://tse2.mm.bing.net/th/id/OIP.b-l-o-c-k-b-u-s-t-e-r-s-m-o-v-i-e-s-p-o-s-t" },
    { title: "Classics", img: "https://tse1.mm.bing.net/th/id/OIP.c-l-a-s-s-i-c-m-o-v-i-e-s-p-o-s-t-e-r-s" },
    { title: "Dubbed Movies", img: "https://tse3.mm.bing.net/th/id/OIP.d-u-b-b-e-d-m-o-v-i-e-s-p-o-s-t-e-r-s" },
    { title: "Kids Movies", img: "https://tse4.mm.bing.net/th/id/OIP.k-i-d-s-m-o-v-i-e-s-p-o-s-t-e-r-s" },
    { title: "Original Movies", img: "https://tse2.mm.bing.net/th/id/OIP.o-r-i-g-i-n-a-l-m-o-v-i-e-s-p-o-s-t-e-r-s" },
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
    { title: "All Shows", img: "https://tse3.mm.bing.net/th/id/OIP.a-l-l-s-h-o-w-s-p-o-s-t-e-r-s" },
    { title: "Premium Shows", img: "https://tse2.mm.bing.net/th/id/OIP.p-r-e-m-i-u-m-s-h-o-w-s-p-o-s-t-e-r-s" },
    { title: "Free Shows", img: "https://tse4.mm.bing.net/th/id/OIP.f-r-e-e-s-h-o-w-s-p-o-s-t-e-r-s" },
    { title: "Original Shows", img: "https://tse2.mm.bing.net/th/id/OIP.o-r-i-g-i-n-a-l-s-h-o-w-s-p-o-s-t-e-r-s" },
    { title: "K-Drama", img: "https://tse3.mm.bing.net/th/id/OIP.k-d-r-a-m-a-p-o-s-t-e-r-s" },
    { title: "Upcoming", img: "https://tse2.mm.bing.net/th/id/OIP.u-p-c-o-m-i-n-g-s-h-o-w-s-p-o-s-t-e-r-s" },
    { title: "Reality Shows", img: "https://tse4.mm.bing.net/th/id/OIP.r-e-a-l-i-t-y-s-h-o-w-s-p-o-s-t-e-r-s" },
    { title: "Talk Shows", img: "https://tse3.mm.bing.net/th/id/OIP.t-a-l-k-s-h-o-w-s-p-o-s-t-e-r-s" },
    { title: "Comedy Shows", img: "https://tse2.mm.bing.net/th/id/OIP.c-o-m-e-d-y-s-h-o-w-s-p-o-s-t-e-r-s" },
    { title: "Horror Shows", img: "https://tse1.mm.bing.net/th/id/OIP.h-o-r-r-o-r-s-h-o-w-s-p-o-s-t-e-r-s" },
    { title: "Kids Shows", img: "https://tse2.mm.bing.net/th/id/OIP.k-i-d-s-s-h-o-w-s-p-o-s-t-e-r-s" },
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
