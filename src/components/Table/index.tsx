import { TransactionType } from "../../types/Transaction";
import * as C from "./styles";
import TableItem from "../TableItem";
import useAuth from "../../hooks/useAuth";

type Props = {
   transactions: TransactionType[];
};
const TransactionsTable = ({ transactions }: Props) => {
   const { user } = useAuth();

   return (
      <>
         {user && user.email && (
            <>
               <h2>Transações</h2>
               <C.TableContainer>
                  {transactions.length === 0 ? (
                     <p>Não há transações no mês selecionado.</p>
                  ) : (
                     <C.Table>
                        <thead>
                           <tr>
                              <C.TableHeaderCell width={130}>
                                 Data
                              </C.TableHeaderCell>
                              <C.TableHeaderCell width={70}>
                                 Tipo
                              </C.TableHeaderCell>
                              <C.TableHeaderCell>Descrição</C.TableHeaderCell>
                              <C.TableHeaderCell width={200}>
                                 Valor
                              </C.TableHeaderCell>
                              <C.TableHeaderCell width={80}>
                                 Ações
                              </C.TableHeaderCell>
                           </tr>
                        </thead>
                        <tbody>
                           {transactions.map((item, index) => (
                              <TableItem key={index} item={item} />
                           ))}
                        </tbody>
                     </C.Table>
                  )}
               </C.TableContainer>
            </>
         )}
      </>
   );
};

export default TransactionsTable;
