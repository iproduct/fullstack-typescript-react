/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, ReactElement } from 'react';
import './Nav.css';
import { StringCallback } from '../../shared/shared-types';

interface Props {
  onSearchPosts: StringCallback;
  onViewChange: StringCallback;
}

export default function Nav({onSearchPosts, onViewChange, ...rest}: Props) : ReactElement<Props> {
  const [searchText, setSearchText] = useState('');
  const choosePosts = () => onViewChange('posts');
  const chooseAddPost = () => onViewChange('add-post');
  return (
    <React.Fragment>
      <div className="navbar">
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">
              <i className="large material-icons">menu_book</i>
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <span onClick={choosePosts}>Posts</span>
              </li>
              <li>
                <span onClick={chooseAddPost}>Add New Post</span>
              </li>
              <li>
                <a href="collapsible.html">Javascript</a>
              </li>
              <li>
                <a href="mobile.html">Mobile</a>
              </li>
              <li>
                <form>
                  <div className="input-field">
                    <input
                      type="search"
                      placeholder="search"
                      id="autocomplete-input"
                      className="Nav-search-input"
                      onChange={handleTextChanged}
                      value={searchText}
                    />
                    <i className="material-icons Nav-button" onClick={submitSearch}>search</i>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>
    </React.Fragment>
  );

  function handleTextChanged(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }
  

  function submitSearch(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    onSearchPosts(searchText);
    setSearchText('');
  }
}
