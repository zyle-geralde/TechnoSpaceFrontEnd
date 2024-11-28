import "../styles/loginsignup.css"

function LogInPage() {
    return <>
        <div className="LogInMainCont">
            <div className="logInCont">
                <div className="logInformCont">
                    <div className="TitleLog">
                        LogIn
                    </div>
                    <div className="forInpCont">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control emailInp" id="floatingInput" placeholder="xxx@xxx.com"/>
                            <label htmlFor="floatingInput" className="forInpTitle">Email address</label>
                        </div>
                    </div>
                    <div className="forInpCont">
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control passwordInp" id="floatingInput2" placeholder="password"/>
                            <label htmlFor="floatingInput2" className="forInpTitle">Password</label>
                        </div>
                    </div>
                    <div className="clickButton">
                        LogIn
                    </div>
                    <div className="changeLoc">
                        Don't have an account? <a href="" className="changeLocurl">Sign up</a>
                    </div>
                </div>
                <div className="imageCont">
                    <img src="./images/Left.png" className="imageSelf"></img>
                </div>
            </div>
        </div>
    </>
}

export default LogInPage;