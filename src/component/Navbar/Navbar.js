import React from 'react'
import {Search, Filter} from 'react-feather'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='app_nav'>
        <div className="first">
        <div className="search">
            <Search/>
            <input type="text" placeholder='Search' />
        </div>
        <div className="login_info">
            <h5>Hi There!!</h5>
        </div>
        </div>
        <div className="Second_nav">
            <h2>Projects</h2>
            <div className="filter">
                <Filter/>
                <p>Filter</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar