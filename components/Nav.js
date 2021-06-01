import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { useRouter } from "next/router";
import { DataContext } from "../store/GlobalState";
import { useContext } from "react";
import Cookie from 'js-cookie';

function Nav() {
  const router = useRouter();

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const isActive = (r) => {
    if (r === router.pathname) {
      return <div className={navStyles.active}></div>;
    } else {
      return <div className={navStyles.notActive}></div>;
    }
  };

  const handleLogout = () => {
    Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
    localStorage.removeItem('firstLogin')
    dispatch({ type: 'AUTH', payload: {} })
    dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'}})
  }

  const loggedRouter = () => {
    return (
    <div className={navStyles.dropdown}>
      <button className={navStyles.dropbtn} style={{ fontSize: '16px'}}>
        <img src={auth.user.avatar} alt={auth.user.avatar} style={{ width: '18px', height: '18px', transform: 'translateY(-3)', marginRight: '3px'}} /> {auth.user.name}
      </button>
      <div className={navStyles.dropdownContent}>
        <Link href="/adminLogin">
          <a>Admin</a>
        </Link>
        <Link href="/login">
          <button className={navStyles.logoutBtn} onClick={handleLogout}>Log Out</button>
        </Link>
      </div>
    </div>
    )
  };

  return (
    <nav className={navStyles.nav}>
      <a className={navStyles.logo} href="/">
        Heels
      </a>
      <ul>
        <li className={isActive("/home")}>
          <Link href="/">Home</Link>
        </li>
        <li className={isActive("/contact")}>
          <Link href="/contact">Contact</Link>
        </li>
        <li></li>
      </ul>

      <div>
        
            {Object.keys(auth).length === 0 ? (
              <div className={navStyles.dropdown}>
              <button className={navStyles.dropbtn}>
                <i className="fas fa-user"></i> User
              </button>
              <div className={navStyles.dropdownContent}>
              <Link href="/adminLogin">
          <a>Admin</a>
        </Link>
              <Link href="/login">
                <a>Login</a>
              </Link>
              </div>
        </div>
            ) : (
              loggedRouter()
            )}
          
        <Link href="/cart">
          <a className={navStyles.cart + isActive("/cart")}>
            <i className="fas fa-shopping-cart"></i> Cart
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
