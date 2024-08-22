import React from 'react';
import './mylist.css';


// check if session exists
// 127.0.0.1/isauth
//show my lists
//else
// show login form

//isauth  list
//not login

function mylist() {
    return(
        <div className="mylist-gallery">
                    <div className="image-holder-list">
                        <a href="#">
                            <img src="./src/assets/hxh.jpg" alt="img-1" />
                        </a>
                    </div>

                    <div className="image-holder-list">
                        <a href="#">
                            <img src="./src/assets/onepiece.jpg" alt="img-2" />
                        </a>
                    </div>

                    <div className="image-holder-list">
                        <a href="#">
                            <img src="./src/assets/naruto.jpg" alt="img-3" />
                        </a>
                    </div>

                    <div className="image-holder-list">
                        <a href="#">
                            <img src="./src/assets/haikyuu.jpg" alt="img-4" />
                        </a>
                    </div>

                    <div className="image-holder-list">
                        <a href="#">
                            <img src="./src/assets/demonslayer.jpg" alt="img-5" />
                        </a>
                    </div>

                    <div className="image-holder-list">
                        <a href="#">
                            <img src="./src/assets/bluelock.jpg" alt="img-6" />
                        </a>
                    </div>

                    <div className="image-holder-list">
                        <a href="#">
                            <img src="./src/assets/bleach.jpg" alt="img-7" />
                        </a>
                    </div>

                    <div className="image-holder-list">
                        <a href="#">
                            <img src="./src/assets/Berserk.jpg" alt="img-8" />
                        </a>
                    </div>

                    <div className="image-holder-list">
                        <a href="#">
                            <img src="./src/assets/samurai.jpg" alt="img-9" />
                        </a>
                    </div>

                    <div className="image-holder-list">
                        <a href="#">
                            <img src="./src/assets/titan.jpg" alt="img-10" />
                        </a>
                    </div>

                    <div className="image-holder-list">
                        <a href="#">
                            <img src="./src/assets/toriko.jpg" alt="img-11" />
                        </a>
                    </div>

                    <div className="image-holder-list">
                        <a href="#">
                            <img src="./src/assets/mha.jpg" alt="img-12" />
                        </a>
                    </div>
        </div>
    );
}

function display() {
    // check session exist

    // if exist, show list
    return mylist();

    // else show login
    return login();
}

export default display