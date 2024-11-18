import '../style/yourProductlist.css'
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
    return (
        <>
            <div className="cardProd">
                <div style={{"height":"215px","overflow":"hidden"}}>
                    <img src={props.imgsrc} className='prodCardImage'></img>
                </div>
                <div style={{"marginTop":"10px","marginRight":"10px","marginLeft":"10px"}}>
                    <div className='prodCardName'>
                        {props.prodName}
                    </div>
                    <div style={{"display":"flex","flexDirection":"row"}}>
                        <div>
                            P
                        </div>
                        <div>
                            {props.prodPrice}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard