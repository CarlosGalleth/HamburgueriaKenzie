import { ModalBackground, StyledModal } from "./styledModal";
import closeIcon from "../../assets/close-icon.png";
import { EmptyCart } from "./emptyCart";
import { CartList } from "./cartList";

export const Modal = () => {
  return (
    <ModalBackground>
      <StyledModal>
        <header>
          <h3>Carrinho de Compras</h3>
          <button>
            <img src={closeIcon} alt="" />
          </button>
        </header>
        <CartList />
        {/* <EmptyCart />  */}
      </StyledModal>
    </ModalBackground>
  );
};
