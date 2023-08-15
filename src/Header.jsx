
import {Link} from 'react-router-dom'

const Header = () => {
    const stylo = {color: "red", fontFamily: "cursive"}
    return (
        <header className='hstyle'>
        <Link to={'/'}>Home</Link>
        {/* <Link to={'/about'}>About</Link> */}
        <Link to={'/profile'}>Profile</Link>       
        <Link to={'/delete'}>Delete</Link>
        <Link to={'/Color'}>Color Gen</Link>

        
        <h1 style={stylo}></h1>
        </header>
    );
}

export default Header;