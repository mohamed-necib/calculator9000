import { useContext } from "react";
import { CalcContext } from "../context/CalculatorContext";



const getStyle = (btn) => {
  const className = {
    "=": "equal",
    "+": "operator",
    "-": "operator",
    'x': "operator",
    "/": "operator",
  };
  return className[btn.value];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  //Si user click sur un "." alors on appelle la fonction commaClick
  const commaClick = () => {
    if (!calc.num.toString().includes(".")) {
      setCalc({
        ...calc,
        num: calc.num + ".",
      });
    }
  };

  //Si user click sur "C" alors on appelle la fonction clearClick
  const clearClick = () => {
    setCalc({
      sign: "",
      num: 0,
      result: 0,
    });
  };

  //Si user click sur un chiffre alors on appelle la fonction handleClickButton
  const handleClickButton = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  //Si user click sur un opérateur alors on appelle la fonction signClick
  const signClick = () => {
    setCalc({
      ...calc,
      sign: value,
      result: !calc.result && calc.num ? calc.num : calc.result,
      num: 0,
    });
  };

  //Si user click sur "=" alors on appelle la fonction equalClick
  const equalClick = () => {
    if (calc.result && calc.num !== 0) {
      const math = (a, b, sign) => {
        const results = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return results[sign](a, b);
      };
      setCalc({
        result: math(calc.result, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  //Si user click sur "%" alors on appelle la fonction percentClick
  const percentClick = () => {
    setCalc({
      num: calc.num / 100,
      result: calc.result / 100,
      sign: "",
    });
  };

  //Si user click sur "+-" alors on appelle la fonction invertClick
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.result ? calc.result * -1 : 0,
      sign: "",
    });
  };

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: clearClick,
      "/": signClick,
      "-": signClick,
      "+": signClick,
      x: signClick,
      "=": equalClick,
      "%": percentClick,
      "+-": invertClick,
    };
    if (results[value]) {
      results[value]();
    } else {
      return handleClickButton();
    }
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
