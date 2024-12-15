import "../styles/loginsignup.css"
import TitleLogComp from "../components/TitleLogComp";
import InputLogComp from "../components/InputLogComp";
import ButtonClickComp from "../components/buttonClickComp";
import ChangeLocComp from "../components/ChangelocComp";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogInPage() {
    const [email_id, setEmail_ID] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const payload = {
            "EmailOrIDNumber": email_id,
            "password": password
        }

        try {
            //replace with azure api
            const response = await axios.post('https://localhost:7016/api/Login',payload);
            setMessage('login success');
            localStorage.setItem('email', payload.EmailOrIDNumber);
            localStorage.setItem('userId', response.data.user.userID);
            localStorage.setItem('studentId', response.data.user.idNumber);
            console.log(localStorage)
            
            navLink("/BrowseProduct")
            
        } catch (error) {
            if (error.response.status == "400") {
                alert("Invalid Credentials")
            }
            else if(error.response.status == "404") {
                alert("Invalid Credentials")
            }
            else if (error.response.status == "401") {
                alert("Invalid Credentials")
            }
            else {
                alert(error.message)
            }
            navLink("/Login")
            console.log("Email/ID:", email_id, "Password:", password);
        }
        
    }

    function setUserEmail(newval) {
        setEmail_ID(newval)
        console.log(email_id)
    }
    function setUserPassword(newval) {
        setPassword(newval)
        console.log(password)
    }

    function navLink(linktoNav) {
        navigate(linktoNav)
    }

    return <>
        <div className="LogInMainCont">
            <div className="logInCont">
                <div className="logInformCont">
                    <TitleLogComp title="LogIn" />
                    <InputLogComp type="email" classinp="emailInp" labelInp="Email address" onChangeF={setUserEmail}/>
                    <InputLogComp type="password" classinp="passwordInp" labelInp="Password" onChangeF={setUserPassword}/>
                    <ButtonClickComp classBut="clickButton" titleBut="LogIn" onFunc={handleLogin} />
                    <ChangeLocComp message="Don't have an account?" changelink="/SignUp" indic="Sing up" />
                </div>
                <div className="imageContSign">
                    <img src="./images/SignLeft.png" className="imageSelfSign"></img>
                </div>
            </div>
        </div>
    </>
}

export default LogInPage;