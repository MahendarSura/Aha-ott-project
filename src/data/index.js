import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

// Importing assets
import BestSeller from "./assets/img/Bestseller.jpg";
import drinks from "./assets/img/Drinks.jpg";
import food from "./assets/img/Food.jpg";
import merchandise from "./assets/img/Merchandise.jpg";
import coffeeAtHome from "./assets/img/CoffeeAtHome.jpg";
import readyToEat from "./assets/img/ReadyToEat.jpg";
import bhuna from "./assets/img/bhuna.webp";
import hazelnut from "./assets/img/hazelnut.webp";
import Three from "./assets/img/Three.webp";
import chocolatebrown from "./assets/img/chocolate-brown.webp";
import paneer from "./assets/img/panner.webp";
import veg from './assets/img/veg.svg';
import nonveg from './assets/img/nonveg.svg';
import icecoffee from "./assets/img/icecoffe.png";
import masalachai from "./assets/img/masala_chai.png";
import bg_1 from "./assets/img/bg_1.png";
import bg_2 from "./assets/img/bg_2.png";
import bg_3 from "./assets/img/bg_3.png";
import burger from "./assets/img/burger.png";

// Defining the Handcrafted Curations
export const HandcraftedCurations = [
    {
        title: "BestSeller",
        img: BestSeller,
        link: "/BestSeller"
    },
    {
        title: "Drinks",
        img: drinks,
        link: "/Drinks"
    },
    {
        title: "Food",
        img: food,
        link: "/Food"
    },
    {
        title: "Merchandise",
        img: merchandise,
        link: "/Merchandise"
    },
    {
        title: "Coffee At Home",
        img: coffeeAtHome,
        link: "/CoffeeAtHome"
    },
    {
        title: "Ready to Eat",
        img: readyToEat,
        link: "/ReadytoEat"
    },
];

// Barista Recommendations for Items
export const BaristaRecommends = [
    {
        id: "1",
        img: hazelnut,
        title: "Hazelnut Triangle",
        gram: "50",
        type: nonveg,
        kcal: "302",
        price: "204",
        paise: "75"
    },
    {
        id: "2",
        img: bhuna,
        title: "Bhuna Chicken Puff",
        type: nonveg,
        gram: "85",
        kcal: "390",
        price: "194",
        paise: "25"
    },
    {
        id: "3",
        img: chocolatebrown,
        title: "Chocolate Brownie Cupcake",
        type: veg,
        gram: "80",
        kcal: "416",
        price: "288",
        paise: "75"
    },
    {
        id: "4",
        img: Three,
        title: "Three Dip Nachos",
        gram: "80",
        type: veg,
        kcal: "513",
        price: "262",
        paise: "50"
    },
    {
        id: "5",
        img: paneer,
        title: "Chilli Paneer In Herbed Bun",
        type: veg,
        gram: "180",
        kcal: "598",
        price: "283",
        paise: "50"
    },
];

// Promotional Banners
export const PromotionBanner = [
    {
        id: "1",
        img: icecoffee,
        title: "Attention Starbucks Fans!",
        bg: bg_1,
        head: "Signature Milkshakes",
        des: "Satisfy your sweet tooth with our signature milkshakes. Indulge today in these coffee-free versions.",
        price: "330",
        paise: "00",
        b_content: "Order Now"
    },
    {
        id: "2",
        img: masalachai,
        title: "Go Desi With!",
        bg: bg_2,
        head: "Masala Chai",
        des: "Enjoy traditional masala chai with abundance of strong Indian spices and flavorful handpicked tea.",
        price: "283",
        paise: "00",
        b_content: "Order Now"
    },
    {
        id: "3",
        img: burger,
        title: "Presenting",
        bg: bg_3,
        head: "Freshly Assembled",
        des: "Savor the taste of our new handcrafted sandwiches. Freshness never tasted so good.",
        price: "350",
        paise: "00",
        b_content: "Know More"
    },
];

// App Component
const App = () => {
    return (
        <Router>
            <div className="App">
                <h1>AHA OTT App</h1>
                <Switch>
                    {/* Add Routes here */}
                    <Route exact path="/" component={() => <h2>Welcome to AHA OTT</h2>} />
                    {/* Add more routes for HandcraftedCurations or PromotionBanner pages */}
                    <Route path="/BestSeller" render={() => <div>Best Seller Content</div>} />
                    <Route path="/Drinks" render={() => <div>Drinks Content</div>} />
                    <Route path="/Food" render={() => <div>Food Content</div>} />
                    <Route path="/Merchandise" render={() => <div>Merchandise Content</div>} />
                    {/* Add other routes similarly */}
                </Switch>
            </div>
        </Router>
    );
};

// Render to the DOM
ReactDOM.render(<App />, document.getElementById('root'));

