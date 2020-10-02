import React from 'react'

function Header() {
    return (
        <div className="main-page">
         <div className="heading-primary">
            <p className="heading-primary-main">
                <span>To Do App</span>
              </p>
            <p className="heading-primary-sub">
                <span>Create Your work schedule</span>
            </p>

            <div className="">
              <a href="#login-page" className="btn btn-white">Login / Register</a>
              {/* <a href="#register-page" className="btn btn-white">Register</a> */}
            </div>

        </div>

        
        
       </div>
    )
}

export default Header
