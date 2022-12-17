import styled from "styled-components";

export const ProductsBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const ProductsList = styled.ul`
  display: flex;
  gap: 1.25%;
  flex-wrap: wrap;
  justify-content: initial;

  width: 80%;
  height: max-content;

  @media only screen and (max-width: 1150px) {
    overflow-x: scroll;
    flex-wrap: nowrap;
    gap: var(--gap-6);
    width: 95%;
  }
`;

export const StyledProduct = styled.li`
  width: 24%;
  height: 350px;
  border: 1px solid var(--color-grey-3);
  border-radius: var(--radius-2);
  margin-bottom: 1.25%;

  @media only screen and (max-width: 1150px) {
    width: 500px;
    height: 700px;
  }

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

      @media only screen and (max-width: 1150px) {
        padding: 50px 40px;
      }

      h3 {
        font-weight: 600;
        width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media only screen and (max-width: 1150px) {
          font-size: 35px;
        }
      }

      p {
        color: var(--color-grey-2);
        font-size: 14px;

        @media only screen and (max-width: 1150px) {
          width: 500px;
          font-size: 22px;
        }
      }

      h4 {
        color: var(--color-brand-1);
        font-weight: 600;

        @media only screen and (max-width: 1150px) {
          font-size: 26px;
        }
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

        @media only screen and (max-width: 1150px) {
          height: 70px;
          font-size: 22px;
        }
      }
    }
  }
`;
