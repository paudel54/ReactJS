import './sidebar.css'

function Sidebar(){
    return(
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src='https://images.unsplash.com/photo-1676521898747-e4fa3b905e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt=''/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Atque, incidunt repellendus debitis corrupti fuga aliquid modi porro 
                     velit consequatur eligendi
                     nisi pariatur dolor provident, nam iste delectus ratione reiciendis aut.
                </p>
            </div>
            {/* next sidebar Item for categories */}
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            {/* next sidebar item for follwo us */}
            <div className="sidebarItem">
                <span className='sidebarTitle'> FOLLOW US</span>
                <div className="sidebarSocial">
                <i class="sidebarIcon fa-brands fa-square-facebook"></i>
                <i class="sidebarIcon fa-brands fa-square-twitter"></i>
                <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i class="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;