import styled from "styled-components";

export const Container = styled.div`
   max-width: 1250px;
   width: calc(100vw - 40px);
   margin: auto;
   background-color: #fff;
   min-height: 100vh;
   border-radius: 22px 22px 0 0;
   padding: 5rem 4rem 0;

   @media (max-width: 430px) {
      padding: 4rem 2rem 0;
   }
`;
