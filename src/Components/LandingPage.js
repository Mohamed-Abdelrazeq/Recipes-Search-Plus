import { Link } from 'react-router-dom';

const LandingPage = () => {
    return ( 
        <div className="landing-page">
            <div className="navbar">
                <Link>
                <div src="../images/Logo.png"className="logo img" >0</div>
                </Link>
                <div className="tabs">
                    <Link style={{ textDecoration: 'none' }}><h3>Home</h3></Link>
                    <Link style={{ textDecoration: 'none' }}><h3>Menu</h3></Link>
                    <Link style={{ textDecoration: 'none' }}><h3>About</h3></Link>
                    <Link style={{ textDecoration: 'none' }}><h3>Contact</h3></Link>
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
