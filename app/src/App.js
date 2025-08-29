import React, { useState } from "react";

// --- Navbar Component ---
const NAV_ITEMS = ["Home", "Movies", "Shows", "Watch Free", "My Offers"];

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

// --- Carousel Component ---
const Carousel = ({ title, items }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {items.map((item) => (
        <div
          key={item}
          className="bg-gray-700 rounded overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500"
        >
          <div className="h-36 bg-gray-600 flex items-center justify-center text-white text-sm">
            {item}
          </div>
          <div className="p-2 text-sm font-semibold text-center text-white bg-black bg-opacity-60">
            Premium
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- Home Page Content Component ---
const HomeContent = () => (
  <main className="max-w-7xl mx-auto px-6 py-10 text-white">
    {/* Featured movie */}
    <section className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row gap-8">
      <div className="md:w-2/3 space-y-4">
        <h1 className="text-4xl font-bold">Kothapallilo Okappudu</h1>
        <p className="text-sm text-gray-400">2025 • 2h 3m • Comedy Drama</p>
        <p className="text-lg font-semibold">Humorous • Feel-good</p>
        <p>
          Praveena Paruchuri directs Kothapallilo Okappudu. In this comedy-drama,
          Ramakrishna runs a small recording dance troupe. He loves Savithri, the
          granddaughter of a powerful landlord. Hoping to win her heart, he tries to
          bring her on stage, but a scandal turns his plans upside down. Watch the
          story of love, power and a rural life with superstition.
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

        {/* Cast */}
        <div className="mt-6">
          <h3 className="font-semibold text-xl mb-2">Cast</h3>
          <ul className="flex space-x-4 text-gray-300">
            {[
              "Manoj Chandra",
              "Monika T",
              "Usha Bonela",
              "Ravindra Vijay",
              "Benarjee",
            ].map((name) => (
              <li
                key={name}
                className="border border-gray-600 px-3 py-1 rounded whitespace-nowrap"
              >
                {name}
              </li>
            ))}
          </ul>
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

    {/* Similar Titles */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Similar to this</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {[
          "Ambajipeta Marriage Band",
          "Bavagaru Bagunara",
          "Sriranga Neethulu",
          "Colour Photo",
          "Little Hearts",
          "The Extraordinary Journey Of The Fakir",
          "Good luck Ganesha",
          "Savitri W/O Satyamurthy",
          "Mercy Killing",
          "Swayam Krushi",
        ].map((title) => (
          <div
            key={title}
            className="bg-gray-700 rounded overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500"
          >
            <div className="h-36 bg-gray-600 flex items-center justify-center text-white text-sm">
              {title}
            </div>
            <div className="p-2 text-sm font-semibold text-center text-white bg-black bg-opacity-60">
              Premium
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Popular Shows */}
    <section>
      <h2 className="text-2xl font-bold mb-6">Popular Shows</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {[
          "Unstoppable",
          "Telugu Indian Idol",
          "Locked",
          "Akkada Romeo Ikkada Juliet",
          "SARKAAR",
          "Sshhh",
          "Dance Ikon",
          "Youth of May",
          "3 Roses",
          "Chef mantra",
        ].map((show) => (
          <div
            key={show}
            className="bg-gray-700 rounded overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500"
          >
            <div className="h-24 bg-gray-600 flex items-center justify-center text-white text-sm">
              {show}
            </div>
            <div className="p-2 text-sm font-semibold text-center text-white bg-black bg-opacity-60">
              Premium
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);

// --- Movies Page Content Component ---
const MoviesContent = () => {
  const trending = [
    "Alappuzha Gymkhana",
    "Arjun S/o Vyjayanthi",
    "Brahma-Anandam",
    "Rekhachithram",
    "Bhairathi Ranagal",
    "Marco",
    "The Smile Man",
    "Razakar",
    "Viswam",
    "Martin",
    "Gorre Puranam",
    "Prathinidhi 2",
    "Rakshana",
    "Keedaa Cola",
    "Dhoomam",
    "Prasanna Vadanam",
    "Vidya Vasula Aham",
    "Geethanjali Malli Vachindi",
    "Premalu",
    "My Dear Donga",
  ];

  const newReleases = [
    "Virgin Boys",
    "Vijayanand",
    "PA... PA... (O Naanna)",
    "Saradhi",
    "Saree",
    "Kaliyugam 2064",
    "Sri Sri Sri Raja Vaaru",
    "23 (Iravai Moodu)",
    "Ghatikachalam",
    "SIN(The Movie)",
    "Alappuzha Gymkhana",
    "Eleven",
    "Karthika Missing Case",
    "Oka Yamudi Premakatha",
    "Arjun S/o Vyjayanthi",
    "Jolly O Gymkhana",
    "Demon",
    "The Devil's Chair",
    "Aparadhi",
    "Solo Boy",
  ];

  const allTimeHits = [
    "Atharintiki Daaredi",
    "Athadu",
    "EEGA",
    "Vedam",
    "Magadheera",
    "Simha",
    "Fidaa",
    "Stalin",
    "Chakram",
    "Ashok",
    "Narasimhudu",
    "Sarocharu",
    "Nippu",
    "Don",
    "Boss",
    "Shadow",
    "DJ Tillu",
    "Das Ka Dhamki",
    "Bheemla Nayak",
    "Love Story",
  ];

  const lovedByMasses = [
    "Samajavaragamana",
    "Chaavu Kaburu Challaga",
    "Ashoka Vanamlo Arjuna Kalyanam",
    "Month of Madhu",
    "Keedaa Cola",
    "Ambajipeta Marriage Band",
    "Malli Pelli",
    "Konchem Ishtam Konchem Kashtam",
    "Naandhi",
    "Sundaram Master",
    "Vinaro Bhagyamu Vishnu Katha",
    "Swathi Muthyam",
    "Raja Vaaru Rani Gaaru",
    "Dikkulu Choodaku Ramayya",
    "Zombie Reddy",
    "Mail",
    "Life Is Beautiful",
    "Arjun Suravaram",
    "Baby",
    "Colour Photo",
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

      {/* Featured Movie on Movies */}
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

      {/* Genres */}
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

      {/* New Telugu Movies */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">New Telugu Movies</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2">
          {[
            "F3 - Fun and Frustration",
            "Ghani",
            "Monster",
            "Bimbisara",
            "Aadavallu Meeku Johaarlu",
            "Kantara",
          ].map((title, i) => (
            <div
              key={i}
              className="min-w-[150px] bg-gray-700 rounded-lg p-4 flex items-center justify-center text-white text-sm cursor-pointer"
            >
              {title}
            </div>
          ))}
        </div>
      </section>

      {/* Must Watch Telugu Movies */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Must Watch Telugu Movies</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2">
          {[
            "Pushpa: The Rise",
            "Baahubali: The Beginning",
            "Ala Vaikunthapurramuloo",
            "RRR",
            "Mahanati",
            "Jersey",
          ].map((title, i) => (
            <div
              key={i}
              className="min-w-[150px] bg-gray-700 rounded-lg p-4 flex items-center justify-center text-white text-sm cursor-pointer"
            >
              {title}
            </div>
          ))}
        </div>
      </section>

      {/* App Download Section */}
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

// --- Watch Free Content Component ---
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
      {/* Featured Movie */}
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
    </div>
  );
};

// --- My Offers Content Component ---
const MyOffersContent = () => {
  const offers = [
    { id: 1, title: "50% Off on Annual Subscription", expiry: "Expires: Sep 30, 2025" },
    { id: 2, title: "Get 1 Month Free Trial", expiry: "Expires: Oct 15, 2025" },
  ];

  const myAhaItems = [
    { id: 1, title: "My Watchlist", count: 12 },
    { id: 2, title: "Downloaded", count: 5 },
    { id: 3, title: "Favorites", count: 8 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-16 text-white">
      {/* My Offers Section */}
      <section className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">My Offers</h3>
        <ul className="space-y-3">
          {offers.map((offer) => (
            <li key={offer.id} className="bg-gray-700 p-4 rounded flex justify-between items-center">
              <span>{offer.title}</span>
              <small className="text-gray-400">{offer.expiry}</small>
            </li>
          ))}
        </ul>
      </section>

      {/* My Aha Section */}
      <section className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">My Aha</h3>
        <ul className="flex gap-6">
          {myAhaItems.map((item) => (
            <li
              key={item.id}
              className="bg-gray-700 p-4 rounded flex flex-col items-center flex-1"
            >
              <span className="text-xl font-semibold">{item.count}</span>
              <span className="text-gray-400">{item.title}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

// --- Shows Page Content Component ---
const ShowsContent = () => {
  const featuredShow = {
    title: "Sarkaar",
    episode: "5 Ep 12",
    year: 2025,
    duration: "47m",
    genre: "Game Show",
    rating: "U/A 7+",
    description: `Sarkaar with Mitramandali team 'Priyadarshi, Niharika NM, Rag Mayur and Oi Vishnu.' Niharika NM took Sudheer's flirtation to the next level. While Oi Vishnu takes a playful dig at Priyadarshi, keeping the vibe light and entertaining. Don't miss the ultimate fun and laughs!`,
    poster: "/sarkaar-poster.jpg",
  };

  return (
    <main className="max-w-5xl mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Shows</h1>
      <section className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
        {/* Text Info */}
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-4xl font-bold">
            {featuredShow.title} <span className="text-xl font-normal">{featuredShow.episode}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {featuredShow.year} • {featuredShow.duration} • {featuredShow.genre}
          </p>
          <p className="italic text-yellow-400 text-lg">{featuredShow.rating}</p>
          <p className="text-gray-300 leading-relaxed">{featuredShow.description}</p>
        </div>

        {/* Poster + Mute Button */}
        <div className="md:w-1/3 flex flex-col items-center gap-4">
          <img
            src={featuredShow.poster}
            alt={featuredShow.title}
            className="rounded-lg shadow-lg w-full object-cover"
          />
          <button className="bg-gray-700 px-6 py-2 rounded-md hover:bg-gray-600 transition cursor-pointer">
            Mute
          </button>
        </div>
      </section>
    </main>
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
      case "My Offers":
        return <MyOffersContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="bg-gray-950 min-h-screen font-sans">
      <Navbar current={current} setCurrent={setCurrent} />
      {renderContent()}
    </div>
  );
}
