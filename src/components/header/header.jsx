import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sortAscending, sortDescending } from '../../redux/companies/companies';
import './header.scss';

function Header(props) {
  const dispatch = useDispatch();

  const { showBackButton } = props;
  return (
    <>
      <header className="header">
        <i className="fa-solid fa-gear" />

        <h1>stock market</h1>
        {showBackButton
          ? <Link to="/"><span className="fa-solid fa-chevron-left" /></Link>
          : null}

      </header>
      <div className="gear-popup">
        <ul>
          <li>
            <button
              onClick={() => {
                dispatch(sortAscending());
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
              }}
              type="button"
            >
              Descending
            </button>
          </li>
        </ul>
      </div>

    </>
  );
}

Header.propTypes = {
  showBackButton: PropTypes.bool.isRequired,
};

export default Header;
