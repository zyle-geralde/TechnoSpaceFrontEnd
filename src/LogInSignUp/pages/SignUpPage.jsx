    import "../styles/loginsignup.css"
    import TitleLogComp from "../components/TitleLogComp";
    import InputLogComp from "../components/InputLogComp";
    import ButtonClickComp from "../components/buttonClickComp";
    import ChangeLocComp from "../components/ChangelocComp";
    import { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import axios from "axios";

    function SignUpPage() {
        const [email_id, setEmail_ID] = useState('');
        const [password, setPassword] = useState('');
        const [firstname, setFirstname] = useState('');
        const [lastname, setLastname] = useState('');
        const [message, setMessage] = useState('');
        const [student_id, setID] = useState('')
        const navigate = useNavigate();

        const handleSignUp = async (e) => {
            e.preventDefault();
            const payload = {
                "Email": email_id,
                "FirstName": firstname,
                "LastName": lastname,
                "IDNumber": student_id,
                "Password": password,
            }

            try {
                if (!email_id || !firstname || !lastname || !password) {
                    setMessage("All fields are required");
                    return
                }
                if (password.length < 6) {
                    alert("password must be at least 6 characters")
                    return
                }
                //replace with azure api
                const response = await axios.post('https://localhost:7016/api/Register',payload);
                setMessage('SignUp Success success');
                navLink("/Login")
                
            } catch (error) {
                console.log(error.message);
                if (error.response && error.response.status === 400) {
                    setMessage("Invalid Credentials");
                } else if (error.response && error.response.status === 409) {
                    setMessage("User is already taken");
                } else {
                    setMessage(error.message);
                }
            }
            
        }
        function emailSet(string) {
            setEmail_ID(string)
        }
        function firstnameSet(string) {
            setFirstname(string)
        }
        function lastnameSet(string) {
            setLastname(string)
        }
        function passwordSet(string) {
            setPassword(string)
        }
        function navLink(linktoNav) {
            navigate(linktoNav)
        }
        return <>
            <div className="LogInMainCont poppins">
                <div className="signUpCont mx-auto">
                    <div className="imageContSign">
                        <img src="./images/SignLeft.png" className="imageSelfSign"></img>
                    </div>
                    <div className="signUpformCont h-fit my-auto">
                        <TitleLogComp title="Create an account" />
                        <div className="flex flex-col gap-2 w-full">
                            <InputLogComp type="text" classinp="emailInp" labelInp="First Name" onChangeF={firstnameSet} />
                            <InputLogComp type="text" classinp="passwordInp" labelInp="LastName" onChangeF={lastnameSet}/>
                            <InputLogComp type="email" classinp="emailInp" labelInp="Email address" onChangeF={emailSet}/>
                            <InputLogComp type="password" classinp="passwordInp" labelInp="Password" onChangeF={passwordSet} />
                            <InputLogComp type="number" classinp="emailInp" labelInp="Student ID" onChangeF={setID} />
                        </div>
                        <small className="text-red w-full text-left text-red-700">{message}</small>
                        <div className="w-full">
                            <ButtonClickComp customWidth="w-full" classBut="clickButton hover:bg-red-800 w-full p-2" titleBut="SignUp" onFunc={handleSignUp}/>
                            <ChangeLocComp message="Already have an account?" changelink="/LogIn" indic="Log In" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    }

    export default SignUpPage;