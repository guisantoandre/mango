import {
   onSnapshot,
   query,
   where,
   collection,
   addDoc,
} from "firebase/firestore";
import { FirebaseTransactionType } from "../types/FirebaseTransaction";
import { auth, db } from "../services/firebase";
import { TransactionType } from "../types/Transaction";
import { createNewDate } from "./dateFilter";
import { toastSuccessTransaction, toastWarnTransaction } from "./toast";
import { NewTransactionType } from "../types/NewTransaction";

const transactionCollectionRef = collection(db, "transactions");

export const getAllTransactionsFromFirestore = (
   setListTransactions: React.Dispatch<React.SetStateAction<TransactionType[]>>
) => {
   const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
         const unsubscribeFirestore = onSnapshot(
            query(transactionCollectionRef, where("author.id", "==", user.uid)),
            (querySnapshot) => {
               const transactionArray: FirebaseTransactionType[] = [];
               querySnapshot.docs.map((doc) => {
                  const data = doc.data();
                  transactionArray.push({
                     author: data.author,
                     date: data.date,
                     desc: data.desc,
                     id: doc.id,
                     type: data.type,
                     value: data.value,
                  });
               });

               const newListTransaction = transactionArray.map((item) => ({
                  id: item.id,
                  date: item.date.toDate(),
                  type: item.type,
                  desc: item.desc,
                  value: item.value,
               }));

               setListTransactions(newListTransaction);
            }
         );
         return () => {
            unsubscribeFirestore();
         };
      }
   });
   return () => {
      unsubscribe();
   };
};

export const saveNewTransactionOnFirestore = async (
   newTransactionItem: NewTransactionType
) => {
   let newItem = {
      date: createNewDate(newTransactionItem.date),
      desc: newTransactionItem.desc.toLocaleLowerCase(),
      type: newTransactionItem.type,
      value: +newTransactionItem.value,
      author: {
         name: auth.currentUser?.displayName,
         id: auth.currentUser?.uid,
      },
   };

   if (
      newItem.date &&
      newItem.desc &&
      newItem.type &&
      newItem.value &&
      typeof newItem.value === "number" &&
      newItem.author
   ) {
      await addDoc(transactionCollectionRef, newItem);
      toastSuccessTransaction();
   } else {
      toastWarnTransaction();
   }
};
