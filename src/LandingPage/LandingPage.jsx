import '../index.css'
import LandNav from './LandingPageNavigationBar';
import sellItemsImage from '../assets/sell-items.png';
import buySell from '../assets/buy-sell.png'

function LandingPage(){
    return (
        <div>
            <LandNav />
            <div id='container'>
                <div className='section md:flex-row' id='introduction'>
                    <div className='text-center flex flex-col gap-3 md:h-4/5 md:justify-center md:w-1/2 lg:w-1/3'>
                        <p className='text-4xl font-bold text-primary-color text-left'>Buy and Sell Your Used Items Today!</p>
                        <p className='text-xs text-justify'>Unlock great deals on used items or make some extra
                            cash by selling what you no longer need. Join our community of savvy students and start trading today!</p>
                        <div className='buttons text-xs flex gap-3'>
                            <button className='p-2 bg-primary-color text-white hover:bg-red-700'>Shop Now</button>
                            <button className='p-2 border-2 hover:bg-slate-200'>Sell Items</button>
                        </div>
                    </div>
                    <div className='flex w-full  md:w-1/2 lg:w-2/3'>
                        <img className='w-full ' src={sellItemsImage} alt="sell-items-image" />
                    </div>
                </div>

                <div className='section md:flex-row-reverse'>
                <div className='text-center flex flex-col gap-3 md:h-4/5 md:justify-center md:w-1/2 lg:w-1/3'>
                        <p className='text-4xl font-bold text-primary-color text-left'>Discover a Seamless Way to Buy and Sell Your Used Items</p>
                        <p className='text-justify text-xs'>Our platform offers an effortless listing process that gets your items online in minutes. 
                            Enjoy secure transactions and connect with a vibrant community of fellow students eager to buy and sell.</p>
                    </div>
                    <div className='flex md:w-1/2 lg:w-2/3'>
                        <img className='w-full' src={buySell} alt="buy-sell-items-image" />
                    </div>
                </div>

                <div className='section'>
                    <div className='mx-auto text-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsa id enim 
                            saepe qui odio aspernatur, voluptatum assumenda nisi mollitia similique. Officiis
                            delectus explicabo temporibus ab omnis totam cupiditate expedita.</p>
                        
                    </div>
                </div>

                <div className='section'>
                    <div className='mx-auto text-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsa id enim 
                            saepe qui odio aspernatur, voluptatum assumenda nisi mollitia similique. Officiis
                            delectus explicabo temporibus ab omnis totam cupiditate expedita.</p>
                        
                    </div>
                </div>

                <div className='section'>
                    <div className='mx-auto text-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsa id enim 
                            saepe qui odio aspernatur, voluptatum assumenda nisi mollitia similique. Officiis
                            delectus explicabo temporibus ab omnis totam cupiditate expedita.</p>
                        
                    </div>
                </div>

                <div className='section' id='about-us'>
                    <div className='mx-auto text-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsa id enim 
                            saepe qui odio aspernatur, voluptatum assumenda nisi mollitia similique. Officiis
                            delectus explicabo temporibus ab omnis totam cupiditate expedita.</p>
                        
                    </div>
                </div>

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
                </div>
            </div>
            
        </div>
    );
  }
  
  export default LandingPage;
  