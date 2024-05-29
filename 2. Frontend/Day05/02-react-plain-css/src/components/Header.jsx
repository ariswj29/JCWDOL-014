import Logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo image." />
      </div>
    </header>
  );
}

export default Header;