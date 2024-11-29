import '../style/yourProductlist.css'
import { useNavigate } from "react-router-dom";


function SearchSection() {
    const navigate = useNavigate();

    function backtoListing() {
        navigate("/Yourproducts")
    }
    return (
        <div className="flex flex-row p-2">
            <img src="./images/back.png" className='backButton my-auto' onClick={backtoListing}></img>
            <div className='flex flex-row gap-2 right-0 w-full justify-center'>
                <input type='text' className='w-1/2 h-8 border-1 border-gray-500 rounded-sm p-2 text-xs'></input>
                <img src='./images/Search.png' className='my-auto h-6'></img>
                <div className="dropdown flex">
                    <img
                        src="./images/Filter.png"
                        alt="Dropdown Trigger"
                        className="h-6 my-auto object-contain"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    />

                    <ul className="dropdown-menu text-sm">
                        <li><a className="dropdown-item hover:bg-gray-100" >All</a></li>
                        <li><a className="dropdown-item hover:bg-gray-100" >Low to High Price</a></li>
                        <li><a className="dropdown-item hover:bg-gray-100" >High to Low Price</a></li>
                        <li><a className="dropdown-item hover:bg-gray-100" >A to Z</a></li>
                        <li><a className="dropdown-item hover:bg-gray-100" >Z to A</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchSection