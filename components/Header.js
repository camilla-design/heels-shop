import headerStyles from "../styles/Header.module.css";
import navStyles from "../styles/Nav.module.css";

const Header = () => {
  return (
    <>
      <div className={headerStyles.title}>
        <h1>Welcome to</h1>
        <h2 className={headerStyles.logo}>Heals shop</h2>
      </div>

      <p className={headerStyles.description}>
        Widest selection and lowest prices
      </p>
    </>
  );
};

export default Header;
