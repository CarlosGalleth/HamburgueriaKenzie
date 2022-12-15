import { ModalBackground, StyledModal } from "./styledModal";
import closeIcon from "../../assets/close-icon.png";
import { EmptyCart } from "./emptyCart";
import { CartList } from "./cartList";

export const Modal = ({ setModal, cartList, setCartList }: any) => {
  return (
    <ModalBackground>
      <StyledModal>
        <header>
          <h3>Carrinho de Compras</h3>
          <button onClick={() => setModal(false)}>
            <img src={closeIcon} alt="" />
          </button>
        </header>
        {cartList.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartList cartList={cartList} setCartList={setCartList} />
        )}
      </StyledModal>
    </ModalBackground>
  );
};
