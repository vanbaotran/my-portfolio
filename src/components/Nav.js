import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    render(){
    return (
        <div className='navBar'>
        <ul>
            <Link to='/'>HOME</Link>
            <Link to='/portfolio'>PORTFOLIO</Link>
            <Link to='/resume'>RESUME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/contact'>CONTACT</Link>
        </ul>
        </div>
    )

    }
}
export default Nav;