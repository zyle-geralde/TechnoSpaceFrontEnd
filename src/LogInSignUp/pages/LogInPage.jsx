import "../styles/loginsignup.css"
import TitleLogComp from "../components/TitleLogComp";
import InputLogComp from "../components/InputLogComp";
import ButtonClickComp from "../components/buttonClickComp";
import ChangeLocComp from "../components/ChangelocComp";

function LogInPage() {
    return <>
        <div className="LogInMainCont">
            <div className="logInCont">
                <div className="logInformCont">
                    <TitleLogComp title = "LogIn" />
                    <InputLogComp type = "email" classinp = "emailInp" labelInp = "Email address"/>
                    <InputLogComp type = "password" classinp = "passwordInp" labelInp = "Password"/>
                    <ButtonClickComp classBut = "clickButton" titleBut = "LogIn"/>
                    <ChangeLocComp message ="Don't have an account?" changelink = "/SignUp" indic = "Sign up" />
                </div>
                <div className="imageCont">
                    <img src="./images/Left.png" className="imageSelf"></img>
                </div>
            </div>
        </div>
    </>
}

export default LogInPage;