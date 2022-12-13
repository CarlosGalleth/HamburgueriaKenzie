import styled from "styled-components";

export const StyledDotsContainer = styled.div`
  background-color: transparent !important;
  margin-top: 20px;
  display: flex;
  flex-direction: row !important;
  width: 60%;
  gap: var(--gap-6);
  flex-wrap: wrap;
  max-width: 210px;
  min-width: 210px;

  @media only screen and (max-width: 915px) {
    display: none !important;
  }
`;

export const StyledDot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--color-grey-4);
`;
