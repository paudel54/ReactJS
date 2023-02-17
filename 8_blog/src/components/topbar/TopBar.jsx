import "./topbar.css";
import { Link } from "react-router-dom";
function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i class="topIcon fa-brands fa-square-facebook"></i>
        <i class="topIcon fa-brands fa-square-twitter"></i>
        <i class="topIcon fa-brands fa-square-pinterest"></i>
        <i class="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          {/* top Icon is given as custom className */}
          <li className=" topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className=" topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className=" topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className=" topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className=" topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://randomuser.me/api/portraits/women/90.jpg"
            alt="profile"
          />
        ) : (
          <>
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
