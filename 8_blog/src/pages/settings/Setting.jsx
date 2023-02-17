import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://randomuser.me/api/portraits/women/90.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Admin"></input>
          <label>Email</label>
          <input type="email" placeholder="Email"></input>
          <label>Password</label>
          <input type="password" placeholder="Password"></input>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
