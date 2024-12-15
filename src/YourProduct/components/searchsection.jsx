import '../style/yourProductlist.css'
import { useNavigate } from "react-router-dom";


function SearchSection(props) {
    const navigate = useNavigate();

    function backtoListing() {
        navigate("/Yourproducts")
    }
    return (
        <div className="flex flex-row p-2">
            <img src="./images/back.png" className='backButton my-auto' onClick={backtoListing}></img>
            <div className='flex flex-row gap-2 right-0 w-full justify-center'>
                <input type='text' className='w-1/2 h-8 border-1 border-gray-500 rounded-sm p-2 text-xs' onChange={function (e) {
                    props.searchW(e.target.value)
                }}></input>
                <img src='./images/Search.png' className='my-auto h-6'></img>
            </div>
        </div>
    )
}

export default SearchSection