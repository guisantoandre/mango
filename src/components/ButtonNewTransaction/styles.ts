import styled from "styled-components";

export const ButtonNewTransaction = styled.button`
   background-color: var(--yellow);
   color: var(--textYellow);
   margin: 4rem 0;

   &:hover {
      box-shadow: 0 0 0 3px #ffe873;
   }
   &:active {
      box-shadow: 0 0 0 3px #f5cd00;
   }
`;
