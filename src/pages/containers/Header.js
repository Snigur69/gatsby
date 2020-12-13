import React from 'react';
import {Link} from 'gatsby';

const Header = () => {
    return(
        <div>
            <ul>
                <li><Link to='/contacts'>Contacts</Link></li>
                <li><Link to='/products/iphone'>Iphone</Link></li>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </div>
    )
}

export default Header;