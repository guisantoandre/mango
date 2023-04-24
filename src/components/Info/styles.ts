import styled from "styled-components";

export const InfoGridContainer = styled.section`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;

   @media (max-width: 600px) {
      grid-template-columns: 1fr;
   }

   p {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--textGrey);
   }
`;
