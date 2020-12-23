import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <NavLink className="navbar-brand" to="/">
                <span className="d-block d-lg-none">Roldan Catalini</span>
                <span className="d-block d-lg-none">Juan Ignacio</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/images/resume-pic.jpg" alt="" /></span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-item nav-link" to="/education">Education</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-item nav-link" to="/skills">Skills</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-item nav-link" to="/interests">Interests</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}
