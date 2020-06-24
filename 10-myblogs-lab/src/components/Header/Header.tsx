import React from 'react';

export default function Header() {
  return (
    <React.Fragment>
      <h2 className="header center orange-text">My Blogs</h2>
      <div className="row center">
        <h5 className="header col s12 light">Bookmark your favourite blogs</h5>
      </div>
      <div className="row center">
        <a
          href="http://materializecss.com/getting-started.html"
          id="download-button"
          className="btn waves-effect waves-light orange"
        >
          View Favourites
        </a>
      </div>
    </React.Fragment>
  );
}
