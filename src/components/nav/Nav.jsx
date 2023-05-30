import React, { useState } from 'react'
import './Nav.css'
const Nav = ({activeTab, activeIndex}) => {
  return (
    <div className='nav'>
        <ul className="nav-list">
            <li onClick={() => activeTab(0)} className={`nav-item ${activeIndex === 0 && 'active'}`}>All</li>
            <li onClick={() => activeTab(1)} className={`nav-item ${activeIndex === 1 && 'active'}`}>Active</li>
            <li onClick={() => activeTab(2)} className={`nav-item ${activeIndex === 2 && 'active'}`}>Completed</li>
        </ul>
    </div>
  )
}

export default Nav