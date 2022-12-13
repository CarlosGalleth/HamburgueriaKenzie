import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 70px;
  background-color: var(--color-grey-4);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
  }
`;

export const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: var(--color-grey-1);
    font-size: 26px;
    font-weight: 600;

    span {
      color: var(--color-brand-2);
      font-size: 18px;
    }
  }
`;

export const NavBar = styled.nav`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > * {
    &:first-child {
      width: 60%;
      padding: 5px 5px 5px 0;
      background-color: var(--fixed-white);
      border: 1px solid var(--color-grey-3);
      border-radius: var(--radius-2);

      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        width: 84%;
        background-color: transparent;
        border: none;
        height: 40px;
        outline: none;
        font-size: 15px;
      }

      button {
        height: 40px;
        width: 40px;

        background-color: var(--color-brand-1);
        border: none;
        border-radius: var(--radius-2);
      }
    }

    &:nth-child(2) {
      position: relative;

      div {
        position: absolute;
        right: -10px;
        top: -10px;
        background-color: var(--color-brand-1);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: var(--radius-4);
        color: var(--fixed-white);
        font-weight: 600;
      }

      button {
        background-color: transparent;
        border: none;
      }
    }

    &:nth-child(3) {
      button {
        background-color: transparent;
        border: none;
      }
    }
  }
`;
