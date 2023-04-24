import { TransactionType } from "../types/Transaction";

export const calcTotal = (
   arr: TransactionType[],
   type: "income" | "expense"
) => {
   const newArrayFiltered = arr.filter((item) => item.type === type);
   const total = newArrayFiltered.reduce((acc, cur) => acc + cur.value, 0);
   return total;
};
