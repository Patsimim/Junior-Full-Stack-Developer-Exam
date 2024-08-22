import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function Homepage() {
    return (
        <div>
            <div className="centered">
                <h1>Welcome to MangatoRead</h1>
                <p>You can find your mangas here.</p>
                <Link to="/items">
                    <button>Explore</button>
                </Link>
            </div>

            <div>
                <h1 className="feature">Featured Mangas</h1>
                <div className="gallery">
                    <div className="image-holder">
                        <a href="#">
                            <img src="./src/assets/hxh.jpg" alt="img-1" />
                        </a>
                    </div>
                    <div className="image-holder">
                        <a href="#">
                            <img src="./src/assets/onepiece.jpg" alt="img-2" />
                        </a>
                    </div>
                    <div className="image-holder">
                        <a href="#">
                            <img src="./src/assets/naruto.jpg" alt="img-3" />
                        </a>
                    </div>
                    <div className="image-holder">
                        <a href="#">
                            <img src="./src/assets/haikyuu.jpg" alt="img-4" />
                        </a>
                    </div>
                    <div className="image-holder">
                        <a href="#">
                            <img src="./src/assets/demonslayer.jpg" alt="img-5" />
                        </a>
                    </div>
                    <div className="image-holder">
                        <a href="#">
                            <img src="./src/assets/bluelock.jpg" alt="img-6" />
                        </a>
                    </div>
                    <div className="image-holder">
                        <a href="#">
                            <img src="./src/assets/bleach.jpg" alt="img-7" />
                        </a>
                    </div>
                    <div className="image-holder">
                        <a href="#">
                            <img src="./src/assets/berserk.jpg" alt="img-8" />
                        </a>
                    </div>
                    <div className="image-holder">
                        <a href="#">
                            <img src="./src/assets/samurai.jpg" alt="img-9" />
                        </a>
                    </div>
                    <div className="image-holder">
                        <a href="#">
                            <img src="./src/assets/titan.jpg" alt="img-10" />
                        </a>
                    </div>
                    <div className="image-holder">
                        <a href="#">
                            <img src="./src/assets/toriko.jpg" alt="img-11" />
                        </a>
                    </div>
                    <div className="image-holder">
                        <a href="#">
                            <img src="./src/assets/mha.jpg" alt="img-12" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
