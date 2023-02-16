import "./topbar.css";

function TopBar(){
    return (
        <div className='top'>
                <div className="topLeft">
                <i class="topIcon fa-brands fa-square-facebook"></i>
                <i class="topIcon fa-brands fa-square-twitter"></i>
                <i class="topIcon fa-brands fa-square-pinterest"></i>
                <i class="topIcon fa-brands fa-square-instagram"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        {/* top Icon is given as custom className */}
                        <li className=" topListItem">HOME</li>
                        <li className=" topListItem">ABOUT</li>
                        <li className=" topListItem">CONTACT</li>
                        <li className=" topListItem">WRITE</li>
                        <li className=" topListItem">LOGOUT</li>
                    </ul>
                </div>
                <div className="topRight">
                    <img className="topImg" src="https://randomuser.me/api/portraits/women/90.jpg" alt="profile"/>
                    <i className  = "topSearchIcon fas fa-search"></i>
                </div>
        </div>
    );
}

export default TopBar;

