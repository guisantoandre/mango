import React from "react";
import { inputFields } from "../../utils/inputFields";
import InputItem from "../InputItem";
import * as C from "./styles";
import { saveNewTransactionOnFirestore } from "../../utils/firebase";

interface Props {
   isOpen: boolean;
   onClose: () => void;
}
const ModalNewTransaction = ({ isOpen, onClose }: Props) => {
   const [newTransaction, setNewTransaction] = React.useState({
      date: "",
      desc: "",
      value: "",
      type: "",
   });

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setNewTransaction({ ...newTransaction, [id]: value });
   };

   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { id, value } = e.target;
      setNewTransaction({ ...newTransaction, [id]: value });
   };

   const handleSaveNewTransaction = async () => {
      saveNewTransactionOnFirestore(newTransaction);

      if (
         newTransaction.date &&
         newTransaction.desc &&
         newTransaction.type &&
         typeof newTransaction.value === "number"
      ) {
         setNewTransaction({
            date: "",
            desc: "",
            value: "",
            type: "",
         });
      }
   };

   if (!isOpen) return null;
   return (
      <C.ModalBackground>
         <div className="modalOverlay slideTop">
            <div className="modalContent">
               {inputFields.map((item, index) => (
                  <InputItem
                     key={index}
                     label={item.label}
                     id={item.id}
                     type={item.type}
                     handleInput={handleInputChange}
                     placeholder={item.placeholder}
                  />
               ))}
               <label htmlFor="opcoes">Tipo transação</label>
               <select id="type" onChange={handleSelectChange}>
                  <option value="">-- Selecione --</option>
                  <option value="income">Entrada</option>
                  <option value="expense">Saída</option>
               </select>

               <div className="buttonContainer">
                  <button onClick={onClose} className="close">
                     Fechar
                  </button>
                  <button className="save" onClick={handleSaveNewTransaction}>
                     Salvar
                  </button>
               </div>
            </div>
         </div>
      </C.ModalBackground>
   );
};

export default ModalNewTransaction;
