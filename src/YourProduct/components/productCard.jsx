import '../style/yourProductlist.css'
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
    return (
        <>
            <div className="cardProd">
                <div style={{"height":"225px","overflow":"hidden"}}>
                    <img src={props.imgsrc} className='prodCardImage'></img>
                </div>
                <div>
                    <div>
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