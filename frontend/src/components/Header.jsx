import { IoLogInSharp, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          {" "}
          <h1 style={{ fontSize: 50, margin: 35 }}>e-pacijent</h1>{" "}
        </Link>
      </div>

      <ul>
        <li>
          <p>Prijava liječnika 👨‍⚕️</p>
          <Link to="/doclogin">
            <IoLogInSharp size={40}></IoLogInSharp>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <p>Prijava pacijenta 😷</p>
          <Link to="/patlogin">
            <IoLogInSharp size={40}></IoLogInSharp>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <p>Prijava admina 👨‍💻</p>
          <Link to="/login">
            <IoLogInSharp size={40}></IoLogInSharp>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
