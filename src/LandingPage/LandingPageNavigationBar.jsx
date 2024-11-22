function LandingPageNavigationBar() {
    return (
        <div id="landing-nav" className="flex-horizontal py-2 px-20 border-2 border-b-primary-color">
                <ul id="left-part" className="flex-horizontal w-1/2 gap-4">
                    <li><a className="nav-text-hover" href="#Home">Home</a></li>
                    <li><a className="nav-text-hover" href="#About-us">About Us</a></li>
                    <li><a className="nav-text-hover" href="#Contact-us">Contact Us</a></li>
                </ul>

                <div id="right-part" className="w-1/2 flex-horizontal justify-end gap-4">
                    <button className="border-2 px-5">Join</button>
                    <button className="px-5 bg-primary-color text-white rounded-sm">Shop</button>
                </div>
        </div>
    )
}

export default LandingPageNavigationBar