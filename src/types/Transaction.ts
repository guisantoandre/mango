export type TransactionType = {
   id: string;
   date: Date;
   type: "income" | "expense" | string;
   desc: string;
   value: number;
};
