import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import {  useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const Register = () => {
     const {createUser,googleSignIn,handleProfile} = useContext(AuthContext);
     const navigate = useNavigate();
 
     const handleGoogle = () => {
        googleSignIn(provider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error=>{
                console.error(error.message)
            })

    }
   

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const image = form.get('image')
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password,name,image);

        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!passwordPattern.test(password)) {
            swal("Password must contain at least 8 characters, including letters and numbers.");
            return; 
        }

        createUser(email,password)
        .then(result => {
            console.log(result.user);
            swal("registration successfully")
            handleProfile(name,image)
            .then(() => {
                swal("registration absolute successfully");
                navigate('/');
            } )
        })
        .catch(error => {
            console.error(error)
        })

        

    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-2xl text-center font-serif font-semibold" >Please register</h1>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="type" name="name" required placeholder="name" className="input input-bordered" />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogle} className="btn btn-secondary">Go to Google</button>
                        </div>
                    </form>
                    <p className="text-center">Already Have an account<Link className="text-blue-600 ml-2 font-semibold" to='/login'>Login</Link></p>
                </div>
            </div>
            <div className="mt-6">
                <Footer></Footer>
            </div> 
        </div>
    );
};

export default Register;