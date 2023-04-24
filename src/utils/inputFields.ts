import { InputTypeList } from "../types/InputList";

export const inputFields: InputTypeList[] = [
   {
      id: "date",
      label: "Data",
      type: "date",
   },
   {
      id: "desc",
      label: "Descrição",
      type: "text",
      placeholder: "Salário, aluguel, mercado...",
   },
   {
      id: "value",
      label: "Valor",
      type: "number",
      placeholder: "R$ 500,55",
   },
];
