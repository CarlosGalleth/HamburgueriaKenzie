import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const StyledModal = styled.div`
  width: 40%;

  header {
    width: 100%;
    background-color: var(--color-brand-1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    border-radius: 6px 6px 0 0;

    h3 {
      font-weight: 600;
      color: var(--fixed-white);
      letter-spacing: 1px;
    }

    button {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;
      img {
        width: 25px;
      }
    }
  }
`;

export const StyledEmptyCart = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-4);
  border-radius: 0 0 6px 6px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-5);

    h3 {
      font-weight: 600;
      font-size: 22px;
    }

    p {
      color: var(--color-grey-2);
      font-size: 18px;
    }
  }
`;

export const StyledCartList = styled.div`
  width: 100%;
  background-color: var(--color-grey-4);
  padding: 20px;
  border-radius: 0 0 6px 6px;

  ul {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 400px;

    ::-webkit-scrollbar {
      width: 15px;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--color-brand-1);
    }
  }
`;

export const StyledCartProduct = styled.li`
  border-bottom: 3px solid var(--color-grey-3);
  padding: 15px 15px 15px 0;

  > * {
    &:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > * {
        &:first-child {
          display: flex;
          gap: var(--gap-8);
        }
      }

      > * {
        &:last-child {
          button {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            border: none;
            img {
              width: 35px;
            }
          }
        }
      }
    }
  }
`;

export const ProductBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: var(--color-grey-3);
  border-radius: var(--radius-2);

  img {
    width: 60px;
    height: 60px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: 600;
    font-size: 20px;
  }

  > * {
    &:last-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--color-grey-3);
      padding: 5px;
      border-radius: var(--radius-4);

      div {
        background-color: var(--color-grey-4);
        padding: 6px 25px;
        font-weight: 600;
        font-size: 18px;
      }

      button {
        width: 40px;
        height: 100%;
        background-color: transparent;
        color: var(--color-brand-2);
        font-weight: 600;
        font-size: 22px;
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-5);
  padding: 15px 0;
  border-top: 3px solid var(--color-grey-3);

  div {
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: 600;
    }

    h4 {
      color: var(--color-grey-2);
    }
  }

  button {
    height: 60px;
    background-color: var(--color-grey-3);
    color: var(--color-grey-2);
    border: none;
    border-radius: var(--radius-2);
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 18px;
  }
`;
