import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
        <Link to="/">
        <div src="../images/Logo.png"className="logo img" >0</div>
        </Link>
        <div className="tabs">
            <Link to="/" style={{ textDecoration: 'none' }}><h3>Home</h3></Link>
            <Link to="/search" style={{ textDecoration: 'none' }}><h3>Search</h3></Link>
            <Link to="/about" style={{ textDecoration: 'none' }}><h3>About</h3></Link>
            <Link to="/contacts" style={{ textDecoration: 'none' }}><h3>Contacts</h3></Link>
        </div>
    </div>
     );
}
 
export default Navbar;