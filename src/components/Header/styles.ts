import styled from "styled-components";

export const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 4rem;

   @media (max-width: 620px) {
      flex-direction: column;
      gap: 3rem 0;
   }

   .logo {
      width: 110px;
   }

   .controlsHeader {
      display: flex;
      gap: 3rem;

      @media (max-width: 430px) {
         flex-direction: column;
         align-items: center;
         gap: 2rem 0;
      }
   }

   .monthSelect {
      display: flex;
      align-items: center;
      gap: 2rem;

      span {
         padding: 1.5rem 1.8rem;
         border-radius: var(--borderRadius);
         background-color: var(--bgGrey);
         cursor: pointer;

         @media (max-width: 430px) {
            padding: 1.3rem;
         }

         &:hover {
            box-shadow: var(--boxShadowHoverGrey);
         }
         &:active {
            box-shadow: var(--boxShadowActiveGrey);
         }
      }
      img {
         width: 8px;
         user-select: none;
      }
      p {
         font-size: clamp(var(--normal), 2.5vw, var(--large));
         font-weight: 500;
         text-transform: capitalize;
      }
   }
`;
