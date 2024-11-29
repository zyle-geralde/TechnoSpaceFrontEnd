import "../styles/loginsignup.css"
import TitleLogComp from "../components/TitleLogComp";
import InputLogComp from "../components/InputLogComp";
import ButtonClickComp from "../components/buttonClickComp";
import ChangeLocComp from "../components/ChangelocComp";

function SignUpPage() {
    return <>
        <div className="LogInMainCont">
            <div className="signUpCont">
                <div className="imageContSign">
                    <img src="./images/SignLeft.png" className="imageSelfSign"></img>
                </div>
                <div className="signUpformCont">
                    <TitleLogComp title="SignUp" />
                    <InputLogComp type="text" classinp="emailInp" labelInp="First Name" />
                    <InputLogComp type="text" classinp="passwordInp" labelInp="LastName" />
                    <InputLogComp type="email" classinp="emailInp" labelInp="Email address" />
                    <InputLogComp type="password" classinp="passwordInp" labelInp="Password" />
                    <ButtonClickComp classBut="clickButton" titleBut="SignUp" />
                    <ChangeLocComp message="Already have an account?" changelink="/LogIn" indic="Log In" />
                </div>
            </div>
        </div>
    </>
}

export default SignUpPage;