function LandingPageNavigationBar() {
    return (
    <div className="sticky top-0 z-50 backdrop-blur-sm border-3 border-b-primary-color p-2">
        <div className="text-xs flex flex-row self-center sm:px-10 md:px-20 lg:px-30 xl:px-40 ">
            <ul className="flex gap-4 self-center w-full justify-center sm:w-fit">
                <li><a className="nav-text-hover" href="#introduction">Home</a></li>
                <li><a className="nav-text-hover" href="#about-us">About Us</a></li>
                <li><a className="nav-text-hover" href="#Discover">Discover</a></li>
                {/* <li><a className="nav-text-hover" href="#contact-us">Contact Us</a></li> */}
            </ul>
            <div className="ml-auto gap-4 hidden sm:flex">
                <button className="border-2 px-3 text-xs hover:bg-slate-200">Join</button>
                <button className="px-3 bg-primary-color text-white rounded-sm text-xs hover:bg-red-600">Shop</button>
            </div>
        </div>
    </div>
    )
}

export default LandingPageNavigationBar