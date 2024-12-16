import React, {useEffect} from 'react'
import '../index.css'
import LandNav from './LandingPageNavigationBar';
import sellItemsImage from '../assets/sell-items.png';
import buySell from '../assets/buy-sell.png'
import discover from '../assets/discover.png'
import thrifting from '../assets/thrifting.png'
import {useNavigate} from 'react-router-dom'
import LandingPageButton from './LandingPageButtons';

function LandingPage(){
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    const navigate = useNavigate();
    return (
        <div>
            <LandNav />
            <div id='container' className='poppins'>
                <div className='section md:flex-row' id='introduction'>
                    <div className='text-center flex flex-col gap-3 md:h-4/5 md:justify-center md:w-1/2 lg:w-1/3'>
                        <p className='text-4xl font-bold text-primary-color text-left'>Buy and Sell Your Used Items Today!</p>
                        <p className=' text-justify'>Unlock great deals on used items or make some extra
                            cash by selling what you no longer need. Join our community of savvy students and start trading today!</p>
                        <div className='buttons  flex gap-2'>
                            <LandingPageButton styleClass={'p-2 bg-primary-color text-white hover:bg-red-700 '} onClick={()=>{navigate('/BrowseProduct')}} label={"Shop Now"} />
                            <LandingPageButton styleClass={'p-2 border-2 hover:bg-slate-200 '} onClick={() => navigate('/SellListingView')} label="Sell Items"  />
                        </div>
                    </div>
                    <div className='hidden md:flex w-full  md:w-1/2 lg:w-2/3 '>
                        <img className='w-full ' src={sellItemsImage} alt="sell-items-image" />
                    </div>
                </div>

                <div className='section md:flex-row-reverse'>
                <div className='text-center flex flex-col gap-3 md:h-4/5 md:justify-center md:w-1/2 lg:w-3/5'>
                        <p className='text-4xl font-bold text-primary-color text-left'>Discover a Seamless Way to Buy and Sell Your Used Items</p>
                        <p className='text-justify '>Our platform offers an effortless listing process that gets your items online in minutes. 
                            Enjoy secure transactions and connect with a vibrant community of fellow students eager to buy and sell.</p>
                    </div>
                    <div className='flex md:w-1/2 lg:w-2/5'>
                        <img className='w-full' src={buySell} alt="buy-sell-items-image" />
                    </div>
                </div>

                <div className='middle py-10'  id='about-us'>
                    <div className='w-full gap-2 flex flex-col py-5'>
                        <p className=''>About Us</p>
                        <p className='font-bold text-4xl'>Your Marketplace for Preloved Student Items</p>
                        <p className=' text-justify'>
                            Our platform makes buying and selling used items easy and efficient. 
                            Connect with fellow students to find great deals on a wide range of products.
                        </p>
                        <div className='flex flex-row gap-2 pt-3 '>
                            <button className='border-1 p-2 px-4 hover:bg-gray-500 hover:text-white border-gray-500' onClick={()=>{navigate('/BrowseProduct')}}>Shop</button>
                            <button className='p-2 px-4 text-primary-color hover:bg-primary-color hover:text-white' onClick={()=>{navigate('/SellListingView')}}>Sell</button>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-4 pb-3 '>
                        <div className='w-full flex flex-row'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <p className=' font-semibold text-primary-color text-xl'>User-Friendly Interface for Seamless Navigation</p>
                                <p className=''>Navigate our site effortlessly and find what you need.</p>
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <p className=' font-semibold text-primary-color text-xl '>Affordable Prices for Every Student's Budget</p>
                                <p className=''>Enjoy competitive pricing that fits your student lifestyle.</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row mb-auto'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <p className=' font-semibold text-primary-color text-xl'>Wide Variety of Items to Choose From</p>
                                <p className=''>From textbooks to electronics, we have it all.</p>
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <p className=' font-semibold text-primary-color text-xl'>Join Our Community of Savvy Shoppers Today</p>
                                <p className=''>Become part of a vibrant marketplace that values sustainability.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='section md:flex-row'>
                    <div className='mx-auto md:w-1/2 flex flex-col gap-4'>
                        <p className='text-4xl font-bold text-primary-color'>Discover Top-Selling Used Items for Students at Unbeatable Prices!</p>
                        <p className=''>Browse our curated selection of popular products that students love. From textbooks to electronics, find everything 
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
                        <p className=''>Discover</p>
                        <p className='text-4xl text-primary-color font-bold'>Discover Great Deals and Sell with Ease</p>
                        <p className='pb-4'>Our platform connects students looking to buy and sell used items seamlessly. Enjoy a 
                            hassle-free experience while saving money and decluttering your space.</p>
                        <div className='flex flex-row gap-4 py-3'>
                            <div className='w-1/2'>
                                <p className='font-medium '>For Buyers</p>
                                <p className=''>Access affordable, quality items from fellow students in your community.</p>
                            </div>
                            <div className='w-1/2'>
                                <p className='font-medium '>For Sellers</p>
                                <p className=''>Access affordable, quality items from fellow students in your community.</p>
                            </div>
                        </div>
                        <div className='flex flex-row  gap-2 pb-4'>
                            <button className='border-1 border-primary-color text-primary-color hover:text-white hover:bg-primary-color  px-3 py-2' onClick={()=>{navigate('/Signup')}}>Join</button>
                            <button className='border-1 border-gray-500  px-3 py-1 hover:bg-gray-500 hover:text-white' onClick={()=>{navigate('/BrowseProduct')}}>Shop</button>
                        </div>
                    </div>
                </div>

                <div className='section'>
                    <div className='mx-auto text-center flex flex-col'>
                        <p className='text-5xl font-bold'>Buy and Sell with Ease</p>
                        <p>Join our community today and start buying or selling your used items effortlessly!</p>
                        <div className='flex md:flex-row pt-4 gap-4 '>
                            <button className='w-1/2 border-2 p-2 bg-primary-color text-white hover:bg-red-700' onClick={()=>{navigate('/Signup')}}>Sign Up</button>
                            <button className='w-1/2 border-2 p-2 hover:bg-gray-200' onClick={()=>{navigate('/Login')}}>Log In</button>
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
  