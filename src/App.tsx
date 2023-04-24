import React from "react";
import GlobalStyle from "./styles/global";
import { Container } from "./styles/container";
import Header from "./components/Header";
import { TransactionType } from "./types/Transaction";
import Info from "./components/Info";
import TransactionsTable from "./components/Table";
import ModalNewTransaction from "./components/ModalNewTransaction";
import ButtonNewTransaction from "./components/ButtonNewTransaction";

import { User } from "firebase/auth";

import { filterListByMonth, getCurrentMonth } from "./utils/dateFilter";
import { calcTotal } from "./utils/calcTotal";
import { getAllTransactionsFromFirestore } from "./utils/firebase";

import { toastGoogleLogin } from "./utils/toast";

const App = () => {
   const [listTransactions, setListTransactions] = React.useState<
      TransactionType[] | []
   >([]);
   const [filteredList, setFilteredList] = React.useState<TransactionType[]>(
      []
   );
   const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth());
   const [income, setIncome] = React.useState(0);
   const [expense, setExpense] = React.useState(0);
   const [modalIsOpen, setModalIsOpen] = React.useState(false);

   React.useEffect(() => {
      const allFiresotreTransactions =
         getAllTransactionsFromFirestore(setListTransactions);
      return () => {
         allFiresotreTransactions();
      };
   }, []);

   React.useEffect(() => {
      setFilteredList(filterListByMonth(listTransactions, currentMonth));
   }, [listTransactions, currentMonth]);

   React.useEffect(() => {
      let totalIncome = calcTotal(filteredList, "income");
      let totalExpense = calcTotal(filteredList, "expense");
      setIncome(totalIncome);
      setExpense(totalExpense);
   }, [filteredList]);

   function handleMonthChange(newMonth: string) {
      setCurrentMonth(newMonth);
   }

   function handleCloseModal() {
      setModalIsOpen(false);
   }

   function handleOpenModal(user: User | null) {
      if (!user) {
         toastGoogleLogin();
      } else {
         setModalIsOpen(true);
      }
   }

   return (
      <>
         <GlobalStyle />
         <Container>
            <Header
               currentMonth={currentMonth}
               monthChange={handleMonthChange}
            />
            <h2>Resumo</h2>
            <Info income={income} expense={expense} />
            <ButtonNewTransaction openModal={handleOpenModal} />
            <TransactionsTable transactions={filteredList} />
         </Container>
         <ModalNewTransaction isOpen={modalIsOpen} onClose={handleCloseModal} />
      </>
   );
};

export default App;
