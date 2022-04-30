import './Login.css'
import { Link } from "react-router-dom"


function LoginRoomOwner(){
return (
    <div className="loginRoomRenter">
    <div className="wrapLogin">
        <form className="">
            <span className="loginTitle">
                Room Owner
            </span>
            <div className="wrapInput">
                <input className="inputLogin" type="text" name="email" placeholder="Email"/>
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
            </div>
            <div className="wrapInput" >
                <input className="inputLogin" type="password" name="pass" placeholder="Password"/>
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
            </div>
            <div className="containerLoginBtn">
                <button className="loginBtn">
                    Sign in
                </button>
            </div>
            <div className="wrapLinkLogin">
                <span className="txt1">
                    Forgot
                </span>
                
                <Link to='#'>Username / Password?</Link>
            </div>
            <div className="wrapLinkLogin">
                <span className="">
                    Create an account?
                </span>
                
                <Link to='#'>Sign up</Link>
            </div>
        </form>
    </div>
</div>
)
}

export default LoginRoomOwner