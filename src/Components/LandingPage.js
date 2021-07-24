import { Link } from 'react-router-dom';

const LandingPage = () => {
    return ( 
        <div className="landing-page">

           
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
            
            
            <div className="main">
                <div className="text">
                    <h1>Finally, the dish you've been waiting for on your table </h1>
                    <h4>foody brings life, plant-rich super meals to your door, ready to eat</h4>
                    <button className="cta">Search Now</button>
                </div>
                <div className="img">0</div>
            </div>
            
        </div>
     );
}
 
export default LandingPage;
