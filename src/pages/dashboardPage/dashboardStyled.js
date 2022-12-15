import styled from "styled-components";

export const ProductsBackground = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const ProductsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 80%;
  height: max-content;
`;

export const StyledProduct = styled.li`
  margin-bottom: 43px;
  width: 22%;
  height: 350px;
  border: 1px solid var(--color-grey-3);
  border-radius: var(--radius-2);

  > * {
    &:first-child {
      background-color: var(--color-grey-4);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px 4px 0 0;
      height: 40%;

      img {
        width: 50%;
      }
    }

    &:last-child {
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 60%;

      h3 {
        font-weight: 600;
      }

      p {
        color: var(--color-grey-2);
        font-size: 14px;
      }

      h4 {
        color: var(--color-brand-1);
        font-weight: 600;
      }

      button {
        height: 40px;
        background-color: var(--color-brand-1);
        color: var(--color-grey-4);
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 15px;
        border: none;
        border-radius: var(--radius-2);
      }
    }
  }
`;
