import { HeaderContainer, HeaderStyled, NavBar } from "./headerStyled";
import searchIcon from "../../assets/search-icon.png";
import cartIcon from "../../assets/cart-icon.png";
import loggoutIcon from "../../assets/loggout-icon.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export const Header = ({ setModal, cartList, setSearchValue }: any) => {
  const { navigate }: any = useContext(AuthContext);
  const handleLoggout = () => {
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };
  return (
    <HeaderStyled>
      <HeaderContainer>
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
        <NavBar>
          <div>
            <input
              type="text"
              placeholder="Digitar Pesquisa"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button>
              <img src={searchIcon} alt="" />
            </button>
          </div>
          <div>
            <div>{cartList.length}</div>
            <button onClick={() => setModal(true)}>
              <img src={cartIcon} alt="" />
            </button>
          </div>
          <div>
            <button onClick={handleLoggout}>
              <img src={loggoutIcon} alt="" />
            </button>
          </div>
        </NavBar>
      </HeaderContainer>
    </HeaderStyled>
  );
};
