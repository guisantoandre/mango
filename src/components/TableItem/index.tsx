import { TransactionType } from "../../types/Transaction";
import { formatDateTable } from "../../utils/dateFilter";
import incomeIcon from "../../assets/svgs/incomeicon.svg";
import expenseIcon from "../../assets/svgs/expenseicon.svg";
import trashIcon from "../../assets/svgs/trashicon.svg";
import * as C from "./styles";
import { formatValue } from "../../utils/formatValue";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { toastDeleteTransaction } from "../../utils/toast";

type Props = {
   item: TransactionType;
};
const TableItem = ({ item }: Props) => {
   async function deleteTransaction(id: string) {
      const transactionDoc = doc(db, "transactions", id);
      await deleteDoc(transactionDoc);
      toastDeleteTransaction();
   }

   return (
      <C.TableRow>
         <td>{formatDateTable(item.date)}</td>
         <td>
            <img
               src={item.type === "income" ? incomeIcon : expenseIcon}
               alt={
                  item.type === "income"
                     ? "Icone seta para cima"
                     : "Icone seta para baixo"
               }
            />
         </td>
         <td className="desc">{item.desc}</td>
         <td>
            {item.type === "income"
               ? formatValue(item.value)
               : `-${formatValue(item.value)}`}
         </td>
         <td>
            <img
               className="deleteButton"
               src={trashIcon}
               alt="Delete Button"
               onClick={() => deleteTransaction(item.id)}
            />
         </td>
      </C.TableRow>
   );
};

export default TableItem;
