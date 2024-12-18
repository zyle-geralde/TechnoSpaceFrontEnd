import { useNavigate } from "react-router-dom"
import LandingPageButton from "./LandingPageButtons"
function LandingPageNavigationBar() {
    const navigate = useNavigate()
    return (
    <div className="sticky top-0 z-50 backdrop-blur-sm border-3 border-b-primary-color p-2">
        <div className="flex flex-row self-center sm:px-10 md:px-20 lg:px-30 xl:px-40 ">
            <ul className="flex gap-4 self-center w-full justify-center sm:w-fit">
                <li><a className="nav-text-hover" href="#introduction">Home</a></li>
                <li><a className="nav-text-hover" href="#about-us">About Us</a></li>
                <li><a className="nav-text-hover" href="#Discover">Discover</a></li>
                {/* <li><a className="nav-text-hover" href="#contact-us">Contact Us</a></li> */}
            </ul>
            <div className="ml-auto gap-4 hidden sm:flex">
                <LandingPageButton styleClass={"border-2 px-3 hover:bg-slate-200 nav-text-hover transition-all"} onClick={()=>{navigate('/Signup')}} label={"Join"} />
                <LandingPageButton styleClass="px-3 bg-primary-color text-white rounded-sm hover:bg-red-600" onClick={()=>{navigate('/Login')}} label="Login" />
            </div>
        </div>
    </div>
    )
}

export default LandingPageNavigationBar