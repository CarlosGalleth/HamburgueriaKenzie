import styled from "styled-components";

export const RegisterBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--fixed-white);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterMain = styled.main`
  width: 50%;
  height: max-content;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1750px) {
    width: 95%;
  }

  @media only screen and (max-width: 915px) {
    flex-direction: column;
    gap: var(--gap-6);

    > * {
      &:first-child {
        padding: 0;
      }
    }
  }

  > * {
    &:last-child {
      border: 2px solid var(--color-grey-3);
    }
  }

  section {
    width: 47%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: var(--gap-6);

    border-radius: var(--radius-2);
    padding: 35px 30px;

    h1 {
      color: var(--color-grey-1);
      font-weight: 600;
      font-size: 48px;
      display: flex;
      justify-content: flex-start !important;
      align-items: flex-end;
      gap: var(--gap-6);

      span {
        color: var(--color-brand-2);
        font-size: 28px;
      }
    }

    @media only screen and (max-width: 1350px) {
      width: 49%;
    }

    @media only screen and (max-width: 915px) {
      width: 98%;
    }

    > * {
      &:first-child {
        display: flex;
        justify-content: space-between;

        a {
          color: var(--color-grey-2);
          font-weight: 600;
        }
      }
    }

    > * {
      &:last-child {
        display: flex;
        flex-direction: column;
        gap: var(--gap-6);

        button {
          height: 60px;
          background-color: var(--color-brand-1);
          color: var(--color-grey-4);
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 1px;
          border: none;
          border-radius: var(--radius-2);
        }
      }
    }
  }
`;
