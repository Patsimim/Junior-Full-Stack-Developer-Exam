import React from 'react';
import './Footer.css'

function Footer() {
    return(
        <footer>
        <div>
            <h2>MangatoRead</h2>
        </div>
        <p>&copy; {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer