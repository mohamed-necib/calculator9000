import { useContext } from "react";
import { CalcContext } from "../context/CalculatorContext";

const getStyle = (btn) => {
  const className = {
    "=": "equal",
    "+": "operator",
    "-": "operator",
    x: "operator",
    "/": "operator",
  };
  return className[btn.value];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  //Si user click sur un "." alors on appelle la fonction commaClick
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num.value : calc.num,
    });
  };

  //Si user click sur "C" alors on appelle la fonction clearClick
  const clearClick = () => {
    setCalc({
      sign: "",
      num: "",
      result: 0,
    });
  };

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: clearClick,
    };
    return results[value]()
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyle({ value })} button`}
    >
      {value}
    </button>
  );
};

export default Button;
