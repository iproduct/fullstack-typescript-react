/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

export default function Nav({ onSearchBooks }) {
    const [searchText, setSearchText] = useState('');
    // const labelEl = useRef(null);
    function submitSearch(event) {
        event.preventDefault();
        const text = searchText.trim();
        if (text.length > 0) {
            setSearchText('');
            // labelEl.current.className = '';
            onSearchBooks(text);
        }
    }
    function handleTextChanged(event) {
        setSearchText(event.target.value);
    }
    return (
        <React.Fragment>
            <nav className="Nav light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container">
                    <a id="logo-container" className="brand-logo hide-on-med-and-down" href="#">
                        <i className="large material-icons">menu_book</i>
                    </a>

                    <ul className="right col12">
                        <li>
                            <form className="col" onSubmit={submitSearch}>
                                <div className="row">
                                    <div className="input-field col s9">
                                        <input id="book-keywords" type="text"
                                            value={searchText} onChange={handleTextChanged} />
                                        <label htmlFor="book-keywords">Search keywords</label>
                                    </div>

                                    <button type="submit" className="Nav-button col s2 waves-effect btn light-blue" >
                                        <i className="material-icons">search</i>
                                    </button>
                                </div>
                            </form>
                        </li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Second Link</a></li>
                        <li>
                            <a className="waves-effect" href="#!">Third Link With Waves</a>
                        </li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
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
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        </React.Fragment>
    )
}

Nav.propTypes = {
    onSearchBooks: PropTypes.func.isRequired
}



