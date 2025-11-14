import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <img />
      <ul>
        <li>
          <NavLink to="#">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="#">Chi siamo</NavLink>
        </li>
        <li>
          <NavLink to="#">Prodotti</NavLink>
        </li>
      </ul>
    </nav>
  );
}
