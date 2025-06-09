import { BlackBtnProps } from "../../types/others";

const BlackBtn: React.FC<BlackBtnProps> = ({ children }) => {
  return (
    <button className="btn-balck" type="submit">
      <span></span>
      {children}
    </button>
  );
};

export default BlackBtn;
