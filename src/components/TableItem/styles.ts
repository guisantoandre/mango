import styled from "styled-components";

export const TableRow = styled.tr`
   td {
      font-size: clamp(var(--normal), 2.5vw, var(--large));
      font-weight: 500;
      padding: 1rem 0;
      border-top: 2px solid var(--bgGrey);
   }

   .deleteButton {
      cursor: pointer;
      padding: 1rem;
      background-color: var(--bgGrey);
      border-radius: 3px;

      &:hover {
         box-shadow: 0 0 0 3px #f1f1f1;
      }
      &:active {
         box-shadow: 0 0 0 3px #e0e0e0;
      }
   }

   .desc {
      text-transform: capitalize;
      white-space: nowrap;
   }
`;
