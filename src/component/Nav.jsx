import React from 'react'
import { muUrl } from './util/constants'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { apple } from './util/contaxtPage'


function Nav() {
    const { dataName, changeData } = useContext(apple)
    return (
        <div className='navBar'>
            <div className='logo'>
                <img height="60px" width="60px" src={muUrl} alt="app logo" />
            </div>
            <div className='navList'>
                <ul>
                    <Link to="/"><li key={1}>Home</li></Link>
                    <Link to='/about'><li key={2}>About</li></Link>
                    <Link to="/contactUs"><li key={3}>Contact Us</li></Link>
                    <Link to="/cart" ><li key="45">Cart</li></Link>
                    <li>{dataName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav