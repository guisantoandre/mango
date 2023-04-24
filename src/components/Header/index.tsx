import React from "react";
import * as C from "./styles";
import mangologo from "../../assets/svgs/mangologo.svg";
import prevMonthIcon from "../../assets/svgs/prevmonthicon.svg";
import nextMonthIcon from "../../assets/svgs/nextmonthicon.svg";
import { formatCurrentDate } from "../../utils/dateFilter";
import GoogleAuthButton from "../GoogleAuthButton";
import useAuth from "../../hooks/useAuth";

type Props = {
   currentMonth: string;
   monthChange: (newMonth: string) => void;
};
const Header = ({ currentMonth, monthChange }: Props) => {
   const { user } = useAuth();

   const prevMonth = () => {
      let [year, month] = currentMonth.split("-");
      let currentDate = new Date(parseInt(year), parseInt(month));
      currentDate.setMonth(currentDate.getMonth() - 1);

      monthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`);
   };

   const nextMonth = () => {
      let [year, month] = currentMonth.split("-");
      let currentDate = new Date(parseInt(year), parseInt(month));
      currentDate.setMonth(currentDate.getMonth() + 1);

      monthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`);
   };

   return (
      <C.Header>
         <img className="logo" src={mangologo} alt="Logo Mango" />

         <div className="controlsHeader">
            {user && (
               <div className="monthSelect">
                  <span onClick={prevMonth}>
                     <img
                        src={prevMonthIcon}
                        alt="Ícone seta para a esquerda"
                     />
                  </span>
                  <p>{formatCurrentDate(currentMonth)}</p>
                  <span onClick={nextMonth}>
                     <img src={nextMonthIcon} alt="Ícone seta para a direita" />
                  </span>
               </div>
            )}
            <div className="authenticationArea">
               <GoogleAuthButton />
            </div>
         </div>
      </C.Header>
   );
};

export default Header;
