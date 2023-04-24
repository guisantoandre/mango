import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import { User } from "firebase/auth";

interface Props {
   openModal: (user: User | null) => void;
}

const ButtonNewTransaction = ({ openModal }: Props) => {
   const { user } = useAuth();

   return (
      <C.ButtonNewTransaction onClick={() => openModal(user)}>
         Nova transação +
      </C.ButtonNewTransaction>
   );
};

export default ButtonNewTransaction;
