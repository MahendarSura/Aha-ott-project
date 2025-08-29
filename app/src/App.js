import React, { useState } from "react";

// --- Import all images from a local 'images' directory ---
import sarkaarPoster from "./images/sarkaar-poster.jpg";
import kothapalliloOkappuduPoster from "./images/kothapallilo-okappudu-poster.jpg";
import paNaannaPoster from "./images/pa-naanna-poster.jpg";
import movieReviewPoster from "./images/movie-review-poster.jpg";
import networkPoster from "./images/network-poster.jpg";
import virginBoysPoster from "./images/virgin-boys-poster.jpg";
import vijayanandPoster from "./images/vijayanand-poster.jpg";
import kaliyugamPoster from "./images/kaliyugam-poster.jpg";
import sareePoster from "./images/saree-poster.jpg";
import saradhiPoster from "./images/saradhi-poster.jpg";
import rajaVaaruPoster from "./images/raja-vaaru-poster.jpg";
import fusionMedlyPoster from "./images/fusion-medly-poster.jpg";
import mastisPoster from "./images/mastis-poster.jpg";
import iravaiMoodu23Poster from "./images/23-iravai-moodu-poster.jpg";
import ghatikachalamPoster from "./images/ghatikachalam-poster.jpg";
import yamudiPremakathaPoster from "./images/yamudi-premakatha-poster.jpg";
import karthikaPoster from "./images/karthika-poster.jpg";
import sinPoster from "./images/sin-poster.jpg";
import arjunPoster from "./images/arjun-poster.jpg";
import demonPoster from "./images/demon-poster.jpg";
import brahmaAnandamPoster from "./images/brahma-anandam-poster.jpg";
import premaluPoster from "./images/premalu-poster.jpg";
import vidyaVasulaPoster from "./images/vidya-vasula-poster.jpg";
import samajavaragamanaPoster from "./images/samajavaragamana-poster.jpg";
import ashokaVanamloPoster from "./images/ashoka-vanamlo-poster.jpg";
import vinaroBhagyamuPoster from "./images/vinaro-bhagyamu-poster.jpg";
import djTilluPoster from "./images/dj-tillu-poster.jpg";
import maruthiNagarPoster from "./images/maruthi-nagar-poster.jpg";
import janakaAyithePoster from "./images/janaka-ayithe-poster.jpg";
import chinnaKathaPoster from "./images/chinna-katha-poster.jpg";
import sareeBossPoster from "./images/saree-boss-poster.jpg";
import officeLoveStoriesPoster from "./images/office-love-stories-poster.jpg";
import cowDungPoster from "./images/cow-dung-poster.jpg";
import boycottJuniorsPoster from "./images/boycott-juniors-poster.jpg";
import potluckPoster from "./images/potluck-poster.jpg";
import trainingPoster from "./images/training-poster.jpg";
import corporateBachelorPoster from "./images/corporate-bachelor-poster.jpg";
import dreamsOnHoldPoster from "./images/dreams-on-hold-poster.jpg";
import nishaNotePoster from "./images/nisha-note-poster.jpg";
import captaincyWarPoster from "./images/captaincy-war-poster.jpg";
import extraPressurePoster from "./images/extra-pressure-poster.jpg";
import corporateIplPoster from "./images/corporate-ipl-poster.jpg";
import motivationPoster from "./images/motivation-poster.jpg";
import clientPossiblePoster from "./images/client-possible-poster.jpg";
import problemsPoster from "./images/problems-poster.jpg";
import loveLaughterPoster from "./images/love-laughter-poster.jpg";
import coldWarsPoster from "./images/cold-wars-poster.jpg";
import girlfriendInOfficePoster from "./images/girlfriend-in-office-poster.jpg";
import oneMailPoster from "./images/one-mail-poster.jpg";
import razakarPoster from "./images/razakar-poster.jpg";
import babyPoster from "./images/baby-poster.jpg";
import colourPhotoPoster from "./images/colour-photo-poster.jpg";
import pottelPoster from "./images/pottel-poster.jpg";
import ambajipetaPoster from "./images/ambajipeta-poster.jpg";
import rajuYadavPoster from "./images/raju-yadav-poster.jpg";
import mercyKillingPoster from "./images/mercy-killing-poster.jpg";
import polimera2Poster from "./images/polimera2-poster.jpg";
import monthOfMadhuPoster from "./images/month-of-madhu-poster.jpg";
import vereLevelOfficePoster from "./images/vere-level-office-poster.jpg";
import teluguIdolPoster from "./images/telugu-idol-poster.jpg";
import danceIkonPoster from "./images/dance-ikon-poster.jpg";
import hometownPoster from "./images/hometown-poster.jpg";
import chefMantraPoster from "./images/chef-mantra-poster.jpg";
import emojiPoster from "./images/emoji-poster.jpg";
import unstoppablePoster from "./images/unstoppable-poster.jpg";
import bhamakalapam2Poster from "./images/bhamakalapam2-poster.jpg";
import dearDongaPoster from "./images/dear-donga-poster.jpg";
import arthamaindaArunPoster from "./images/arthamainda-arun-poster.jpg";
import bhamakalapamPoster from "./images/bhamakalapam-poster.jpg";
import sathiGaniPoster from "./images/sathi-gani-poster.jpg";
import baluGaniPoster from "./images/balu-gani-poster.jpg";
import mixUpPoster from "./images/mix-up-poster.jpg";
import superOverPoster from "./images/super-over-poster.jpg";
import senapathiPoster from "./images/senapathi-poster.jpg";
import jollyGymkhanaPoster from "./images/jolly-gymkhana-poster.jpg";
import aparadhiPoster from "./images/aparadhi-poster.jpg";
import devilsChairPoster from "./images/devils-chair-poster.jpg";
import rekhachithramPoster from "./images/rekhachithram-poster.jpg";
import marcoPoster from "./images/marco-poster.jpg";
import veeraarajuPoster from "./images/veeraaraju-poster.jpg";
import naandhiPoster from "./images/naandhi-poster.jpg";
import pandavuluPoster from "./images/pandavulu-poster.jpg";
import chefMantraEpisode4Poster from "./images/chef-mantra-episode4-poster.jpg";
import vivekanandanPoster from "./images/vivekanandan-poster.jpg";
import kalpana3Poster from "./images/kalpana3-poster.jpg";
import sagaraSangamamPoster from "./images/sagara-sangamam-poster.jpg";
import seethammaVakitloPoster from "./images/seethamma-vakitlo-poster.jpg";
import swathiMuthyamPoster from "./images/swathi-muthyam-poster.jpg";
import athaduPoster from "./images/athadu-poster.jpg";
import swayamKrushiPoster from "./images/swayam-krushi-poster.jpg";
import chakramPoster from "./images/chakram-poster.jpg";
import apathbandhavuduPoster from "./images/apathbandhavudu-poster.jpg";
import suryavamsamPoster from "./images/suryavamsam-poster.jpg";
import fightForMyWayPoster from "./images/fight-for-my-way-poster.jpg";
import hwarangPoster from "./images/hwarang-poster.jpg";
import youthOfMayPoster from "./images/youth-of-may-poster.jpg";
import school2017Poster from "./images/school-2017-poster.jpg";
import coupleOnBacktrackPoster from "./images/couple-on-backtrack-poster.jpg";
import roses3Poster from "./images/3-roses-poster.jpg";
import sshhhPoster from "./images/sshhh-poster.jpg";
import bubbleGumPoster from "./images/bubble-gum-poster.jpg";
import hotSpotPoster from "./images/hot-spot-poster.jpg";
import manmathaLeelaPoster from "./images/manmatha-leela-poster.jpg";
import lockedPoster from "./images/locked-poster.jpg";
import dirtyHariPoster from "./images/dirty-hari-poster.jpg";
import evolPoster from "./images/evol-poster.jpg";
import siddharthRoyPoster from "./images/siddharth-roy-poster.jpg";
import krishnaLeelaPoster from "./images/krishna-leela-poster.jpg";
import oriDevudaPoster from "./images/ori-devuda-poster.jpg";
import sriRamadasuPoster from "./images/sri-ramadasu-poster.jpg";
import stalinPoster from "./images/stalin-poster.jpg";
import simhaPoster from "./images/simha-poster.jpg";
import fidaaPoster from "./images/fidaa-poster.jpg";
import adhursPoster from "./images/adhurs-poster.jpg";
import khakeePoster from "./images/khakee-poster.jpg";
import zombieReddyPoster from "./images/zombie-reddy-poster.jpg";
import dasKaDhamkiPoster from "./images/das-ka-dhamki-poster.jpg";
import krackPoster from "./images/krack-poster.jpg";
import teluguIdolS4PromoPoster from "./images/telugu-idol-s4-promo-poster.jpg";
import loveStoryPoster from "./images/love-story-poster.jpg";
import sundaramMasterPoster from "./images/sundaram-master-poster.jpg";
import a96Poster from "./images/96-poster.jpg";
import sammathamePoster from "./images/sammathame-poster.jpg";
import a18PagesPoster from "./images/18-pages-poster.jpg";
import neeliMeghaPoster from "./images/neeli-megha-poster.jpg";
import magadheeraPoster from "./images/magadheera-poster.jpg";
import intintiRamayanamPoster from "./images/intinti-ramayanam-poster.jpg";
import srKalyanamandapamPoster from "./images/sr-kalyanamandapam-poster.jpg";
import laggamPoster from "./images/laggam-poster.jpg";
import bheemlaNayakPoster from "./images/bheemla-nayak-poster.jpg";
import karthikeyaPoster from "./images/karthikeya-poster.jpg";
import chandamamaPoster from "./images/chandamama-poster.jpg";
import khaidiPoster from "./images/khaidi-poster.jpg";
import keedaaColaPoster from "./images/keedaa-cola-poster.jpg";
import shankaraBharanamPoster from "./images/shankara-bharanam-poster.jpg";
import masoodaPoster from "./images/masooda-poster.jpg";
import tv9TeluguLivePoster from "./images/tv9-telugu-live-poster.jpg";
import teluguDramaPoster from "./images/telugu-drama-poster.jpg";
import teluguActionPoster from "./images/telugu-action-poster.jpg";
import teluguRomancePoster from "./images/telugu-romance-poster.jpg";
import teluguComedyPoster from "./images/telugu-comedy-poster.jpg";
import teluguThrillerPoster from "./images/telugu-thriller-poster.jpg";
import teluguCrimePoster from "./images/telugu-crime-poster.jpg";
import romanceComedyPoster from "./images/romance-comedy-poster.jpg";
import familyDramaPoster from "./images/family-drama-poster.jpg";
import devotionalPoster from "./images/devotional-poster.jpg";
import horrorComedyPoster from "./images/horror-comedy-poster.jpg";
import thuppakiPoster from "./images/thuppaki-poster.jpg";
import nenuRowdyNePoster from "./images/nenu-rowdy-ne-poster.jpg";
import nagaramPoster from "./images/nagaram-poster.jpg";
import a100DaysLovePoster from "./images/100-days-love-poster.jpg";
import selfieRajaPoster from "./images/selfie-raja-poster.jpg";
import mrKarthikPoster from "./images/mr-karthik-poster.jpg";
import memuPoster from "./images/memu-poster.jpg";
import utthamaVillianPoster from "./images/utthama-villian-poster.jpg";
import yuddhaBhoomiPoster from "./images/yuddha-bhoomi-poster.jpg";
import a16DetailPoster from "./images/16-detail-poster.jpg";
import anasuyaPoster from "./images/anasuya-poster.jpg";
import midnightMurdersPoster from "./images/midnight-murders-poster.jpg";
import forensicPoster from "./images/forensic-poster.jpg";
import chunduruPoster from "./images/chunduru-poster.jpg";
import jallikattuPoster from "./images/jallikattu-poster.jpg";
import anukoniAthidhiPoster from "./images/anukoni-athidhi-poster.jpg";
import nipahVirusPoster from "./images/nipah-virus-poster.jpg";
import trancePoster from "./images/trance-poster.jpg";
import coldCasePoster from "./images/cold-case-poster.jpg";
import anaganagaAthidhiPoster from "./images/anaganaga-athidhi-poster.jpg";
import theRoadPoster from "./images/the-road-poster.jpg";
import neneNaaPoster from "./images/nene-naa-poster.jpg";
import bloodyMaryPoster from "./images/bloody-mary-poster.jpg";
import csiSanatanPoster from "./images/csi-sanatan-poster.jpg";
import arjunSuravaramPoster from "./images/arjun-suravaram-poster.jpg";
import tantraPoster from "./images/tantra-poster.jpg";
import kajalKarthikaPoster from "./images/kajal-karthika-poster.jpg";
import bhoothaddamPoster from "./images/bhoothaddam-poster.jpg";
import pindamPoster from "./images/pindam-poster.jpg";
import hidimbhaPoster from "./images/hidimbha-poster.jpg";
import raniBangalaPoster from "./images/rani-bangala-poster.jpg";
import mataRaaniPoster from "./images/mata-raani-poster.jpg";
import sarvamShakthiPoster from "./images/sarvam-shakthi-poster.jpg";
import ramaAyodhyaPoster from "./images/rama-ayodhya-poster.jpg";
import ahaGodariPoster from "./images/aha-godari-poster.jpg";
import mahaGaneshaPoster from "./images/maha-ganesha-poster.jpg";
import samathaKumbhPoster from "./images/samatha-kumbh-poster.jpg";
import goodLuckGaneshaPoster from "./images/good-luck-ganesha-poster.jpg";
import jambaLakidiPoster from "./images/jamba-lakidi-poster.jpg";
import premabhishekamPoster from "./images/premabhishekam-poster.jpg";
import premikuluPoster from "./images/premikulu-poster.jpg";
import tiS3Auditions1Poster from "./images/ti-s3-auditions1-poster.jpg";
import tiS3Auditions2Poster from "./images/ti-s3-auditions2-poster.jpg";
import tiS3Auditions3Poster from "./images/ti-s3-auditions3-poster.jpg";
import tiS3Auditions4Poster from "./images/ti-s3-auditions4-poster.jpg";
import tiS3Gala1Poster from "./images/ti-s3-gala1-poster.jpg";
import tiS3Gala2Poster from "./images/ti-s3-gala2-poster.jpg";
import tiS3Rowdy1Poster from "./images/ti-s3-rowdy1-poster.jpg";
import tiS3Rowdy2Poster from "./images/ti-s3-rowdy2-poster.jpg";
import tiS3Elimination1Poster from "./images/ti-s3-elimination1-poster.jpg";
import tiS3Elimination2Poster from "./images/ti-s3-elimination2-poster.jpg";
import tiS3Top101Poster from "./images/ti-s3-top10-1-poster.jpg";
import tiS3Top102Poster from "./images/ti-s3-top10-2-poster.jpg";
import tiS3Sivamani1Poster from "./images/ti-s3-sivamani-1-poster.jpg";
import tiS3Sivamani2Poster from "./images/ti-s3-sivamani-2-poster.jpg";
import tiS3Rashmika1Poster from "./images/ti-s3-rashmika-1-poster.jpg";
import tiS3Rashmika2Poster from "./images/ti-s3-rashmika-2-poster.jpg";
import tiS3Judges1Poster from "./images/ti-s3-judges-1-poster.jpg";
import tiS3Judges2Poster from "./images/ti-s3-judges-2-poster.jpg";
import tiS3Nani1Poster from "./images/ti-s3-nani-1-poster.jpg";
import tiS3Nani2Poster from "./images/ti-s3-nani-2-poster.jpg";
import balaBharathamPoster from "./images/bala-bharatham-poster.jpg";
import christmasThathaPoster from "./images/christmas-thatha-poster.jpg";
import a1996DharmapuriPoster from "./images/1996-dharmapuri-poster.jpg";
import aaduMagaadraPoster from "./images/aadu-magaadra-poster.jpg";
import aithe2Poster from "./images/aithe2-poster.jpg";
import alluriPoster from "./images/alluri-poster.jpg";
import antonyPoster from "./images/antony-poster.jpg";
import ashokPoster from "./images/ashok-poster.jpg";
import asuraguruPoster from "./images/asuraguru-poster.jpg";
import moviesFreePoster from "./images/movies-free.jpg";
import moviesPremiumPoster from "./images/movies-premium.jpg";
import moviesAllPoster from "./images/movies-all.jpg";
import showsAllPoster from "./images/shows-all.jpg";
import showsPremiumPoster from "./images/shows-premium.jpg";
import showsFreePoster from "./images/shows-free.jpg";

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
    { title: "Sarkaar 5 Ep 12", img: sarkaarPoster, isPremium: true },
    {
      title: "Kothapallilo Okappudu",
      img: kothapalliloOkappuduPoster,
      isPremium: true,
    },
    { title: "PA... PA... (O Naanna)", img: paNaannaPoster, isPremium: true },
    { title: "Movie Review", img: movieReviewPoster, isPremium: true },
    { title: "Network", img: networkPoster, isPremium: true },
    { title: "Virgin Boys", img: virginBoysPoster, isPremium: true },
    {
      title: "Vijayanand",
      img: vijayanandPoster,
      isPremium: true,
      isAgeRated: true,
    },
    { title: "Kaliyugam 2064", img: kaliyugamPoster, isPremium: true },
    { title: "Saree", img: sareePoster, isPremium: true },
    {
      title: "Saradhi",
      img: saradhiPoster,
      isPremium: true,
      isAgeRated: true,
    },
    { title: "Sri Sri Sri Raja Vaaru", img: rajaVaaruPoster, isPremium: true },
    { title: "Fusion Meets Medly", img: fusionMedlyPoster, isPremium: true },
    { title: "Masti's (The Movie)", img: mastisPoster, isPremium: true },
    {
      title: "23 (Iravai Moodu)",
      img: iravaiMoodu23Poster,
      isPremium: true,
      isAgeRated: true,
    },
    { title: "Ghatikachalam", img: ghatikachalamPoster, isPremium: true },
    {
      title: "Oka Yamudi Premakatha",
      img: yamudiPremakathaPoster,
      isPremium: true,
      isAgeRated: true,
    },
    { title: "Karthika Missing Case", img: karthikaPoster, isPremium: true },
    {
      title: "SIN(The Movie)",
      img: sinPoster,
      isPremium: true,
      isAgeRated: true,
    },
    {
      title: "Arjun S/o Vyjayanthi",
      img: arjunPoster,
      isPremium: true,
    },
    {
      title: "Demon",
      img: demonPoster,
      isPremium: true,
      isAgeRated: true,
    },
  ];

  const ganeshaFamilyTime = [
    {
      title: "Brahma-Anandam",
      img: brahmaAnandamPoster,
      isPremium: true,
    },
    { title: "Premalu", img: premaluPoster, isPremium: true },
    {
      title: "Vidya Vasula Aham",
      img: vidyaVasulaPoster,
      isPremium: true,
    },
    {
      title: "Samajavaragamana",
      img: samajavaragamanaPoster,
      isPremium: true,
    },
    {
      title: "Ashoka Vanamlo Arjuna Kalyanam",
      img: ashokaVanamloPoster,
      isPremium: true,
    },
    {
      title: "Vinaro Bhagyamu Vishnu Katha",
      img: vinaroBhagyamuPoster,
      isPremium: true,
    },
    { title: "DJ Tillu", img: djTilluPoster, isPremium: true },
    {
      title: "Maruthi Nagar Subrahmanyam",
      img: maruthiNagarPoster,
      isPremium: true,
    },
    {
      title: "Janaka Ayithe Ganaka",
      img: janakaAyithePoster,
      isPremium: true,
    },
    {
      title: "35 Chinna Katha Kadhu",
      img: chinnaKathaPoster,
      isPremium: true,
    },
  ];

  const vereLevelOffice = [
    { title: "Movie Review", img: movieReviewPoster, isPremium: true },
    { title: "The Saree Boss", img: sareeBossPoster, isPremium: true },
    {
      title: "The Office Love Stories",
      img: officeLoveStoriesPoster,
      isPremium: true,
    },
    { title: "Cow dung cake sale", img: cowDungPoster, isPremium: true },
    { title: "Boycott juniors", img: boycottJuniorsPoster, isPremium: true },
    { title: "The Potluck", img: potluckPoster, isPremium: true },
    {
      title: "Training Cancelled, Potluck Approved.",
      img: trainingPoster,
      isPremium: true,
    },
    {
      title: "The Corporate Bachelor",
      img: corporateBachelorPoster,
      isPremium: true,
    },
    { title: "Dreams on Hold", img: dreamsOnHoldPoster, isPremium: true },
    { title: "Nisha’s Last Note", img: nishaNotePoster, isPremium: true },
    {
      title: "Captaincy War: Satya vs Nikhil",
      img: captaincyWarPoster,
      isPremium: true,
    },
    {
      title: "Ex-tra' Pressure at the Top",
      img: extraPressurePoster,
      isPremium: true,
    },
    {
      title: "Corporate IPL – Ishq, Pressure, Layoff",
      img: corporateIplPoster,
      isPremium: true,
    },
    {
      title: "Motivation or Termination?",
      img: motivationPoster,
      isPremium: true,
    },
    {
      title: "Mission: Client Possible",
      img: clientPossiblePoster,
      isPremium: true,
    },
    {
      title: "3 Problems, 0 Solutions",
      img: problemsPoster,
      isPremium: true,
    },
    {
      title: "Love, Laughter & Marriage Application",
      img: loveLaughterPoster,
      isPremium: true,
    },
    { title: "Cold Wars & Cake Fights", img: coldWarsPoster, isPremium: true },
    {
      title: "Making girlfriend in office",
      img: girlfriendInOfficePoster,
      isPremium: true,
    },
    {
      title: "One mail can change your job",
      img: oneMailPoster,
      isPremium: true,
    },
  ];

  const awardWinningMovies = [
    {
      title: "Razakar",
      img: razakarPoster,
      isPremium: true,
      isAgeRated: true,
    },
    { title: "Baby", img: babyPoster, isPremium: true },
    {
      title: "35 Chinna Katha Kadhu",
      img: chinnaKathaPoster,
      isPremium: true,
    },
    { title: "Colour Photo", img: colourPhotoPoster, isPremium: true },
    { title: "Pottel", img: pottelPoster, isPremium: true },
    {
      title: "Ambajipeta Marriage Band",
      img: ambajipetaPoster,
      isPremium: true,
    },
    { title: "Raju Yadav", img: rajuYadavPoster, isPremium: true },
    { title: "Mercy Killing", img: mercyKillingPoster, isPremium: true },
    {
      title: "Polimera 2",
      img: polimera2Poster,
      isPremium: true,
      isAgeRated: true,
    },
    {
      title: "Month of Madhu",
      img: monthOfMadhuPoster,
      isPremium: true,
      isAgeRated: true,
    },
  ];

  const ahaOriginals = [
    { title: "SARKAAR", img: sarkaarPoster, isPremium: true },
    {
      title: "Vere Level Office",
      img: vereLevelOfficePoster,
      isPremium: true,
    },
    {
      title: "Masti's (The Movie)",
      img: mastisPoster,
      isPremium: true,
      isAgeRated: true,
    },
    {
      title: "SIN(The Movie)",
      img: sinPoster,
      isPremium: true,
      isAgeRated: true,
    },
    { title: "Telugu Indian Idol", img: teluguIdolPoster, isPremium: true },
    { title: "Dance Ikon", img: danceIkonPoster, isPremium: true },
    { title: "Hometown", img: hometownPoster, isPremium: true },
    { title: "Chef mantra", img: chefMantraPoster, isPremium: true },
    {
      title: "Emoji",
      img: emojiPoster,
      isPremium: true,
      isAgeRated: true,
    },
    { title: "Unstoppable", img: unstoppablePoster, isPremium: true },
    { title: "Bhamakalapam 2", img: bhamakalapam2Poster, isPremium: true },
    { title: "My Dear Donga", img: dearDongaPoster, isPremium: true },
    {
      title: "Arthamainda Arun Kumar",
      img: arthamaindaArunPoster,
      isPremium: true,
    },
    { title: "Bhamakalapam", img: bhamakalapamPoster, isPremium: true },
    {
      title: "Sathi Gani Rendu Ekaralu",
      img: sathiGaniPoster,
      isPremium: true,
    },
    { title: "Balu Gani Talkies", img: baluGaniPoster, isPremium: true },
    {
      title: "Mix Up",
      img: mixUpPoster,
      isPremium: true,
      isAgeRated: true,
    },
    { title: "Super Over", img: superOverPoster, isPremium: true },
    { title: "Senapathi", img: senapathiPoster, isPremium: true },
  ];

  const recentlyAdded = [
    {
      title: "Kothapallilo Okappudu",
      img: kothapalliloOkappuduPoster,
      isPremium: true,
    },
    { title: "Sarkaar 5 Ep 12", img: sarkaarPoster, isPremium: true },
    { title: "The Saree Boss", img: sareeBossPoster, isPremium: true },
    { title: "Vijayanand", img: vijayanandPoster, isPremium: true },
    { title: "Network", img: networkPoster, isPremium: true },
    { title: "Arjun S/o Vyjayanthi", img: arjunPoster, isPremium: true },
    { title: "Jolly O Gymkhana", img: jollyGymkhanaPoster, isPremium: true },
    { title: "Aparadhi", img: aparadhiPoster, isPremium: true },
    {
      title: "The Devil's Chair",
      img: devilsChairPoster,
      isPremium: true,
      isAgeRated: true,
    },
    { title: "Rekhachithram", img: rekhachithramPoster, isPremium: true },
    {
      title: "Marco",
      img: marcoPoster,
      isPremium: true,
      isAgeRated: true,
    },
    { title: "Hometown", img: hometownPoster, isPremium: true },
    {
      title: "Veeraaraju 1991",
      img: veeraarajuPoster,
      isPremium: true,
      isAgeRated: true,
    },
    {
      title: "Brahma-Anandam",
      img: brahmaAnandamPoster,
      isPremium: true,
    },
    { title: "Naandhi", img: naandhiPoster, isPremium: true },
    {
      title: "Pandavulu Pandavulu Tummeda",
      img: pandavuluPoster,
      isPremium: false,
    },
    {
      title: "Chef Mantra Project K Episode 4",
      img: chefMantraEpisode4Poster,
      isPremium: true,
    },
    {
      title: "Vere Level Office",
      img: vereLevelOfficePoster,
      isPremium: true,
    },
    {
      title: "Vivekanandan Viral",
      img: vivekanandanPoster,
      isPremium: true,
    },
    {
      title: "Kalpana 3",
      img: kalpana3Poster,
      isPremium: true,
      isAgeRated: true,
    },
  ];

  const evergreens = [
    {
      title: "Sagara Sangamam",
      img: sagaraSangamamPoster,
      isPremium: true,
    },
    {
      title: "Seethamma Vakitlo Sirimalle Chettu",
      img: seethammaVakitloPoster,
      isPremium: true,
    },
    { title: "Swathi Muthyam", img: swathiMuthyamPoster, isPremium: true },
    { title: "Athadu", img: athaduPoster, isPremium: true },
    { title: "Swayam Krushi", img: swayamKrushiPoster, isPremium: true },
    { title: "Chakram", img: chakramPoster, isPremium: true },
    {
      title: "Apathbandhavudu",
      img: apathbandhavuduPoster,
      isPremium: true,
    },
    { title: "Suryavamsam", img: suryavamsamPoster, isPremium: true },
  ];

  const trendingTop10 = [
    {
      title: "Kothapallilo Okappudu",
      img: kothapalliloOkappuduPoster,
      isPremium: true,
    },
    { title: "Sarkaar 5 Ep 12", img: sarkaarPoster, isPremium: true },
    { title: "PA... PA... (O Naanna)", img: paNaannaPoster, isPremium: true },
    { title: "Network", img: networkPoster, isPremium: true },
    {
      title: "Virgin Boys",
      img: virginBoysPoster,
      isPremium: true,
      isAgeRated: true,
    },
    { title: "Vijayanand", img: vijayanandPoster, isPremium: true },
    { title: "Rekhachithram", img: rekhachithramPoster, isPremium: true },
    { title: "Telugu Indian Idol", img: teluguIdolPoster, isPremium: true },
    { title: "Kaliyugam 2064", img: kaliyugamPoster, isPremium: true },
    {
      title: "Marco",
      img: marcoPoster,
      isPremium: true,
      isAgeRated: true,
    },
  ];

  const kDrama = [
    {
      title: "FIGHT FOR MY WAY",
      img: fightForMyWayPoster,
      isPremium: true,
    },
    {
      title: "Hwarang - The Poet Warrior Youth",
      img: hwarangPoster,
      isPremium: true,
    },
    { title: "Youth of May", img: youthOfMayPoster, isPremium: true },
    { title: "SCHOOL 2017", img: school2017Poster, isPremium: true },
    {
      title: "Couple on the Backtrack",
      img: coupleOnBacktrackPoster,
      isPremium: true,
    },
  ];

  const genres = [
    {
      title: "3 Roses",
      img: roses3Poster,
      isPremium: true,
      isSmall: true,
    },
    { title: "Shhh...", img: sshhhPoster, isPremium: true, isSmall: true },
    {
      title: "Bubble Gum",
      img: bubbleGumPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Hot Spot",
      img: hotSpotPoster,
      isPremium: true,
      isAgeRated: true,
      isSmall: true,
    },
    {
      title: "Manmatha Leela",
      img: manmathaLeelaPoster,
      isPremium: true,
      isAgeRated: true,
      isSmall: true,
    },
    {
      title: "Locked",
      img: lockedPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Dirty Hari",
      img: dirtyHariPoster,
      isPremium: true,
      isAgeRated: true,
      isSmall: true,
    },
    {
      title: "Evol",
      img: evolPoster,
      isPremium: true,
      isAgeRated: true,
      isSmall: true,
    },
    {
      title: "Siddharth Roy",
      img: siddharthRoyPoster,
      isPremium: true,
      isAgeRated: true,
      isSmall: true,
    },
    {
      title: "Krishna Leela",
      img: krishnaLeelaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Ori Devuda",
      img: oriDevudaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Sri Ramadasu",
      img: sriRamadasuPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Stalin",
      img: stalinPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Simha",
      img: simhaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Fidaa",
      img: fidaaPoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Adhurs",
      img: adhursPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Khakee",
      img: khakeePoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Zombie Reddy",
      img: zombieReddyPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Das Ka Dhamki",
      img: dasKaDhamkiPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Krack",
      img: krackPoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Telugu Indian Idol S4 Promo",
      img: teluguIdolS4PromoPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Love Story",
      img: loveStoryPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Sundaram Master",
      img: sundaramMasterPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "96",
      img: a96Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Sammathame",
      img: sammathamePoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "18 Pages",
      img: a18PagesPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Neeli Megha Shyamam",
      img: neeliMeghaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Magadheera",
      img: magadheeraPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Intinti Ramayanam",
      img: intintiRamayanamPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "SR Kalyanamandapam",
      img: srKalyanamandapamPoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Laggam",
      img: laggamPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Bheemla Nayak",
      img: bheemlaNayakPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Karthikeya",
      img: karthikeyaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Chandamama",
      img: chandamamaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Khaidi",
      img: khaidiPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Keedaa Cola",
      img: keedaaColaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Shankara Bharanam",
      img: shankaraBharanamPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Masooda",
      img: masoodaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TV9 Telugu Live",
      img: tv9TeluguLivePoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Telugu Drama",
      img: teluguDramaPoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Telugu Action",
      img: teluguActionPoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Telugu Romance",
      img: teluguRomancePoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Telugu Comedy",
      img: teluguComedyPoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Telugu Thriller",
      img: teluguThrillerPoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Telugu Crime",
      img: teluguCrimePoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Romance Comedy",
      img: romanceComedyPoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Family Drama",
      img: familyDramaPoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Devotional",
      img: devotionalPoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Horror Comedy",
      img: horrorComedyPoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Thuppaki",
      img: thuppakiPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Nenu Rowdy Ne",
      img: nenuRowdyNePoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Nagaram",
      img: nagaramPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "100 Days of Love",
      img: a100DaysLovePoster,
      isPremium: false,
      isSmall: true,
    },
    {
      title: "Selfie Raja",
      img: selfieRajaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Mr Karthik",
      img: mrKarthikPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Memu",
      img: memuPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Utthama Villian",
      img: utthamaVillianPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Yuddha Bhoomi",
      img: yuddhaBhoomiPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "16 Details",
      img: a16DetailPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Anasuya",
      img: anasuyaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Midnight Murders",
      img: midnightMurdersPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Forensic",
      img: forensicPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Chunduru",
      img: chunduruPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Jallikattu",
      img: jallikattuPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Anukoni Athidhi",
      img: anukoniAthidhiPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Nipah Virus",
      img: nipahVirusPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Trance",
      img: trancePoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Cold Case",
      img: coldCasePoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Anaganaga Athidhi",
      img: anaganagaAthidhiPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "The Road",
      img: theRoadPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Nene Naa",
      img: neneNaaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Bloody Mary",
      img: bloodyMaryPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "CSI Sanatan",
      img: csiSanatanPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Arjun Suravaram",
      img: arjunSuravaramPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Tantra",
      img: tantraPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Kajal Karthika",
      img: kajalKarthikaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Bhoothaddam Bhaskar Narayana",
      img: bhoothaddamPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Pindam",
      img: pindamPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Hidimbha",
      img: hidimbhaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Rani Bangala",
      img: raniBangalaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Mata Raani",
      img: mataRaaniPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Sarvam Shakthi Mayam",
      img: sarvamShakthiPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Rama Ayodhya",
      img: ramaAyodhyaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Aha Godari",
      img: ahaGodariPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Maha Ganesha",
      img: mahaGaneshaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Samatha Kumbh",
      img: samathaKumbhPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Good Luck Ganesha",
      img: goodLuckGaneshaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Jamba Lakidi Pamba",
      img: jambaLakidiPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Premabhishekam",
      img: premabhishekamPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Premikulu",
      img: premikuluPoster,
      isPremium: true,
      isSmall: true,
    },
  ];

  const teluguIndianIdol = [
    {
      title: "TI S3 Auditions 1",
      img: tiS3Auditions1Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Auditions 2",
      img: tiS3Auditions2Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Auditions 3",
      img: tiS3Auditions3Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Auditions 4",
      img: tiS3Auditions4Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Gala Round 1",
      img: tiS3Gala1Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Gala Round 2",
      img: tiS3Gala2Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Rowdy Boys Day 1",
      img: tiS3Rowdy1Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Rowdy Boys Day 2",
      img: tiS3Rowdy2Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Elimination Round 1",
      img: tiS3Elimination1Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Elimination Round 2",
      img: tiS3Elimination2Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Top 10 Day 1",
      img: tiS3Top101Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Top 10 Day 2",
      img: tiS3Top102Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Sivamani Episode 1",
      img: tiS3Sivamani1Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Sivamani Episode 2",
      img: tiS3Sivamani2Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Rashmika Day 1",
      img: tiS3Rashmika1Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Rashmika Day 2",
      img: tiS3Rashmika2Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Judges Day 1",
      img: tiS3Judges1Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Judges Day 2",
      img: tiS3Judges2Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Nani Day 1",
      img: tiS3Nani1Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "TI S3 Nani Day 2",
      img: tiS3Nani2Poster,
      isPremium: true,
      isSmall: true,
    },
  ];

  const moreMovies = [
    {
      title: "Bala Bharatham",
      img: balaBharathamPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Christmas Thatha",
      img: christmasThathaPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "1996 Dharmapuri",
      img: a1996DharmapuriPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Aadu Magaadra Bujji",
      img: aaduMagaadraPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Aithe 2.0",
      img: aithe2Poster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Alluri",
      img: alluriPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Antony",
      img: antonyPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Ashok",
      img: ashokPoster,
      isPremium: true,
      isSmall: true,
    },
    {
      title: "Asuraguru",
      img: asuraguruPoster,
      isPremium: true,
      isSmall: true,
    },
  ];

  return (
    <div className="p-6">
      <CardCarousel title="New Releases" items={newReleases} />
      <CardCarousel title="Trending Now" items={trendingTop10} />
      <CardCarousel title="Ganesh Chaturthi Family Time" items={ganeshaFamilyTime} />
      <CardCarousel title="Vere Level Office" items={vereLevelOffice} />
      <CardCarousel title="Aha Originals" items={ahaOriginals} />
      <CardCarousel title="Award Winning Movies" items={awardWinningMovies} />
      <CardCarousel title="Recently Added" items={recentlyAdded} />
      <CardCarousel title="Evergreen Classics" items={evergreens} />
      <CardCarousel title="K-Drama" items={kDrama} />
    </div>
  );
};

const MoviesContent = () => (
  <div className="p-6">
    <CardCarousel title="All Movies" items={genres} isSmall={true} showAll={false} />
  </div>
);

const ShowsContent = () => (
  <div className="p-6">
    <CardCarousel title="All Shows" items={teluguIndianIdol} isSmall={true} showAll={false} />
  </div>
);

const WatchFreeContent = () => (
  <div className="p-6">
    <CardCarousel title="Watch Free" items={moreMovies} isSmall={true} showAll={false} />
  </div>
);

// --- Main App Component ---
const App = () => {
  const [currentNav, setCurrentNav] = useState("Home");

  let content;
  switch (currentNav) {
    case "Home":
      content = <HomeContent />;
      break;
    case "Movies":
      content = <MoviesContent />;
      break;
    case "Shows":
      content = <ShowsContent />;
      break;
    case "Watch Free":
      content = <WatchFreeContent />;
      break;
    default:
      content = <HomeContent />;
  }

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar current={currentNav} setCurrent={setCurrentNav} />
      <main className="max-w-7xl mx-auto px-4">{content}</main>
      <Footer />
    </div>
  );
};

export default App;
