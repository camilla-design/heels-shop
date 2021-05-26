import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

function Nav() {
  return (
    <nav className={navStyles.nav}>
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
        hei
      </ul>
    </nav>
  );
};

export default Nav;
