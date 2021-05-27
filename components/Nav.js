import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return <div className={navStyles.active}></div>;
    } else {
      return <div className={navStyles.notActive}></div>;
    }
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
        <div className={navStyles.dropdown}>
          <button className={navStyles.dropbtn}>
            <i className="fas fa-user"></i> User
          </button>
          <div className={navStyles.dropdownContent}>
            <Link href="/adminLogin">
              <a>Admin</a>
            </Link>
            <Link href="/signin">
              <a>Login</a>
            </Link>
          </div>
        </div>
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
