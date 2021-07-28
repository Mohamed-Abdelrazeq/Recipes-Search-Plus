
const LandingPage = () => {
    return ( 
        <div className="landing-page">


            <div className="main">
                <div className="text">
                    <h1>Finally, the dish you've been waiting for on your table </h1>
                    <h4>foody brings life, plant-rich super meals to your door, ready to eat</h4>
                    <button className="cta">Search Now</button>
                </div>
                <div className="img">0</div>
            </div>

            <div className="about-recipes">
                <h1 className="about-header">About Cooking</h1>
                <hr className="about-hr" />
                <div className="about-cards">

                    <div className="card-about">
                        <h2 className="card-name-about">Thomas Keller</h2>
                        <h4 className="text-about">“A recipe has no soul. You as the cook must bring soul to the recipe.”</h4>
                    </div>

                    <div className="card-about">
                        <h2 className="card-name-about">Harriet Van Horne</h2>
                        <h4 className="text-about">“Cooking is like love. It should be entered into with abandon or not at all.”</h4>
                    </div>

                    <div className="card-about">
                        <h2 className="card-name-about">Gordan Ramsey</h2>
                        <h4 className="text-about">“Real cooking is more about following your heart than following recipes.”</h4>
                    </div>

                </div>
            </div>
            
            <div className="story">
                <div className="story-card">
                <div className="img-story img">0</div>
                    <div className="story-text-section">
                        <h2 className="discover">Discover</h2>
                        <h2 className="story-header">Our Story</h2>
                        <h4 className="the-story">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio porro esse nemo harum saepe, beatae quas facilis necessitatibus odio, cumque repellendus dignissimos. Asperiores id beatae ipsum repellat ducimus delectus culpa corporis similique consectetur ut, nostrum omnis fugiat quis voluptas mollitia accusantium. Id maiores fugiat culpa doloremque vel voluptas atque neque illo voluptates, ipsa pariatur? Vero ipsam aliquid amet. Laudantium, illum explicabo asperiores debitis quasi, quis perferendis vel, commodi iure dolores voluptate adipisci ratione voluptatem quam tenetur nam doloremque voluptas voluptates doloribus ab. Quasi mollitia voluptas minus. Soluta placeat libero, provident ab quia nam enim magnam dolorem sed pariatur. Doloribus.</h4>
                        <button className="cta">Search Now</button>
                    </div>
                </div>
            </div>
        
            <div className="sub">
                <div className="sub-card">
                    <h1 className="sub-text">Subscribe <br /> And Join Us Now</h1>
                    <div className="sub-bar">
                        <input className="sub-mail" type="text"/>
                        <button className="sub-btn" >Subscrible</button>
                    </div>
                </div>
            </div>
        
            <div className="footer">
                <div className="contacts">
                    <h1 className="footer-header">Contacts</h1>
                    <div className="the-contacts">

                        <div className="a-contact">
                            <div className="img icon1">0</div>
                            <h4 className="contact-details">www.facebook.com/Foody.com</h4>
                        </div>
                     
                        <div className="a-contact">
                            <div className="img icon2">0</div>
                            <h4 className="contact-details">+03-584-2541-5489</h4>
                        </div>
                       
                        <div className="a-contact">
                            <div className="img icon3">0</div>
                            <h4 className="contact-details">www.instagram.com/Foody.com</h4>
                        </div>
                 
                    </div>
                </div>
                <div className="img qr">
                    0
                </div>
            </div>

        </div>
     );
}
 
export default LandingPage;

