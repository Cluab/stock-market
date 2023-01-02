import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import './header.scss';

function Header(props) {
  const { showBackButton } = props;
  const back = '<';
  return (
    <header className="header">
      {
                showBackButton
                  ? <Link to="./">{back}</Link>
                  : null
            }
      <h1>stock market</h1>
    </header>
  );
}

Header.propTypes = {
  showBackButton: PropTypes.bool.isRequired,
};

export default Header;
