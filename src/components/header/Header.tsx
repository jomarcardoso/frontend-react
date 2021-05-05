import React, { FC } from 'react';
import './Header.scss';

const Header: FC = () => {
  const logoUrl =
		'/imgs/logo.svg';

  return (
    <header className="header">
      <img className="header__logo" alt='Logo da Moovin' src={logoUrl} />
    </header>
  )
};

export default Header;