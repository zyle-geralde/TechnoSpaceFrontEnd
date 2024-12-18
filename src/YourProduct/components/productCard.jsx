import React from 'react'; 
import '../style/yourProductlist.css';
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
    return (
        <>
            <div className="cardProd" onClick={() => props.onFunc(props.origdata)}>
                <div style={{ height: "215px", overflow: "hidden" }}>
                    <img src={props.imgsrc} className='prodCardImage' alt="Product" />
                </div>
                <div className='p-2 overflow-hidden'>
                    <div className='font-bold'>
                        {props.prodName}
                    </div>
                    <p>P{props.prodPrice}</p>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
