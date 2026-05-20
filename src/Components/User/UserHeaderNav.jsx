import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext.jsx";
import MinhasFotos from "../../Assets/feed.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import Adicionar from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia.jsx";

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const [mobileMenu, setmobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setmobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
    {mobile && (
      <button aria-label="Menu" className={'${styles.mobileButton} ${mobileMenu && styles.mobileButtonAcitive}'} onClick={() => setmobileMenu(!mobileMenu)}></button>
      )}
    <nav className={'${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}'}>
      <NavLink to="/conta">
        <MinhasFotos />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <Adicionar />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={handleLogout}>
        {" "}
        <Sair /> {mobile && "Sair"}{" "}
      </button>
    </nav>
    </>
  );
};

export default UserHeaderNav;
