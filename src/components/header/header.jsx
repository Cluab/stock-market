import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import './header.scss';

function Header(props) {
  const { showBackButton } = props;
  return (
    <header className="header">
      <i className="fa-solid fa-gear" />

      <h1>stock market</h1>
      {
                showBackButton
                  ? <Link to="/"><span className="fa-solid fa-chevron-left" /></Link>
                  : null
            }

    </header>

  );
}

Header.propTypes = {
  showBackButton: PropTypes.bool.isRequired,
};

export default Header;
