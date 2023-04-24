import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
      --black: #14121E;
      --bgGrey: #F6F4F4;
      --textGrey: #AEAEAE;
      --yellow: #FFD500;
      --textYellow: #5D4F09;
      --blue: #78AEFF;
      --red: #EC2800;
      --defaultFont: 'Inter', sans-serif;
      --inputFocus: #78AEFF;
      --btnTransition: 0.1s;
      --borderRadius: 4px;
      --boxShadowHoverYellow: 0 0 0 3px #ffe873;
      --boxShadowActiveYellow: 0 0 0 3px #f5cd00;
      --boxShadowHoverGrey: 0 0 0 3px #efefef;
      --boxShadowActiveGrey: 0 0 0 3px #e0e0e0;

      // Font size
      --small: 1.4rem;
      --normal: 1.6rem;
      --large: 1.8rem;
      --title: 2.2rem;
      --largeTitle: 2.4rem;
      --bigger: 3.2rem;

      --toastify-color-dark: var(--black);
      --toastify-font-family: var(--defaultFont);

      font-size: 62.5%;
   }

   *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
   
   body {
      font-family: var(--defaultFont);
      background-color: var(--bgGrey);
      padding-top: 3rem;
   }
   
   ul {
      list-style: none;
   }
   
   a {
      text-decoration: none;
   }
   
   h2 {
      font-size: clamp(var(--title), 2.5vw, var(--largeTitle));
      font-weight: 600;
      margin-bottom: 1rem;
   }

   button {
      border: none;
      padding: 1.3rem 2rem;
      font-family: var(--defaultFont);
      font-weight: 600;
      font-size: clamp(var(--normal), 2.5vw, var(--large));
      border-radius: var(--borderRadius);
      cursor: pointer;
   }

   .userNotFound {
      font-size: 1.6rem;
      display: inline-block;
      margin-left: 1rem;
      color: var(--red);
   }

   .slideTop {
      opacity: 0;
      transform: translateY(-30px);
      animation: slideTop .3s forwards;
   }

   @keyframes slideTop {
      to {
         opacity: 1;
         transform: initial;
      }
   }
`;
