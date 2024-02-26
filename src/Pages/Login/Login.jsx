import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';




const Login = () => {
    const { signIn, googleSignIn, } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                navigate(location?.state ? location.state : '/');
                console.log(result.user)
            })


    }


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!passwordPattern.test(password)) {
            swal("Password must contain at least 8 characters, including letters and numbers.");
            return; 
        }

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
                swal("login successfully.Welcome");
    

            })
            .catch(error => {
                console.error(error)
            })
           
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-2xl text-center font-serif font-semibold" >Please Login</h1>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogle} className="btn btn-secondary">Google</button>
                        </div>
                    </form>
                    <p className="text-center">Do not Have an account<Link className="text-blue-600 ml-2 font-semibold" to='/register'>Register</Link></p>
                </div>
            </div>
            <div className="mt-6">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Login;