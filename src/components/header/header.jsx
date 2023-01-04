/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sortAscending, sortDescending } from '../../redux/companies/companies';
import './header.scss';

function Header(props) {
  const dispatch = useDispatch();
  const [showTab, setShowTab] = useState(false);
  const { showBackButton } = props;
  return (
    <>
      <header className="header">
        <button type="button" onClick={() => setShowTab(!showTab)}><i className="fa-solid fa-gear" /></button>
        <h1>stock market</h1>

        {showBackButton
          ? <Link to="/"><span className="fa-solid fa-chevron-left" /></Link>
          : null}

      </header>
      {showTab && (
      <div className={`gear-popup ${showTab ? 'active' : ''}`}>
        <ul>
          <li>
            <button
              onClick={() => {
                dispatch(sortAscending());
                setShowTab(!showTab);
              }}
              type="button"
            >
              Ascending
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                dispatch(sortDescending());
                setShowTab(!showTab);
              }}
              type="button"
            >
              Descending
            </button>
          </li>
        </ul>
      </div>
      )}
    </>
  );
}

Header.propTypes = {
  showBackButton: PropTypes.bool.isRequired,
};

export default Header;
