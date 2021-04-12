/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        <React.Fragment>
            <nav className="light-blue lighten-1" role="navigation">
                <a href="#" data-target="slide-out" className="sidenav-trigger">
                    <i className="large material-icons">menu</i>
                </a>
                <div className="nav-wrapper container">
                    <a id="logo-container" href="#">
                        <i className="large material-icons">menu_book</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>
            <ul id="slide-out" className="sidenav">
                <li><div className="user-view">
                    <div className="background">
                        <img src="img/old-books.jpg" alt="books app" />
                    </div>
                    <a href="#name"><span className="white-text name">John Doe</span></a>
                    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                </div>
                </li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>


        </React.Fragment>
    )
}
