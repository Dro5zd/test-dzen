import { FC } from 'react';
import './Logo.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/main-logo.png';
import {RoutePath} from "../../routes/RoutesPath";

export const Logo: FC = () => {
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate(RoutePath.main);
  };

  return (
    <div className="content" onClick={handleHomePageClick}>
      <img
        className="content__logo"
        src={logo}
        alt="Main logo"
      />
      <span className="content__title">Inventory</span>
    </div>
  );
};
