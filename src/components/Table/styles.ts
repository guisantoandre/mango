import styled from "styled-components";

export const TableContainer = styled.div`
   overflow-x: auto;
   -webkit-overflow-scrolling: touch;
   -ms-overflow-style: -ms-autohiding-scrollbar;

   p {
      font-size: clamp(var(--normal), 2.5vw, var(--large));
      margin: 2rem 0 4rem;
   }
`;

export const Table = styled.table`
   width: 100%;
   min-width: 900px;
   text-align: left;
   margin: 1.5rem 0;
   border-collapse: collapse;
`;

export const TableHeaderCell = styled.th<{ width?: number }>`
   width: ${(props) => (props.width ? `${props.width}px` : "auto")};
   font-size: 1.6rem;
   font-weight: 600;
   color: var(--textGrey);
   padding: 0.5rem 0;
`;
