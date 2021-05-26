import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li className={navStyles.logo}>HEALS</li>
      </ul>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/adminLogin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
