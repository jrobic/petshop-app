import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header({ loading }) {
  const spinnerActiveClass = loading ? 'is-active' : '';
  return (
    <div>
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Petshop Panel Admin</span>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <Link className="mdl-navigation__link" to={'/'}>Liste</Link>
          </nav>
          <div className="mdl-layout-spacer"></div>
          <div className={`mdl-spinner mdl-js-spinner ${spinnerActiveClass}`}></div>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Petshop Panel Admin</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Liste</a>
        </nav>
      </div>
    </div>
  );
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Header;
