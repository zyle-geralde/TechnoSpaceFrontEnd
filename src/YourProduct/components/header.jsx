import "../style/listingview.css"
import { useNavigate } from 'react-router-dom';
function HeaderComp() {
    const navigate = useNavigate();
    function yourCustomerChange() {
        navigate("/YourCustomerPurchase")
    }
    return (
        <>
            <div className="headerBar">
                <div>
                    <a href="/Yourproducts" className="Productslink">Products</a>
                    <a href="/Yourproducts" className="YourProductslink">Your Products</a>
                    <a href="/Yourproducts" className="Purchaselink">Purchase History</a>
                </div>
                <div className="navImageList">
                    <img src="/images/icon.png" className="ProductPurchaseIcon" onClick={yourCustomerChange}></img>
                    <img src="/images/User.png" className="UserIcon"></img>
                </div>
            </div>
        </>
    )
}

export default HeaderComp