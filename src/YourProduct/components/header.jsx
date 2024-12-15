import "../style/listingview.css"
import { useNavigate } from 'react-router-dom';
function HeaderComp() {
    const navigate = useNavigate();
    function yourCustomerChange() {
        navigate("/YourCustomerPurchase")
    }

    function messageChange() {
        navigate("/View-message")
    }
    return (
        <div className="sticky top-0 z-50 backdrop-blur-sm border-3 border-b-primary-color p-2">
            <div className="text-xs flex flex-row self-center sm:px-10 md:px-20 lg:px-30 xl:px-40">
                <div className=" flex flex-row gap-3 my-auto">
                    <a href="/BrowseProduct" className="hover:text-primary-color" >Products</a>
                    <a href="/Yourproducts" className="hover:text-primary-color">Your Products</a>
                    <a href="/Yourproducts" className="hover:text-primary-color">Purchase History</a>
                </div>
                <div className="flex flex-row self-end ml-auto gap-3">
                    <img src="/images/icon.png"  onClick={yourCustomerChange} className="h-3 my-auto"></img>
                    <img src="/svg/message-icon.svg"  onClick={messageChange} className="h-5 my-auto"></img>
                    <img src="/images/User.png" className="h-6 my-auto"></img>
                </div>
            </div>
        </div>
    )
}

export default HeaderComp