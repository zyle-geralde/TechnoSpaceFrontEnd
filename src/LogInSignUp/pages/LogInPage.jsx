import "../styles/loginsignup.css"
import TitleLogComp from "../components/TitleLogComp";
import InputLogComp from "../components/InputLogComp";
import ButtonClickComp from "../components/buttonClickComp";
import ChangeLocComp from "../components/ChangelocComp";
import axios from 'axios'
import { useState } from "react";

function LogInPage() {
    const [email_id, setEmail_ID] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

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
            alert(`Response: ${JSON.stringify(response.data)}`);
        } catch (error) {
            alert(`Error: ${error.message}`);
            console.log("Email/ID:", email_id, "Password:", password);
        }
        
    }

    return <>
        <div className="LogInMainCont">
            <div className="logInCont">
                <div className="logInformCont flex flex-col gap-4">
                    <TitleLogComp title = "LogIn" />
                    <div className="flex flex-col gap-2 w-full">
                        <div>
                            <label htmlFor="">Email or ID Number</label>
                            <input type = "email" className="border-2 border-gray-300 w-full p-1" 
                            onChange={(e)=>setEmail_ID(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input type = "password" className="border-2 border-gray-300 w-full p-1" 
                            onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <button className="w-full text-white p-1 text-center bg-primary" onClick={handleLogin}>Login</button>
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