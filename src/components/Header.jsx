import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillSunFill} from "react-icons/bs"
import {BsFillMoonStarsFill} from "react-icons/bs"
import {BiSearchAlt} from "react-icons/bi"
import {GiInjustice} from "react-icons/gi"
import justice from "../assets/justice.png"
import {FaSmileWink} from "react-icons/fa"

const Header = () => {

const smily = <FaSmileWink />;

  return (
    <div className="header-container">
    
    <div className="header-left">
    <div className="logo">Ethics</div>
    <img src={justice} alt="justice" />
    </div>

    <div className="header-right">

    <div className="search-box">
      <div className="search-input">
        <input type="text" name="" id="" placeholder="Search For Topics...🥱" />
      </div>
      <div className="search-icon">
        <BiSearchAlt className="s-icon" />
      </div>
    </div>
    
    <div className="header-links">
      <Link to="/" className="link">Home</Link>
      <Link to="/topic1" className="link">Topic1</Link>
      <Link to="/topic2" className="link">Topic2</Link>
      <Link to="/thanks" className="link">Thanks</Link>
    </div>

    <div className="mode">
     <BsFillMoonStarsFill />
    </div>

    </div>

    </div>
  )
}

export default Header