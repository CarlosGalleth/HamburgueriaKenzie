import styled from "styled-components";

export const LoginBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--fixed-white);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginMain = styled.main`
  width: 50%;
  height: max-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;

  @media only screen and (max-width: 1350px) {
    width: 95%;
  }

  @media only screen and (max-width: 915px) {
    flex-direction: column;

    > * {
      &:first-child {
        padding: 0;
        margin-bottom: 30px;
      }
    }
  }

  > * {
    &:first-child {
      border: none;
      h1 {
        color: var(--color-grey-1);
        font-weight: 600;
        font-size: 48px;

        span {
          color: var(--color-brand-2);
          font-size: 28px;
        }
      }
    }
  }

  section {
    width: 47%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: var(--gap-6);

    border: 2px solid var(--color-grey-3);
    border-radius: var(--radius-2);
    padding: 35px 30px;

    @media only screen and (max-width: 1350px) {
      width: 49%;
    }

    @media only screen and (max-width: 915px) {
      width: 98%;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: var(--gap-5);

      button {
        background-color: var(--color-brand-1);
        height: 60px;
        border-radius: var(--radius-2);
        border: none;
        font-size: 16px;
        font-weight: 600;
        color: var(--color-grey-4);
        letter-spacing: 1px;
      }
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    background-color: var(--fixed-white);
    padding: 0 6px;
    position: absolute;
    top: -10px;
    left: 10px;
  }

  input {
    background-color: var(--fixed-white);
    height: 60px;
    border-radius: var(--radius-2);
    border: 3px solid var(--color-grey-1);
    font-size: 16px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-6);
  width: 100%;

  small {
    color: var(--color-grey-2);
    text-align: center;
    width: 50%;
  }

  button {
    background-color: var(--color-grey-4);
    color: var(--color-grey-2);
    width: 100%;
    height: 60px;
    border-radius: var(--radius-2);
    border: none;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;
