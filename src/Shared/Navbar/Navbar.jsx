import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/client.png';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);

   const handleSignOut = () => {
    logOut()
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.error(error)
    })

   }

  

  const navLinks = <>
    <li><NavLink to='/'>HOME</NavLink></li>
    <li><NavLink to='/about'>Review</NavLink></li>
    <li><NavLink to='/career'>Comment</NavLink></li>
    <li><NavLink to='/Phone'>Phone</NavLink></li>
    <li><NavLink to='/Login'>Login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {
              user && <img className="mr-24" src={logo}/>
            }
            
            {
              user && <p className="text-red-800 mr-16">{user?.email}</p>
            }
          </label>
          {
            user ? <button onClick={handleSignOut} className="btn">Sign Out</button>
            : <Link to='/login'>
            <a className="btn">Login</a>
          </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;