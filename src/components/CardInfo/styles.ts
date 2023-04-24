import styled from "styled-components";

export const Card = styled.div<{ bgColor: string }>`
   flex: 1;
   padding: 3.5rem;
   border-radius: 2.8rem;
   box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.1);
   background-color: ${(props) => (props.bgColor ? props.bgColor : "#ccc")};

   .infoTitle {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4rem;
   }

   .infoValue {
      font-size: clamp(var(--largeTitle), 3vw, var(--bigger));
      font-weight: 600;

      span {
         color: ${(props) => (props.color ? props.color : "#14121E")};
      }
   }
`;
