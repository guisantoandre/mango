import { TransactionType } from "../types/Transaction";

export const getCurrentMonth = () => {
   let now = new Date();
   return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (
   list: TransactionType[],
   date: string
): TransactionType[] => {
   let newList: TransactionType[] = [];

   const [year, month] = date.split("-");

   for (let i in list) {
      if (
         list[i].date.getFullYear() === parseInt(year) &&
         list[i].date.getMonth() + 1 === parseInt(month)
      ) {
         newList.push(list[i]);
      }
   }

   return newList.sort((a, b) => {
      return +new Date(a.date) - +new Date(b.date);
   });
};

export const formatDateTable = (date: Date) => {
   let day = date.getDate();
   let month = date.getMonth() + 1;
   let year = date.getFullYear();

   return `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;
};

export const formatCurrentDate = (currentDate: string): string => {
   let [year, month] = currentDate.split("-");
   let date = new Date(parseInt(year), parseInt(month) - 1);

   let formattedDate = date.toLocaleDateString("pt-BR", {
      month: "long",
   });

   return `${formattedDate} ${date.getFullYear()}`;
};

export const createNewDate = (value: string) => {
   const [year, month, day] = value.split("-");
   const date = new Date(+year, +month - 1, +day);
   return date;
};
