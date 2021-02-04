import React from 'react';
import logo1 from '../images/josh-logo2.png';
import { Link } from '@reach/router';

const Header = props => {
    return (
        <div>
        <div className="nav">

            <nav class="navbar navbar-expand-lg">
                <Link to='/' className='navbar-brand'><img src={logo1} alt='logo' id='navLogo'></img></Link>
                <Link to='/' className='navbar-brand'>Joshua Raitano</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span></button>
                {/* <div className="collapse navbar-collapse">
                    <ul className='navbar-nav mr-auto'>
                        <li className="nav-item"><Link to='/about' className="nav-link">About Me</Link></li>
                        <li className="nav-item"><Link to='' className="nav-link">My Portfolio</Link></li>
                        <li className="nav-item"><Link to='' className="nav-link">Contact Me</Link></li>
                    </ul>
                </div> */}
            </nav>
            
        </div>
        <header className="header"></header>
        </div>
    )
}

export default Header;