import MainImageComp from "./mainimageComp";
import SubImageComp from "./subImageComp";

function ImageHolders() {
    return (
        <div className = "flex flex-col gap-2 w-11/12 m-auto justify-center ">
            <MainImageComp />
            <SubImageComp/>
        </div>
    )
}
export default ImageHolders;