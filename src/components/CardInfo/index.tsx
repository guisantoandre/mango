import * as C from "./styles";

type Props = {
   title: string;
   icon: string;
   alt: string;
   value: string;
   bgColor: string;
   valueColor?: string;
};
const CardInfo = ({ title, icon, alt, value, bgColor, valueColor }: Props) => {
   return (
      <C.Card bgColor={bgColor} color={valueColor}>
         <div className="infoTitle">
            <p>{title}</p>
            <img src={icon} alt={alt} />
         </div>
         <div className="infoValue">
            <span>{value}</span>
         </div>
      </C.Card>
   );
};

export default CardInfo;
