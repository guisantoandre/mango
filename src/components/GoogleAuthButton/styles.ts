import styled from "styled-components";

export const ButtonSignIn = styled.button`
   background-color: var(--bgGrey);
   display: flex;
   align-items: center;
   gap: 1rem;

   &:hover {
      box-shadow: var(--boxShadowHoverGrey);
   }
   &:active {
      box-shadow: var(--boxShadowActiveGrey);
   }
`;

export const UserArea = styled.div`
   position: relative;

   > img {
      cursor: pointer;
      &:hover {
         box-shadow: var(--boxShadowHoverGrey);
      }
   }

   img.modalUserActive {
      box-shadow: var(--boxShadowActiveGrey);
   }

   img {
      width: 40px;
      border-radius: 100%;
   }
`;

export const ModalUserContainer = styled.div`
   position: absolute;
   right: 0;
   background-color: #fff;
   border-radius: 4px;
   box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.1);

   @media (max-width: 430px) {
      right: -130px;
   }

   .userInfo {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 2rem 3rem;
      border-bottom: 1px solid #ccc;
   }

   .displayName {
      font-size: var(--normal);
      font-weight: 500;
   }

   .email {
      font-size: 1.3rem;
      color: var(--textGrey);
   }

   .avatar {
      width: 60px;
   }

   span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: clamp(var(--normal), 2.5vw, var(--large));
      font-weight: 500;
      cursor: pointer;
      width: 100%;
      padding: 2rem 3rem;
      color: var(--black);

      &:hover {
         background-color: var(--bgGrey);
         border-radius: var(--borderRadius);
      }
   }
`;
