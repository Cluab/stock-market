import { PropType } from 'prop-types';
import './header.css';

function Header(props) {
  const { showBackButton, onBackButtonClick } = props;
  return (
    <header>
      {
                showBackButton
                  ? <button type="button" onClick={() => { onBackButtonClick(); }}>Back</button>
                  : null
            }
      <h1>stock market</h1>
    </header>
  );
}

Header.propTypes = {
  showBackButton: PropType.bool.isRequired,
  onBackButtonClick: PropType.func.isRequired,
};

export default Header;
