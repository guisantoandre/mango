import styled from "styled-components";

export const ModalBackground = styled.div`
   background-color: rgba(0, 0, 0, 0.75);
   position: fixed;
   top: 0;
   right: 0;
   width: 100%;
   height: 100%;
   z-index: 10;
   display: grid;
   place-content: center;
   font-size: clamp(var(--normal), 2.5vw, var(--large));
   padding: 0 1rem;

   .modalOverlay {
      background-color: #fff;
      padding: 5rem 6rem;
      border-radius: 10px;
      border: 2px solid var(--yellow);
   }

   .modalContent {
      color: var(--black);

      label {
         display: block;
         font-weight: 600;
      }
      input,
      select {
         width: 100%;
         padding: 0.7rem;
         font-size: clamp(var(--normal), 2.5vw, var(--large));
         font-family: var(--defaultFont);
         border: 2px solid var(--textGrey);
         border-radius: 5px;
         margin-bottom: 2rem;
         cursor: pointer;

         &:focus {
            outline: none;
            border: 2px solid var(--blue);
         }
      }

      .close {
         background-color: var(--bgGrey);
         margin-right: 1rem;

         &:hover {
            box-shadow: var(--boxShadowHoverGrey);
         }
         &:active {
            box-shadow: var(--boxShadowActiveGrey);
         }
      }

      .save {
         background-color: var(--yellow);
         color: var(--textYellow);

         &:hover {
            box-shadow: var(--boxShadowHoverYellow);
         }
         &:active {
            box-shadow: var(--boxShadowActiveYellow);
         }
      }
   }
`;
