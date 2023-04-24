import * as C from "./styles";

type InputProps = {
   label: string;
   handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
const InputItem = ({ label, handleInput, ...rest }: InputProps) => {
   return (
      <C.InputContainer>
         <label htmlFor={rest.id}>{label}</label>
         <input {...rest} onChange={(e) => handleInput(e)} />
      </C.InputContainer>
   );
};

export default InputItem;
