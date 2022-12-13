import styled from "styled-components";

export const BrandContainer = styled.div`
  display: flex;
  gap: var(--gap-8);
  border: 1px solid var(--color-grey-3);
  padding: 15px 10px;
  border-radius: var(--radius-2);
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  min-width: 410px;

  @media only screen and (max-width: 1025px) {
    min-width: 0;
  }

  div {
    background-color: #e9f7ef;
    border-radius: var(--radius-2);
    min-width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30px;
    }
  }
  p {
    color: var(--color-grey-2);
    font-size: 17px;
    width: 80% !important;
  }
`;
