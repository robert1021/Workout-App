import { Link } from "react-router-dom";


export default function NavButton({ buttonText, page }) {
  return (
    <li className="nav-btn">
      <Link className="nav-btn-text" to={page}>
        {buttonText}
      </Link>
    </li>
  );
}
