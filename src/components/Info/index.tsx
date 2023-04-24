import * as C from "./styles";
import incomeIcon from "../../assets/svgs/incomeicon.svg";
import expenseIcon from "../../assets/svgs/expenseicon.svg";
import balanceIcon from "../../assets/svgs/balanceicon.svg";
import CardInfo from "../CardInfo";
import { formatValue } from "../../utils/formatValue";

interface Props {
   income: number;
   expense: number;
}
const Info = ({ income, expense }: Props) => {
   return (
      <C.InfoGridContainer>
         <CardInfo
            title="Total Entradas"
            icon={incomeIcon}
            alt="Ícone seta pra cima"
            value={formatValue(income)}
            bgColor="#F6F4F4"
         />
         <CardInfo
            title="Total Saídas"
            icon={expenseIcon}
            alt="Ícone seta pra baixo"
            value={`-${formatValue(expense)}`}
            bgColor="#F6F4F4"
         />
         <CardInfo
            title="Balanço"
            icon={balanceIcon}
            alt="Ícone dolar"
            bgColor="#14121E"
            value={formatValue(income - expense)}
            valueColor={income - expense < 0 ? "#EC2800" : "#F6F4F4"}
         />
      </C.InfoGridContainer>
   );
};

export default Info;
