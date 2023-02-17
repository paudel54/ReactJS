import './header.css'

function Header(){
    return (
    <div className="header">
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        {/* img src : https://images.unsplash.com/photo-1580424917967-a8867a6e676e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 */}
        {/* <img className='headerImg' src='https://images.unsplash.com/photo-1544442069-97dded965a9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'
         alt='background senic'/> */}
                 <img className='headerImg' src='https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
         alt='background senic'/>
    </div>
    );
}

export default Header;