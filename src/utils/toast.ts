import { toast } from "react-toastify";

export const toastGoogleLogin = () => {
   toast.info(
      "Entre com a conta do Google para começar adicionar novas transações",
      {
         position: "top-center",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         pauseOnFocusLoss: false,
         draggable: true,
         progress: undefined,
         theme: "dark",
         style: {
            fontSize: "16px",
         },
      }
   );
};

export const toastSuccessTransaction = () => {
   toast.success("Nova transação adicionada", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      style: {
         fontSize: "16px",
      },
   });
};

export const toastWarnTransaction = () => {
   toast.warn("Preencha todos os campos antes de salvar", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      style: {
         fontSize: "16px",
      },
   });
};

export const toastDeleteTransaction = () => {
   toast.success("Transação removida", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      style: {
         fontSize: "16px",
      },
   });
};
