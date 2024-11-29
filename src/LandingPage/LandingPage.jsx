import React, {useEffect, useNavigate} from 'react'
import '../index.css'
import LandNav from './LandingPageNavigationBar';
import sellItemsImage from '../assets/sell-items.png';
import buySell from '../assets/buy-sell.png'
import discover from '../assets/discover.png'
import thrifting from '../assets/thrifting.png'

function LandingPage(){
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    return (
        <div>
            <LandNav />
            <div id='container'>
                <div className='section md:flex-row' id='introduction'>
                    <div className='text-center flex flex-col gap-3 md:h-4/5 md:justify-center md:w-1/2 lg:w-1/3'>
                        <p className='text-4xl font-bold text-primary-color text-left'>Buy and Sell Your Used Items Today!</p>
                        <p className='text-xs text-justify'>Unlock great deals on used items or make some extra
                            cash by selling what you no longer need. Join our community of savvy students and start trading today!</p>
                        <div className='buttons text-xs flex gap-2'>
                            <button className='p-2 bg-primary-color text-white hover:bg-red-700'>Shop Now</button>
                            <button className='p-2 border-2 hover:bg-slate-200'>Sell Items</button>
                        </div>
                    </div>
                    <div className='hidden md:flex w-full  md:w-1/2 lg:w-2/3 '>
                        <img className='w-full ' src={sellItemsImage} alt="sell-items-image" />
                    </div>
                </div>

                <div className='section md:flex-row-reverse'>
                <div className='text-center flex flex-col gap-3 md:h-4/5 md:justify-center md:w-1/2 lg:w-3/5'>
                        <p className='text-4xl font-bold text-primary-color text-left'>Discover a Seamless Way to Buy and Sell Your Used Items</p>
                        <p className='text-justify text-xs'>Our platform offers an effortless listing process that gets your items online in minutes. 
                            Enjoy secure transactions and connect with a vibrant community of fellow students eager to buy and sell.</p>
                    </div>
                    <div className='flex md:w-1/2 lg:w-2/5'>
                        <img className='w-full' src={buySell} alt="buy-sell-items-image" />
                    </div>
                </div>

                <div className='section md:flex-row w-full'  id='about-us'>
                    <div className='w-full md:w-1/3 gap-2 flex flex-col'>
                        <p className='text-xs'>About Us</p>
                        <p className='font-medium text-xl'>Your Marketplace for Preloved Student Items</p>
                        <p className='text-xs text-justify'>
                            Our platform makes buying and selling used items easy and efficient. 
                            Connect with fellow students to find great deals on a wide range of products.
                        </p>
                        <div className='flex flex-row gap-2 pt-3 text-xs'>
                            <button className='border-1 p-2 px-4 hover:bg-gray-500 hover:text-white border-gray-500'>Shop</button>
                            <button className='p-2 px-4 text-primary-color hover:bg-primary-color hover:text-white '>Sell</button>
                        </div>
                    </div>
                    <div className='w-full md:w-3/4 flex flex-col gap-4 pb-3'>
                        <div className='w-full flex flex-row'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <p className='text-sm font-medium text-primary-color'>User-Friendly Interface for Seamless Navigation</p>
                                <p className='text-xs'>Navigate our site effortlessly and find what you need.</p>
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <p className='text-sm font-medium text-primary-color'>Affordable Prices for Every Student's Budget</p>
                                <p className='text-xs'>Enjoy competitive pricing that fits your student lifestyle.</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <p className='text-sm font-medium text-primary-color'>Wide Variety of Items to Choose From</p>
                                <p className='text-xs'>From textbooks to electronics, we have it all.</p>
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <p className='text-sm font-medium text-primary-color'>Join Our Community of Savvy Shoppers Today</p>
                                <p className='text-xs'>Become part of a vibrant marketplace that values sustainability.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='section md:flex-row'>
                    <div className='mx-auto md:w-1/2 flex flex-col gap-4'>
                        <p className='text-xl font-bold text-primary-color'>Discover Top-Selling Used Items for Students at Unbeatable Prices!</p>
                        <p className='text-xs'>Browse our curated selection of popular products that students love. From textbooks to electronics, find everything 
                            you need at a fraction of the cost!</p>
                    </div>
                    
                    <div className='hidden md:block mx-auto text-center md:w-1/2 xl:w-1/3'>
                        <img src={discover} alt="discover-image" />
                    </div>
                </div>

                <div className='section md:flex-row gap-3' id='Discover'>
                    <div className='mx-auto text-center w-1/3'>
                        <img className='w-full' src={thrifting} alt='thrifting-img' />
                    </div>
                    <div className='mx-auto w-2/3 flex flex-col'>
                        <p className='text-xs'>Discover</p>
                        <p className='text-xl text-primary-color font-bold pb-4'>Discover Great Deals and Sell with Ease</p>
                        <p className='text-xs pb-2'>Our platform connects students looking to buy and sell used items seamlessly. Enjoy a 
                            hassle-free experience while saving money and decluttering your space.</p>
                        <div className='flex flex-row gap-4 pb-3'>
                            <div className='w-1/2'>
                                <p className='font-medium text-sm'>For Buyers</p>
                                <p className='text-xs'>Access affordable, quality items from fellow students in your community.</p>
                            </div>
                            <div className='w-1/2'>
                                <p className='font-medium text-sm'>For Sellers</p>
                                <p className='text-xs'>Access affordable, quality items from fellow students in your community.</p>
                            </div>
                        </div>
                        <div className='flex flex-row text-xs gap-2 pb-4'>
                            <button className='border-1 border-primary-color text-primary-color hover:text-white hover:bg-primary-color  px-3 py-2'>Join</button>
                            <button className='border-1 border-gray-500  px-3 py-1 hover:bg-gray-500 hover:text-white'>Shop</button>
                        </div>
                    </div>
                </div>

                <div className='section'>
                    <div className='mx-auto text-center flex flex-col'>
                        <p className='text-3xl font-bold'>Buy and Sell with Ease</p>
                        <p>Join our community today and start buying or selling your used items effortlessly!</p>
                        <div className='flex md:flex-row pt-4 gap-4 text-xs'>
                            <button className='w-1/2 border-2 p-2 bg-primary-color text-white hover:bg-red-700'>Sign Up</button>
                            <button className='w-1/2 border-2 p-2 hover:bg-gray-200'>Log In</button>
                        </div>
                    </div>
                </div>
{/* 
                <div className='section'>
                    <div className='mx-auto text-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsa id enim 
                            saepe qui odio aspernatur, voluptatum assumenda nisi mollitia similique. Officiis
                            delectus explicabo temporibus ab omnis totam cupiditate expedita.</p>
                        
                    </div>
                </div>

                <div className='section' id='contact-us'>
                    <div className='mx-auto text-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsa id enim 
                            saepe qui odio aspernatur, voluptatum assumenda nisi mollitia similique. Officiis
                            delectus explicabo temporibus ab omnis totam cupiditate expedita.</p>
                        
                    </div>
                </div> */}
            </div>
            
        </div>
    );
  }
  
  export default LandingPage;
  