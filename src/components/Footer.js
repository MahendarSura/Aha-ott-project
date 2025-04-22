import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { CgFacebook } from "react-icons/cg"
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo.png"
import appstoreiOSImage from "../assets/img/appstoreiOS.png"
import appstoreAndroidImage from "../assets/img/appstoreAndroid.png"

const Footer = () => {
    return (
        <div className='bg-[#0e382c] w-full py-5 hidden sm:block'>
            <div className='p-8 px-4 sm:px-10 md:px-20 lg:pl-24 lg:pr-28 relative mt-3'>
                <div className='flex flex-wrap justify-between'>
                    <div className='min-w-[50px]'>
                        <img src={logo} className="w-16" alt="Aha OTT Logo" />
                    </div>
                    <div className='flex flex-col text-white'>
                        <Link to={""} className="font-s_bold text-lg mb-4">About Us</Link>
                        <Link to={""} className="text-sm mb-6">Our Mission</Link>
                        <Link to={""} className="text-sm mb-6">Our Story</Link>
                        <Link to={""} className="text-sm mb-6">Careers</Link>
                    </div>
                    <div className='flex flex-col text-white'>
                        <Link to={""} className="font-s_bold text-lg mb-4">Help & Support</Link>
                        <Link to={""} className="text-sm mb-6">Customer Support</Link>
                        <Link to={""} className="text-sm mb-6">FAQ</Link>
                        <Link to={""} className="text-sm mb-6">Terms & Conditions</Link>
                        <Link to={""} className="text-sm mb-6">Privacy Policy</Link>
                    </div>
                    <div className='flex flex-col text-white'>
                        <Link to={""} className="font-s_bold text-lg mb-4">Quick Links</Link>
                        <Link to={""} className="text-sm mb-6">Subscription Plans</Link>
                        <Link to={""} className="text-sm mb-6">Watch Now</Link>
                        <Link to={""} className="text-sm mb-6">Gift Cards</Link>
                        <Link to={""} className="text-sm mb-6">Blogs</Link>
                    </div>
                    <div className='flex flex-col text-white'>
                        <Link to={""} className="font-s_bold text-lg mb-4">SOCIAL MEDIA</Link>
                        <div className='flex gap-5 text-2xl'>
                            <a href='https://www.instagram.com/ahaott/'><BsInstagram /></a>
                            <a href='https://www.facebook.com/ahaott/'><CgFacebook /></a>
                            <a href='https://twitter.com/ahaott/'><BsTwitter /></a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <a href='https://apps.apple.com/in/app/aha-ott/idXXXXXXXX'>
                            <img src={appstoreiOSImage} alt="Download Aha OTT on iOS" />
                        </a>
                        <a href='https://play.google.com/store/apps/details?id=com.ahaott'>
                            <img src={appstoreAndroidImage} alt="Download Aha OTT on Android" />
                        </a>
                    </div>
                </div>

                <div className='border-t border-solid mt-7 text-gray-100 py-3 flex justify-between'>
                    <div className='text-sm'>
                        <Link to={""} className="pr-5 border-r">Web Accessibility</Link>
                        <Link to={""} className="pr-3 pl-3 border-r">Privacy Statement</Link>
                        <Link to={""} className="pr-3 pl-3 border-r">Terms of Use</Link>
                        <Link to={""} className="pr-3 pl-3">Contact Us</Link>
                    </div>
                    <p className='text-xs'>© 2023 Aha OTT. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

